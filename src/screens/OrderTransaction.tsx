import { useState } from "react";
import { MainBody } from "../components/MainBody";
import { OrderTransactionSub } from "../components/subScreens/OrderTransactionSub";

export const OrderTransactionScr = () => {
  return (
    <>
      <MainBody>
        <OrderTransactionSub />
      </MainBody>
    </>
  );
};
