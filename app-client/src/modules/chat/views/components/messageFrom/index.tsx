import React from "react";

import * as Component from "./style";

interface MsgProps{
  data: MessageEntity;
}

export function MesssageFrom({ data }: MsgProps){
  
  return (
    <Component.Container>
      <Component.TextWrapper>
        <Component.Text>
          {data.message}
        </Component.Text>
      </Component.TextWrapper>
      <Component.TimestampWrapper>
      <Component.Timestamp>{data.timestamp}</Component.Timestamp>
      </Component.TimestampWrapper>
    </Component.Container>
  );
}