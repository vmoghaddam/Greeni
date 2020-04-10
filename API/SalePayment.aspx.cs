using API.Models;
using API.ParsianRef;

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
		

		protected void Page_Load(object sender, EventArgs e)
		{
            if (Request.QueryString["id"] == null)
                return;
            var orderId=Convert.ToInt32( Request.QueryString["id"]);
            using (var context = new EPAGRIFFINEntities())
            {
                var order = context.Orders.FirstOrDefault(q => q.Id == orderId);
                var vieworder = context.ViewOrders.FirstOrDefault(q => q.Id == orderId);
                long token = 0;
                short paymentStatus = Int16.MinValue;

                //ایجاد یک نمونه از سرویس درخواست پرداخت قبض درگاه پرداخت اینترنتی پارسیان
                using (var service = new ParsianRef.SaleServiceSoapClient())
                {
                    //بی خیال شدن اس اس ال جهت ارتباط امن با سرویس پرداخت قبض 
                    System.Net.ServicePointManager.ServerCertificateValidationCallback = new System.Net.Security.RemoteCertificateValidationCallback((o, xc, xch, sslP) => true);

                    //تعیین مسیر صحیح وب سرویس درخواست پرداخت قبض پارسیان
                    //  service.Utl = PecPGW.Samples.Common.ConfigHelper.ParsianPGWSaleServiceUrl;

                    //ایجاد یک نمونه از نوع پارامتر ورودی به متد درخواست پرداخت مبلغ خرید کالا یا خدمات وب سرویس درخواست پرداخت خرید
                    var paymentRequest = new ParsianRef.ClientSaleRequestData();

                    //شناسه پذیرندگی در درگاه پرداخت اینترنتی پارسیان
                    paymentRequest.LoginAccount = "IXE2U0hp0H3linqxkY26"; //txtLoginAccount.Text.Trim();

                    //make sure you set the CallBackUrl property. because after user has completed Payment on IPG page, it will be redirected to the callback url you provided
                    //to get you back result of the user Payment on IPG.


                    paymentRequest.CallBackUrl = "http://api.greenimax.ir/SalePaymentCallback.aspx";

                    //Amount is not used. you should not assign a value to this property.
                    paymentRequest.Amount =(long) Convert.ToDecimal( vieworder.TotalAmount*10);
                    paymentRequest.Amount = 1000;
                    //Order Id MUST be UNIQUE at all times. if a duplicated Order Id is received from your request, you will get Status=-112
                    paymentRequest.OrderId = vieworder.Id;

                    paymentRequest.AdditionalData = vieworder.Id.ToString()+"*"+vieworder.Name+"*"+vieworder.Mobile;
                    order.AdditionalData = paymentRequest.AdditionalData;
                    order.PayInitDate = DateTime.Now;
                    ClientPaymentResponseDataBase response = service.SalePaymentRequest(paymentRequest);

                    if (response == null)
                    {
                        context.SaveChanges();
                        return;
                    }

                    paymentStatus = response.Status;
                    order.PayInitStatus = response.Status;

                    //check Status property of the response object to see if the operation was successful.
                    if (response.Status == 0)
                    {
                        //if everything is OK (LoginAccount and your IP address is valid in the Parsian PGW), save the token in a data store
                        // to use it for redirectgion of your web site's user to the Parsian IPG (Internet Payment Gateway) page to complete payment.
                        token = response.Token;
                        order.PayInitToken = token.ToString();
                        context.SaveChanges();
                        //you must save the token in a data store for further support and rosolving 
                        Session["Token"] = token;
                    }
                    else
                    {
                        context.SaveChanges();
                        //logger.Error($"Parsian PGW service call status code : {response.Status}");
                    }
                }

                if (paymentStatus == 0 && token != 0L)
                {
                    //first, save token to your database to be able to track payment process with your business.
                    //after successfully retrieved a token from Parsian PGW, redirect user to Parsian IPG to complete the payment operation.
                    var redirectUrl = string.Format("https://pec.shaparak.ir/NewIPG/?token={0}", token);
                    Response.Redirect(redirectUrl);
                }
                else
                {
                    Server.TransferRequest("~/Error.aspx");
                }
            }
            ///////////////////////////
            //////////////////////////
           
        }

		
	}
}