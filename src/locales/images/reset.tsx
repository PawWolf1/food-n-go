import { useDispatch } from "react-redux";
import { clearForm } from "../../store/form";
import { resetAll } from "../../store/search";
import { IconButton } from "../../styles/Buttons";
import { colors } from "../colors";

export const ResetImg = () => {
  const disptach = useDispatch();
  return (
    <IconButton
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => disptach(resetAll())}
    >
      <path
        d="M12 20C9.76667 20 7.875 19.225 6.325 17.675C4.775 16.125 4 14.2333 4 12C4 9.76667 4.775 7.875 6.325 6.325C7.875 4.775 9.76667 4 12 4C13.15 4 14.25 4.23767 15.3 4.713C16.35 5.18767 17.25 5.86667 18 6.75V4H20V11H13V9H17.2C16.6667 8.06667 15.9377 7.33333 15.013 6.8C14.0877 6.26667 13.0833 6 12 6C10.3333 6 8.91667 6.58333 7.75 7.75C6.58333 8.91667 6 10.3333 6 12C6 13.6667 6.58333 15.0833 7.75 16.25C8.91667 17.4167 10.3333 18 12 18C13.2833 18 14.4417 17.6333 15.475 16.9C16.5083 16.1667 17.2333 15.2 17.65 14H19.75C19.2833 15.7667 18.3333 17.2083 16.9 18.325C15.4667 19.4417 13.8333 20 12 20Z"
        fill="black"
      />
    </IconButton>
  );
};
