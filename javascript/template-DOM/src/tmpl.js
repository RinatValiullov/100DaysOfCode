import "./style.css";
import { renderChat, renderButton } from "./utils/utils.js";

const app = document.querySelector("#app");
app.className = "chat__wrapper";

app.appendChild(renderChat());
app.appendChild(renderButton());
