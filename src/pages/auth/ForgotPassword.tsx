import { useState, createRef, RefObject } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Button, Textarea, TextField } from 'src/components';
import { TEXTFIELD_TYPE } from 'src/ultil/enum/app-enum';
import LayoutLogin from 'src/core/layouts/auth/LayoutLogin';
import axiosClient from 'src/services/axios';
import forgotPasswordImg from 'src/assets/images/auth/forgot-password.png';

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
    const [varifyCode, setVarifyCode] = useState({
        textCode1: '',
        textCode2: '',
        textCode3: '',
        textCode4: '',
        textCode5: '',
        textCode6: '',
    });

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

    // define class name for TextField
    const labelClassName = 'font-normal text-sm text-body-light-color';
    const inputClassName = ' font-normal text-sm text-text-color';
    const wrapperClassName = 'ml-2 max-w-16 w-10 max-w-h-16 h-10 xs:w-12 xs:h-12 md:w-16 md:h-16';
    const inputCodeClassName =
        'font-normal text-body-dark-color text-center text-[20px] leading-[30px] xs:text-[24px] xs:leading-[24px] md:text-[28px] md:leading-[42px]';

    // STEP 1
    // send Email to server
    const handleSendMail = async () => {
        try {
            if (identifyData.email) {
                const response = await axiosClient.post(
                    'https://cready-backend.onrender.com/user/request/forgot-pasword',
                    { email: identifyData.email },
                );
                if (response.status === 200 || response.status === 201) {
                    setSteps(2);
                }
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            setErrorMessage({
                ...errorMessage,
                email: error.data.message[0],
            });
        }
    };

    //  STEP 2
    // define array to save ref TextField
    const elemRefs: Array<RefObject<HTMLDivElement>> = [];

    // handle input enter only one number
    const onChangeTextCode = (e: React.SyntheticEvent<HTMLInputElement>, numberField: number) => {
        let textCode = e.currentTarget.value;
        if (textCode.length > 1) {
            textCode = textCode.slice(-1);
        }
        setVarifyCode({
            ...varifyCode,
            [`textCode${numberField}`]: textCode,
        });
        setErrorMessage({
            ...errorMessage,
            secretNumber: '',
        });
    };

    // handle when enter the code will automatically tab
    const handleAutoTab: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
        const tabIndex = Number(e.currentTarget.getAttribute('data-index') || 0);
        let elem: boolean | React.RefObject<HTMLDivElement> = false;
        if (e.key === 'Backspace') {
            elem = tabIndex > 0 && elemRefs[tabIndex - 1];
        } else if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) {
            if (varifyCode[`textCode${tabIndex + 1}` as keyof typeof varifyCode].length > 0) {
                elem = tabIndex < elemRefs.length - 1 && elemRefs[tabIndex + 1];
            }
        } else {
            setVarifyCode({
                ...varifyCode,
                [`textCode${tabIndex + 1}`]: '',
            });
        }

        if (elem) {
            if (elem.current) elem.current.focus();
        }
    };

    // define TextField enter the code
    const blocks = Array.from({ length: 6 }, (element, index) => {
        // define ref and push ref to array
        const ref: React.LegacyRef<HTMLInputElement> = createRef();
        elemRefs.push(ref);
        return (
            <TextField
                key={index}
                value={varifyCode[`textCode${index + 1}` as keyof typeof varifyCode]}
                onChange={(e) => onChangeTextCode(e, index + 1)}
                wrapperClassName={index === 0 ? 'ml-0 ' + wrapperClassName : wrapperClassName}
                inputClassName={inputCodeClassName}
                onKeyUp={handleAutoTab}
                type={TEXTFIELD_TYPE.TEXT}
                dataIndex={index}
                ref={ref}
            ></TextField>
        );
    });

    // handle send code
    const handleSendCode = async () => {
        const secretNumber = Number(
            Object.keys(varifyCode).reduce((prev, key) => {
                return prev + varifyCode[key as keyof typeof varifyCode];
            }, ''),
        );

        try {
            const response = await axiosClient.post('https://cready-backend.onrender.com/user/check-secret-code', {
                email: identifyData.email,
                secretNumber,
            });
            if (response.status === 200 || response.status === 201) {
                setSteps(3);
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
        }
    };

    // STEP 3
    const handleChangePassword = async () => {
        try {
            const response = await axiosClient.post(
                'https://cready-backend.onrender.com/user/forgot-pasword',
                identifyData,
            );
            if (response.status === 200 || response.status === 201) {
                navigate('/login', { replace: true });
            }

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            setErrorMessage({
                ...errorMessage,
                newPassword: error.data.message[0],
                confirmPassword: error.data.message[1],
            });
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
            {steps === 2 && (
                <div className="mt-[42px] flex justify-between">
                    {blocks.map((Item) => {
                        return Item;
                    })}
                </div>
            )}

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
                            unit={showPassword.newPassword ? 'hide' : 'show'}
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
                            unit={showPassword.confirmPassword ? 'hide' : 'show'}
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
                            customClassName="w-[70px] h-10 pt-0 pb-0 pl-0 pr-0 rounded-[20px]"
                            onClick={steps === 1 ? handleSendMail : handleSendCode}
                        >
                            <span className=" text-white m-auto">icon</span>
                        </Button>
                    </>
                ) : (
                    <Button
                        fullWidth
                        onClick={handleChangePassword}
                        customClassName={'mb-[52px] mt-2 xxs:mt-8 h-10 flex flex-direction justify-center items-center'}
                    >
                        <span className="font-medium text-base text-white">
                            Change Password
                            {/* {isLoading && <p className="inline-block animate-bounce h-5 w-5">...</p>} */}
                        </span>
                    </Button>
                )}
            </div>
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
