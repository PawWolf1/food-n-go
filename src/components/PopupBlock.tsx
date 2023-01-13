import { PopupWindowMainBox } from "../styles/Input";
import { PopupChoose } from "./popups/PopupChoose";
import { PopupConfirm } from "./popups/PopupConfirm";
import { PopupInput } from "./popups/PopupInput";

export function popupBlock(props: any) {
  function selectPopup() {
    switch (props?.popup.type) {
      case "deliveryTime":
        return <PopupChoose {...props} />;
      case "choose":
        return <PopupChoose {...props} />;
      case "payWith":
        return <PopupChoose {...props} />;
      case "confirm":
        return <PopupConfirm {...props} />;
      case "input":
        return <PopupInput {...props} />;
      default:
        return <PopupConfirm {...props} />;
    }
  }

  if (props?.popup.isActive === true) {
    const html = document.querySelector("html");
    if (html) {
      // html.style.position = "fixed";
    }
    return (
      <PopupWindowMainBox>
        <>{selectPopup()}</>
      </PopupWindowMainBox>
    );
  } else {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflowX = "auto";
      html.style.position = "static";
    }
  }
}
