import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginMenuButton } from "../../styles/Buttons";
import { SerifText } from "../../styles/TextStyles";
import { changeLanguage } from "../functions/changeLanguage";
import { chooseIcon } from "../functions/getIcon";

export const MenuButton = ({ label, img, nav, onClick, active }: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <LoginMenuButton onClick={() => (nav ? navigate(`/${nav}`) : onClick())}>
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {chooseIcon(img, "")}
        </div>
        <div
          style={{
            flex: 6,
            display: "flex",
            alignItems: "center",
            marginLeft: "10px",
          }}
        >
          <SerifText>{label}</SerifText>
        </div>
      </LoginMenuButton>
      {img === "languages" && active === true ? (
        <>
          <MenuButton
            img={"xD"}
            label={"Pl"}
            onClick={() => changeLanguage(dispatch, "pl")}
          />
          <MenuButton
            img={"xD"}
            label={"Eng"}
            onClick={() => changeLanguage(dispatch, "eng")}
          />
        </>
      ) : null}
    </>
  );
};
