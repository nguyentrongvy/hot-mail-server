const request = require("request");

const username = "email6@mmo2k.xyz";
const domain = "@mmo2k.xyz";
const password = "1";

const headers = {
  "Content-Type": "application/x-www-form-urlencoded",
  Origin: "https://create.mmo2k.xyz",
  Referer: "https://create.mmo2k.xyz/dashboard",
  "Upgrade-Insecure-Requests": "1",
  cookie: "auth=9db474e1e6a79c24c70d1c46e2c952f5",
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
  "sec-ch-ua":
    '"Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"',
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": '"Windows"',
};

const dataString = `username=${username}${domain}&password=${password}`;

const options = {
  url: "https://create.mmo2k.xyz/createUser",
  method: "POST",
  headers,
  body: dataString,
};

function callback(error, response, body) {
  if (!error && response.statusCode === 200) {
    console.log(body);
  }
}

request(options, callback);
