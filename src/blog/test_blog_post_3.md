---
path: "/checking-environment-variables-express"
date: "2019-06-30"
title: "Checking Environment Variables in an Express App"
featuredImage: "../images/stop-sign.jpg"
---

Environment variables are a useful tool when running an application for both security and managing different environments. Using environments variables to keep secret keys out of version control is important for security. Or, your app my use a different database host on staging than production. Environments variables can help with this.

Using environments variables are great, but setting up these variables on a new environment or when working locally for the first time on the application can be cumbersome. If an environment variable get missed, time can be wasted trying to debug why the app is not working.

`express-env-check` is a simple package I created that can help with this by checking the required environment variables are set before the server can be started. It gives the user instant feedback on what environment variables are missing.

## Setting up express-env-check

Install `express-env-check` as an application dependency.

```
npm install --save express-env-check
```

Add the following code as early as possible in your main express start file (`app.js` or `index.js`).

```js
const expressEnvCheck = require("express-env-check")

expressEnvCheck(
  ["DB_PASSWORD"], // A list of required environment variables
  ["DB_PASSWORD"] // A list of sensitive environment variables that should not have their values logged
)
```

The second argument is a list of sensitive environment variables that should not have their values logged. This is recommended for database passwords, API keys, or other secrets.

See the [example.js](https://github.com/sgreer81/express-env-check/blob/master/example.js) file for more detail.

## Custom info / error handlers

Optionally, a custom info and error handler can be passed as function arguments. This can be useful if your app is using a custom logging service, or writing logs to a log file rather than the console. Below is an example.

```js
const errorLog = (...args) => {
  console.error("custom error")
  console.error(...args)
}

checkEnvVars(["DB_PASSWORD"], ["DB_PASSWORD"], console.log, errorLog)
```

Check it out on [GitHub](https://github.com/sgreer81/express-env-check).
