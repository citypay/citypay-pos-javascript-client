# CityPayPosApi.DeviceModuleApi

All URIs are relative to *https://pos.citypay.com/citypay-pos-api/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deviceInfo**](DeviceModuleApi.md#deviceInfo) | **GET** /device/{deviceId}/info | Device Information
[**ping**](DeviceModuleApi.md#ping) | **GET** /device/{deviceId}/ping | Device Ping


<a name="deviceInfo"></a>
# **deviceInfo**
> DeviceInfo deviceInfo(deviceId)

Device Information

Obtains information regarding the device and to review the current status of a device such as the battery charge, serial number and device type. 

### Example
```javascript
import CityPayPosApi from 'city_pay_pos_api';

let apiInstance = new CityPayPosApi.DeviceModuleApi();

let deviceId = "deviceId_example"; // String | The name of the target device used by the API.


apiInstance.deviceInfo(deviceId, (error, data, response) => {
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
 **deviceId** | **String**| The name of the target device used by the API. | 

### Return type

[**DeviceInfo**](DeviceInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="ping"></a>
# **ping**
> Result ping(deviceId)

Device Ping

To monitor or to check whether a device is available, the host can send a simple &#x60;GET&#x60; request to the URL at &#x60;/device/{deviceId}/ping&#x60; to see if the device is responding and available. 

### Example
```javascript
import CityPayPosApi from 'city_pay_pos_api';

let apiInstance = new CityPayPosApi.DeviceModuleApi();

let deviceId = "deviceId_example"; // String | The name of the target device used by the API.


apiInstance.ping(deviceId, (error, data, response) => {
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
 **deviceId** | **String**| The name of the target device used by the API. | 

### Return type

[**Result**](Result.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

