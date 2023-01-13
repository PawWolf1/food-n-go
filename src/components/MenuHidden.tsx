import { useState } from "react";
import { useDispatch } from "react-redux";
import { MainMenuBox } from "../styles/Menu";
import { MenuButton } from "./buttons/MenuButtonsY";
import { FormLogin } from "./forms/FormLogin";

export const MenuHidden = ({ isOpen }: any) => {
  const dispatch = useDispatch();
  const [active, setActive] = useState<boolean>(false);

  return (
    <MainMenuBox theme={isOpen}>
      <MenuButton
        img={"ordersHistory"}
        label={"History"}
        nav={"OrdersHistory"}
      />
      <MenuButton img={"myLists"} label={"My lists"} nav={"MyLists"} />

      <MenuButton
        img={"languages"}
        label={"Language"}
        onClick={() => setActive(!active)}
        active={active}
      />

      {/* <MenuButton img={"logout"} label={"logout"} /> */}
    </MainMenuBox>
  );
};
