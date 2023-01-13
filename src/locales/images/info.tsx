import { colors } from "../colors";

export const InfoImg = ({ isActive }: any) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 -1 2 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.42995 3.088L0.139952 3.375L0.0579522 3.755L0.507952 3.838C0.801952 3.908 0.859952 4.014 0.795952 4.307L0.0579522 7.775C-0.136048 8.672 0.162952 9.094 0.865952 9.094C1.41095 9.094 2.04395 8.842 2.33095 8.496L2.41895 8.08C2.21895 8.256 1.92695 8.326 1.73295 8.326C1.45795 8.326 1.35795 8.133 1.42895 7.793L2.42995 3.088ZM2.49995 1C2.49995 1.26522 2.3946 1.51957 2.20706 1.70711C2.01952 1.89464 1.76517 2 1.49995 2C1.23474 2 0.980382 1.89464 0.792846 1.70711C0.605309 1.51957 0.499952 1.26522 0.499952 1C0.499952 0.734784 0.605309 0.48043 0.792846 0.292893C0.980382 0.105357 1.23474 0 1.49995 0C1.76517 0 2.01952 0.105357 2.20706 0.292893C2.3946 0.48043 2.49995 0.734784 2.49995 1Z"
        fill={
          isActive === false ? colors.buttonIconUnact : colors.buttonIconAct
        }
      />
    </svg>
  );
};
