import React, { PropsWithChildren } from "react";

import logoCready from 'src/assets/logo-cready.png';
import background1 from 'src/assets/images/background/background-base-1.png';

function LayoutLogin({children}: PropsWithChildren) {

    return (
        <div style={{backgroundImage: `url('${background1}')`}} className={`h-[100vh] w-[100vw]`}>
            <div className="h-full w-full bg-overlay-color flex flex-col lg:justify-center items-center lg:flex-row">
                <div className='flex pt-14 md:w-80 md:pt-32 lg:w-[380px] lg:h-[884px] xl:w-[450px] 2xl:w-[600px]'>
                    <img className="block w-[150px] h-10 object-contain mx-auto md:w-80 md:h-20 lg:m-auto lg:w-[370px] lg:h-24 " src={logoCready}/>
                </div>
                <div className='w-[326px] h-[505px] mt-20 flex flex-col items-center bg-[#fff] rounded-[20px] md:w-[450px] md:h-[600px] lg:mt-0 lg:w-[550px] lg:h-[884px] lg:ml-12 xl:w-[600px] xl:ml-[100px]'>
                    {children}
                </div>
            </div>
        </div>);
}

export default LayoutLogin;