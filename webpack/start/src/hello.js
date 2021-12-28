import { HelloButton } from "./components/hello-button/hello-button";
import { Heading } from "./components/heading/heading";

const heading = new Heading();
heading.render();
const helloButton = new HelloButton();
helloButton.render();

if (process.env.NODE_ENV === "production") {
  console.log("Production mode");
} else if (process.env.NODE_ENV === "development") {
  console.log("Development mode");
}
