import { useDispatch } from "react-redux";
import { clearForm } from "../../store/form";
import { resetAll } from "../../store/search";
import { IconButton } from "../../styles/Buttons";
import { colors } from "../colors";

export const ArrowImg = ({ rotate }: any) => {
  return (
    <IconButton
      width="7"
      height="15"
      viewBox="0 0 7 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform={rotate === 180 ? "rotate(180)" : undefined}
    >
      <path
        d="M1.01066 9.24468e-05L6.70068 7.50009L1.01066 15.0001L0.000683876 13.6688L4.68073 7.50009L0.000683876 1.33134L1.01066 9.24468e-05Z"
        fill="black"
      />
    </IconButton>
  );
};
