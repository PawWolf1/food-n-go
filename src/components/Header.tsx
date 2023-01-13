import { useState } from "react";
import { LogoImg } from "../locales/images/logo";
import { TitleImg } from "../locales/images/title";
import {
  HeaderBox,
  LoginBox,
  LogoBox,
  TitleTxt,
  LogoSubBox,
} from "../styles/Header";
import { MenuButton } from "./buttons/MenuButton";
import { MenuHidden } from "./MenuHidden";
import { Search } from "./Search";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <HeaderBox>
      <Search></Search>
      <LogoBox>
        <LogoSubBox onClick={() => navigate("/")}>
          <TitleImg />
        </LogoSubBox>
      </LogoBox>
      <TitleTxt></TitleTxt>
      <LoginBox>
        <MenuButton isOpen={menuOpen} setIsOpen={setMenuOpen} />
      </LoginBox>
      <MenuHidden isOpen={menuOpen} />
    </HeaderBox>
  );
};
