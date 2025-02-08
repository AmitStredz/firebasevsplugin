
  // The module 'vscode' contains the VS Code extensibility API
  // Import the module and reference it with the alias vscode in your code below
  // import * as vscode from "vscode";
  const vscode = require('vscode');
  
  const { initializeApp } = require('firebase-admin/app');
  const { getAuth, signInWithPopup, GoogleAuthProvider, signInWithRedirect } = require('firebase/auth');
  
  
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
  // const analytics = getAnalytics(app);
  // const auth = getAuth(app);
  const auth = getAuth(app);
  auth.useDeviceLanguage();
  
  
  
  /**
   * @param {vscode.ExtensionContext} context
   */
  function activate(context) {
  
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "firebasevsplugin" is now active!');
  
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    const disposable = vscode.commands.registerCommand('firebasevsplugin.helloWorld', function () {
            // The code you place here will be executed every time your command is executed
    
            // Display a message box to the user
            vscode.window.showInformationMessage('Hello World from firebaseVSPlugin!');
        });
    const signIn = vscode.commands.registerCommand('firebasevsplugin.signIn', function () {
        // The code you place here will be executed every time your command is executed
  
        // Display a message box to the user
        vscode.window.showInformationMessage('Sign In from firebaseVSPlugin!');
        // signInWithGoogle();
  
    });
  
    context.subscriptions.push(disposable);
    context.subscriptions.push(signIn);
  }
  
  // This method is called when your extension is deactivated
  function deactivate() {}
  
  module.exports = {
    activate,
    deactivate
  }
  
  
  
  // async function signInWithGoogle() {
  //   const provider = new GoogleAuthProvider();
  //   provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  //   signInWithRedirect(auth, provider);
  // //   try {
  // // 	console.log("1");
    
  // //     signInWithPopup(auth, provider)
  // //       .then((result) => {
  // // 		console.log(result);
        
  // //         // This gives you a Google Access Token. You can use it to access the Google API.
  // //         const credential = GoogleAuthProvider.credentialFromResult(result);
  // //         const token = credential?.accessToken;
  // //         // The signed-in user info.
  // //         const user = result.user;
  // //         // IdP data available using getAdditionalUserInfo(result)
  // //         // ...
  // //       })
  // //       .catch((error) => {
  // //         // Handle Errors here.
  // // 		console.log(error);
        
  // //         const errorCode = error.code;
  // //         const errorMessage = error.message;
  // //         // The email of the user's account used.
  // //         const email = error.customData.email;
  // //         // The AuthCredential type that was used.
  // //         const credential = GoogleAuthProvider.credentialFromError(error);
  // //         // ...
  // //       });
  //     // console.log(`Signed in as: ${result.user.displayName}`);
  //     // vscode.window.showInformationMessage(
  //     //   `Welcome, ${result.user.displayName}!`
  //     // );
  // //   } catch (error) {
  // //     console.error("Sign-in failed:", error);
  // //     vscode.window.showErrorMessage("Failed to sign in. Try again.");
  // //   }
  // }
  