import React from "react";
import styled from "styled-components";

const ConEntry = styled.div`
  display: flex;
  max-width: 100%;
  margin: 5px;
  font-size: 14px;
  color: #666;
`;
const ConEntryTotal = styled.div`
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

const Con = props => {
  return (
    <div>
      <ConEntry>
        <ConEntryTotal>{props.entry[1]}</ConEntryTotal>
        {props.entry[0]}
      </ConEntry>
    </div>
  );
};

export default Con;