# webseite_herunterladen_de_screenshot_capture_api

WebseiteHerunterladenDeScreenshotCaptureApi - JavaScript client for webseite_herunterladen_de_screenshot_capture_api
Webseite-Herunterladen.de Screenshot Capture is a very simple but powerful screenshot API that anyone can easily use to create pixel-perfect website screenshots. It always uses a recent version of Chrome to ensure that all modern web features are fully supported and rendering is exactly as your customers would expect.
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install webseite_herunterladen_de_screenshot_capture_api --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your webseite_herunterladen_de_screenshot_capture_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
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
var WebseiteHerunterladenDeScreenshotCaptureApi = require('webseite_herunterladen_de_screenshot_capture_api');

var defaultClient = WebseiteHerunterladenDeScreenshotCaptureApi.ApiClient.instance;
// Configure API key authorization: APIKeyHeader
var APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//APIKeyHeader.apiKeyPrefix['X-API-Key'] = "Token"

var api = new WebseiteHerunterladenDeScreenshotCaptureApi.ScreenshotApi()
var token = "token_example"; // {String} A valid token is needed to make paid API calls. Tokens can be managed from your account.
var hash = "hash_example"; // {String} The hash value is for authenticated requests. If you want to publish this URL, you should use the authenticated requests.
var url = "url_example"; // {String} The URL of the website you want to capture. Please include the protocol (http:// or https://).
var opts = {
  'fileType': "fileType_example", // {String} The image file format of the captured screenshot. Either png, jpeg or PDF with 72 dpi.
  'ttl': 789, // {Number} Number of seconds the capture file is cached by our CDN. An API request that is loaded through the cache does not count as a paid request. You can set a number of seconds from 0 seconds up to 2592000 seconds. This is a maximum of 30 days.
  'invalidate': true, // {Boolean} Force the API to invalidate the cache and capture a new screenshot. This call costs you additional money, because a call of a cache hit is not charged.
  'full': true, // {Boolean} Set this parameter to true if you want to screenshot the whole web page in full size.
  'lazyloadScroll': false, // {Boolean} Set this parameter to true to scroll down through the entire page before taking a screenshot. This is useful for triggering animations or lazy load elements in full screen.
  'delay': 789, // {Number} The delay in milliseconds to wait after the page loads before taking the screenshot. This is in milliseconds. One second is 1000 milliseconds. From 0 milliseconds to a maximum of 10,000 milliseconds.
  'width': 1920, // {Number} The width, in pixels, of the browser viewport to use.
  'height': 1080, // {Number} The height, in pixels, of the browser viewport to use. Ignored if you set full to true.
  'quality': 90, // {Number} The quality of the image between 0 and 100. This works only for the jpeg format, for PNG images the parameter is applied only during compression.
  'scale': 1.0, // {Number} The scale factor of the device to use when taking the screenshot. For example, a scale factor of 2 produces a high-resolution screenshot suitable for viewing on Retina devices. The larger the scale factor, the larger the screenshot produced.
  'x': 0, // {Number} The starting point of a section screenshot on the X axis.
  'y': 0, // {Number} The starting point of a section screenshot on the Y axis.
  'redirect': false, // {Boolean} If you set Redirect, the response will be a 302 redirect to the screenshot file in our CDN.
  'language': "language_example", // {String} Sets the Accept-Language header on requests to the target URL so that you can take screenshots from a website with a specific language.
  'randomUserAgent': false, // {Boolean} Sets a random user agent header to emulate a different devices when taking screenshots.
  'userAgent': "userAgent_example", // {String} Sets the user agent header to emulate a specific device when taking screenshots.
  'headers': "headers_example", // {String} A semicolon-separated list of header parameters to be used when capturing the screenshot. Each header should be passed as a key-value pair and multiple pairs should be separated by a semicolon.
  'cookies': "cookies_example", // {String} A semicolon-separated list of cookies to be used when capturing the screenshot. Each cookies should be passed as a key-value pair and multiple pairs should be separated by a semicolon.
  'css': "css_example", // {String} Inject your custom CSS.
  'js': "js_example", // {String} Inject your custom Javascript.
  'wait': "wait_example", // {String} Wait until the specified CSS selector matches an element present in the page before taking a screenshot. The process is canceled after 60 seconds.
  'element': "element_example", // {String} Takes a screenshot of the first element matched by the specified CSS selector. This is ignored if full is true. (This option cannot be used with the PDF export format.)
  'timezone': "'Europe/Berlin'", // {String} The IANA time zone identifier used for this capture.
  'device': "device_example", // {String} The device used in the emulation.
  'latitude': 0.0, // {Number} The latitude used in the emulation of the geo-location.
  'longitude': 0.0, // {Number} The longitude used in the emulation of the geo-location.
  'accuracy': 2.0, // {Number} The accuracy in meters used in the emulation of the geo-location.
  'proxy': "proxy_example", // {String} Use an address of a proxy server through which the screenshot should be taken. The proxy address should be formatted as http://username:password@proxyserver.com:31280
  'adblock': false, // {Boolean} Prevent ads from being displayed. Block requests from popular ad networks and hide frequent ads.
  'hideCookieBanners': false // {Boolean} Prevent cookie banners and pop-ups from being displayed. The best possible result is tried.
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.placeScreenshotOrderAuthenticated(token, hash, url, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://dev-api.webseite-herunterladen.de/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*WebseiteHerunterladenDeScreenshotCaptureApi.ScreenshotApi* | [**placeScreenshotOrderAuthenticated**](docs/ScreenshotApi.md#placeScreenshotOrderAuthenticated) | **GET** /capture/{token}/{hash} | 
*WebseiteHerunterladenDeScreenshotCaptureApi.ScreenshotApi* | [**placeScreenshotOrderUnauthenticated**](docs/ScreenshotApi.md#placeScreenshotOrderUnauthenticated) | **GET** /capture/{token} | 


## Documentation for Models

 - [WebseiteHerunterladenDeScreenshotCaptureApi.ErrorModel](docs/ErrorModel.md)


## Documentation for Authorization



### APIKeyHeader


- **Type**: API key
- **API key parameter name**: X-API-Key
- **Location**: HTTP header

