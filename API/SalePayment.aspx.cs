using API.ParsianRef;
using log4net;
using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace API
{
    public partial class SalePayment : System.Web.UI.Page
    {
		private readonly static ILog logger = LogManager.GetLogger(typeof(SalePayment));

		protected void Page_Load(object sender, EventArgs e)
		{
			Title = "Parsian IPG Sale Payment sample form";
		}

		protected void btnPay_Click(object sender, EventArgs e)
		{
			long token = 0;
			short paymentStatus = Int16.MinValue;

			using (var service = new ParsianRef.SaleServiceSoapClient())
			{
				System.Net.ServicePointManager.ServerCertificateValidationCallback = new System.Net.Security.RemoteCertificateValidationCallback((o, xc, xch, sslP) => true);

				service.Url = "https://pec.shaparak.ir/NewIPGServices/Sale/SaleService.asmx";

				var paymentRequest = new ParsianRef.ClientSaleRequestData();

				paymentRequest.LoginAccount = txtLoginAccount.Text.Trim();

				//make sure you set the CallBackUrl property. because after user has completed Payment on IPG page, it will be redirected to the callback url you provided
				//to get you back result of the user Payment on IPG.


				//Amount is not used. you should not assign a value to this property.
				paymentRequest.Amount = long.Parse(txtAmount.Text);

				//Order Id MUST be UNIQUE at all times. if a duplicated Order Id is received from your request, you will get Status=-112
				paymentRequest.OrderId = DateTime.Now.Ticks;

				paymentRequest.AdditionalData = txtAddData.Text;
				ClientPaymentResponseDataBase response = service.SalePaymentRequest(paymentRequest);

				if (response == null)
				{
					return;
				}

				paymentStatus = response.Status;

				//check Status property of the response object to see if the operation was successful.
				if (response.Status == API.Models.Constants.ParsianPaymentGateway.Successful)
				{
					//if everything is OK (LoginAccount and your IP address is valid in the Parsian PGW), save the token in a data store
					// to use it for redirectgion of your web site's user to the Parsian IPG (Internet Payment Gateway) page to complete payment.
					token = response.Token;

					//you must save the token in a data store for further support and rosolving 
					Session["Token"] = token;
				}
				else
				{
					logger.Error($"Parsian PGW service call status code : {response.Status}");
				}
			}

			if (paymentStatus == API.Models.Constants.ParsianPaymentGateway.Successful && token != 0L)
			{
				var redirectUrl = string.Format(ConfigHelper.ParsianIPGPageUrl, token);
				Response.Redirect(redirectUrl);
			}
			else
			{
				Server.TransferRequest("~/Error.aspx");
			}
		}
	}
}