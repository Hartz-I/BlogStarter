import axios from "axios";

//use default but overrides anything written there
const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

//overrides default where used
instance.defaults.headers.common["Authorization"] = "AUTH Instance TOKEN";

//interceptors and other properties also work!

export default instance;

//to use this, we have to import this instead of axios itself
//test in Blog.js
