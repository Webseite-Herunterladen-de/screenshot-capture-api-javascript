# ScreenshotCaptureApi.ScreenshotApi

All URIs are relative to *https://api.webseite-herunterladen.de/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**captureScreenshotAuthenticated**](ScreenshotApi.md#captureScreenshotAuthenticated) | **GET** /capture/{token}/{hash} | 
[**captureScreenshotUnauthenticated**](ScreenshotApi.md#captureScreenshotUnauthenticated) | **GET** /capture/{token} | 

<a name="captureScreenshotAuthenticated"></a>
# **captureScreenshotAuthenticated**
> &#x27;Blob&#x27; captureScreenshotAuthenticated(token, hash, url, opts)



Webseite-Herunterladen.de Screenshot Capture is a very simple but powerful screenshot API that anyone can easily use to create pixel-perfect website screenshots. It always uses a recent version of Chrome to ensure that all modern web features are fully supported and rendering is exactly as your customers would expect.

### Example
```javascript
import {ScreenshotCaptureApi} from 'screenshot_capture_api';

let apiInstance = new ScreenshotCaptureApi.ScreenshotApi();
let token = "token_example"; // String | A valid token is needed to make paid API calls. Tokens can be managed from your account.
let hash = "hash_example"; // String | The hash value is for authenticated requests. If you want to publish this URL, you should use the authenticated requests.
let url = "url_example"; // String | The URL of the website you want to capture. Please include the protocol (http:// or https://).
let opts = { 
  'fileType': "fileType_example", // String | The image file format of the captured screenshot. Either png, jpeg, webp or PDF with 72 dpi.
  'ttl': 789, // Number | Number of seconds the capture file is cached by our CDN. An API request that is loaded through the cache does not count as a paid request. You can set a number of seconds from 0 seconds up to 2592000 seconds. This is a maximum of 30 days.
  'invalidate': true, // Boolean | Force the API to invalidate the cache and capture a new screenshot. This call costs you additional money, because a call of a cache hit is not charged.
  'full': true, // Boolean | Set this parameter to true if you want to screenshot the whole web page in full size.
  'lazyloadScroll': false, // Boolean | Set this parameter to true to scroll down through the entire page before taking a screenshot. This is useful for triggering animations or lazy load elements in full screen.
  'delay': 789, // Number | The delay in milliseconds to wait after the page loads before taking the screenshot. This is in milliseconds. One second is 1000 milliseconds. From 0 milliseconds to a maximum of 10,000 milliseconds.
  'width': 1920, // Number | The width, in pixels, of the browser viewport to use.
  'height': 1080, // Number | The height, in pixels, of the browser viewport to use. Ignored if you set full to true.
  'quality': 90, // Number | The quality of the image between 0 and 100. This works only for the jpeg format, for PNG images the parameter is applied only during compression.
  'scale': 1.0, // Number | The scale factor of the device to use when taking the screenshot. For example, a scale factor of 2 produces a high-resolution screenshot suitable for viewing on Retina devices. The larger the scale factor, the larger the screenshot produced.
  'x': 0, // Number | The starting point of a section screenshot on the X axis.
  'y': 0, // Number | The starting point of a section screenshot on the Y axis.
  'redirect': false, // Boolean | If you set Redirect, the response will be a 302 redirect to the screenshot file in our CDN.
  'language': "language_example", // String | Sets the Accept-Language header on requests to the target URL so that you can take screenshots from a website with a specific language.
  'randomUserAgent': false, // Boolean | Sets a random user agent header to emulate a different devices when taking screenshots.
  'userAgent': "userAgent_example", // String | Sets the user agent header to emulate a specific device when taking screenshots.
  'headers': "headers_example", // String | A semicolon-separated list of header parameters to be used when capturing the screenshot. Each header should be passed as a key-value pair and multiple pairs should be separated by a semicolon.
  'cookies': "cookies_example", // String | A semicolon-separated list of cookies to be used when capturing the screenshot. Each cookies should be passed as a key-value pair and multiple pairs should be separated by a semicolon.
  'css': "css_example", // String | Inject your custom CSS.
  'js': "js_example", // String | Inject your custom Javascript.
  'wait': "wait_example", // String | Wait until the specified CSS selector matches an element present in the page before taking a screenshot. The process is canceled after 60 seconds.
  'element': "element_example", // String | Takes a screenshot of the first element matched by the specified CSS selector. This is ignored if full is true. (This option cannot be used with the PDF export format.)
  'timezone': "Europe/Berlin", // String | The IANA time zone identifier used for this capture.
  'device': "device_example", // String | The device used in the emulation.
  'latitude': 0.0, // Number | The latitude used in the emulation of the geo-location.
  'longitude': 0.0, // Number | The longitude used in the emulation of the geo-location.
  'accuracy': 2.0, // Number | The accuracy in meters used in the emulation of the geo-location.
  'proxy': "proxy_example", // String | Use an address of a proxy server through which the screenshot should be taken. The proxy address should be formatted as http://username:password@proxyserver.com:31280
  'adblock': false, // Boolean | Prevent ads from being displayed. Block requests from popular ad networks and hide frequent ads.
  'hideCookieBanners': false // Boolean | Prevent cookie banners and pop-ups from being displayed. The best possible result is tried.
};
apiInstance.captureScreenshotAuthenticated(token, hash, url, opts, (error, data, response) => {
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
 **token** | **String**| A valid token is needed to make paid API calls. Tokens can be managed from your account. | 
 **hash** | **String**| The hash value is for authenticated requests. If you want to publish this URL, you should use the authenticated requests. | 
 **url** | **String**| The URL of the website you want to capture. Please include the protocol (http:// or https://). | 
 **fileType** | **String**| The image file format of the captured screenshot. Either png, jpeg, webp or PDF with 72 dpi. | [optional] 
 **ttl** | **Number**| Number of seconds the capture file is cached by our CDN. An API request that is loaded through the cache does not count as a paid request. You can set a number of seconds from 0 seconds up to 2592000 seconds. This is a maximum of 30 days. | [optional] 
 **invalidate** | **Boolean**| Force the API to invalidate the cache and capture a new screenshot. This call costs you additional money, because a call of a cache hit is not charged. | [optional] 
 **full** | **Boolean**| Set this parameter to true if you want to screenshot the whole web page in full size. | [optional] 
 **lazyloadScroll** | **Boolean**| Set this parameter to true to scroll down through the entire page before taking a screenshot. This is useful for triggering animations or lazy load elements in full screen. | [optional] [default to false]
 **delay** | **Number**| The delay in milliseconds to wait after the page loads before taking the screenshot. This is in milliseconds. One second is 1000 milliseconds. From 0 milliseconds to a maximum of 10,000 milliseconds. | [optional] 
 **width** | **Number**| The width, in pixels, of the browser viewport to use. | [optional] [default to 1920]
 **height** | **Number**| The height, in pixels, of the browser viewport to use. Ignored if you set full to true. | [optional] [default to 1080]
 **quality** | **Number**| The quality of the image between 0 and 100. This works only for the jpeg format, for PNG images the parameter is applied only during compression. | [optional] [default to 90]
 **scale** | **Number**| The scale factor of the device to use when taking the screenshot. For example, a scale factor of 2 produces a high-resolution screenshot suitable for viewing on Retina devices. The larger the scale factor, the larger the screenshot produced. | [optional] [default to 1.0]
 **x** | **Number**| The starting point of a section screenshot on the X axis. | [optional] [default to 0]
 **y** | **Number**| The starting point of a section screenshot on the Y axis. | [optional] [default to 0]
 **redirect** | **Boolean**| If you set Redirect, the response will be a 302 redirect to the screenshot file in our CDN. | [optional] [default to false]
 **language** | **String**| Sets the Accept-Language header on requests to the target URL so that you can take screenshots from a website with a specific language. | [optional] 
 **randomUserAgent** | **Boolean**| Sets a random user agent header to emulate a different devices when taking screenshots. | [optional] [default to false]
 **userAgent** | **String**| Sets the user agent header to emulate a specific device when taking screenshots. | [optional] 
 **headers** | **String**| A semicolon-separated list of header parameters to be used when capturing the screenshot. Each header should be passed as a key-value pair and multiple pairs should be separated by a semicolon. | [optional] 
 **cookies** | **String**| A semicolon-separated list of cookies to be used when capturing the screenshot. Each cookies should be passed as a key-value pair and multiple pairs should be separated by a semicolon. | [optional] 
 **css** | **String**| Inject your custom CSS. | [optional] 
 **js** | **String**| Inject your custom Javascript. | [optional] 
 **wait** | **String**| Wait until the specified CSS selector matches an element present in the page before taking a screenshot. The process is canceled after 60 seconds. | [optional] 
 **element** | **String**| Takes a screenshot of the first element matched by the specified CSS selector. This is ignored if full is true. (This option cannot be used with the PDF export format.) | [optional] 
 **timezone** | **String**| The IANA time zone identifier used for this capture. | [optional] [default to Europe/Berlin]
 **device** | **String**| The device used in the emulation. | [optional] 
 **latitude** | **Number**| The latitude used in the emulation of the geo-location. | [optional] [default to 0.0]
 **longitude** | **Number**| The longitude used in the emulation of the geo-location. | [optional] [default to 0.0]
 **accuracy** | **Number**| The accuracy in meters used in the emulation of the geo-location. | [optional] [default to 2.0]
 **proxy** | **String**| Use an address of a proxy server through which the screenshot should be taken. The proxy address should be formatted as http://username:password@proxyserver.com:31280 | [optional] 
 **adblock** | **Boolean**| Prevent ads from being displayed. Block requests from popular ad networks and hide frequent ads. | [optional] [default to false]
 **hideCookieBanners** | **Boolean**| Prevent cookie banners and pop-ups from being displayed. The best possible result is tried. | [optional] [default to false]

### Return type

**&#x27;Blob&#x27;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/pdf, image/jpeg, image/png, image/webp

<a name="captureScreenshotUnauthenticated"></a>
# **captureScreenshotUnauthenticated**
> &#x27;Blob&#x27; captureScreenshotUnauthenticated(token, url, opts)



Webseite-Herunterladen.de Screenshot Capture is a very simple but powerful screenshot API that anyone can easily use to create pixel-perfect website screenshots. It always uses a recent version of Chrome to ensure that all modern web features are fully supported and rendering is exactly as your customers would expect.

### Example
```javascript
import {ScreenshotCaptureApi} from 'screenshot_capture_api';

let apiInstance = new ScreenshotCaptureApi.ScreenshotApi();
let token = "token_example"; // String | A valid token is needed to make paid API calls. Tokens can be managed from your account.
let url = "url_example"; // String | The URL of the website you want to capture. Please include the protocol (http:// or https://).
let opts = { 
  'fileType': "fileType_example", // String | The image file format of the captured screenshot. Either png, jpeg, webp or PDF with 72 dpi.
  'ttl': 789, // Number | Number of seconds the capture file is cached by our CDN. An API request that is loaded through the cache does not count as a paid request. You can set a number of seconds from 0 seconds up to 2592000 seconds. This is a maximum of 30 days.
  'invalidate': true, // Boolean | Force the API to invalidate the cache and capture a new screenshot. This call costs you additional money, because a call of a cache hit is not charged.
  'full': true, // Boolean | Set this parameter to true if you want to screenshot the whole web page in full size.
  'lazyloadScroll': false, // Boolean | Set this parameter to true to scroll down through the entire page before taking a screenshot. This is useful for triggering animations or lazy load elements in full screen.
  'delay': 789, // Number | The delay in milliseconds to wait after the page loads before taking the screenshot. This is in milliseconds. One second is 1000 milliseconds. From 0 milliseconds to a maximum of 10,000 milliseconds.
  'width': 1920, // Number | The width, in pixels, of the browser viewport to use.
  'height': 1080, // Number | The height, in pixels, of the browser viewport to use. Ignored if you set full to true.
  'quality': 90, // Number | The quality of the image between 0 and 100. This works only for the jpeg format, for PNG images the parameter is applied only during compression.
  'scale': 1.0, // Number | The scale factor of the device to use when taking the screenshot. For example, a scale factor of 2 produces a high-resolution screenshot suitable for viewing on Retina devices. The larger the scale factor, the larger the screenshot produced.
  'x': 0, // Number | The starting point of a section screenshot on the X axis.
  'y': 0, // Number | The starting point of a section screenshot on the Y axis.
  'redirect': false, // Boolean | If you set Redirect, the response will be a 302 redirect to the screenshot file in our CDN.
  'language': "language_example", // String | Sets the Accept-Language header on requests to the target URL so that you can take screenshots from a website with a specific language.
  'randomUserAgent': false, // Boolean | Sets a random user agent header to emulate a different devices when taking screenshots.
  'userAgent': "userAgent_example", // String | Sets the user agent header to emulate a specific device when taking screenshots.
  'headers': "headers_example", // String | A semicolon-separated list of header parameters to be used when capturing the screenshot. Each header should be passed as a key-value pair and multiple pairs should be separated by a semicolon.
  'cookies': "cookies_example", // String | A semicolon-separated list of cookies to be used when capturing the screenshot. Each cookies should be passed as a key-value pair and multiple pairs should be separated by a semicolon.
  'css': "css_example", // String | Inject your custom CSS.
  'js': "js_example", // String | Inject your custom Javascript.
  'wait': "wait_example", // String | Wait until the specified CSS selector matches an element present in the page before taking a screenshot. The process is canceled after 60 seconds.
  'element': "element_example", // String | Takes a screenshot of the first element matched by the specified CSS selector. This is ignored if full is true. (This option cannot be used with the PDF export format.)
  'timezone': "Europe/Berlin", // String | The IANA time zone identifier used for this capture.
  'device': "device_example", // String | The device used in the emulation.
  'latitude': 0.0, // Number | The latitude used in the emulation of the geo-location.
  'longitude': 0.0, // Number | The longitude used in the emulation of the geo-location.
  'accuracy': 2.0, // Number | The accuracy in meters used in the emulation of the geo-location.
  'proxy': "proxy_example", // String | Use an address of a proxy server through which the screenshot should be taken. The proxy address should be formatted as http://username:password@proxyserver.com:31280
  'adblock': false, // Boolean | Prevent ads from being displayed. Block requests from popular ad networks and hide frequent ads.
  'hideCookieBanners': false // Boolean | Prevent cookie banners and pop-ups from being displayed. The best possible result is tried.
};
apiInstance.captureScreenshotUnauthenticated(token, url, opts, (error, data, response) => {
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
 **token** | **String**| A valid token is needed to make paid API calls. Tokens can be managed from your account. | 
 **url** | **String**| The URL of the website you want to capture. Please include the protocol (http:// or https://). | 
 **fileType** | **String**| The image file format of the captured screenshot. Either png, jpeg, webp or PDF with 72 dpi. | [optional] 
 **ttl** | **Number**| Number of seconds the capture file is cached by our CDN. An API request that is loaded through the cache does not count as a paid request. You can set a number of seconds from 0 seconds up to 2592000 seconds. This is a maximum of 30 days. | [optional] 
 **invalidate** | **Boolean**| Force the API to invalidate the cache and capture a new screenshot. This call costs you additional money, because a call of a cache hit is not charged. | [optional] 
 **full** | **Boolean**| Set this parameter to true if you want to screenshot the whole web page in full size. | [optional] 
 **lazyloadScroll** | **Boolean**| Set this parameter to true to scroll down through the entire page before taking a screenshot. This is useful for triggering animations or lazy load elements in full screen. | [optional] [default to false]
 **delay** | **Number**| The delay in milliseconds to wait after the page loads before taking the screenshot. This is in milliseconds. One second is 1000 milliseconds. From 0 milliseconds to a maximum of 10,000 milliseconds. | [optional] 
 **width** | **Number**| The width, in pixels, of the browser viewport to use. | [optional] [default to 1920]
 **height** | **Number**| The height, in pixels, of the browser viewport to use. Ignored if you set full to true. | [optional] [default to 1080]
 **quality** | **Number**| The quality of the image between 0 and 100. This works only for the jpeg format, for PNG images the parameter is applied only during compression. | [optional] [default to 90]
 **scale** | **Number**| The scale factor of the device to use when taking the screenshot. For example, a scale factor of 2 produces a high-resolution screenshot suitable for viewing on Retina devices. The larger the scale factor, the larger the screenshot produced. | [optional] [default to 1.0]
 **x** | **Number**| The starting point of a section screenshot on the X axis. | [optional] [default to 0]
 **y** | **Number**| The starting point of a section screenshot on the Y axis. | [optional] [default to 0]
 **redirect** | **Boolean**| If you set Redirect, the response will be a 302 redirect to the screenshot file in our CDN. | [optional] [default to false]
 **language** | **String**| Sets the Accept-Language header on requests to the target URL so that you can take screenshots from a website with a specific language. | [optional] 
 **randomUserAgent** | **Boolean**| Sets a random user agent header to emulate a different devices when taking screenshots. | [optional] [default to false]
 **userAgent** | **String**| Sets the user agent header to emulate a specific device when taking screenshots. | [optional] 
 **headers** | **String**| A semicolon-separated list of header parameters to be used when capturing the screenshot. Each header should be passed as a key-value pair and multiple pairs should be separated by a semicolon. | [optional] 
 **cookies** | **String**| A semicolon-separated list of cookies to be used when capturing the screenshot. Each cookies should be passed as a key-value pair and multiple pairs should be separated by a semicolon. | [optional] 
 **css** | **String**| Inject your custom CSS. | [optional] 
 **js** | **String**| Inject your custom Javascript. | [optional] 
 **wait** | **String**| Wait until the specified CSS selector matches an element present in the page before taking a screenshot. The process is canceled after 60 seconds. | [optional] 
 **element** | **String**| Takes a screenshot of the first element matched by the specified CSS selector. This is ignored if full is true. (This option cannot be used with the PDF export format.) | [optional] 
 **timezone** | **String**| The IANA time zone identifier used for this capture. | [optional] [default to Europe/Berlin]
 **device** | **String**| The device used in the emulation. | [optional] 
 **latitude** | **Number**| The latitude used in the emulation of the geo-location. | [optional] [default to 0.0]
 **longitude** | **Number**| The longitude used in the emulation of the geo-location. | [optional] [default to 0.0]
 **accuracy** | **Number**| The accuracy in meters used in the emulation of the geo-location. | [optional] [default to 2.0]
 **proxy** | **String**| Use an address of a proxy server through which the screenshot should be taken. The proxy address should be formatted as http://username:password@proxyserver.com:31280 | [optional] 
 **adblock** | **Boolean**| Prevent ads from being displayed. Block requests from popular ad networks and hide frequent ads. | [optional] [default to false]
 **hideCookieBanners** | **Boolean**| Prevent cookie banners and pop-ups from being displayed. The best possible result is tried. | [optional] [default to false]

### Return type

**&#x27;Blob&#x27;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/pdf, image/jpeg, image/png, image/webp

