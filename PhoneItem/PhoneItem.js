import React from "react";
import './PhoneItem.module.scss';

const PhoneItem = () => {
    return (
        <div className="phone_item">
          <div className="phone_item_left">
            <div className="phone_item_name">박지안</div>
            <div className="phone_item_phone">010-0000-0000</div>
          </div>
          <div classNmae="phone_item_right">
            <button>삭제</button>
          </div>
        </div>
    );
}

export default PhoneItem;