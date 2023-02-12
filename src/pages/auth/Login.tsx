import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { Cookies } from 'react-cookie';

import { Button, Textarea, TextField } from 'src/components';
import { TEXTFIELD_TYPE } from 'src/ultil/enum/app-enum';
import databaseImg from 'src/assets/images/auth/database.png';
import adminImg from 'src/assets/images/auth/web-analysis.png';
import LayoutLogin from 'src/core/layouts/auth/LayoutLogin';
import axiosClient from 'src/services/axios';

const cookies = new Cookies();

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
            username: e.currentTarget.value,
        });
        setErrorMessage({
            ...errorMessage,
            username: '',
        });
        setErrorResponse('');
    };

    const onChangePassword = (e: React.SyntheticEvent<HTMLInputElement>) => {
        setInputData({
            ...inputData,
            password: e.currentTarget.value,
        });
        setErrorMessage({
            ...errorMessage,
            password: '',
        });
        setErrorResponse('');
    };

    // VALIDATION

    interface YupSchema {
        username?: string;
        password?: string;
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
            message,
        };
        return JSON.stringify(messages);
    };

    // define yup validation
    const userSchema: yup.SchemaOf<YupSchema> = yup.object({
        username: yup.string().required(handleErrorMsg('username', 'Please enter an email address.')),
        password: yup.string().required(handleErrorMsg('password', 'Please enter an password.')),
    });

    // handle yup validation
    const handleValidation = async () => {
        try {
            const loginValidation = await userSchema.validate(inputData, { abortEarly: false });
            return loginValidation;
        } catch (error) {
            if (error instanceof yup.ValidationError) {
                error.errors.forEach((err: string) => {
                    const msg = JSON.parse(err);
                    setErrorMessage((prevState) => {
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
    // interface IPostCustom {
    //   accessToken: string,
    // }
    const [errorResponse, setErrorResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleUserLogin = async () => {
        try {
            const data = await handleValidation();
            if (data) {
                setIsLoading(true);
                const response = await axiosClient.post('/user/login', data);
                setIsLoading(false);

                if (response.data) {
                    cookies.set('accessToken', response.data, { path: '/' });
                    navigate(isLoginDatabase ? '/database/dashboard' : '/dashboard', { replace: true });
                }
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            setIsLoading(false);
            setErrorResponse(error.data.message);
        }
    };

    const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
        if (e.key === 'Enter') {
            handleUserLogin();
        }
    };

    // define class name for TextField
    const labelClassName = 'font-normal text-sm text-body-light-color';
    const inputClassName = ' font-normal text-sm text-text-color';

    return (
        <LayoutLogin>
            {/* Images */}
            <div className="rounded-full bg-[#F9F9F9] flex  w-[36.666%] pt-[36.666%] relative">
                <div
                    style={{ backgroundImage: `url('${isLoginDatabase ? databaseImg : adminImg}')` }}
                    className="m-auto w-[45.454545%] pt-[45.454545%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-cover"
                ></div>
            </div>
            {/* Text */}
            <h3 className="text-text-color text-center font-medium text-base mt-2 lg:mt-9 lg:text-[1.75rem] lg:leading-[2.625rem] ">
                {isLoginDatabase ? 'Login to Mange Database' : 'Welcome Back!'}
            </h3>
            {/* Fields */}
            <div className="w-full" onKeyDown={handleKeyDown}>
                <div className="mt-12 lg:mt-[42px]">
                    <TextField
                        inputClassName={inputClassName}
                        label={isLoginDatabase ? 'User Master' : 'User Name'}
                        labelClassName={labelClassName}
                        type={TEXTFIELD_TYPE.TEXT}
                        value={inputData.username}
                        autoFocus
                        onChange={onChangeUserName}
                        onFocus={() =>
                            setErrorMessage({
                                ...errorMessage,
                                username: '',
                            })
                        }
                        error={errorMessage.username}
                    />
                </div>
                <div className="mt-6">
                    <TextField
                        inputClassName={inputClassName}
                        label={isLoginDatabase ? 'Master Password' : 'Password'}
                        labelClassName={labelClassName}
                        type={showPassword ? TEXTFIELD_TYPE.TEXT : TEXTFIELD_TYPE.PASSWORD}
                        value={inputData.password}
                        onChange={onChangePassword}
                        unit={showPassword ? 'hide' : 'show'}
                        onClickUnit={onClickUnit}
                        onFocus={() =>
                            setErrorMessage({
                                ...errorMessage,
                                password: '',
                            })
                        }
                        error={errorMessage.password}
                    />
                </div>
            </div>
            {/* Forgot password */}
            {!isLoginDatabase && (
                <div className="w-full mt-3 text-right">
                    <Link to={'/login/recover'} className="font-normal text-sm text-body-light-color">
                        Forgot password?
                    </Link>
                </div>
            )}
            {/* Error message Form */}
            {errorResponse && (
                <div className="w-full mt-2 xxs:mt-6">
                    <span className="font-normal text-base text-dark-red-color">{errorResponse}</span>
                </div>
            )}
            {/* Button */}
            <div className="w-full">
                <Button
                    fullWidth
                    onClick={handleUserLogin}
                    customClassName={
                        (isLoginDatabase ? 'mt-6 mb-[16px]' : 'mb-[52px] mt-2 xxs:mt-8') +
                        ' h-10 flex flex-direction justify-center items-center'
                    }
                >
                    <span className="font-medium text-base text-white">
                        Login
                        {isLoading && <p className="inline-block animate-bounce h-5 w-5">...</p>}
                    </span>
                </Button>
            </div>
            {/* Back Login to Admin */}
            {isLoginDatabase && (
                <div className="mt-auto mb-0 xs:mb-6">
                    <span className="font-normal text-sm text-body-light-color">
                        Go back to{' '}
                        <Link className="font-normal text-sm text-[#0469E3]" to={'/login'}>
                            Login to Admin
                        </Link>
                    </span>
                </div>
            )}
        </LayoutLogin>
    );
}

export default Login;
