import { initLanguage } from "../../locales/languages/string";
import { resetAll } from "../../store/search";

export function changeLanguage(dispatch: any, data: any) {
  initLanguage(data);
  dispatch(resetAll());
  window.location.reload();
}
