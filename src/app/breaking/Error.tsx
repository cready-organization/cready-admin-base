"use client";

import "@/styles/globals.scss";
import { useEffect } from "react";
import styles from "./breaking.module.scss";

export default function Error({ error, reset }: { error: Error; reset: any }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className={styles.error}>
      <div>ERROR</div>
      <p>Something went wrong!</p>
      <button onClick={() => reset()}>Reset error boundary</button>
    </div>
  );
}
