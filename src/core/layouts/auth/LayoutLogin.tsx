import React, { PropsWithChildren, useState, useEffect } from 'react';

import logoCready from 'src/assets/logo-cready.png';
import backgroundList from 'src/assets/images/background/backgroundList';

const BACKGROUND_INDEX = 'backgroundIndex';

function LayoutLogin({ children }: PropsWithChildren) {
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
        <div
            style={{ backgroundImage: `url('${backgroundList[indexBackground]}')` }}
            className={`min-h-[100vh] w-full bg-cover bg-[center_center] relative p-8 sm:p-[70px] after:content-[''] after:absolute after:bg-overlay-color after:top-0 after:bottom-0 after:left-0 after:right-0 after:pointer-events-none `}
        >
            <div className="min-h-[calc(100vh_-_64px)] grid gap-5 sm:min-h-[calc(100vh_-_140px)] lg:gap-[100px] xl:grid-cols-2 z-10 relative">
                <div className="flex justify-center items-center">
                    <img className="block max-w-[150px] xs:max-w-[370px] w-full" src={logoCready} />
                </div>
                <div className="w-full flex justify-center xl:justify-start">
                    <div className="w-full max-w-[600px] h-full flex flex-col items-center bg-[#fff] rounded-[20px] pt-[9%] px-4 pb-4 xs:pb-0 xs:px-[100px] ">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LayoutLogin;
