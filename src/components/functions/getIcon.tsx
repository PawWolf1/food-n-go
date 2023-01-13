import { CartImg } from "../../locales/images/cart";
import { DeleteImg } from "../../locales/images/delete";
import { InfoImg } from "../../locales/images/info";
import { LanguagesImg } from "../../locales/images/languages";
import { LogoutImg } from "../../locales/images/logout";
import { MenuImg } from "../../locales/images/menu";
import { MinusImg } from "../../locales/images/minus";
import { MyListsImg } from "../../locales/images/myLists";
import { OrderHistoryImg } from "../../locales/images/orderHistory";
import { PlusImg } from "../../locales/images/plus";

export function chooseIcon(icon: string, isActive: string) {
  switch (icon) {
    case "cart":
      return <CartImg isActive={isActive} />;
    case "info":
      return <InfoImg isActive={isActive} />;
    case "plus":
      return <PlusImg />;
    case "minus":
      return <MinusImg />;
    case "delete":
      return <DeleteImg />;
    case "menu":
      return <MenuImg />;
    case "ordersHistory":
      return <OrderHistoryImg />;
    case "myLists":
      return <MyListsImg />;

    case "logout":
      return <LogoutImg />;
    case "languages":
      return <LanguagesImg />;
    default:
      return null;
  }
}
