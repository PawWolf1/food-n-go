import { Food } from "../models/Food";
import { ListBox, TestListElementBox } from "../styles/OrderTrans";
import { SerifText, SerifTextL, SerifTextS } from "../styles/TextStyles";
import { cutText } from "./functions/cutText";
import { priceAll } from "./functions/priceAll";

export const SummaryList = ({ data }: any) => {
  return (
    <>
      <ListBox>
        {data.map((item: any) => (
          <TestListElementBox>
            <div style={{ flex: 3, marginLeft: "10px" }}>
              <SerifTextS>{cutText(item.name, 15)}</SerifTextS>
            </div>
            <div style={{ flex: 1 }}>
              <SerifTextS>x{item.amount}</SerifTextS>
            </div>
            <div style={{ flex: 1 }}>
              <SerifTextS>{item.price * item.amount}$</SerifTextS>
            </div>
          </TestListElementBox>
        ))}

        <SerifTextL>Suma: {priceAll(data)}$</SerifTextL>
      </ListBox>
    </>
  );
};
