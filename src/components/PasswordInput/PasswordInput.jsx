import React from "react";
import Input from "../Input/Input";

function PasswordInput({ onChange }) {
  const [showed, setShowed] = React.useState(false);

  return (
    <>
      <Input
        type={showed ? "text" : "password"}
        name="password"
        placeholder="Enter your password"
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
