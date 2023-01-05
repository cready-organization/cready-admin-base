import { useState, SetStateAction, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { Button, Textarea, TextField } from "src/components";
import { Link } from "react-router-dom";
import * as yup from 'yup';

import { TEXTFIELD_TYPE } from "src/ultil/enum/app-enum";
import databaseImg from "src/assets/images/auth/database.png";
import adminImg from "src/assets/images/auth/web-analysis.png";
import LayoutLogin from "src/core/layouts/auth/LayoutLogin";
import axiosClient from "src/services/axios";


function Login() {
  const location = useLocation();
  let isLoginDatabase = false;
  if (location.pathname === '/database/login') {
    isLoginDatabase = true;
  }
  
  
  const [showPassword, setShowPassword] = useState(false);

  const [inputData, setInputData] = useState({
    username: '',
    password: '',
  });

  const onClickUnit = () => {
    setShowPassword(!showPassword);
  };

  const onChangeUserName = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setInputData({
      ...inputData,
      username: e.currentTarget.value
    });
  };

  const onChangePassword = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setInputData({
      ...inputData,
      password: e.currentTarget.value
    });
  };



  // VALIDATION

  interface YupSchema {
    username?: string,
    password?: string,
  }

  // save error message
  const [errorMessage, setErrorMessage] = useState({
    username: '',
    password: '',
  });

  // convert object error message to string
  const handleErrorMsg = (path: string, message: string) => {
    const messages = {
      path,
      message
    };
    return JSON.stringify(messages);
  };

  // define yup validation
  const userSchema: yup.SchemaOf<YupSchema> = yup.object({
    username: yup.string().required(handleErrorMsg('username', 'username is a required field')),
    password: yup.string().required(handleErrorMsg('password', 'password is a required field')),
  });

  // handle yup validation
  const handleValidation = async () => {
    try {
      const loginValidation =  await userSchema.validate(inputData, { abortEarly: false });
      return loginValidation;

    } catch (error) {
      if(error instanceof yup.ValidationError) {
        error.errors.forEach((err:string) => {
          const msg = JSON.parse(err);
          setErrorMessage(prevState => {
            return {
              ...prevState,
              [msg.path]: msg.message,
            };
          });
        });     
      }
    }
  };

  // user submit
  interface IPostCustom {
    accessToken: string,
  }
  const handleUserLogin = async () => {
    try {
      const data = await handleValidation();
      if (data) {
        const response: IPostCustom = await axiosClient.post('/login', data);
        console.log('[TOKEN]', response.accessToken);
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
    }
  };

  // define class name for TextField
  const labelClassName = "font-normal text-sm text-body-light-color";
  const inputClassName = " font-normal text-sm text-text-color";

  return (
    <LayoutLogin>
      {/* <i className="fi fi-rr-eye-crossed"></i> */}
      {/* Images */}
      <div className="rounded-full bg-[#F9F9F9] flex  w-[36.666%] pt-[36.666%] relative">
        <div style={{backgroundImage: `url('${isLoginDatabase ? databaseImg : adminImg}')`}} className="m-auto w-[45.454545%] pt-[45.454545%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-cover" ></div>
      </div>
      {/* Text */}
      <h3 className="text-text-color text-center font-medium text-base mt-2 lg:mt-9 lg:text-[1.75rem] lg:leading-[2.625rem] ">
        {isLoginDatabase ? 'Login to Mange Database' : 'Welcome Back!'}
      </h3>
      {/* Fields */}
      <div className="w-full">
        <div className="mt-12 lg:mt-[42px]">
          <TextField
            inputClassName={inputClassName}
            label="User Master"
            labelClassName={labelClassName}
            type={TEXTFIELD_TYPE.TEXT}
            value={inputData.username}
            onChange={onChangeUserName}
            onFocus={() => setErrorMessage({
              ...errorMessage,
              username: '',
            })}
            error={errorMessage.username}
          />
        </div>
        <div className="mt-6">
          <TextField
            inputClassName={inputClassName}
            label="Master Password"
            labelClassName={labelClassName}
            type={showPassword ? TEXTFIELD_TYPE.TEXT : TEXTFIELD_TYPE.PASSWORD}
            value={inputData.password}
            onChange={onChangePassword}
            unit={showPassword ? 'hide' : 'show'}
            onClickUnit={onClickUnit}
            onFocus={() => setErrorMessage({
              ...errorMessage,
              password: '',
            })}
            error={errorMessage.password}
          />
        </div>
      </div>
      {/* Forgot password */}
      { !isLoginDatabase && (
        <div className="w-full mt-3 text-right">
          <span className="font-normal text-sm text-body-light-color">Forgot password?</span>
        </div>
      )}
      {/* Button */}
      <div className="w-full">
        <Button fullWidth onClick={handleUserLogin} customClassName={ (isLoginDatabase? "mt-6 mb-[16px]" : "mt-8 mb-[52px]") + " h-10 flex flex-direction justify-center items-center" }>
          <span className="font-medium text-base text-white">Login</span>
        </Button>
      </div>
      {/* Back Login to Admin */}
      {
        isLoginDatabase && (
          <div className="mt-auto mb-0 xs:mb-6">
            <span className="font-normal text-sm text-body-light-color">
              Go back to{" "}
              <Link className="font-normal text-sm text-[#0469E3]" to={"/login"}>
                Login to Admin
              </Link>
            </span>
          </div>
        )
      }
    </LayoutLogin>
  );
}

export default Login;
