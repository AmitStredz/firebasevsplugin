import { initializeApp } from "firebase-admin";

const vscode = require("vscode");
const { getAuth, signInWithPopup, GoogleAuthProvider } = require("firebase/auth");

const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");


const firebaseConfig = {
  apiKey: "AIzaSyB-pVmzrCZBVMPpKcTReM9Xwwcr1olUAwc",
  authDomain: "vs-plugin.firebaseapp.com",
  projectId: "vs-plugin",
  storageBucket: "vs-plugin.firebasestorage.app",
  messagingSenderId: "238242579636",
  appId: "1:238242579636:web:13cf84ff4bb0c9c7fb03e1",
  measurementId: "G-SP1PL2S8HC",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// auth.languageCode = "it";
// To apply the default browser preference instead of explicitly setting it.
auth.useDeviceLanguage();

// async function signInWithGoogle() {
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       // This gives you a Google Access Token. You can use it to access the Google API.
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;
//       // The signed-in user info.
//       const user = result.user;
//       // IdP data available using getAdditionalUserInfo(result)
//       // ...
//     })
//     .catch((error) => {
//       // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // The email of the user's account used.
//       const email = error.customData.email;
//       // The AuthCredential type that was used.
//       const credential = GoogleAuthProvider.credentialFromError(error);
//       // ...
//     });
// }

/**
 * @param {vscode.ExtensionContext} context
 */

function activate(context) {
  console.log(
    'Congratulations, your extension "firebasevsplugin" is now active!'
  );
  const disposable = vscode.commands.registerCommand(
    "firebasevsplugin.helloWorlds",
    function () {
      vscode.window.showInformationMessage(
        "Hello World from firebaseVSPlugin!"
      );
    }
  );
  const signIn = vscode.commands.registerCommand(
    "firebasevsplugin.signIn",
    function () {
      vscode.window.showInformationMessage("signIn from firebaseVSPlugin!");
    //   signInWithGoogle();
    }
  );

  context.subscriptions.push(disposable);
  context.subscriptions.push(signIn);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
