"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorModel = void 0;

var _ApiClient = require("../ApiClient");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ErrorModel model module.
 * @module model/ErrorModel
 * @version 1.0.0
 */
var ErrorModel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ErrorModel</code>.
   * An error description
   * @alias module:model/ErrorModel
   * @class
   */
  function ErrorModel() {
    _classCallCheck(this, ErrorModel);
  }
  /**
   * Constructs a <code>ErrorModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ErrorModel} obj Optional instance to populate.
   * @return {module:model/ErrorModel} The populated <code>ErrorModel</code> instance.
   */


  _createClass(ErrorModel, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ErrorModel();
        if (data.hasOwnProperty('code')) obj.code = _ApiClient.ApiClient.convertToType(data['code'], 'Number');
        if (data.hasOwnProperty('message')) obj.message = _ApiClient.ApiClient.convertToType(data['message'], 'String');
      }

      return obj;
    }
  }]);

  return ErrorModel;
}();
/**
 * The HTTP-error number
 * @member {Number} code
 */


exports.ErrorModel = ErrorModel;
ErrorModel.prototype.code = undefined;
/**
 * A textual description of the error occured.
 * @member {String} message
 */

ErrorModel.prototype.message = undefined;