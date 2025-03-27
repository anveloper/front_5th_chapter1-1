const SWITCH_BUTTON_ID = "router-switch-button";
const SwitchButton = () => {
  const button =
    document.getElementById(SWITCH_BUTTON_ID) ||
    document.createElement("button");
  // tailwind css ......
  button.id = SWITCH_BUTTON_ID;
  button.classList.add(
    "mt-2",
    "bg-blue-600",
    "text-white",
    "px-4",
    "py-2",
    "rounded",
  );
  button.textContent = "전환";

  return button;
};

export default SwitchButton;
