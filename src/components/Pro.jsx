import React from "react";
import styled from "styled-components";

const ProEntry = styled.div`
  display: flex;
  max-width: 100%;
  margin: 5px;
  font-size: 14px;
  color: #666;
`;
const ProEntryTotal = styled.div`
  width: 10px;
  height: 15px;
  color: #666;
  font-weight: 700;
  background-color: #eee;
  padding: 1px 9px;
  border-radius: 20px;
  margin-right: 5px;
  text-align: center;
`;
const Pro = props => {
  return (
    <div>
      <ProEntry>
        <ProEntryTotal>{props.entry[1]}</ProEntryTotal>
        {props.entry[0]}
      </ProEntry>
    </div>
  );
};

export default Pro;
