//
// =============================================================== >> Auther text <<
//
// I use Iconify-icon site for my icon source, check it out.
//
// =============================================================== >> Auther text <<
//
// =================================================================== >> improts <<
//
// --------------------------------------------------------- >> BTN <<
import { BTN } from "./BTN/BTN.js";
// --------------------------------------------------------- >> BTN <<
//
// =================================================================== >> improts <<
//
// ================================================================== >> Selector <<
const BG_1 = document.querySelector("#BG_1");
// ================================================================== >> Selector <<
//
// =================================================================== >> Layer 1 <<
//
// ------------------------------------------------------ >> Submit <<
//
// ---------------------------------------- > Varibales <
//
const SubmitID = "SubmitButtonID";
//
const SubmitHaveText = true;
const SubmitButtonText = "Submit";
//
const SubmitHaveIcon = true;
const SubmitButtonIcon = "line-md:check-all";
//
const SubmitHaveListener = true;
//
// ---------------------------------------- > Varibales <
//
// ----------------------------------------- > CallBack <
const SubmitButton = BTN(
  SubmitID,
  SubmitHaveText,
  SubmitButtonText,
  SubmitHaveIcon,
  SubmitButtonIcon,
  SubmitHaveListener,
  SubmitListener
);
// ----------------------------------------- > CallBack <
//
// ----------------------------------------- > Listener <
function SubmitListener() {
  console.log("Clicked");
}
// ----------------------------------------- > Listener <
//
// ------------------------------------ > Append Button <
BG_1.appendChild(SubmitButton.widget);
// ------------------------------------ > Append Button <
//
// ------------------------------------------------------ >> Submit <<
//
// ------------------------------------------------------- >> Close <<
//
// ---------------------------------------- > Varibales <
//
const CloseID = "CloseButtonID";
//
const CloseHaveText = true;
const CloseButtonText = "Close";
//
const CloseHaveIcon = true;
const CloseButtonIcon = "line-md:close-circle-filled";
//
const CloseHaveListener = true;
//
// ---------------------------------------- > Varibales <
//
// ----------------------------------------- > CallBack <
const CloseButton = BTN(
  CloseID,
  CloseHaveText,
  CloseButtonText,
  CloseHaveIcon,
  CloseButtonIcon,
  CloseHaveListener,
  CloseListener
);
// ----------------------------------------- > CallBack <
//
// ----------------------------------------- > Listener <
function CloseListener() {
  console.log("Clicked");
}
// ----------------------------------------- > Listener <
//
// ------------------------------------ > Append Button <
BG_1.appendChild(CloseButton.widget);
// ------------------------------------ > Append Button <
//
// ------------------------------------------------------- >> Close <<
//
// -------------------------------------------------------- >> Text <<
//
// ---------------------------------------- > Varibales <
//
const TextID = "TextID";
//
const HaveText = true;
const TextContent = "Lorem Ipsum";
//
// ---------------------------------------- > Varibales <
//
// ----------------------------------------- > CallBack <
const Text = BTN(TextID, HaveText, TextContent, false, "", false, () => {});
// ----------------------------------------- > CallBack <
//
// ------------------------------------ > Append Button <
BG_1.appendChild(Text.widget);
// ------------------------------------ > Append Button <
//
// -------------------------------------------------------- >> Text <<
//
// -------------------------------------------------------- >> Icon <<
//
const IconID = "IconID";
//
const HaveIcon = true;
const IconValue = "line-md:emoji-smile-wink-filled";
//
// ---------------------------------------- > Varibales <
//
// ----------------------------------------- > CallBack <
const Icon = BTN(IconID, false, "", HaveIcon, IconValue, false, () => {});
// ----------------------------------------- > CallBack <
//
// ------------------------------------ > Append Button <
BG_1.appendChild(Icon.widget);
// ------------------------------------ > Append Button <
//
// -------------------------------------------------------- >> Icon <<
//
// =================================================================== >> Layer 1 <<
//
// ======================================================================= >> DOM <<
window.addEventListener("DOMContentLoaded", () => {
  console.log("hellow World");
});
// ======================================================================= >> DOM <<
