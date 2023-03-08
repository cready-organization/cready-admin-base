import React from 'react';
import ReactPaginate from 'react-paginate';

import { Button, TextField } from 'src/components';
import { TEXTFIELD_TYPE } from 'src/ultil/enum/app-enum';

const stylingListViewTypeClass = {
    textChildButton: 'p-4 relative -top-px',
    nextTextChildButton: 'px-1 rounded bg-primary-color text-center text-white text-xs',
    toggleButton: 'inline-block w-6 h-6 mr-2 text-center border border-solid border-border-color rounded-md',
    filterButton: 'h-10 mr-4 border border-border-color border-solid',
    tableColumnHeader: 'p-5 font-medium text-sm text-body-light-color',
    tableColumnBody: 'p-5 font-normal text-base text-text-color',
    paginateButton: 'h-[34px] w-[34px] ml-2 flex items-center justify-center bg-bg-color rounded-default',
};

function DefaultListViewType() {
    return (
        <div className="p-6">
            <header className="flex justify-between items-center">
                <h3 className="font-medium text-text-color text-[28px] leading-[42px]">Products</h3>
                <div className="flex items-center">
                    <Button buttonType="basic" customClassName="h-10 flex items-center">
                        <i className="mr-[10px] fa-light fa-arrow-down-to-bracket"></i>
                        Export
                        <i className="ml-2 text-sm fa-light fa-chevron-down"></i>
                    </Button>
                    <Button customClassName="h-10 ml-4 flex justify-between items-center">
                        Create
                        <span className="h-6 w-6 rounded-lg ml-3 text-sm bg-black opacity-20 flex items-center justify-center">
                            <i className="fa-light fa-plus"></i>
                        </span>
                    </Button>
                </div>
            </header>
            <div className="w-full bg-white mt-6 border border-border-color border-solid rounded-[20px]">
                <header className="h-14 flex justify-between items-center border-b">
                    <div className="text-base font-normal text-text-color">
                        <span className={`${stylingListViewTypeClass.textChildButton} border-b border-primary-color`}>
                            All <span className={stylingListViewTypeClass.nextTextChildButton}>99+</span>
                        </span>
                        <span className={stylingListViewTypeClass.textChildButton}>
                            Disabled <span className={stylingListViewTypeClass.nextTextChildButton}>8</span>
                        </span>
                        <span className={stylingListViewTypeClass.textChildButton}>
                            Available <span className={stylingListViewTypeClass.nextTextChildButton}>8</span>
                        </span>
                    </div>
                    <div className="ml-2">
                        <span
                            className={`${stylingListViewTypeClass.toggleButton} border-primary-color text-primary-color`}
                        >
                            <i className="fa-light fa-bars"></i>
                        </span>
                        <span className={`${stylingListViewTypeClass.toggleButton} `}>
                            <i className="fa-light fa-grid-2"></i>
                        </span>
                    </div>
                </header>
                <div className="mt-4 mx-4 flex justify-between items-center">
                    <TextField
                        wrapperClassName="grow text-body-light-color text-sm font-normal"
                        inputClassName="px-0"
                        prefix={<i className="fa-light fa-magnifying-glass"></i>}
                        placeholder="Search product by code, name, barcode"
                    />
                    <div className="ml-24">
                        <Button customClassName={stylingListViewTypeClass.filterButton} buttonType="basic">
                            Product Type
                            <i className="ml-2 text-sm fa-light fa-chevron-down"></i>
                        </Button>
                        <Button customClassName={stylingListViewTypeClass.filterButton} buttonType="basic">
                            Customer Filter
                            <i className="ml-2 text-sm fa-light fa-chevron-down"></i>
                        </Button>
                        <Button
                            customClassName="h-10 border border-solid border-transparent bg-bg-color text-body-light-color"
                            buttonType="disabled"
                        >
                            Save Filter
                        </Button>
                    </div>
                </div>
                <div className="p-4">
                    <table className="w-full text-left">
                        <thead>
                            <tr>
                                <th className={stylingListViewTypeClass.tableColumnHeader}>
                                    <input className="" type="checkbox" />
                                </th>
                                <th className={stylingListViewTypeClass.tableColumnHeader}>PRODUCT NAME</th>
                                <th className={stylingListViewTypeClass.tableColumnHeader}>PRODUCT TYPE</th>
                                <th className={stylingListViewTypeClass.tableColumnHeader}>QUANTITY ON HAND</th>
                                <th className={stylingListViewTypeClass.tableColumnHeader}>FORECASTED QUANTITY</th>
                                <th className={stylingListViewTypeClass.tableColumnHeader}>
                                    <i className="fa-light fa-sliders-simple"></i>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={stylingListViewTypeClass.tableColumnBody}>
                                    <input type="checkbox" />
                                </td>
                                <td className={stylingListViewTypeClass.tableColumnBody}>
                                    MacBook Pro 15 Retina Touch Bar MV902
                                </td>
                                <td className={stylingListViewTypeClass.tableColumnBody}>Storable Product</td>
                                <td className={stylingListViewTypeClass.tableColumnBody + ' text-right'}>10</td>
                                <td className={stylingListViewTypeClass.tableColumnBody + ' text-right'}>20</td>
                                <td className={stylingListViewTypeClass.tableColumnBody + ' text-dark-yellow-color'}>
                                    <i className="fa-light fa-hexagon-exclamation"></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <footer className="flex items-center justify-between">
                        <div className="text-body-light-color font-normal">
                            <Button
                                customClassName="h-10 border border-solid border-border-color text-sm text-body-light-color font-normal"
                                buttonType="basic"
                            >
                                10
                                <i className="ml-2 fa-light fa-chevron-down"></i>
                            </Button>
                            <span className="text-base ml-[14px]">Showing 1 - 10 of 100</span>
                        </div>
                        <ReactPaginate
                            className="flex items-center justify-between text-base text-text-color font-normal"
                            pageCount={7}
                            initialPage={0}
                            previousLabel={<i className="fa-light fa-chevron-left"></i>}
                            nextLabel={<i className="fa-light fa-chevron-right"></i>}
                            marginPagesDisplayed={2}
                            breakLabel={'...'}
                            prevPageRel="<<"
                            previousClassName={stylingListViewTypeClass.paginateButton}
                            nextClassName={stylingListViewTypeClass.paginateButton}
                            pageClassName={stylingListViewTypeClass.paginateButton}
                            activeClassName={stylingListViewTypeClass.paginateButton + ' !bg-primary-color text-white'}
                            disabledClassName="bg-bg-color cursor-not-allowed"
                            disabledLinkClassName="bg-bg-color cursor-not-allowed"
                            breakClassName="ml-2"
                        />
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default DefaultListViewType;
