import React from "react";
import styles from './NotFoundBlock.module.scss'


function NotFoundBlock() {
  return (
    <div className={styles.content}>
      <h1>
        <span>🕵</span>
        <br />
        Ничего не найдено
      </h1>
      <p>
        Вернитесь на главную и попробуйте снова!
      </p>
    </div>
  );
}

export default NotFoundBlock;
