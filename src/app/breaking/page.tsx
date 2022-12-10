"use client";

import "@/styles/globals.scss";
import styles from "./breaking.module.scss";

export default function Page() {
  return (
    <div className={styles.component}>
      <div>BREAKING</div>
      <div>
        <button onClick={(e) => console.log(e)}>break this</button>
      </div>
    </div>
  );
}
