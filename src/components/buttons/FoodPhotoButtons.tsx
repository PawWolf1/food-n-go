import { ButtonProduct } from "../../styles/Buttons";
import { chooseIcon } from "../functions/getIcon";
import { showProductInfo } from "../functions/showProductInfo";

export const FoodPhotoButton = ({
  icon,
  onClick,
  sqr,
  isActive,
  setInfo,
  size,
  id,
}: any) => {
  return (
    <ButtonProduct
      theme={{ sqr, isActive, size, icon }}
      onClick={isActive === false ? null : onClick}
      onMouseEnter={() => (icon === "info" ? showProductInfo(true, id) : null)}
      onMouseLeave={() => (icon === "info" ? showProductInfo(false, id) : null)}
    >
      {chooseIcon(icon, isActive)}
    </ButtonProduct>
  );
};
