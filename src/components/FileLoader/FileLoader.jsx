import { useState } from "react";
import styles from "./FileLoader.module.scss";

function FileLoader() {
  const [isAdded, setIsAdded] = useState(false);

  const getFile = (event) => {
    const target = event.target;

    const fileReader = new FileReader();
    fileReader.onload = function () {
      localStorage.setItem("image", fileReader.result);
      setIsAdded(true);
    };

    fileReader.readAsDataURL(target.files[0]);
  };

  return (
    <div className={styles.photo}>
      {isAdded ? (
        <img
          src={localStorage.getItem("image")}
          alt="newPhoto"
          className={styles.newPhoto}
        />
      ) : (
        <div className={styles.add}>
          <img className={styles.photo} src="res/addPhoto.png" alt="newPhoto" />
          <p>Загрузите Ваше фото</p>
          <input
            name="myFile"
            type="file"
            className={styles.addFile}
            onChange={(event) => getFile(event)}
          />
        </div>
      )}
    </div>
  );
}

export default FileLoader;
