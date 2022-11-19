import { useState } from "react";
import Input from "../Input/Input";

function PasswordInput({ onChange }) {
  const [showed, setShowed] = useState(false);

  return (
    <>
      <Input
        type={showed ? "text" : "password"}
        name="password"
        placeholder="Введите пароль"
        onChange={onChange}
      />
      {showed ? (
        <img
          onClick={() => setShowed(!showed)}
          width={32}
          height={32}
          src="res/hide.png"
          alt="show"
        />
      ) : (
        <img
          onClick={() => setShowed(!showed)}
          width={32}
          height={32}
          src="res/show.png"
          alt="hide"
        />
      )}
    </>
  );
}

export default PasswordInput;
