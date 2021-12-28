import { Heading } from "./components/Heading/Heading";
import { AdrianImage } from "./components/AdrianImage/AdrianImage";
import _ from "lodash";

const heading = new Heading();
heading.render(_.upperFirst("adrian"));

const adrianImage = new AdrianImage();
adrianImage.render();
