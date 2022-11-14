import React from "react";

function PasswordInput({showed, setShowed}) {

  return (
    <>
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
