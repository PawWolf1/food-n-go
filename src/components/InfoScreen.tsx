import { InfoScreenBox, InfoScreenTextBox } from "../styles/MainScreen";
import { SerifText, SerifTextS, SerifTextSS } from "../styles/TextStyles";

export const InfoScreen = ({ id, desc }: any) => {
  return (
    <InfoScreenBox id={`InfoBox${id}`}>
      <InfoScreenTextBox>
        <SerifTextSS>{desc}</SerifTextSS>
      </InfoScreenTextBox>
    </InfoScreenBox>
  );
};
