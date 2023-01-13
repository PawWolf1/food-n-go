import { getString } from "../locales/languages/string";
import {
  Constants,
  inputDataDelivery,
  inputDataSpecial,
} from "../styles/Constants";
import { SerifTextS, SerifTextSS } from "../styles/TextStyles";

export const HistoryFormData = (data: any) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat( auto-fit, minmax(90px, 1fr) )",
        width: "100%",
      }}
    >
      {inputDataDelivery.data.map((item) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "2px",
          }}
        >
          <SerifTextSS style={{ textAlign: "left", fontWeight: "600" }}>
            {getString("forms", item.value)}:
          </SerifTextSS>
          <SerifTextSS style={{ textAlign: "left" }}>
            {data[item.value as keyof any]}
          </SerifTextSS>
        </div>
      ))}
      {inputDataSpecial.data.map((item) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <SerifTextSS style={{ textAlign: "left", fontWeight: "600" }}>
            {getString("forms", item.value as keyof {})}:
          </SerifTextSS>
          <SerifTextSS style={{ textAlign: "left" }}>
            {data[item.value as keyof any]}
          </SerifTextSS>
        </div>
      ))}
    </div>
  );
};
