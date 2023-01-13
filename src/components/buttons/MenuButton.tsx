import { ButtonProduct } from "../../styles/Buttons";
import { chooseIcon } from "../functions/getIcon";

export const MenuButton = ({ isOpen, setIsOpen }: any) => {
  return (
    <ButtonProduct
      theme={{ size: "35px", sqr: true }}
      onClick={() => setIsOpen(!isOpen)}
    >
      {chooseIcon("menu", "true")}
    </ButtonProduct>
  );
};
