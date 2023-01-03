import { useState, SetStateAction } from "react";
import { Button, Textarea, TextField } from "src/components";
import { Link } from "react-router-dom";
import * as yup from 'yup';

import { TEXTFIELD_TYPE } from "src/ultil/enum/app-enum";
import databaseImg from "src/assets/images/database.png";
import LayoutLogin from "src/core/layouts/auth/LayoutLogin";

function Login() {
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
  const handleUserLogin = () => {
    const data = handleValidation();
    console.log('[fetch data]', data);
  };

  // define class name for TextField
  const labelClassName = "font-normal text-sm text-blur-color";
  const inputClassName = " font-normal text-sm text-text-color";

  return (
    <LayoutLogin>
      <div className="rounded-full bg-[#F9F9F9] flex  w-[36.666%] pt-[36.666%] relative">
        <div style={{backgroundImage: `url('${databaseImg}')`}} className="m-auto w-[45.454545%] pt-[45.454545%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-cover" ></div>
      </div>
      <h3 className="text-text-color text-center font-medium text-base mt-2 lg:mt-9 lg:text-[1.75rem] lg:leading-[2.625rem] ">
        Login to Mange Database
      </h3>
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
      <div>
        <Button onClick={handleUserLogin} customClassName="mt-6 w-[87px] h-10 flex flex-direction justify-center items-center">
          <span className="font-medium text-base text-white">Login</span>
        </Button>
      </div>
      <div className="mt-auto mb-0 xs:mb-6">
        <span className="font-normal text-sm text-blur-color ">
          Go back to{" "}
          <Link className="font-normal text-sm text-[#0469E3]" to={"/login"}>
            Login to Admin
          </Link>
        </span>
      </div>
    </LayoutLogin>
  );
}

export default Login;
