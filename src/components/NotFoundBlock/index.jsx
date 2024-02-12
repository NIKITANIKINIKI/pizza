import React from "react";
import styles from './NotFoundBlock.module.scss'



function NotFoundBlock({title, content, picture }) {
  return (
    <div className={styles.content}>
      <h1>
        <span>{picture}</span>
        <br />
        {title}
      </h1>
      <p>
        {content}
      </p>
    </div>
  );
}

export default NotFoundBlock;
