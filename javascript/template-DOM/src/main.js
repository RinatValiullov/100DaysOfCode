import "./style.css";
import { list, button } from "./utils/utils.js";

const app = document.querySelector("#app");
app.className = "chat__wrapper";

app.appendChild(list);
app.appendChild(button);
