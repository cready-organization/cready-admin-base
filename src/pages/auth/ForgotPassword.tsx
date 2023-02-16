import React, { useState, createRef, RefObject } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Button, Textarea, TextField, OtpInput } from 'src/components';
import { TEXTFIELD_TYPE } from 'src/ultil/enum/app-enum';
import LayoutLogin from 'src/core/layouts/auth/LayoutLogin';
import axiosClient from 'src/services/axios';
import forgotPasswordImg from 'src/assets/images/auth/forgot-password.png';

// define class name for TextField
const labelClassName = 'font-normal text-sm text-body-light-color';
const inputClassName = ' font-normal text-sm text-text-color';

function ForgotPassword() {
    // define state
    const [steps, setSteps] = useState(1);
    const [showPassword, setShowPassword] = useState({
        newPassword: false,
        confirmPassword: false,
    });
    const [identifyData, setIdentifyData] = useState({
        email: '',
        secretNumber: 0,
        newPassword: '',
        confirmPassword: '',
    });
    const [errorMessage, setErrorMessage] = useState({
        email: '',
        secretNumber: '',
        newPassword: '',
        confirmPassword: '',
    });

    const [otpCode, setOtpCode] = useState('');

    const [isDisableButton, setIsDisableButton] = useState(false);

    const navigate = useNavigate();

    // handle show hide password
    const onClickUnit = (isNewPassword = false) => {
        if (isNewPassword) {
            setShowPassword({
                ...showPassword,
                newPassword: !showPassword.newPassword,
            });
        } else {
            setShowPassword({
                ...showPassword,
                confirmPassword: !showPassword.confirmPassword,
            });
        }
    };

    // STEP 1
    // send Email to server
    const handleSendMail = async () => {
        try {
            if (identifyData.email.length > 0) {
                setIsDisableButton(true);
                const response = await axiosClient.post('/request-forgot-password', { email: identifyData.email });
                if (response.status === 200 || response.status === 201) {
                    setSteps(2);
                    setIsDisableButton(false);
                }
            } else {
                setErrorMessage({
                    ...errorMessage,
                    email: 'Please enter an email address.',
                });
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            setErrorMessage({
                ...errorMessage,
                email: error.data.message[0],
            });
            setIsDisableButton(false);
        }
    };

    //  STEP 2
    // handle input enter only one number
    const onChangeOtpCode = (value: string) => {
        setErrorMessage({
            ...errorMessage,
            secretNumber: '',
        });

        return setOtpCode(value);
    };

    // define TextField enter the code
    // const blocks = Array.from({ length: 6 }, (element, index) => {
    //     // define ref and push ref to array
    //     const ref: React.LegacyRef<HTMLInputElement> = createRef();
    //     elemRefs.push(ref);
    //     return (
    //         <TextField
    //             key={index}
    //             value={varifyCode[index]}
    //             onChange={(e) => onChangeTextCode(e, index)}
    //             wrapperClassName={index === 0 ? 'ml-0 ' + wrapperClassName : wrapperClassName}
    //             inputClassName={inputCodeClassName}
    //             onKeyUp={handleAutoTab}
    //             type={TEXTFIELD_TYPE.TEXT}
    //             dataIndex={index}
    //             maxLength={1}
    //             ref={ref}
    //         ></TextField>
    //     );
    // });

    // handle send code
    const handleSendCode = async () => {
        const secretNumber = Number(otpCode);
        try {
            setIsDisableButton(true);
            const response = await axiosClient.post('/verify-pasword-reset-code', {
                email: identifyData.email,
                secretNumber,
            });
            if (response.status === 200 || response.status === 201) {
                setSteps(3);
                setIsDisableButton(false);
                setIdentifyData({
                    ...identifyData,
                    secretNumber,
                });
            }

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.log('[STEPS2: ERROR]', error);
            setErrorMessage({
                ...errorMessage,
                secretNumber: error.data.message,
            });
            setIsDisableButton(false);
        }
    };

    // STEP 3
    const handleChangePassword = async () => {
        try {
            if (identifyData.newPassword.length > 0 || identifyData.confirmPassword.length > 0) {
                setIsDisableButton(true);
                const response = await axiosClient.post('/forget-password', identifyData);
                if (response.status === 200 || response.status === 201) {
                    setIsDisableButton(false);
                    navigate('/login', { replace: true });
                }
            } else {
                if (identifyData.newPassword.length === 0)
                    setErrorMessage({
                        ...errorMessage,
                        newPassword: 'Please enter an new password.',
                    });
                if (identifyData.confirmPassword.length === 0)
                    setErrorMessage({
                        ...errorMessage,
                        confirmPassword: 'Please enter an confirm password.',
                    });
            }

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            setErrorMessage({
                ...errorMessage,
                newPassword: error.data.message[0],
                confirmPassword: error.data.message[1],
            });
            setIsDisableButton(false);
        }
    };

    // Enter to click button
    const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
        if (e.key === 'Enter') {
            if (!isDisableButton) {
                if (steps === 1) {
                    handleSendMail();
                } else if (steps === 2) {
                    handleSendCode();
                } else {
                    handleChangePassword();
                }
            }
        }
    };

    return (
        <LayoutLogin>
            {/* Images */}
            <div className="rounded-full bg-[#F9F9F9] flex  w-[36.666%] pt-[36.666%] relative">
                <div
                    style={{ backgroundImage: `url('${forgotPasswordImg}')` }}
                    className="m-auto w-[45.454545%] pt-[45.454545%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-cover"
                ></div>
            </div>
            {/* Text */}
            <h3 className="text-text-color text-center font-medium text-base mt-2 lg:mt-9 lg:text-[1.75rem] lg:leading-[2.625rem] ">
                Forgot Password
            </h3>

            {/* Fields */}
            <div className="w-full" onKeyDown={handleKeyDown}>
                {/* Step 1: Send mail */}
                {steps === 1 && (
                    <div className="w-full">
                        <div className="mt-12 lg:mt-[42px]">
                            <TextField
                                value={identifyData.email}
                                onChange={(e) => {
                                    setErrorMessage({
                                        ...errorMessage,
                                        email: '',
                                    });
                                    setIdentifyData({
                                        ...identifyData,
                                        email: e.currentTarget.value,
                                    });
                                }}
                                inputClassName={inputClassName}
                                label="Email to Send Code"
                                labelClassName={labelClassName}
                                type={TEXTFIELD_TYPE.TEXT}
                                autoFocus
                                error={errorMessage.email}
                            />
                        </div>
                    </div>
                )}

                {/* Step 2: Varify Code */}
                {steps === 2 && <OtpInput value={otpCode} valueLength={6} onChange={onChangeOtpCode} />}

                {/* Step 3: Change new password */}
                {steps === 3 && (
                    <div className="w-full">
                        <div className="mt-12 lg:mt-[42px]">
                            <TextField
                                inputClassName={inputClassName}
                                label={'Password'}
                                labelClassName={labelClassName}
                                type={showPassword.newPassword ? TEXTFIELD_TYPE.TEXT : TEXTFIELD_TYPE.PASSWORD}
                                value={identifyData.newPassword}
                                autoFocus
                                onChange={(e) =>
                                    setIdentifyData({
                                        ...identifyData,
                                        newPassword: e.currentTarget.value,
                                    })
                                }
                                unit={
                                    showPassword.newPassword ? (
                                        <i className="fa-light fa-eye"></i>
                                    ) : (
                                        <i className="fa-light fa-eye-slash"></i>
                                    )
                                }
                                onClickUnit={() => onClickUnit(true)}
                                onFocus={() =>
                                    setErrorMessage({
                                        ...errorMessage,
                                        newPassword: '',
                                    })
                                }
                                error={errorMessage.newPassword}
                            />
                        </div>
                        <div className="mt-6">
                            <TextField
                                inputClassName={inputClassName}
                                label={'Confirm Password'}
                                labelClassName={labelClassName}
                                type={showPassword.confirmPassword ? TEXTFIELD_TYPE.TEXT : TEXTFIELD_TYPE.PASSWORD}
                                value={identifyData.confirmPassword}
                                onChange={(e) =>
                                    setIdentifyData({
                                        ...identifyData,
                                        confirmPassword: e.currentTarget.value,
                                    })
                                }
                                unit={
                                    showPassword.confirmPassword ? (
                                        <i className="fa-light fa-eye"></i>
                                    ) : (
                                        <i className="fa-light fa-eye-slash"></i>
                                    )
                                }
                                onClickUnit={() => onClickUnit()}
                                onFocus={() =>
                                    setErrorMessage({
                                        ...errorMessage,
                                        confirmPassword: '',
                                    })
                                }
                                error={errorMessage.confirmPassword}
                            />
                        </div>
                    </div>
                )}
            </div>

            {/* Error message Form */}
            {errorMessage.secretNumber && (
                <div className="w-full mt-2 xxs:mt-6">
                    <span className="font-normal text-base text-dark-red-color">{errorMessage.secretNumber}</span>
                </div>
            )}

            {/* Button */}
            <div className={steps === 3 ? 'w-full' : 'w-full mt-6 text-right'}>
                {steps !== 3 ? (
                    <>
                        <span className="mr-4 text-lg font-medium text-body-dark-color">
                            {steps === 1 ? ' Send' : 'Verify Code'}
                        </span>
                        <Button
                            customClassName={`w-[70px] h-10 pt-0 pb-0 pl-0 pr-0 rounded-[20px] ${
                                isDisableButton && '!bg-border-color !text-body-light-color cursor-default'
                            }`}
                            onClick={isDisableButton ? undefined : steps === 1 ? handleSendMail : handleSendCode}
                        >
                            <span className=" text-white m-auto">
                                <i className="fa-light fa-arrow-right"></i>
                            </span>
                        </Button>
                    </>
                ) : (
                    <Button
                        fullWidth
                        onClick={isDisableButton ? undefined : handleChangePassword}
                        customClassName={`mb-[52px] mt-2 xxs:mt-8 h-10 flex flex-direction justify-center items-center ${
                            isDisableButton && '!bg-border-color !text-body-light-color cursor-default'
                        }`}
                    >
                        <span className="font-medium text-base text-white">
                            Change Password
                            {/* {isLoading && <p className="inline-block animate-bounce h-5 w-5">...</p>} */}
                        </span>
                    </Button>
                )}
            </div>

            {/* Resend Code */}
            {steps === 2 && (
                <div className="w-full mt-3 text-right cursor-pointer" onClick={handleSendMail}>
                    <span className="font-normal text-sm text-body-light-color underline">Resend Code?</span>
                </div>
            )}

            {/* Back Login to Admin */}
            <div className="mt-auto mb-0 xs:mb-6">
                <span className="font-normal text-sm text-body-light-color">
                    Go back to{' '}
                    <Link className="font-normal text-sm text-[#0469E3]" to={'/login'}>
                        Login to Admin
                    </Link>
                </span>
            </div>
        </LayoutLogin>
    );
}

export default ForgotPassword;
