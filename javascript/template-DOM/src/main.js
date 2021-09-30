import "./style.css";
import { chatsMarkup } from "./utils/template";

console.log(chatsMarkup);

const app = document.querySelector("#app");
app.className = "chat__wrapper";

app.innerHTML = chatsMarkup;
