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


import ApiClient from '../ApiClient';





/**
* The SaleRequest model module.
* @module model/SaleRequest
* @version 1.0.0
*/
export default class SaleRequest {
    /**
    * Constructs a new <code>SaleRequest</code>.
    * A request for a sale
    * @alias module:model/SaleRequest
    * @class
    * @param device {String} The name of the target device used by the API. The device will be setup prior to the sale but allows targeting of multiple devices.
    * @param amount {Number} The amount to process in the lowest denomination and in the base currency of the device. 4798 for instance would process the transaction for £47.98
    * @param identifier {String} An identifier or reference for the sale as taken by the point of sale system. This should be used to cross reference transactions after it has processed. The value should be unique and will be used to check on the processing of the transaction.
    */

    constructor(device, amount, identifier) {
        

        
        

        this['device'] = device;this['amount'] = amount;this['identifier'] = identifier;

        
    }

    /**
    * Constructs a <code>SaleRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SaleRequest} obj Optional instance to populate.
    * @return {module:model/SaleRequest} The populated <code>SaleRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SaleRequest();

            
            
            

            if (data.hasOwnProperty('device')) {
                obj['device'] = ApiClient.convertToType(data['device'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('identifier')) {
                obj['identifier'] = ApiClient.convertToType(data['identifier'], 'String');
            }
        }
        return obj;
    }

    /**
    * The name of the target device used by the API. The device will be setup prior to the sale but allows targeting of multiple devices.
    * @member {String} device
    */
    device = undefined;
    /**
    * The amount to process in the lowest denomination and in the base currency of the device. 4798 for instance would process the transaction for £47.98
    * @member {Number} amount
    */
    amount = undefined;
    /**
    * An identifier or reference for the sale as taken by the point of sale system. This should be used to cross reference transactions after it has processed. The value should be unique and will be used to check on the processing of the transaction.
    * @member {String} identifier
    */
    identifier = undefined;








}

