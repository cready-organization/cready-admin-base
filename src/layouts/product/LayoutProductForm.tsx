import React from 'react';

import { Button, TextField } from 'components';
import { BUTTON_TYPE } from 'ultil/enum/app-enum';
import { TEXTFIELD_TYPE } from 'ultil/enum/app-enum';

function LayoutProductForm() {
  return (
    <div className="p-6">
      <div className="flex items-center">
        <div className="flex items-center">
          <span className="px-3 py-2 font-bold text-base cursor-pointer">
            <i className="fa-light fa-chevron-left"></i>
          </span>
          <h3 className="font-normal text-text-color text-base">Quay lại danh sách sản phẩm</h3>
        </div>
        <div className="ml-auto flex items-center">
          <Button buttonType={BUTTON_TYPE.BASIC} customClassName="h-10 flex items-center">
            Discard
          </Button>
          <Button customClassName="h-10 ml-4">
            <span>Save</span>
          </Button>
        </div>
      </div>
      <div className="w-2/3 h-screen bg-white mt-6 border border-border-color border-solid rounded-[20px]">
        <div className="h-14 px-6 py-[18px] items-center border-b">
          <h3 className="text-base font-normal text-text-color">Thông tin chung</h3>
        </div>
        <div className="pt-12 px-6">
          <TextField
            label="Product Name"
            wrapperClassName="text-body-light-color text-sm font-normal"
            type={TEXTFIELD_TYPE.TEXT}
            inputClassName=" px-0"
          />
          <div className="mt-4 grid grid-cols-2 gap-[30px]">
            <TextField
              label="Product Name"
              wrapperClassName="text-body-light-color text-sm font-normal"
              type={TEXTFIELD_TYPE.TEXT}
              inputClassName=" px-0"
            />
            <TextField
              label="Product Name"
              wrapperClassName="text-body-light-color text-sm font-normal"
              type={TEXTFIELD_TYPE.TEXT}
              inputClassName=" px-0"
            />
          </div>
          <TextField
            label="Product Name"
            wrapperClassName="mt-4 text-body-light-color text-sm font-normal"
            type={TEXTFIELD_TYPE.TEXT}
            inputClassName=" px-0"
          />
        </div>
      </div>
    </div>
  );
}

export default LayoutProductForm;

