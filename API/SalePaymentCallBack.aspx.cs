using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace API
{
    public partial class SalePaymentCallBack : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            var token = Convert.ToInt64(Request.Form["Token"]);
            var orderId = Convert.ToInt64(Request.Form["OrderId"]);
            var terminalNumber = Convert.ToInt32(Request.Form["TerminalNo"]);
            var rrn = Convert.ToInt64(Request.Form["RRN"]);
            var status = Convert.ToInt16(Request.Form["status"]);
            var cardNumberHashed = Request.Form["HashCardNumber"];
            var amountAsString = Request.Form["Amount"]; //amount is formatted as a currency string
            long amount;
            //به دلیل اینکه مبلغ با جداکننده ویرگول به ازای هر سه رقم می باشد، باید بصورت زیر استخراج شود
            //البته به دلیل اینکه مبلغ را پذیرنده قبلاً به درگاه پرداخت ارسال نموده است، بهتر است از پایگاه داده خودش آن را در صورتی که نیاز دارد استخراج نماید
            bool amountParseWasSucceed = long.TryParse(amountAsString, System.Globalization.NumberStyles.Any, System.Globalization.CultureInfo.CurrentCulture, out amount);

            var tspToken = Request.Form["TspToken"];

            using (var context = new EPAGRIFFINEntities())
            {
                var order = context.Orders.FirstOrDefault(q => q.Id == orderId);
                order.PayDoneToken = token.ToString();
                order.PayDoneTerminalNo = terminalNumber.ToString();
                order.PayDoneRRN = rrn.ToString();
                order.PayDoneStatus = status.ToString();
                order.PayDoneHashCardNumber = cardNumberHashed;
                order.PayDoneDate = DateTime.Now;
                context.SaveChanges();

            }
                txtTspToken.Text = tspToken;
            txtToken.Text = token.ToString();
            txtOrderId.Text = orderId.ToString();
            txtTerminalNo.Text = terminalNumber.ToString();
            txtRRN.Text = rrn.ToString();
            txtStatus.Text = status.ToString();
            txtHashCardNumber.Text = cardNumberHashed;
            txtAmount.Text = amount.ToString();

            if (status == 0)
            {
                ConfirmPayment(token);
            }
        }

        /// <summary>
        /// Confirm payment must be performed only for SALE payment.
        /// </summary>
        /// <param name="token"></param>
        private void ConfirmPayment(long token)
        {
            using (var confirmSvc =  new ParsianConfirmRef.ConfirmServiceSoapClient())
            {
                var confirmRequestData = new ParsianConfirmRef.ClientConfirmRequestData();
                confirmRequestData.Token = token;
                confirmRequestData.LoginAccount = "IXE2U0hp0H3linqxkY26";
                var confirmResponse = confirmSvc.ConfirmPayment(confirmRequestData);
                
                if (confirmResponse.Status == 0)
                {
                    lblConfirmStatus.Text = "Payment and Confirm was successful.";
                }
                else
                {
                    lblConfirmStatus.Text = "payment was successful, however, Confirm payment was not successful.";
                }
                using (var context = new EPAGRIFFINEntities())
                {
                    var rrn = confirmResponse.RRN.ToString();
                    var order = context.Orders.FirstOrDefault(q => q.PayDoneRRN == rrn);
                    if (order != null)
                    {
                        order.PayConfirm = confirmResponse.Status.ToString();
                        order.PayConfirmCardMask = confirmResponse.CardNumberMasked;
                        order.PayConfirmDate = DateTime.Now;
                        order.PayConfirmToken = confirmResponse.Token.ToString();
                    }
                    context.SaveChanges();
                }

                Response.Redirect("http://greenimax.ir/#!/orders");

            }



        }

        //در صورتی که لازم باشد پرداختی که کاربر در صفحه درگاه پرداخت اینترنتی پارسیان انجام داده است
        //به شکلی لغو شود، باید از وب سرویس برگشت وجه استفاده شود
        //این وب سرویس با پاس نمودن توکن درخواستی که پرداخت آن انجام شده است قابل فراخوانی است
        //لطفاً دقت فرمایید که تنها در صورتی باید این سرویس فراخوانی شود که 
        //به عنوان مثال، کاربر درخواست لغو دریافت کالا یا خدمات از وب سایت شما را پس از پرداخت موفق داده باشد
        //فقط بیست دقیقه پس از درخواست اولیه پرداخت که توسط اپلیکیشن داده شده است، فرصت درخواست برگشت وجه پرداخت شده وجود دارد
        //private void ReversePayment(long token)
        //{
        //    //ایجاد یک نمونه از سرویس برگشت وجه پرداخت شده
        //    using (var reversalSvc = new ParsianPGWReversalServices.ReversalService())
        //    {
        //        //ایجاد یک نمونه از نوع پارامتر ورودی متد برگشت وجه
        //        var requestData = new ParsianPGWReversalServices.ClientReversalRequestData()
        //        {
        //            LoginAccount = ConfigHelper.LoginAccount,
        //            Token = token
        //        };

        //        //فراخوانی متد برگشت وجه از نمونه وب سرویس برگشت وجه
        //        var response = reversalSvc.ReversalRequest(requestData);

        //        //کنترل کد وضعیت عملیات درخواست برگشت وجه
        //        //درصورت موفق بودن، می توانید از ارائه کالا و یا خدمات درخواستی کاربر به او انصراف دهید
        //        if (response.Status == Constants.ParsianPaymentGateway.Successful)
        //        {
        //            //reversal was successful
        //        }
        //    }
        //}
    }
}