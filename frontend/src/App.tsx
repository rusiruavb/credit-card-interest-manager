import { FormElement } from "@nextui-org/react";
import { useState } from "react";
import "./App.css";
import EMButton from "./toolkit/EMButton/EMButton";
import { EMCreditCardSecurityCodeInput } from "./toolkit/EMCreditCard";
import EMTextInput from "./toolkit/EMTextInput/EMTextInput";

function App() {
  const [value, setValue] = useState("");

  const onChange = (e: React.ChangeEvent<FormElement>) => {
    setValue(e.target.value);
  };
  return (
    <>
      <EMButton title="Test button" />
      <EMTextInput shadow={false} clearable onChange={onChange} value={value} fullWidth />
      <EMCreditCardSecurityCodeInput value={value} onChange={onChange} />
    </>
  );
}

export default App;
