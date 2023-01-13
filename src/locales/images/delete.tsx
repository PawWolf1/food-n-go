import { colors } from "../colors";

export const DeleteImg = ({ isActive }: any) => {
  return (
    <svg
      width="31"
      height="31"
      viewBox="1 0 7 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.24999 9.29167C1.24999 9.8875 1.73749 10.375 2.33333 10.375H6.66666C7.2625 10.375 7.75 9.8875 7.75 9.29167V2.79167H1.24999V9.29167ZM2.33333 3.875H6.66666V9.29167H2.33333V3.875ZM6.39583 1.16667L5.85416 0.625H3.14583L2.60416 1.16667H0.708328V2.25H8.29166V1.16667H6.39583Z"
        fill={
          isActive === false ? colors.buttonIconUnact : colors.buttonIconAct
        }
      />
    </svg>
  );
};
