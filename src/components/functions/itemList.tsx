import { getString } from "../../locales/languages/string";
import { Food } from "../../models/Food";
import { SerifText } from "../../styles/TextStyles";
import { CartFood } from "../CartFood";
import { deleteDuplicats } from "./deleteDuplicats";
import { priceAll } from "./priceAll";

export function generateList(cart: any, setCart: any, mode: any) {
  let clone = deleteDuplicats([...cart]);
  return (
    <>
      {clone?.map((element: Food, index: number) => (
        <CartFood
          data={element}
          cart={clone}
          setCart={setCart}
          index={index}
          number={element.amount}
          mode={mode}
          key={index}
        />
      ))}
      {mode === "cart" || mode === "mode" ? null : (
        <div style={{ padding: "10px 0px 0px 5%" }}>
          <SerifText>
            {getString("other", "value")} {priceAll(cart)}$
          </SerifText>
        </div>
      )}
    </>
  );
}
