import React from "react";

import * as Component from "./style";

import AddIcon from "../../../../../global/assets/icons/add.svg";
import SendIcon from "../../../../../global/assets/icons/send.svg";

export function MessageBar() {

  return(
      <Component.Container>

        <Component.Action>
          <AddIcon/>
        </Component.Action>

        <Component.TextField/>

        <Component.Action>
          <SendIcon/>
        </Component.Action>

    </Component.Container>
  );
}