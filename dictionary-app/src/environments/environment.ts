// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAKekL3gJse17ywtdX_-22Rr8Be20aU_QA",
    authDomain: "diction-app.firebaseapp.com",
    databaseURL: "https://diction-app.firebaseio.com",
    projectId: "diction-app",
    storageBucket: "diction-app.appspot.com",
    messagingSenderId: "714079482775"
  }
};
