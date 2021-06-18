import React from "react";
import PhoneItem from "../PhoneItem"
import styled from "styled-components";

const PhoneWrapper = styled.div`
  display: flex;
  flex-direction: column;
  `;

const PhoneList = () => {
    return (
        <div className="phone_list">
          <PhoneItem/>
          <PhoneItem/>
          <PhoneItem/>
        </div>
    );
}

export default PhoneList;