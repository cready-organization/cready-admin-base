import React, { ReactElement, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const MenuItem = ({
  item,
}: {
  item: { key: string; name: string; icon: ReactElement; childList?: { key: string; name: string }[] };
}) => {
  const stylingSideBarClass = {
    wrap: '',
    menuItemGroup: 'w-full text-base font-light',
    menuItem: 'px-1',
    menuItemLogo: 'text-xl ',
    menuItemName: 'text-base font-light',
    menuItemContentWrap: 'px-6 flex justify-between py-2 w-full items-center cursor-pointer duration-300',
    menuItemChildList: 'px-10 ',
    menuItemChildItem: 'py-2 w-full flex items-center cursor-pointer',
    rotate: 'rotate-180 ',
  };
  //state for active child or menu is active
  const [active, setActive] = useState(false);
  const { pathname } = useLocation();

  const hanldeOnClick = () => {
    setActive(!active);
  };
  return (
    <div className={`app-side-bar__menu-item ${stylingSideBarClass.menuItemGroup}`}>
      <div className="">
        {!item.childList ? (
          <Link
            to={`${item.key}`}
            className={`app-side-bar__menu-item__content__wrap ${stylingSideBarClass.menuItemContentWrap} `}
            style={{ backgroundColor: `${pathname === `/${item.key}` ? '#F9F9F9' : 'transparent'}` }}
          >
            <div className={`app-side-bar__menu-item__content `}>
              <span
                className={`app-side-bar__menu-item__icon ${stylingSideBarClass.menuItem} ${stylingSideBarClass.menuItemLogo}`}
              >
                {item.icon}
              </span>
              <span
                className={`app-side-bar__menu-item__name ${stylingSideBarClass.menuItem} ${stylingSideBarClass.menuItemName}`}
              >
                {item.name}
              </span>
            </div>
            {item.childList ? (
              <span className="text-xs">
                <i className="fa-regular fa-chevron-down"></i>
              </span>
            ) : null}
          </Link>
        ) : (
          <div
            className={`app-side-bar__menu-item__content__wrap ${stylingSideBarClass.menuItemContentWrap} `}
            onClick={hanldeOnClick}
          >
            <div className={`app-side-bar__menu-item__content `}>
              <span
                className={`app-side-bar__menu-item__icon ${stylingSideBarClass.menuItem} ${stylingSideBarClass.menuItemLogo}`}
              >
                {item.icon}
              </span>
              <span
                className={`app-side-bar__menu-item__name ${stylingSideBarClass.menuItem} ${stylingSideBarClass.menuItemName}`}
              >
                {item.name}
              </span>
            </div>
            {item.childList ? (
              <span className={`text-xs duration-300 ${active ? stylingSideBarClass.rotate : ''}`}>
                <i className="fa-regular fa-chevron-down"></i>
              </span>
            ) : null}
          </div>
        )}
      </div>

      {item.childList && active ? (
        <div className={`app-side-bar__menu-item__child-list ${stylingSideBarClass.menuItemChildList}`}>
          <div className={`app-side-bar__menu-item__child-list`}>
            {item.childList.map((child) => {
              return (
                <Link
                  to={`${child.key}`}
                  key={child.key}
                  className={`app-side-bar__menu-item__child-item ${stylingSideBarClass.menuItemChildItem}`}
                >
                  <div
                    className={`app-side-bar__menu-item__child-item-name flex items-center ${
                      pathname === `/${child.key}` ? 'text-blue-500' : ''
                    } `}
                  >
                    <div
                      className={`w-1.5 h-1.5  mr-3 rounded-full ${
                        pathname === `/${child.key}` ? 'bg-blue-500' : ''
                      }`}
                    ></div>
                    {child.name}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default MenuItem;
