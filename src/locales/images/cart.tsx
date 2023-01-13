import { colors } from "../colors";

export const CartImg = ({ isActive }: any) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="10 -3 10 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.9133 13.619V10.7619H11.9393V8.85714H14.9133V6H16.8959V8.85714H19.8699V10.7619H16.8959V13.619H14.9133ZM10.948 26C10.4027 26 9.93614 25.8137 9.5482 25.441C9.1596 25.0676 8.9653 24.619 8.9653 24.0952C8.9653 23.5714 9.1596 23.1229 9.5482 22.7495C9.93614 22.3768 10.4027 22.1905 10.948 22.1905C11.4932 22.1905 11.9598 22.3768 12.3477 22.7495C12.7363 23.1229 12.9306 23.5714 12.9306 24.0952C12.9306 24.619 12.7363 25.0676 12.3477 25.441C11.9598 25.8137 11.4932 26 10.948 26ZM20.8612 26C20.316 26 19.8494 25.8137 19.4615 25.441C19.0729 25.0676 18.8786 24.619 18.8786 24.0952C18.8786 23.5714 19.0729 23.1229 19.4615 22.7495C19.8494 22.3768 20.316 22.1905 20.8612 22.1905C21.4064 22.1905 21.8734 22.3768 22.262 22.7495C22.6499 23.1229 22.8439 23.5714 22.8439 24.0952C22.8439 24.619 22.6499 25.0676 22.262 25.441C21.8734 25.8137 21.4064 26 20.8612 26ZM10.948 21.2381C10.2045 21.2381 9.63445 20.9244 9.23792 20.2971C8.84139 19.6705 8.83313 19.0476 9.21314 18.4286L10.5514 16.0952L6.98265 8.85714H5V6.95238H8.24659L12.4597 15.5238H19.4238L23.2652 8.85714L25 9.7619L21.1586 16.4286C20.9769 16.746 20.7373 16.9921 20.4399 17.1667C20.1425 17.3413 19.8038 17.4286 19.4238 17.4286H12.0384L10.948 19.3333H22.8439V21.2381H10.948Z"
        fill={
          isActive === false ? colors.buttonIconUnact : colors.buttonIconAct
        }
      />
    </svg>
  );
};
