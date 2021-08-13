import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import axios from "axios";

//can use short hand for url
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common["Authorization"] = "AUTH TOKEN"; //example: also can be used to do this. whatever this is
axios.defaults.headers.post["Content-Type"] = "application/json"; //default anyways but can do also

//handling error for all http request fails
axios.interceptors.request.use(
  (request) => {
    //intercepting all the http requests
    console.log(request);

    // edit request config
    return request; //if not use we'll block the request
  }, //this error works when request settings fails
  (error) => {
    //handle error in the request (if any)
    console.error(error);
    return Promise.reject(error); //to use it locally by catch function
  }
);

//response handling
//if this not done than the error won't show up in console
axios.interceptors.response.use(
  (response) => {
    console.log(response);

    return response;
  }, //this error works everytime
  (error) => {
    //handle error in the response (if any)
    console.error(error);
    return Promise.reject(error); //to use it locally by catch function
  }
);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
