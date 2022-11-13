import axios from "axios";

const baseURL = "https://api.systematicdev.uz/back-api/admin/";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZV9udW1iZXIiOiIrOTk4OTk0OTU4MTg2IiwiYXBwX3R5cGUiOiJiYWNrLW9mZmljZSIsImlhdCI6MTY2ODE5MDIzMywiZXhwIjoxNjY4Nzk1MDMzfQ.h04Lu7Vv-xR51v-WKZ0pBEjTBacOkyoso2OQTFagvKo";
var qs = require("qs");
function unauthorized(msg) {
  alert("UNAUTHORIZED");
}

function errorNotification(title, msg) {
  alert(title);
}

function ErrorHandler(error) {
  if (error.message.startsWith("timeout")) {
    errorNotification("Timeout");
  }
  if (error.response) {
    const _error = error.response.data;
    switch (error.response.status) {
      case 400:
        errorNotification("BAD REQUEST", _error);
        break;
      case 401:
        unauthorized(_error);
        break;
      case 403:
        errorNotification("FORBIDDED", _error.message);
        break;
      case 404:
        errorNotification("NOT FOUND", _error.message);
        break;
      case 422:
        errorNotification("UNPOSSABLE ENTITY", _error.message);
        break;
      case 500:
        errorNotification("INTERNAL SERVER ERROR", _error.message);
        break;
      default:
        break;
    }
  }
}

const init = {
  request(method, url, params, data) {
    const config = {
      baseURL: baseURL,
      timeout: 120000,
      url: url,
      method: method,
    };
    if (token) {
      config.headers = {
        Authorization: "Bearer " + token,
      };
    }
    if (data) config.data = data;

    if (params) {
      config.params = params;
      config.paramsSerializer = function (params) {
        return qs.stringify(params, { encodeValuesOnly: true });
      };
    }

    const result = axios(config);

    return new Promise((resolve, reject) => {
      result
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
          ErrorHandler(error);
          reject(error);
        });
    });
  },
  get(url, params) {
    return this.request("GET", url, params, undefined);
  },
  post(url, data, params) {
    return this.request("POST", url, params, data);
  },
  patch(url, data, params) {
    return this.request("PATCH", url, params, data);
  },
  put(url, data, params) {
    return this.request("PUT", url, params, data);
  },
  remove(url, params) {
    return this.request("DELETE", url, params, undefined);
  },
};

export default init;
