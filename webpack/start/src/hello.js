import { HelloButton } from "./components/Hello-button/Hello-button";
import { Heading } from "./components/Heading/Heading";
import React from "react";

const heading = new Heading();
heading.render("hello");
const helloButton = new HelloButton();
helloButton.render();

if (process.env.NODE_ENV === "production") {
  console.log("Production mode");
} else if (process.env.NODE_ENV === "development") {
  console.log("Development mode");
}
