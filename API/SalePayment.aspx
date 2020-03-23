<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="SalePayment.aspx.cs" Inherits="API.SalePayment" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div class="container">
            <div class="row">

                <div class="col-md-5">
                    <asp:Label runat="server" AssociatedControlID="txtLoginAccount">Login Account : </asp:Label>
                    <asp:TextBox runat="server" ID="txtLoginAccount">
                    </asp:TextBox>

                </div>

                <div class="col-md-5">
                    <asp:Label runat="server" AssociatedControlID="txtAddData">Additional Data : </asp:Label>
                    <asp:TextBox runat="server" ID="txtAddData">
                    </asp:TextBox>

                </div>

                <div class="col-md-5">
                    <asp:Label runat="server" AssociatedControlID="txtAmount">Amnount : </asp:Label>
                    <asp:TextBox runat="server" ID="txtAmount"></asp:TextBox>

                </div>

            </div>

            <div class="row">
                <div class="col-md-5">
                    <asp:Button runat="server" Text="Pay" ID="btnPay" OnClick="btnPay_Click" />
                </div>
            </div>
        </div>
    </form>
</body>
</html>
