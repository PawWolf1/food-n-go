import React, { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Filter } from "./models/Filter";
import { FiltersList } from "./locales/filters";
import { HomeSub } from "./components/subScreens/HomeSub";
import { HomeScr } from "./screens/Home";

function App() {
  return <HomeScr />;
}

export default App;
