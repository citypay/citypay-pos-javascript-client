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
* The TransactionData model module.
* @module model/TransactionData
* @version 1.0.0
*/
export default class TransactionData {
    /**
    * Constructs a new <code>TransactionData</code>.
    * @alias module:model/TransactionData
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>TransactionData</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/TransactionData} obj Optional instance to populate.
    * @return {module:model/TransactionData} The populated <code>TransactionData</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionData();

            
            
            

            if (data.hasOwnProperty('additional_data')) {
                obj['additional_data'] = ApiClient.convertToType(data['additional_data'], 'String');
            }
            if (data.hasOwnProperty('auxiliary_data')) {
                obj['auxiliary_data'] = ApiClient.convertToType(data['auxiliary_data'], 'String');
            }
            if (data.hasOwnProperty('card_type')) {
                obj['card_type'] = ApiClient.convertToType(data['card_type'], 'String');
            }
            if (data.hasOwnProperty('completed_at')) {
                obj['completed_at'] = ApiClient.convertToType(data['completed_at'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('currency_symbol')) {
                obj['currency_symbol'] = ApiClient.convertToType(data['currency_symbol'], 'String');
            }
            if (data.hasOwnProperty('declined_by_card')) {
                obj['declined_by_card'] = ApiClient.convertToType(data['declined_by_card'], 'Boolean');
            }
            if (data.hasOwnProperty('emv_app_cryptogram')) {
                obj['emv_app_cryptogram'] = ApiClient.convertToType(data['emv_app_cryptogram'], 'String');
            }
            if (data.hasOwnProperty('emv_app_expiration_date')) {
                obj['emv_app_expiration_date'] = ApiClient.convertToType(data['emv_app_expiration_date'], 'String');
            }
            if (data.hasOwnProperty('emv_app_txn_counter')) {
                obj['emv_app_txn_counter'] = ApiClient.convertToType(data['emv_app_txn_counter'], 'Number');
            }
            if (data.hasOwnProperty('emv_authorized_amount')) {
                obj['emv_authorized_amount'] = ApiClient.convertToType(data['emv_authorized_amount'], 'String');
            }
            if (data.hasOwnProperty('emv_cardholder_verification_results')) {
                obj['emv_cardholder_verification_results'] = ApiClient.convertToType(data['emv_cardholder_verification_results'], 'String');
            }
            if (data.hasOwnProperty('emv_country_code')) {
                obj['emv_country_code'] = ApiClient.convertToType(data['emv_country_code'], 'String');
            }
            if (data.hasOwnProperty('emv_cryptogram_info_data')) {
                obj['emv_cryptogram_info_data'] = ApiClient.convertToType(data['emv_cryptogram_info_data'], 'String');
            }
            if (data.hasOwnProperty('emv_icc_appid')) {
                obj['emv_icc_appid'] = ApiClient.convertToType(data['emv_icc_appid'], 'String');
            }
            if (data.hasOwnProperty('emv_interchange_profile')) {
                obj['emv_interchange_profile'] = ApiClient.convertToType(data['emv_interchange_profile'], 'String');
            }
            if (data.hasOwnProperty('emv_issuer_app_data')) {
                obj['emv_issuer_app_data'] = ApiClient.convertToType(data['emv_issuer_app_data'], 'String');
            }
            if (data.hasOwnProperty('emv_pan_seq_num')) {
                obj['emv_pan_seq_num'] = ApiClient.convertToType(data['emv_pan_seq_num'], 'String');
            }
            if (data.hasOwnProperty('emv_terminal_capabilities')) {
                obj['emv_terminal_capabilities'] = ApiClient.convertToType(data['emv_terminal_capabilities'], 'String');
            }
            if (data.hasOwnProperty('emv_terminal_type')) {
                obj['emv_terminal_type'] = ApiClient.convertToType(data['emv_terminal_type'], 'String');
            }
            if (data.hasOwnProperty('emv_terminal_verification_results')) {
                obj['emv_terminal_verification_results'] = ApiClient.convertToType(data['emv_terminal_verification_results'], 'String');
            }
            if (data.hasOwnProperty('emv_track2_equivalent')) {
                obj['emv_track2_equivalent'] = ApiClient.convertToType(data['emv_track2_equivalent'], 'String');
            }
            if (data.hasOwnProperty('emv_txn_currency_code')) {
                obj['emv_txn_currency_code'] = ApiClient.convertToType(data['emv_txn_currency_code'], 'String');
            }
            if (data.hasOwnProperty('emv_txn_date')) {
                obj['emv_txn_date'] = ApiClient.convertToType(data['emv_txn_date'], 'String');
            }
            if (data.hasOwnProperty('emv_txn_status_info')) {
                obj['emv_txn_status_info'] = ApiClient.convertToType(data['emv_txn_status_info'], 'String');
            }
            if (data.hasOwnProperty('emv_txn_type')) {
                obj['emv_txn_type'] = ApiClient.convertToType(data['emv_txn_type'], 'String');
            }
            if (data.hasOwnProperty('emv_txn_unpredictable_number')) {
                obj['emv_txn_unpredictable_number'] = ApiClient.convertToType(data['emv_txn_unpredictable_number'], 'String');
            }
            if (data.hasOwnProperty('is_commercial_card')) {
                obj['is_commercial_card'] = ApiClient.convertToType(data['is_commercial_card'], 'String');
            }
            if (data.hasOwnProperty('is_contactless')) {
                obj['is_contactless'] = ApiClient.convertToType(data['is_contactless'], 'String');
            }
            if (data.hasOwnProperty('is_fallback')) {
                obj['is_fallback'] = ApiClient.convertToType(data['is_fallback'], 'String');
            }
            if (data.hasOwnProperty('is_offline')) {
                obj['is_offline'] = ApiClient.convertToType(data['is_offline'], 'String');
            }
            if (data.hasOwnProperty('is_voided')) {
                obj['is_voided'] = ApiClient.convertToType(data['is_voided'], 'String');
            }
            if (data.hasOwnProperty('response_code')) {
                obj['response_code'] = ApiClient.convertToType(data['response_code'], 'String');
            }
            if (data.hasOwnProperty('response_text')) {
                obj['response_text'] = ApiClient.convertToType(data['response_text'], 'String');
            }
            if (data.hasOwnProperty('result')) {
                obj['result'] = ApiClient.convertToType(data['result'], 'String');
            }
            if (data.hasOwnProperty('scheme')) {
                obj['scheme'] = ApiClient.convertToType(data['scheme'], 'String');
            }
            if (data.hasOwnProperty('signature_required')) {
                obj['signature_required'] = ApiClient.convertToType(data['signature_required'], 'String');
            }
            if (data.hasOwnProperty('terminal_id')) {
                obj['terminal_id'] = ApiClient.convertToType(data['terminal_id'], 'String');
            }
            if (data.hasOwnProperty('total_amount')) {
                obj['total_amount'] = ApiClient.convertToType(data['total_amount'], 'Number');
            }
            if (data.hasOwnProperty('transaction_type')) {
                obj['transaction_type'] = ApiClient.convertToType(data['transaction_type'], 'String');
            }
            if (data.hasOwnProperty('verified_by_pin')) {
                obj['verified_by_pin'] = ApiClient.convertToType(data['verified_by_pin'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * additional data provided within the acquirer response
    * @member {String} additional_data
    */
    additional_data = undefined;
    /**
    * Value provided by online processing
    * @member {String} auxiliary_data
    */
    auxiliary_data = undefined;
    /**
    * The type of card used such as EMV
    * @member {String} card_type
    */
    card_type = undefined;
    /**
    * The date and time that the transaction was completed in ISO-8166 format
    * @member {String} completed_at
    */
    completed_at = undefined;
    /**
    * The date and time that the transaction was created in ISO-8166 format
    * @member {String} created_at
    */
    created_at = undefined;
    /**
    * The currency symbol used
    * @member {String} currency_symbol
    */
    currency_symbol = undefined;
    /**
    * Boolean value should the transaction be declined by the card
    * @member {Boolean} declined_by_card
    */
    declined_by_card = undefined;
    /**
    * Cryptogram used by the card in processing
    * @member {String} emv_app_cryptogram
    */
    emv_app_cryptogram = undefined;
    /**
    * Expiry date of the card
    * @member {String} emv_app_expiration_date
    */
    emv_app_expiration_date = undefined;
    /**
    * A transaction counter, incremented by the device resulting in a transaction number
    * @member {Number} emv_app_txn_counter
    */
    emv_app_txn_counter = undefined;
    /**
    * The amount authorised
    * @member {String} emv_authorized_amount
    */
    emv_authorized_amount = undefined;
    /**
    * Verification results within the processing scope
    * @member {String} emv_cardholder_verification_results
    */
    emv_cardholder_verification_results = undefined;
    /**
    * A country code returned by the device
    * @member {String} emv_country_code
    */
    emv_country_code = undefined;
    /**
    * Cryptogram info returned by the card
    * @member {String} emv_cryptogram_info_data
    */
    emv_cryptogram_info_data = undefined;
    /**
    * The application id (AID) identifying the card used
    * @member {String} emv_icc_appid
    */
    emv_icc_appid = undefined;
    /**
    * The interchange profile used
    * @member {String} emv_interchange_profile
    */
    emv_interchange_profile = undefined;
    /**
    * Application data provided by the issuer
    * @member {String} emv_issuer_app_data
    */
    emv_issuer_app_data = undefined;
    /**
    * Sequence number provided by the card
    * @member {String} emv_pan_seq_num
    */
    emv_pan_seq_num = undefined;
    /**
    * Terminal capabilities of the device
    * @member {String} emv_terminal_capabilities
    */
    emv_terminal_capabilities = undefined;
    /**
    * The terminal type of the device
    * @member {String} emv_terminal_type
    */
    emv_terminal_type = undefined;
    /**
    * TVR provided by the verification process of the transaction
    * @member {String} emv_terminal_verification_results
    */
    emv_terminal_verification_results = undefined;
    /**
    * A masked version of the card number
    * @member {String} emv_track2_equivalent
    */
    emv_track2_equivalent = undefined;
    /**
    * ISO currency code of the transaction
    * @member {String} emv_txn_currency_code
    */
    emv_txn_currency_code = undefined;
    /**
    * ISO date of the transaction
    * @member {String} emv_txn_date
    */
    emv_txn_date = undefined;
    /**
    * Status info of the transaction
    * @member {String} emv_txn_status_info
    */
    emv_txn_status_info = undefined;
    /**
    * Transacrtion type information returned
    * @member {String} emv_txn_type
    */
    emv_txn_type = undefined;
    /**
    * The UN or unpredicatble number in the transaction process
    * @member {String} emv_txn_unpredictable_number
    */
    emv_txn_unpredictable_number = undefined;
    /**
    * Determines if the card was a commercial card
    * @member {String} is_commercial_card
    */
    is_commercial_card = undefined;
    /**
    * Determines if the card was contactless
    * @member {String} is_contactless
    */
    is_contactless = undefined;
    /**
    * Determines if fallback was used
    * @member {String} is_fallback
    */
    is_fallback = undefined;
    /**
    * Determines if the transaction was authorised offline
    * @member {String} is_offline
    */
    is_offline = undefined;
    /**
    * Determines if the transaction was voided
    * @member {String} is_voided
    */
    is_voided = undefined;
    /**
    * A response code provided by the acquirer
    * @member {String} response_code
    */
    response_code = undefined;
    /**
    * The response text returned by the acquirer
    * @member {String} response_text
    */
    response_text = undefined;
    /**
    * A text result of the transaction
    * @member {String} result
    */
    result = undefined;
    /**
    * A description of the card scheme for the card
    * @member {String} scheme
    */
    scheme = undefined;
    /**
    * Determines whether a signature was required for legacy systems
    * @member {String} signature_required
    */
    signature_required = undefined;
    /**
    * The terminal id used from the device
    * @member {String} terminal_id
    */
    terminal_id = undefined;
    /**
    * The total amount processed
    * @member {Number} total_amount
    */
    total_amount = undefined;
    /**
    * The type of transaction processed
    * @member {String} transaction_type
    */
    transaction_type = undefined;
    /**
    * Determines if the transaction was verified by pin entry
    * @member {Boolean} verified_by_pin
    */
    verified_by_pin = undefined;








}

