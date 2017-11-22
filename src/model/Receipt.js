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
* The Receipt model module.
* @module model/Receipt
* @version 1.0.0
*/
export default class Receipt {
    /**
    * Constructs a new <code>Receipt</code>.
    * @alias module:model/Receipt
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>Receipt</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Receipt} obj Optional instance to populate.
    * @return {module:model/Receipt} The populated <code>Receipt</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Receipt();

            
            
            

            if (data.hasOwnProperty('customer')) {
                obj['customer'] = ApiClient.convertToType(data['customer'], 'String');
            }
        }
        return obj;
    }

    /**
    * The customer receipt to be printed or stored
    * @member {String} customer
    */
    customer = undefined;








}

