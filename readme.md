# Functions + Angular 2 demo

This is a demo on how to combine the Angular 2 Quickstart tutorial and Azure Functions. The client comes from the awesome [Angular2 Quickstart demo](https://angular.io/resources/live-examples/toh-6/ts/plnkr.html). I've made very simple updates to it to use HTTP from Azure Functions in `hero.service.ts` and `main.ts`.

## Client

You can start the client locally by running `npm start` from the `client` directory. You need to update the API endpoint to be your Azure Function endpoint in `./client/app/hero.service.ts` to be your Function App. (You can also search for "TODO"). Also, if you get additional errors, check that you've enabled CORS (described below).

## Functions

You can get started with Azure Functions at https://functions.azure.com. You can get a trial subscription from that link if you don't have one. 

1. Create a new Function App or choose an existing one. 
2. Add a new HTTP Triggered Node.js Function. 
3. Upload the `heroes.js` file via the "Files" browser (look under the code editor in the portal).
4. If you don't want to include an API key, you can set connection to anonymous under the integrate tab.

You'll also need to enable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS). CORS is a way of telling a given client application that it is allowed to access your resources from a different domain than the client was originally served from. You can enable CORS by adding the domain you'll be running the client from (locally, this is http://localhost:3000) to the CORS list available from the Function App Settings window.

## License

All code under the client folder is from the [Angular 2 Quickstart project](https://angular.io/docs/ts/latest/tutorial/toh-pt6.html) and generally is covered under the [Angular liscense](http://angular.io/license). It is copied here: 

> The MIT License

>Copyright (c) 2014-2016 Google, Inc.

>Permission is hereby granted, free of charge, to any person obtaining a copy
>of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

>The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

Otherwise, the rest of the content is covered under the usual MIT license for Functions content.

>The MIT License (MIT)

>Copyright (c) .NET Foundation.  All rights reserved.  
 
>Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
 
>The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.
 
>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.