// export async function getAuthToken(email, pass) {
//   const response = await fetch('http://localhost:5000/auth/login', {
//     method: 'PUT',
//     body: JSON.stringify({email, pass}),
//   });
//   const data = await response.json();
//   if (response.status === 200) {
//     return data.data;
//   }else{
//     throw new Error(data.msg);
//   }
// }
import axios from "axios";
import { launcherNotification } from "./functions";
/**
 * Genera una petición Http mediante Axios
 * @param {string} url : url de la petición
 * @param {Object} config
 * @returns
 */

export async function API(url, config = {}) {
  // ejecuta una petición ajax retorna data

  let data = {},
    load = true,
    success = false,
    alert = true,
    functionResp = false,
    alert_error = true,
    headers = {},
    // base = sessionStorage.getItem("url_base"),
    base = "https://api-capital-tours.onrender.com";
  // base = "http://localhost:5000",
  token = true;

  if (config.data) data = config.data;
  url = !config.url_base ? base + "/" + url : config.url_base + "/" + url;
  if (config.load) load = config.load;
  if (config.alert) alert = config.alert;
  if (config.alert_error) alert_error = config.alert_error;
  if (config.success) success = config.success;
  if (config.functionResp) functionResp = config.functionResp;
  if (config.token) token = false;
  if (token == true) {
    headers["Access-Token"] = sessionStorage.getItem("token")
      ? sessionStorage.getItem("token")
      : "";
  }
  // if (token == true) {
  // 	const headers = {
  // 		'Access-Token': (sessionStorage.getItem("token")) ? sessionStorage.getItem("token") : "",
  // 	  'Cookie': `cookie-token=${sessionStorage.getItem("cookie-token")}` // Agregar cookie en headers
  // 	}
  // }
  if (config.auth_date) {
    headers["Auth-Date"] = getDateString();
  }
  if (config.auth_periodo) {
    let storage = JSON.parse(sessionStorage.getItem("date"));
    headers["Auth-Periodo"] = `${storage.c_ano}-${storage.c_mes}`;
  }

  return new Promise((resolve, reject) => {
    try {
      axios({
        headers: headers,
        url: url,
        async: true,
        method: config.method ?? "GET",
        dataType: config.dataType ?? "application/json",
        data: data,
      })
        .then(function (response) {
          if (response.data.statusCode == 200) {
            let resp = response.data;
            if (alert) launcherNotification(resp, true, success, functionResp);
            if (resp.statusCode == 200) {
              resolve(resp.data);
            }
          } else {
            let resp = response.data;
            if (resp.statusCode == 300) {
              resolve(resp.data);
            }
            if (alert)
              launcherNotification(response.data, true, success, functionResp);
          }
          // if(load)cargar(".body-class", 2);
        })
        .catch(function (response) {
          // if(load)cargar(".body-class", 2);
          let objectResponse = response;
          if (typeof response == "object") {
            const stringifiedComplexObj = JSON.stringify(response);
            response = JSON.parse(stringifiedComplexObj);
          }
          if (response.status == undefined) {
            response.responseText = "Error de Conexión con el Servidor";
            sessionStorage.clear();
            launcherNotification(response, false);
          } else if (response.status == null) {
            response.responseText = "Error de Conexión";
            sessionStorage.clear();
            launcherNotification(response, false);
          } else if (response.status == 404) {
            response.responseText = "Se perdió la session";
            sessionStorage.clear();
            launcherNotification(response, false);
          } else if (response.status == 409) {
            let resp = objectResponse.response.data;
            response.responseText = resp.msg;
            launcherNotification(response, false);
            reject(resp);
          } else {
            if (alert) launcherNotification(response.data, false);
          }
        });
    } catch (error) {
      // if(load)cargar(".body-class", 2);

      if (alert_error) launcherNotification(error, false);
    }
  });
}

/**
 * retorna fecha de ahora con formato DD/MM/YYYY DD-MM-YYYY
 * @param {string} split carácter separador de la fecha
 * @returns {string} fecha de ahora con formato DD/MM/YYYY DD-MM-YYYY
 */
function getDateString(split = "/", date = "") {
  let date_now = new Date();
  if (date != "") {
    date_now = new Date(date);
  }
  let days = date_now.getDate().toString().padStart(2, "0");
  let month = (date_now.getMonth() + 1).toString().padStart(2, "0");
  return `${days}${split}${month}${split}${date_now.getFullYear()}`;
}
