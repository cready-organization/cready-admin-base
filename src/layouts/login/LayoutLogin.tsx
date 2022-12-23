import React, { PropsWithChildren, useState, useEffect } from "react";

import logoCready from 'src/assets/logo-cready.png';
import backgroundList from 'src/assets/images/background/backgroundList';

const BACKGROUND_INDEX = 'backgroundIndex';

function LayoutLogin({children}: PropsWithChildren) {
    const [indexBackground, setIndexBackground] = useState(0);

    const indexList: number[] = JSON.parse(sessionStorage.getItem(BACKGROUND_INDEX) || 'false') || [];
    const lengthBackgroundList = backgroundList.length;

    useEffect(() => {
        let randomIndex: number;
        if (indexList.length === lengthBackgroundList) {
            sessionStorage.setItem(BACKGROUND_INDEX, '');
        } else {
            do {
                randomIndex = Math.floor(Math.random() * lengthBackgroundList);
            } while (indexList.includes(randomIndex));
            setIndexBackground(randomIndex);
            indexList.push(randomIndex);
            sessionStorage.setItem(BACKGROUND_INDEX, JSON.stringify(indexList));
        }
    }, []);

    return (
        <div style={{backgroundImage: `url('${backgroundList[indexBackground]}')`}} className={`h-[100vh] w-[100vw]`}>
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