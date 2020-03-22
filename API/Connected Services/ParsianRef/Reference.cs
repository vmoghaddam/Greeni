﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace API.ParsianRef {
    using System.Runtime.Serialization;
    using System;
    
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Runtime.Serialization", "4.0.0.0")]
    [System.Runtime.Serialization.DataContractAttribute(Name="ClientPaymentRequestDataBase", Namespace="https://pec.Shaparak.ir/NewIPGServices/Sale/SaleService")]
    [System.SerializableAttribute()]
    [System.Runtime.Serialization.KnownTypeAttribute(typeof(API.ParsianRef.ClientSaleRequestData))]
    public partial class ClientPaymentRequestDataBase : object, System.Runtime.Serialization.IExtensibleDataObject, System.ComponentModel.INotifyPropertyChanged {
        
        [System.NonSerializedAttribute()]
        private System.Runtime.Serialization.ExtensionDataObject extensionDataField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string LoginAccountField;
        
        private long AmountField;
        
        private long OrderIdField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string CallBackUrlField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string AdditionalDataField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string OriginatorField;
        
        [global::System.ComponentModel.BrowsableAttribute(false)]
        public System.Runtime.Serialization.ExtensionDataObject ExtensionData {
            get {
                return this.extensionDataField;
            }
            set {
                this.extensionDataField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute(EmitDefaultValue=false)]
        public string LoginAccount {
            get {
                return this.LoginAccountField;
            }
            set {
                if ((object.ReferenceEquals(this.LoginAccountField, value) != true)) {
                    this.LoginAccountField = value;
                    this.RaisePropertyChanged("LoginAccount");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute(IsRequired=true, Order=1)]
        public long Amount {
            get {
                return this.AmountField;
            }
            set {
                if ((this.AmountField.Equals(value) != true)) {
                    this.AmountField = value;
                    this.RaisePropertyChanged("Amount");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute(IsRequired=true, Order=2)]
        public long OrderId {
            get {
                return this.OrderIdField;
            }
            set {
                if ((this.OrderIdField.Equals(value) != true)) {
                    this.OrderIdField = value;
                    this.RaisePropertyChanged("OrderId");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute(EmitDefaultValue=false, Order=3)]
        public string CallBackUrl {
            get {
                return this.CallBackUrlField;
            }
            set {
                if ((object.ReferenceEquals(this.CallBackUrlField, value) != true)) {
                    this.CallBackUrlField = value;
                    this.RaisePropertyChanged("CallBackUrl");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute(EmitDefaultValue=false, Order=4)]
        public string AdditionalData {
            get {
                return this.AdditionalDataField;
            }
            set {
                if ((object.ReferenceEquals(this.AdditionalDataField, value) != true)) {
                    this.AdditionalDataField = value;
                    this.RaisePropertyChanged("AdditionalData");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute(EmitDefaultValue=false, Order=5)]
        public string Originator {
            get {
                return this.OriginatorField;
            }
            set {
                if ((object.ReferenceEquals(this.OriginatorField, value) != true)) {
                    this.OriginatorField = value;
                    this.RaisePropertyChanged("Originator");
                }
            }
        }
        
        public event System.ComponentModel.PropertyChangedEventHandler PropertyChanged;
        
        protected void RaisePropertyChanged(string propertyName) {
            System.ComponentModel.PropertyChangedEventHandler propertyChanged = this.PropertyChanged;
            if ((propertyChanged != null)) {
                propertyChanged(this, new System.ComponentModel.PropertyChangedEventArgs(propertyName));
            }
        }
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Runtime.Serialization", "4.0.0.0")]
    [System.Runtime.Serialization.DataContractAttribute(Name="ClientSaleRequestData", Namespace="https://pec.Shaparak.ir/NewIPGServices/Sale/SaleService")]
    [System.SerializableAttribute()]
    public partial class ClientSaleRequestData : API.ParsianRef.ClientPaymentRequestDataBase {
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Runtime.Serialization", "4.0.0.0")]
    [System.Runtime.Serialization.DataContractAttribute(Name="ClientPaymentResponseDataBase", Namespace="https://pec.Shaparak.ir/NewIPGServices/Sale/SaleService")]
    [System.SerializableAttribute()]
    [System.Runtime.Serialization.KnownTypeAttribute(typeof(API.ParsianRef.ClientSaleResponseData))]
    public partial class ClientPaymentResponseDataBase : object, System.Runtime.Serialization.IExtensibleDataObject, System.ComponentModel.INotifyPropertyChanged {
        
        [System.NonSerializedAttribute()]
        private System.Runtime.Serialization.ExtensionDataObject extensionDataField;
        
        private long TokenField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string MessageField;
        
        private short StatusField;
        
        [global::System.ComponentModel.BrowsableAttribute(false)]
        public System.Runtime.Serialization.ExtensionDataObject ExtensionData {
            get {
                return this.extensionDataField;
            }
            set {
                this.extensionDataField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute(IsRequired=true)]
        public long Token {
            get {
                return this.TokenField;
            }
            set {
                if ((this.TokenField.Equals(value) != true)) {
                    this.TokenField = value;
                    this.RaisePropertyChanged("Token");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute(EmitDefaultValue=false, Order=1)]
        public string Message {
            get {
                return this.MessageField;
            }
            set {
                if ((object.ReferenceEquals(this.MessageField, value) != true)) {
                    this.MessageField = value;
                    this.RaisePropertyChanged("Message");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute(IsRequired=true, Order=2)]
        public short Status {
            get {
                return this.StatusField;
            }
            set {
                if ((this.StatusField.Equals(value) != true)) {
                    this.StatusField = value;
                    this.RaisePropertyChanged("Status");
                }
            }
        }
        
        public event System.ComponentModel.PropertyChangedEventHandler PropertyChanged;
        
        protected void RaisePropertyChanged(string propertyName) {
            System.ComponentModel.PropertyChangedEventHandler propertyChanged = this.PropertyChanged;
            if ((propertyChanged != null)) {
                propertyChanged(this, new System.ComponentModel.PropertyChangedEventArgs(propertyName));
            }
        }
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Runtime.Serialization", "4.0.0.0")]
    [System.Runtime.Serialization.DataContractAttribute(Name="ClientSaleResponseData", Namespace="https://pec.Shaparak.ir/NewIPGServices/Sale/SaleService")]
    [System.SerializableAttribute()]
    public partial class ClientSaleResponseData : API.ParsianRef.ClientPaymentResponseDataBase {
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ServiceModel.ServiceContractAttribute(Namespace="https://pec.Shaparak.ir/NewIPGServices/Sale/SaleService", ConfigurationName="ParsianRef.SaleServiceSoap")]
    public interface SaleServiceSoap {
        
        // CODEGEN: Generating message contract since element name requestData from namespace https://pec.Shaparak.ir/NewIPGServices/Sale/SaleService is not marked nillable
        [System.ServiceModel.OperationContractAttribute(Action="https://pec.Shaparak.ir/NewIPGServices/Sale/SaleService/SalePaymentRequest", ReplyAction="*")]
        API.ParsianRef.SalePaymentRequestResponse SalePaymentRequest(API.ParsianRef.SalePaymentRequestRequest request);
        
        [System.ServiceModel.OperationContractAttribute(Action="https://pec.Shaparak.ir/NewIPGServices/Sale/SaleService/SalePaymentRequest", ReplyAction="*")]
        System.Threading.Tasks.Task<API.ParsianRef.SalePaymentRequestResponse> SalePaymentRequestAsync(API.ParsianRef.SalePaymentRequestRequest request);
        
        // CODEGEN: Generating message contract since element name requestData from namespace https://pec.Shaparak.ir/NewIPGServices/Sale/SaleService is not marked nillable
        [System.ServiceModel.OperationContractAttribute(Action="https://pec.Shaparak.ir/NewIPGServices/Sale/SaleService/SalePaymentWithId", ReplyAction="*")]
        API.ParsianRef.SalePaymentWithIdResponse SalePaymentWithId(API.ParsianRef.SalePaymentWithIdRequest request);
        
        [System.ServiceModel.OperationContractAttribute(Action="https://pec.Shaparak.ir/NewIPGServices/Sale/SaleService/SalePaymentWithId", ReplyAction="*")]
        System.Threading.Tasks.Task<API.ParsianRef.SalePaymentWithIdResponse> SalePaymentWithIdAsync(API.ParsianRef.SalePaymentWithIdRequest request);
        
        // CODEGEN: Generating message contract since element name requestData from namespace https://pec.Shaparak.ir/NewIPGServices/Sale/SaleService is not marked nillable
        [System.ServiceModel.OperationContractAttribute(Action="https://pec.Shaparak.ir/NewIPGServices/Sale/SaleService/UDSalePaymentRequest", ReplyAction="*")]
        API.ParsianRef.UDSalePaymentRequestResponse UDSalePaymentRequest(API.ParsianRef.UDSalePaymentRequestRequest request);
        
        [System.ServiceModel.OperationContractAttribute(Action="https://pec.Shaparak.ir/NewIPGServices/Sale/SaleService/UDSalePaymentRequest", ReplyAction="*")]
        System.Threading.Tasks.Task<API.ParsianRef.UDSalePaymentRequestResponse> UDSalePaymentRequestAsync(API.ParsianRef.UDSalePaymentRequestRequest request);
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
    [System.ServiceModel.MessageContractAttribute(IsWrapped=false)]
    public partial class SalePaymentRequestRequest {
        
        [System.ServiceModel.MessageBodyMemberAttribute(Name="SalePaymentRequest", Namespace="https://pec.Shaparak.ir/NewIPGServices/Sale/SaleService", Order=0)]
        public API.ParsianRef.SalePaymentRequestRequestBody Body;
        
        public SalePaymentRequestRequest() {
        }
        
        public SalePaymentRequestRequest(API.ParsianRef.SalePaymentRequestRequestBody Body) {
            this.Body = Body;
        }
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
    [System.Runtime.Serialization.DataContractAttribute(Namespace="https://pec.Shaparak.ir/NewIPGServices/Sale/SaleService")]
    public partial class SalePaymentRequestRequestBody {
        
        [System.Runtime.Serialization.DataMemberAttribute(EmitDefaultValue=false, Order=0)]
        public API.ParsianRef.ClientSaleRequestData requestData;
        
        public SalePaymentRequestRequestBody() {
        }
        
        public SalePaymentRequestRequestBody(API.ParsianRef.ClientSaleRequestData requestData) {
            this.requestData = requestData;
        }
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
    [System.ServiceModel.MessageContractAttribute(IsWrapped=false)]
    public partial class SalePaymentRequestResponse {
        
        [System.ServiceModel.MessageBodyMemberAttribute(Name="SalePaymentRequestResponse", Namespace="https://pec.Shaparak.ir/NewIPGServices/Sale/SaleService", Order=0)]
        public API.ParsianRef.SalePaymentRequestResponseBody Body;
        
        public SalePaymentRequestResponse() {
        }
        
        public SalePaymentRequestResponse(API.ParsianRef.SalePaymentRequestResponseBody Body) {
            this.Body = Body;
        }
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
    [System.Runtime.Serialization.DataContractAttribute(Namespace="https://pec.Shaparak.ir/NewIPGServices/Sale/SaleService")]
    public partial class SalePaymentRequestResponseBody {
        
        [System.Runtime.Serialization.DataMemberAttribute(EmitDefaultValue=false, Order=0)]
        public API.ParsianRef.ClientSaleResponseData SalePaymentRequestResult;
        
        public SalePaymentRequestResponseBody() {
        }
        
        public SalePaymentRequestResponseBody(API.ParsianRef.ClientSaleResponseData SalePaymentRequestResult) {
            this.SalePaymentRequestResult = SalePaymentRequestResult;
        }
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
    [System.ServiceModel.MessageContractAttribute(IsWrapped=false)]
    public partial class SalePaymentWithIdRequest {
        
        [System.ServiceModel.MessageBodyMemberAttribute(Name="SalePaymentWithId", Namespace="https://pec.Shaparak.ir/NewIPGServices/Sale/SaleService", Order=0)]
        public API.ParsianRef.SalePaymentWithIdRequestBody Body;
        
        public SalePaymentWithIdRequest() {
        }
        
        public SalePaymentWithIdRequest(API.ParsianRef.SalePaymentWithIdRequestBody Body) {
            this.Body = Body;
        }
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
    [System.Runtime.Serialization.DataContractAttribute(Namespace="https://pec.Shaparak.ir/NewIPGServices/Sale/SaleService")]
    public partial class SalePaymentWithIdRequestBody {
        
        [System.Runtime.Serialization.DataMemberAttribute(EmitDefaultValue=false, Order=0)]
        public API.ParsianRef.ClientSaleRequestData requestData;
        
        public SalePaymentWithIdRequestBody() {
        }
        
        public SalePaymentWithIdRequestBody(API.ParsianRef.ClientSaleRequestData requestData) {
            this.requestData = requestData;
        }
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
    [System.ServiceModel.MessageContractAttribute(IsWrapped=false)]
    public partial class SalePaymentWithIdResponse {
        
        [System.ServiceModel.MessageBodyMemberAttribute(Name="SalePaymentWithIdResponse", Namespace="https://pec.Shaparak.ir/NewIPGServices/Sale/SaleService", Order=0)]
        public API.ParsianRef.SalePaymentWithIdResponseBody Body;
        
        public SalePaymentWithIdResponse() {
        }
        
        public SalePaymentWithIdResponse(API.ParsianRef.SalePaymentWithIdResponseBody Body) {
            this.Body = Body;
        }
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
    [System.Runtime.Serialization.DataContractAttribute(Namespace="https://pec.Shaparak.ir/NewIPGServices/Sale/SaleService")]
    public partial class SalePaymentWithIdResponseBody {
        
        [System.Runtime.Serialization.DataMemberAttribute(EmitDefaultValue=false, Order=0)]
        public API.ParsianRef.ClientSaleResponseData SalePaymentWithIdResult;
        
        public SalePaymentWithIdResponseBody() {
        }
        
        public SalePaymentWithIdResponseBody(API.ParsianRef.ClientSaleResponseData SalePaymentWithIdResult) {
            this.SalePaymentWithIdResult = SalePaymentWithIdResult;
        }
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
    [System.ServiceModel.MessageContractAttribute(IsWrapped=false)]
    public partial class UDSalePaymentRequestRequest {
        
        [System.ServiceModel.MessageBodyMemberAttribute(Name="UDSalePaymentRequest", Namespace="https://pec.Shaparak.ir/NewIPGServices/Sale/SaleService", Order=0)]
        public API.ParsianRef.UDSalePaymentRequestRequestBody Body;
        
        public UDSalePaymentRequestRequest() {
        }
        
        public UDSalePaymentRequestRequest(API.ParsianRef.UDSalePaymentRequestRequestBody Body) {
            this.Body = Body;
        }
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
    [System.Runtime.Serialization.DataContractAttribute(Namespace="https://pec.Shaparak.ir/NewIPGServices/Sale/SaleService")]
    public partial class UDSalePaymentRequestRequestBody {
        
        [System.Runtime.Serialization.DataMemberAttribute(EmitDefaultValue=false, Order=0)]
        public API.ParsianRef.ClientSaleRequestData requestData;
        
        public UDSalePaymentRequestRequestBody() {
        }
        
        public UDSalePaymentRequestRequestBody(API.ParsianRef.ClientSaleRequestData requestData) {
            this.requestData = requestData;
        }
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
    [System.ServiceModel.MessageContractAttribute(IsWrapped=false)]
    public partial class UDSalePaymentRequestResponse {
        
        [System.ServiceModel.MessageBodyMemberAttribute(Name="UDSalePaymentRequestResponse", Namespace="https://pec.Shaparak.ir/NewIPGServices/Sale/SaleService", Order=0)]
        public API.ParsianRef.UDSalePaymentRequestResponseBody Body;
        
        public UDSalePaymentRequestResponse() {
        }
        
        public UDSalePaymentRequestResponse(API.ParsianRef.UDSalePaymentRequestResponseBody Body) {
            this.Body = Body;
        }
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
    [System.Runtime.Serialization.DataContractAttribute(Namespace="https://pec.Shaparak.ir/NewIPGServices/Sale/SaleService")]
    public partial class UDSalePaymentRequestResponseBody {
        
        [System.Runtime.Serialization.DataMemberAttribute(EmitDefaultValue=false, Order=0)]
        public API.ParsianRef.ClientPaymentResponseDataBase UDSalePaymentRequestResult;
        
        public UDSalePaymentRequestResponseBody() {
        }
        
        public UDSalePaymentRequestResponseBody(API.ParsianRef.ClientPaymentResponseDataBase UDSalePaymentRequestResult) {
            this.UDSalePaymentRequestResult = UDSalePaymentRequestResult;
        }
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public interface SaleServiceSoapChannel : API.ParsianRef.SaleServiceSoap, System.ServiceModel.IClientChannel {
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public partial class SaleServiceSoapClient : System.ServiceModel.ClientBase<API.ParsianRef.SaleServiceSoap>, API.ParsianRef.SaleServiceSoap {
        
        public SaleServiceSoapClient() {
        }
        
        public SaleServiceSoapClient(string endpointConfigurationName) : 
                base(endpointConfigurationName) {
        }
        
        public SaleServiceSoapClient(string endpointConfigurationName, string remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public SaleServiceSoapClient(string endpointConfigurationName, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public SaleServiceSoapClient(System.ServiceModel.Channels.Binding binding, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(binding, remoteAddress) {
        }
        
        [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
        API.ParsianRef.SalePaymentRequestResponse API.ParsianRef.SaleServiceSoap.SalePaymentRequest(API.ParsianRef.SalePaymentRequestRequest request) {
            return base.Channel.SalePaymentRequest(request);
        }
        
        public API.ParsianRef.ClientSaleResponseData SalePaymentRequest(API.ParsianRef.ClientSaleRequestData requestData) {
            API.ParsianRef.SalePaymentRequestRequest inValue = new API.ParsianRef.SalePaymentRequestRequest();
            inValue.Body = new API.ParsianRef.SalePaymentRequestRequestBody();
            inValue.Body.requestData = requestData;
            API.ParsianRef.SalePaymentRequestResponse retVal = ((API.ParsianRef.SaleServiceSoap)(this)).SalePaymentRequest(inValue);
            return retVal.Body.SalePaymentRequestResult;
        }
        
        [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
        System.Threading.Tasks.Task<API.ParsianRef.SalePaymentRequestResponse> API.ParsianRef.SaleServiceSoap.SalePaymentRequestAsync(API.ParsianRef.SalePaymentRequestRequest request) {
            return base.Channel.SalePaymentRequestAsync(request);
        }
        
        public System.Threading.Tasks.Task<API.ParsianRef.SalePaymentRequestResponse> SalePaymentRequestAsync(API.ParsianRef.ClientSaleRequestData requestData) {
            API.ParsianRef.SalePaymentRequestRequest inValue = new API.ParsianRef.SalePaymentRequestRequest();
            inValue.Body = new API.ParsianRef.SalePaymentRequestRequestBody();
            inValue.Body.requestData = requestData;
            return ((API.ParsianRef.SaleServiceSoap)(this)).SalePaymentRequestAsync(inValue);
        }
        
        [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
        API.ParsianRef.SalePaymentWithIdResponse API.ParsianRef.SaleServiceSoap.SalePaymentWithId(API.ParsianRef.SalePaymentWithIdRequest request) {
            return base.Channel.SalePaymentWithId(request);
        }
        
        public API.ParsianRef.ClientSaleResponseData SalePaymentWithId(API.ParsianRef.ClientSaleRequestData requestData) {
            API.ParsianRef.SalePaymentWithIdRequest inValue = new API.ParsianRef.SalePaymentWithIdRequest();
            inValue.Body = new API.ParsianRef.SalePaymentWithIdRequestBody();
            inValue.Body.requestData = requestData;
            API.ParsianRef.SalePaymentWithIdResponse retVal = ((API.ParsianRef.SaleServiceSoap)(this)).SalePaymentWithId(inValue);
            return retVal.Body.SalePaymentWithIdResult;
        }
        
        [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
        System.Threading.Tasks.Task<API.ParsianRef.SalePaymentWithIdResponse> API.ParsianRef.SaleServiceSoap.SalePaymentWithIdAsync(API.ParsianRef.SalePaymentWithIdRequest request) {
            return base.Channel.SalePaymentWithIdAsync(request);
        }
        
        public System.Threading.Tasks.Task<API.ParsianRef.SalePaymentWithIdResponse> SalePaymentWithIdAsync(API.ParsianRef.ClientSaleRequestData requestData) {
            API.ParsianRef.SalePaymentWithIdRequest inValue = new API.ParsianRef.SalePaymentWithIdRequest();
            inValue.Body = new API.ParsianRef.SalePaymentWithIdRequestBody();
            inValue.Body.requestData = requestData;
            return ((API.ParsianRef.SaleServiceSoap)(this)).SalePaymentWithIdAsync(inValue);
        }
        
        [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
        API.ParsianRef.UDSalePaymentRequestResponse API.ParsianRef.SaleServiceSoap.UDSalePaymentRequest(API.ParsianRef.UDSalePaymentRequestRequest request) {
            return base.Channel.UDSalePaymentRequest(request);
        }
        
        public API.ParsianRef.ClientPaymentResponseDataBase UDSalePaymentRequest(API.ParsianRef.ClientSaleRequestData requestData) {
            API.ParsianRef.UDSalePaymentRequestRequest inValue = new API.ParsianRef.UDSalePaymentRequestRequest();
            inValue.Body = new API.ParsianRef.UDSalePaymentRequestRequestBody();
            inValue.Body.requestData = requestData;
            API.ParsianRef.UDSalePaymentRequestResponse retVal = ((API.ParsianRef.SaleServiceSoap)(this)).UDSalePaymentRequest(inValue);
            return retVal.Body.UDSalePaymentRequestResult;
        }
        
        [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
        System.Threading.Tasks.Task<API.ParsianRef.UDSalePaymentRequestResponse> API.ParsianRef.SaleServiceSoap.UDSalePaymentRequestAsync(API.ParsianRef.UDSalePaymentRequestRequest request) {
            return base.Channel.UDSalePaymentRequestAsync(request);
        }
        
        public System.Threading.Tasks.Task<API.ParsianRef.UDSalePaymentRequestResponse> UDSalePaymentRequestAsync(API.ParsianRef.ClientSaleRequestData requestData) {
            API.ParsianRef.UDSalePaymentRequestRequest inValue = new API.ParsianRef.UDSalePaymentRequestRequest();
            inValue.Body = new API.ParsianRef.UDSalePaymentRequestRequestBody();
            inValue.Body.requestData = requestData;
            return ((API.ParsianRef.SaleServiceSoap)(this)).UDSalePaymentRequestAsync(inValue);
        }
    }
}