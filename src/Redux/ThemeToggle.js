import { toggleTheme } from "./ThemeSlice";
import { MdLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";

export const ThemeToggle = () => {
  const theme = useSelector((state) => {
    return state.theme.theme;
  });
  const dispatch = useDispatch();
  return (
    <>
      {theme === "light" ? (
        <span>
          <button style={toggleButton} onClick={() => dispatch(toggleTheme())}>
            <MdLightMode style={toggleIconDark} />
          </button>
        </span>
      ) : (
        <span>
          <button style={toggleButton} onClick={() => dispatch(toggleTheme())}>
            <MdOutlineDarkMode style={toggleIconLight} />
          </button>
        </span>
      )}
    </>
  );
};
const toggleButton = {
  height: "30px",
  width: "30px",
  border: "0",
  background: "transparent",
};
const toggleIconLight = {
  height: "100%",
  width: "100%",
  color: "white",
};
const toggleIconDark = {
  height: "100%",
  width: "100%",
  color: "black",
};
