/**
 * CityPay POS API
 * CityPay Point of Sale API for payment with card present devices including EMV readers and contactless POS readers.  The API makes it simple to add EMV and contactless card acceptance to iOS, Android, Tablet and desktop applicaitons using a HTTPS protocol. It segregates the complexity of payment processing from the sales environment and eliminates any necessity for the target system to handle card data. 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: dev@citypay.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CityPayPosApi);
  }
}(this, function(expect, CityPayPosApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CityPayPosApi.DeviceInfo();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DeviceInfo', function() {
    it('should create an instance of DeviceInfo', function() {
      // uncomment below and update the code to test DeviceInfo
      //var instane = new CityPayPosApi.DeviceInfo();
      //expect(instance).to.be.a(CityPayPosApi.DeviceInfo);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new CityPayPosApi.DeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property serialno (base name: "serialno")', function() {
      // uncomment below and update the code to test the property serialno
      //var instane = new CityPayPosApi.DeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property portable (base name: "portable")', function() {
      // uncomment below and update the code to test the property portable
      //var instane = new CityPayPosApi.DeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property busy (base name: "busy")', function() {
      // uncomment below and update the code to test the property busy
      //var instane = new CityPayPosApi.DeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property batteryCharging (base name: "battery_charging")', function() {
      // uncomment below and update the code to test the property batteryCharging
      //var instane = new CityPayPosApi.DeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property batteryPercentage (base name: "battery_percentage")', function() {
      // uncomment below and update the code to test the property batteryPercentage
      //var instane = new CityPayPosApi.DeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property printer (base name: "printer")', function() {
      // uncomment below and update the code to test the property printer
      //var instane = new CityPayPosApi.DeviceInfo();
      //expect(instance).to.be();
    });

  });

}));
