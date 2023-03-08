import React, { ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';
import creadyLogo from 'assets/cready-basic-logo.png';
import MenuItem from './MenuItem/MenuItem';
import './style.scss';

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

export const MenuGroup = ({ itemList }: { itemList: typeof menuItemList }): ReactElement => {
  return (
    <>
      {itemList.map((item) => {
        return <MenuItem key={item.key} item={item} />;
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

