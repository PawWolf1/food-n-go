import { useDispatch } from "react-redux";
import { clearForm } from "../../store/form";
import { resetAll } from "../../store/search";
import { IconButton } from "../../styles/Buttons";
import { colors } from "../colors";

export const DoubleArrowImg = ({ rotate }: any) => {
  return (
    <IconButton
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform={rotate === 180 ? "rotate(180)" : undefined}
    >
      <path
        d="M0.0500488 15L5.05005 7.5L0.0500488 0H2.50005L7.50005 7.5L2.50005 15H0.0500488ZM6.00005 15L11 7.5L6.00005 0H8.45005L13.45 7.5L8.45005 15H6.00005Z"
        fill="black"
      />
    </IconButton>
  );
};
