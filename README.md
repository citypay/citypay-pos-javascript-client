# city_pay_pos_api

CityPayPosApi - JavaScript client for city_pay_pos_api
CityPay Point of Sale API for payment with card present devices including EMV readers and contactless POS readers.  The API makes it simple to add EMV and contactless card acceptance to iOS, Android, Tablet and desktop applicaitons using a HTTPS protocol. It segregates the complexity of payment processing from the sales environment and eliminates any necessity for the target system to handle card data. 
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install city_pay_pos_api --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var CityPayPosApi = require('city_pay_pos_api');

var api = new CityPayPosApi.DeviceModuleApi()

var deviceId = "deviceId_example"; // {String} The name of the target device used by the API.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.deviceInfo(deviceId, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://pos.citypay.com/citypay-pos-api/1.0.0*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CityPayPosApi.DeviceModuleApi* | [**deviceInfo**](docs/DeviceModuleApi.md#deviceInfo) | **GET** /device/{deviceId}/info | Device Information
*CityPayPosApi.DeviceModuleApi* | [**ping**](docs/DeviceModuleApi.md#ping) | **GET** /device/{deviceId}/ping | Device Ping
*CityPayPosApi.PaymentModuleApi* | [**receipt**](docs/PaymentModuleApi.md#receipt) | **POST** /receipt | Receipt Print
*CityPayPosApi.PaymentModuleApi* | [**refund**](docs/PaymentModuleApi.md#refund) | **POST** /refund | Refund Transaction
*CityPayPosApi.PaymentModuleApi* | [**reversal**](docs/PaymentModuleApi.md#reversal) | **POST** /reversal | Reversal Tranasction
*CityPayPosApi.PaymentModuleApi* | [**sale**](docs/PaymentModuleApi.md#sale) | **POST** /sale | Sale Transaction
*CityPayPosApi.PaymentModuleApi* | [**transaction**](docs/PaymentModuleApi.md#transaction) | **POST** /transaction | Transaction Status


## Documentation for Models

 - [CityPayPosApi.DeviceInfo](docs/DeviceInfo.md)
 - [CityPayPosApi.PrintRequest](docs/PrintRequest.md)
 - [CityPayPosApi.Receipt](docs/Receipt.md)
 - [CityPayPosApi.Result](docs/Result.md)
 - [CityPayPosApi.ReversalRequest](docs/ReversalRequest.md)
 - [CityPayPosApi.SaleRequest](docs/SaleRequest.md)
 - [CityPayPosApi.SaleResponse](docs/SaleResponse.md)
 - [CityPayPosApi.SuccessResponse](docs/SuccessResponse.md)
 - [CityPayPosApi.TransactionData](docs/TransactionData.md)
 - [CityPayPosApi.TransactionProgress](docs/TransactionProgress.md)
 - [CityPayPosApi.TransactionResult](docs/TransactionResult.md)


## Documentation for Authorization

 All endpoints do not require authorization.
