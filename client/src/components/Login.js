import React from "react";

import ImageAnno from "./annotation/ImageAnno";


const Login = () => {

  return (
    <div >
        <a href="/auth/google">Login with google to save your annotations!</a>
        <ImageAnno />
    </div>
  );
};

export default Login;