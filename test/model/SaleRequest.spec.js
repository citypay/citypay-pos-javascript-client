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
    instance = new CityPayPosApi.SaleRequest();
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

  describe('SaleRequest', function() {
    it('should create an instance of SaleRequest', function() {
      // uncomment below and update the code to test SaleRequest
      //var instane = new CityPayPosApi.SaleRequest();
      //expect(instance).to.be.a(CityPayPosApi.SaleRequest);
    });

    it('should have the property device (base name: "device")', function() {
      // uncomment below and update the code to test the property device
      //var instane = new CityPayPosApi.SaleRequest();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instane = new CityPayPosApi.SaleRequest();
      //expect(instance).to.be();
    });

    it('should have the property identifier (base name: "identifier")', function() {
      // uncomment below and update the code to test the property identifier
      //var instane = new CityPayPosApi.SaleRequest();
      //expect(instance).to.be();
    });

  });

}));
