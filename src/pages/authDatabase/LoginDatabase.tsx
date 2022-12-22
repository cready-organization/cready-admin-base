import { useState } from 'react';
import { Button, Textarea, TextField } from "src/components";
import { Link } from 'react-router-dom';

import { TEXTFIELD_TYPE } from "src/helpers/app-enum";
import databaseImg from 'src/assets/images/database.png';
import LayoutLogin from 'src/layouts/login/LayoutLogin';


function LoginDatabase() {
    const [showPassword, setShowPassword] = useState(false);

    const onClickUnit = () => {
        setShowPassword(!showPassword);
    };

    const labelClassName = 'font-normal text-sm text-blur-color';
    const inputClassName = ' font-normal text-sm text-text-main-color';

    return (
        <LayoutLogin>
            <div className="w-[86px] h-24 mt-6 rounded-full bg-[#F9F9F9] flex md:w-40 md:h-40 lg:w-[220px] lg:h-[220px] lg:mt-[92px]">
                <img className="m-auto w-10 h-[40px] md:w-20 md:h-20 lg:w-[100px] lg:h-[100px]" src={databaseImg}/>
            </div>
            <h3 className="text-main-color font-medium text-base mt-2 lg:mt-9 lg:text-[1.75rem] lg:leading-[2.625rem] ">Login to Mange Database</h3>
            <div>
                <div className="mt-12 lg:mt-[42px]">
                    <TextField 
                        wrapperClassName='w-[294px] lg:w-[400px]' 
                        inputClassName={inputClassName} 
                        label='User Master' 
                        labelClassName={labelClassName} 
                        type={TEXTFIELD_TYPE.TEXT} 
                    />
                </div>
                <div className="mt-6">
                    <TextField 
                        wrapperClassName="w-[294px] lg:w-[400px]" 
                        inputClassName={inputClassName} 
                        label='Master Password' 
                        labelClassName={labelClassName} 
                        type={showPassword ? TEXTFIELD_TYPE.TEXT : TEXTFIELD_TYPE.PASSWORD} 
                        unit={showPassword ? 'hide' : 'show'} 
                        onClickUnit={onClickUnit}
                    />
                </div>
            </div>
            <div>
                <Button customClassName='mt-6 w-[87px] h-10 flex flex-direction justify-center items-center bg-button-main-color rounded-default'>
                    <span className='font-medium text-base text-white'>Login</span>
                </Button>
            </div>
            <div className="mt-14 mb-4 lg:mt-[185px] lg:mb-6">
                <span className="font-normal text-sm text-blur-color ">Go back to <Link className="font-normal text-sm text-[#0469E3]" to={'/login'}>Login to Admin</Link></span>
            </div>
        </LayoutLogin>
    );
}
    

export default LoginDatabase;