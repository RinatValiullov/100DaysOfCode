import { HelloButton } from "./components/Hello-button/Hello-button";
import { Heading } from "./components/Heading/Heading";
import _ from "lodash";

const heading = new Heading();
heading.render(_.upperFirst("hello"));
const helloButton = new HelloButton();
helloButton.render();

if (process.env.NODE_ENV === "production") {
  console.log("Production mode");
} else if (process.env.NODE_ENV === "development") {
  console.log("Development mode");
}
