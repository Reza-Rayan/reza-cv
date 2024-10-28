import { FaSun, FaMoon } from "react-icons/fa";

const ThemeController = () => {
  return (
    <label className="grid cursor-pointer place-items-center">
      <input
        type="checkbox"
        value="light"
        className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
      />
      <FaSun className="stroke-base-100 fill-base-100 col-start-1 row-start-1" />
      <FaMoon className="stroke-base-100 fill-base-100 col-start-2 row-start-1" />
    </label>
  );
};

export default ThemeController;
