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
* The SuccessResponse model module.
* @module model/SuccessResponse
* @version 1.0.0
*/
export default class SuccessResponse {
    /**
    * Constructs a new <code>SuccessResponse</code>.
    * @alias module:model/SuccessResponse
    * @class
    * @param success {Boolean} 
    */

    constructor(success) {
        

        
        

        this['success'] = success;

        
    }

    /**
    * Constructs a <code>SuccessResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SuccessResponse} obj Optional instance to populate.
    * @return {module:model/SuccessResponse} The populated <code>SuccessResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SuccessResponse();

            
            
            

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {Boolean} success
    */
    success = undefined;
    /**
    * Message describing any error
    * @member {String} description
    */
    description = undefined;
    /**
    * status of the device
    * @member {String} status
    */
    status = undefined;








}


