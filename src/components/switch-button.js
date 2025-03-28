import { INDEX_HASH_FILE, PREFIX } from "../config";

const SWITCH_BUTTON_ID = "router-switch-button";
const STYLES_TAILWIND = [
  "mt-2",
  "bg-blue-600",
  "text-white",
  "px-4",
  "py-2",
  "rounded-full",
];
const STYLES_CSS_TEXT = "position: fixed; bottom: 12px; right: 12px;";

const SwitchButton = () => {
  const button =
    document.getElementById(SWITCH_BUTTON_ID) ||
    document.createElement("button");
  button.id = SWITCH_BUTTON_ID;
  button.classList.add(...STYLES_TAILWIND);
  button.style.cssText = STYLES_CSS_TEXT;
  button.textContent = "전환";
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const is = location.href.includes(INDEX_HASH_FILE);
    window.open(PREFIX + "/" + (is ? "" : INDEX_HASH_FILE), "_self");
  });
  return button;
};

export default SwitchButton;
