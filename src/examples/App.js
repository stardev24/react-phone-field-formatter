  
import React from "react";
import { PhoneNumberInput } from "../lib";

const App = () => (
  <div style={{ width: 640, margin: "5px auto" }}>
    <h1>React Phone Number Formatter</h1>
    <PhoneNumberInput label="Phone" placeholder="(541) 754-3010" messsageclass="redtext" />
  </div>
);

export default App;