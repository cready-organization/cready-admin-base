import React from 'react';

import avtExample from 'assets/images/header/avt-example.png';

export default function DefaultHeader() {
    const stylingHeaderClass = {
        wrap: 'flex flex-row w-full flex-row content-center justify-between items-center  ',
        menuToggle: 'flex items-center cursor-pointer',
        mainGroup: 'flex items-center',
        actionGroup: 'flex items-center pr-4 ',
        actionItem: 'mx-4',
        profileGroup: 'flex items-center pl-4 border-l-2 border-gray-100',
        profileItem: 'mx-1 cursor-pointer',
        profileInfoItem: 'mx-1 cursor-pointer',
    };

    return (
        <div className={`app-header__wrap ${stylingHeaderClass.wrap}`}>
            <div className={`app-header__menu-toggle ${stylingHeaderClass.menuToggle}`}>
                <i className="fa-solid fa-bars-sort"></i>
            </div>

            <div className={`app-header__main-group ${stylingHeaderClass.mainGroup}`}>
                <div className={`app-header__main-group-action ${stylingHeaderClass.actionGroup}`}>
                    <button className={`app-header__main-group-action-item ${stylingHeaderClass.actionItem}`}>
                        <i className="fa-regular fa-magnifying-glass"></i>
                    </button>
                    <button className={`app-header__main-group-action-item ${stylingHeaderClass.actionItem}`}>
                        <i className="fa-regular fa-bell"></i>
                    </button>
                </div>
                <div className={`app-header__main-group-profile ${stylingHeaderClass.profileGroup}`}>
                    <div
                        className={`app-header__main-group-profile__avt ${stylingHeaderClass.profileItem}`}
                        style={{ backgroundImage: `url(${avtExample})`, width: '40px', height: '40px' }}
                    ></div>
                    <div className={`app-header__main-group-profile__info ${stylingHeaderClass.profileItem}`}>
                        <span
                            className={`app-header__main-group-profile__info-role ${stylingHeaderClass.profileInfoItem}`}
                        >
                            Admin
                        </span>
                        <button
                            className={`app-header__main-group-profile__info-toggle ${stylingHeaderClass.profileInfoItem}`}
                        >
                            <i className="fa-solid fa-caret-down"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
