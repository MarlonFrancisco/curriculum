import { createContext } from "react";

export enum Theme {
  LIGHT = "light",
  DARK = "default",
}

export default createContext<{ toggleThemeHandler: () => void }>({
  toggleThemeHandler: () => {},
});
