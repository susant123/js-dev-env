import "./index.css";
import numeral from "numeral";

const cv = numeral(1000).format("$0,0.00");
console.log(`I would pay ${cv} for this`); //eslint-disable-line no-console
