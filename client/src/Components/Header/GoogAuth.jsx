// documentation: https://developers.google.com/identity/sign-in/web/reference?hl=da
import React, { useEffect } from 'react';

function GoogAuth() {

	useEffect(() => {
  window.gapi.load("auth2", function () {
    window.gapi.auth2
      .init({
        client_id:
          "45049386046-b4hms2juhih55tb8frnfpdj69k4jb1ma.apps.googleusercontent.com",
      })
      .then(
        () => console.log("library Google Ok"),
        () => console.log("library Google ERR")
      );
  });
});

	function signIn () {
    const GoogleAuth = window.gapi.auth2.getAuthInstance()
    GoogleAuth.signIn()
  };


  return (
    <div>
      <p>1</p>
      <button onClick={signIn}>Log In</button>
    </div>
  );
}


export default GoogAuth;
