# CityPayPosApi.PaymentModuleApi

All URIs are relative to *https://pos.citypay.com/citypay-pos-api/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**receipt**](PaymentModuleApi.md#receipt) | **POST** /receipt | Receipt Print
[**refund**](PaymentModuleApi.md#refund) | **POST** /refund | Refund Transaction
[**reversal**](PaymentModuleApi.md#reversal) | **POST** /reversal | Reversal Tranasction
[**sale**](PaymentModuleApi.md#sale) | **POST** /sale | Sale Transaction
[**transaction**](PaymentModuleApi.md#transaction) | **POST** /transaction | Transaction Status


<a name="receipt"></a>
# **receipt**
> TransactionResult receipt(opts)

Receipt Print

Reprint a merchant or customer receipt for a transaction that exists on the device (i.e. has not been cleared by End of Day process). 

### Example
```javascript
import CityPayPosApi from 'city_pay_pos_api';

let apiInstance = new CityPayPosApi.PaymentModuleApi();

let opts = { 
  'body': new CityPayPosApi.TransactionProgress() // TransactionProgress | 
};

apiInstance.receipt(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TransactionProgress**](TransactionProgress.md)|  | [optional] 

### Return type

[**TransactionResult**](TransactionResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="refund"></a>
# **refund**
> SaleResponse refund(body)

Refund Transaction

Initiates a new refund to a device. The action will contact the device and request a transaction start including the amount and a unique reference to track the transaction through it&#39;s lifecycle. 

### Example
```javascript
import CityPayPosApi from 'city_pay_pos_api';

let apiInstance = new CityPayPosApi.PaymentModuleApi();

let body = new CityPayPosApi.SaleRequest(); // SaleRequest | 


apiInstance.refund(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SaleRequest**](SaleRequest.md)|  | 

### Return type

[**SaleResponse**](SaleResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="reversal"></a>
# **reversal**
> SaleResponse reversal(body)

Reversal Tranasction

Initiates a reversal to a device. No confirmation is made and the transaction reversal process is run. 

### Example
```javascript
import CityPayPosApi from 'city_pay_pos_api';

let apiInstance = new CityPayPosApi.PaymentModuleApi();

let body = new CityPayPosApi.ReversalRequest(); // ReversalRequest | 


apiInstance.reversal(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ReversalRequest**](ReversalRequest.md)|  | 

### Return type

[**SaleResponse**](SaleResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sale"></a>
# **sale**
> SaleResponse sale(body)

Sale Transaction

Initiates a new sale to a device. The action will contact the device and request a transaction start including the amount and a unique reference to track the transaction through it&#39;s lifecycle. 

### Example
```javascript
import CityPayPosApi from 'city_pay_pos_api';

let apiInstance = new CityPayPosApi.PaymentModuleApi();

let body = new CityPayPosApi.SaleRequest(); // SaleRequest | 


apiInstance.sale(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SaleRequest**](SaleRequest.md)|  | 

### Return type

[**SaleResponse**](SaleResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="transaction"></a>
# **transaction**
> TransactionResult transaction(opts)

Transaction Status

Request the status of a transaction in progress or a complete transaction using the identifier as the reference. Depending on the state of the transaction, the response will indicate if it is not found, in progress (and the current stage in the transaction workflow) or complete (with all transaction data). 

### Example
```javascript
import CityPayPosApi from 'city_pay_pos_api';

let apiInstance = new CityPayPosApi.PaymentModuleApi();

let opts = { 
  'body': new CityPayPosApi.TransactionProgress() // TransactionProgress | 
};

apiInstance.transaction(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TransactionProgress**](TransactionProgress.md)|  | [optional] 

### Return type

[**TransactionResult**](TransactionResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

