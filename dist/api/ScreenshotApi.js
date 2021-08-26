"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScreenshotApi = void 0;

var _ApiClient = require("../ApiClient");

var _ErrorModel = require("../model/ErrorModel");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Screenshot service.
* @module api/ScreenshotApi
* @version 1.0.0
*/
var ScreenshotApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ScreenshotApi. 
  * @alias module:api/ScreenshotApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instanc
  e} if unspecified.
  */
  function ScreenshotApi(apiClient) {
    _classCallCheck(this, ScreenshotApi);

    this.apiClient = apiClient || _ApiClient.ApiClient.instance;
  }
  /**
   * Callback function to receive the result of the captureScreenshotAuthenticated operation.
   * @callback moduleapi/ScreenshotApi~captureScreenshotAuthenticatedCallback
   * @param {String} error Error message, if any.
   * @param {'Blob'{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Webseite-Herunterladen.de Screenshot Capture is a very simple but powerful screenshot API that anyone can easily use to create pixel-perfect website screenshots. It always uses a recent version of Chrome to ensure that all modern web features are fully supported and rendering is exactly as your customers would expect.
   * @param {String} token A valid token is needed to make paid API calls. Tokens can be managed from your account.
   * @param {String} hash The hash value is for authenticated requests. If you want to publish this URL, you should use the authenticated requests.
   * @param {String} url The URL of the website you want to capture. Please include the protocol (http:// or https://).
   * @param {Object} opts Optional parameters
   * @param {module:model/String} opts.fileType The image file format of the captured screenshot. Either png, jpeg or PDF with 72 dpi.
   * @param {Number} opts.ttl Number of seconds the capture file is cached by our CDN. An API request that is loaded through the cache does not count as a paid request. You can set a number of seconds from 0 seconds up to 2592000 seconds. This is a maximum of 30 days.
   * @param {Boolean} opts.invalidate Force the API to invalidate the cache and capture a new screenshot. This call costs you additional money, because a call of a cache hit is not charged.
   * @param {Boolean} opts.full Set this parameter to true if you want to screenshot the whole web page in full size.
   * @param {Boolean} opts.lazyloadScroll Set this parameter to true to scroll down through the entire page before taking a screenshot. This is useful for triggering animations or lazy load elements in full screen. (default to <.>)
   * @param {Number} opts.delay The delay in milliseconds to wait after the page loads before taking the screenshot. This is in milliseconds. One second is 1000 milliseconds. From 0 milliseconds to a maximum of 10,000 milliseconds.
   * @param {Number} opts.width The width, in pixels, of the browser viewport to use. (default to <.>)
   * @param {Number} opts.height The height, in pixels, of the browser viewport to use. Ignored if you set full to true. (default to <.>)
   * @param {Number} opts.quality The quality of the image between 0 and 100. This works only for the jpeg format, for PNG images the parameter is applied only during compression. (default to <.>)
   * @param {Number} opts.scale The scale factor of the device to use when taking the screenshot. For example, a scale factor of 2 produces a high-resolution screenshot suitable for viewing on Retina devices. The larger the scale factor, the larger the screenshot produced. (default to <.>)
   * @param {Number} opts.x The starting point of a section screenshot on the X axis. (default to <.>)
   * @param {Number} opts.y The starting point of a section screenshot on the Y axis. (default to <.>)
   * @param {Boolean} opts.redirect If you set Redirect, the response will be a 302 redirect to the screenshot file in our CDN. (default to <.>)
   * @param {String} opts.language Sets the Accept-Language header on requests to the target URL so that you can take screenshots from a website with a specific language.
   * @param {Boolean} opts.randomUserAgent Sets a random user agent header to emulate a different devices when taking screenshots. (default to <.>)
   * @param {String} opts.userAgent Sets the user agent header to emulate a specific device when taking screenshots.
   * @param {String} opts.headers A semicolon-separated list of header parameters to be used when capturing the screenshot. Each header should be passed as a key-value pair and multiple pairs should be separated by a semicolon.
   * @param {String} opts.cookies A semicolon-separated list of cookies to be used when capturing the screenshot. Each cookies should be passed as a key-value pair and multiple pairs should be separated by a semicolon.
   * @param {String} opts.css Inject your custom CSS.
   * @param {String} opts.js Inject your custom Javascript.
   * @param {String} opts.wait Wait until the specified CSS selector matches an element present in the page before taking a screenshot. The process is canceled after 60 seconds.
   * @param {String} opts.element Takes a screenshot of the first element matched by the specified CSS selector. This is ignored if full is true. (This option cannot be used with the PDF export format.)
   * @param {String} opts.timezone The IANA time zone identifier used for this capture. (default to <.>)
   * @param {module:model/String} opts.device The device used in the emulation.
   * @param {Number} opts.latitude The latitude used in the emulation of the geo-location. (default to <.>)
   * @param {Number} opts.longitude The longitude used in the emulation of the geo-location. (default to <.>)
   * @param {Number} opts.accuracy The accuracy in meters used in the emulation of the geo-location. (default to <.>)
   * @param {String} opts.proxy Use an address of a proxy server through which the screenshot should be taken. The proxy address should be formatted as http://username:password@proxyserver.com:31280
   * @param {Boolean} opts.adblock Prevent ads from being displayed. Block requests from popular ad networks and hide frequent ads. (default to <.>)
   * @param {Boolean} opts.hideCookieBanners Prevent cookie banners and pop-ups from being displayed. The best possible result is tried. (default to <.>)
   * @param {module:api/ScreenshotApi~captureScreenshotAuthenticatedCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */


  _createClass(ScreenshotApi, [{
    key: "captureScreenshotAuthenticated",
    value: function captureScreenshotAuthenticated(token, hash, url, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'token' is set

      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling captureScreenshotAuthenticated");
      } // verify the required parameter 'hash' is set


      if (hash === undefined || hash === null) {
        throw new Error("Missing the required parameter 'hash' when calling captureScreenshotAuthenticated");
      } // verify the required parameter 'url' is set


      if (url === undefined || url === null) {
        throw new Error("Missing the required parameter 'url' when calling captureScreenshotAuthenticated");
      }

      var pathParams = {
        'token': token,
        'hash': hash
      };
      var queryParams = {
        'url': url,
        'fileType': opts['fileType'],
        'ttl': opts['ttl'],
        'invalidate': opts['invalidate'],
        'full': opts['full'],
        'lazyload_scroll': opts['lazyloadScroll'],
        'delay': opts['delay'],
        'width': opts['width'],
        'height': opts['height'],
        'quality': opts['quality'],
        'scale': opts['scale'],
        'x': opts['x'],
        'y': opts['y'],
        'redirect': opts['redirect'],
        'language': opts['language'],
        'random_user_agent': opts['randomUserAgent'],
        'user_agent': opts['userAgent'],
        'headers': opts['headers'],
        'cookies': opts['cookies'],
        'css': opts['css'],
        'js': opts['js'],
        'wait': opts['wait'],
        'element': opts['element'],
        'timezone': opts['timezone'],
        'device': opts['device'],
        'latitude': opts['latitude'],
        'longitude': opts['longitude'],
        'accuracy': opts['accuracy'],
        'proxy': opts['proxy'],
        'adblock': opts['adblock'],
        'hide_cookie_banners': opts['hideCookieBanners']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'application/pdf', 'image/jpeg', 'image/png'];
      var returnType = 'Blob';
      return this.apiClient.callApi('/capture/{token}/{hash}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the captureScreenshotUnauthenticated operation.
     * @callback moduleapi/ScreenshotApi~captureScreenshotUnauthenticatedCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Webseite-Herunterladen.de Screenshot Capture is a very simple but powerful screenshot API that anyone can easily use to create pixel-perfect website screenshots. It always uses a recent version of Chrome to ensure that all modern web features are fully supported and rendering is exactly as your customers would expect.
     * @param {String} token A valid token is needed to make paid API calls. Tokens can be managed from your account.
     * @param {String} url The URL of the website you want to capture. Please include the protocol (http:// or https://).
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.fileType The image file format of the captured screenshot. Either png, jpeg or PDF with 72 dpi.
     * @param {Number} opts.ttl Number of seconds the capture file is cached by our CDN. An API request that is loaded through the cache does not count as a paid request. You can set a number of seconds from 0 seconds up to 2592000 seconds. This is a maximum of 30 days.
     * @param {Boolean} opts.invalidate Force the API to invalidate the cache and capture a new screenshot. This call costs you additional money, because a call of a cache hit is not charged.
     * @param {Boolean} opts.full Set this parameter to true if you want to screenshot the whole web page in full size.
     * @param {Boolean} opts.lazyloadScroll Set this parameter to true to scroll down through the entire page before taking a screenshot. This is useful for triggering animations or lazy load elements in full screen. (default to <.>)
     * @param {Number} opts.delay The delay in milliseconds to wait after the page loads before taking the screenshot. This is in milliseconds. One second is 1000 milliseconds. From 0 milliseconds to a maximum of 10,000 milliseconds.
     * @param {Number} opts.width The width, in pixels, of the browser viewport to use. (default to <.>)
     * @param {Number} opts.height The height, in pixels, of the browser viewport to use. Ignored if you set full to true. (default to <.>)
     * @param {Number} opts.quality The quality of the image between 0 and 100. This works only for the jpeg format, for PNG images the parameter is applied only during compression. (default to <.>)
     * @param {Number} opts.scale The scale factor of the device to use when taking the screenshot. For example, a scale factor of 2 produces a high-resolution screenshot suitable for viewing on Retina devices. The larger the scale factor, the larger the screenshot produced. (default to <.>)
     * @param {Number} opts.x The starting point of a section screenshot on the X axis. (default to <.>)
     * @param {Number} opts.y The starting point of a section screenshot on the Y axis. (default to <.>)
     * @param {Boolean} opts.redirect If you set Redirect, the response will be a 302 redirect to the screenshot file in our CDN. (default to <.>)
     * @param {String} opts.language Sets the Accept-Language header on requests to the target URL so that you can take screenshots from a website with a specific language.
     * @param {Boolean} opts.randomUserAgent Sets a random user agent header to emulate a different devices when taking screenshots. (default to <.>)
     * @param {String} opts.userAgent Sets the user agent header to emulate a specific device when taking screenshots.
     * @param {String} opts.headers A semicolon-separated list of header parameters to be used when capturing the screenshot. Each header should be passed as a key-value pair and multiple pairs should be separated by a semicolon.
     * @param {String} opts.cookies A semicolon-separated list of cookies to be used when capturing the screenshot. Each cookies should be passed as a key-value pair and multiple pairs should be separated by a semicolon.
     * @param {String} opts.css Inject your custom CSS.
     * @param {String} opts.js Inject your custom Javascript.
     * @param {String} opts.wait Wait until the specified CSS selector matches an element present in the page before taking a screenshot. The process is canceled after 60 seconds.
     * @param {String} opts.element Takes a screenshot of the first element matched by the specified CSS selector. This is ignored if full is true. (This option cannot be used with the PDF export format.)
     * @param {String} opts.timezone The IANA time zone identifier used for this capture. (default to <.>)
     * @param {module:model/String} opts.device The device used in the emulation.
     * @param {Number} opts.latitude The latitude used in the emulation of the geo-location. (default to <.>)
     * @param {Number} opts.longitude The longitude used in the emulation of the geo-location. (default to <.>)
     * @param {Number} opts.accuracy The accuracy in meters used in the emulation of the geo-location. (default to <.>)
     * @param {String} opts.proxy Use an address of a proxy server through which the screenshot should be taken. The proxy address should be formatted as http://username:password@proxyserver.com:31280
     * @param {Boolean} opts.adblock Prevent ads from being displayed. Block requests from popular ad networks and hide frequent ads. (default to <.>)
     * @param {Boolean} opts.hideCookieBanners Prevent cookie banners and pop-ups from being displayed. The best possible result is tried. (default to <.>)
     * @param {module:api/ScreenshotApi~captureScreenshotUnauthenticatedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */

  }, {
    key: "captureScreenshotUnauthenticated",
    value: function captureScreenshotUnauthenticated(token, url, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'token' is set

      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling captureScreenshotUnauthenticated");
      } // verify the required parameter 'url' is set


      if (url === undefined || url === null) {
        throw new Error("Missing the required parameter 'url' when calling captureScreenshotUnauthenticated");
      }

      var pathParams = {
        'token': token
      };
      var queryParams = {
        'url': url,
        'fileType': opts['fileType'],
        'ttl': opts['ttl'],
        'invalidate': opts['invalidate'],
        'full': opts['full'],
        'lazyload_scroll': opts['lazyloadScroll'],
        'delay': opts['delay'],
        'width': opts['width'],
        'height': opts['height'],
        'quality': opts['quality'],
        'scale': opts['scale'],
        'x': opts['x'],
        'y': opts['y'],
        'redirect': opts['redirect'],
        'language': opts['language'],
        'random_user_agent': opts['randomUserAgent'],
        'user_agent': opts['userAgent'],
        'headers': opts['headers'],
        'cookies': opts['cookies'],
        'css': opts['css'],
        'js': opts['js'],
        'wait': opts['wait'],
        'element': opts['element'],
        'timezone': opts['timezone'],
        'device': opts['device'],
        'latitude': opts['latitude'],
        'longitude': opts['longitude'],
        'accuracy': opts['accuracy'],
        'proxy': opts['proxy'],
        'adblock': opts['adblock'],
        'hide_cookie_banners': opts['hideCookieBanners']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'application/pdf', 'image/jpeg', 'image/png'];
      var returnType = 'Blob';
      return this.apiClient.callApi('/capture/{token}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);

  return ScreenshotApi;
}();

exports.ScreenshotApi = ScreenshotApi;