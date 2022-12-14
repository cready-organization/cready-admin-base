import * as React from "react";
import { Link } from "react-router-dom";
import { Button, Textarea, TextField } from "../../components";
import { TEXTFIELD_TYPE } from "../../helpers/app-enum";

function Login() {
  return (
    <div className="login-form">
      <p className="mb-4">Please login to your account</p>
      <div className="mb-4">
        <TextField placeholder="Username" type={TEXTFIELD_TYPE.TEXT} />
      </div>
      <div className="mb-4">
        <TextField placeholder="Password" type={TEXTFIELD_TYPE.PASSWORD} />
      </div>
      <div className="mb-2">
        <Button fullWidth={true}>Log in</Button>
      </div>
      <div className="text-center pt-1 mb-12 pb-1">
        <Link className="text-gray-500" to={"/auth/forgot-password"}>
          Forgot password?
        </Link>
      </div>
    </div>
  );
}

export default Login;
