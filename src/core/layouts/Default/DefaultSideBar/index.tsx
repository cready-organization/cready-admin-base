import React, { ReactElement, useState } from 'react';
import creadyLogo from 'src/assets/cready-basic-logo.png';
import './style.scss';

const stylingSideBarClass = {
    wrap: '',
    menuItemGroup: 'w-full text-base font-light',
    menuItem: 'px-1',
    menuItemLogo: 'text-xl ',
    menuItemName: 'text-base font-light',
    menuItemContentWrap: 'px-6 flex justify-between py-2 w-full items-center cursor-pointer',
    menuItemChildList: 'px-10 text-blue-500',
    menuItemChildItem: 'py-2 w-full flex items-center cursor-pointer',
};

const menuItemList = [
    { key: 'general', name: 'General', icon: <i className="fa-thin fa-house"></i> },
    {
        key: 'products',
        name: 'Products',
        icon: <i className="fa-thin fa-cart-shopping"></i>,
        childList: [
            {
                key: 'product-list',
                name: 'Products List',
            },
        ],
    },
    { key: 'dashboard', name: 'Dashboard', icon: <i className="fa-thin fa-grid"></i> },
    { key: 'setting', name: 'Setting', icon: <i className="fa-thin fa-gear"></i> },
];
export const MenuItem = ({
    stylingclass,
    item,
}: {
    stylingclass: typeof stylingSideBarClass;
    item: { key: string; name: string; icon: ReactElement; childList?: { key: string; name: string }[] };
}) => {
    //state for active child or menu is active
    const [active, setActive] = useState(false);

    return (
        <div className={`app-side-bar__menu-item ${stylingclass.menuItemGroup}`}>
            <div
                className={`app-side-bar__menu-item__content__wrap ${stylingclass.menuItemContentWrap} `}
                style={{ backgroundColor: `${item.key === 'products' ? '#F9F9F9' : 'transparent'}` }}
            >
                <div className={`app-side-bar__menu-item__content `}>
                    <span
                        className={`app-side-bar__menu-item__icon ${stylingclass.menuItem} ${stylingclass.menuItemLogo}`}
                    >
                        {item.icon}
                    </span>
                    <span
                        className={`app-side-bar__menu-item__name ${stylingclass.menuItem} ${stylingclass.menuItemName}`}
                    >
                        {item.name}
                    </span>
                </div>
                {item.childList ? (
                    <span className="text-xs">
                        <i className="fa-regular fa-chevron-down"></i>
                    </span>
                ) : null}
            </div>
            {item.childList ? (
                <div className={`app-side-bar__menu-item__child-list ${stylingclass.menuItemChildList}`}>
                    <div className={`app-side-bar__menu-item__child-list`}>
                        {item.childList.map((child) => {
                            return (
                                <a
                                    key={child.key}
                                    className={`app-side-bar__menu-item__child-item ${stylingclass.menuItemChildItem}`}
                                >
                                    <div className="w-1.5 h-1.5 bg-blue-500 mr-3 rounded-full"></div> {child.name}
                                </a>
                            );
                        })}
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export const MenuGroup = ({ itemList }: { itemList: typeof menuItemList }): ReactElement => {
    return (
        <>
            {itemList.map((item) => {
                return <MenuItem key={item.key} stylingclass={stylingSideBarClass} item={item} />;
            })}
        </>
    );
};

export default function DefaultSideBar() {
    return (
        <div className={`app-side-bar__wrap `}>
            <div
                className={`app-side-bar__logo w-full bg-no-repeat mx-6`}
                style={{ backgroundImage: `url(${creadyLogo})`, height: '55px' }}
            ></div>
            <div className={`app-side-bar__menu-group`}>
                <MenuGroup itemList={menuItemList} />
            </div>
        </div>
    );
}
