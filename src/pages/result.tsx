import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
import React from "react";

const Result = () => {
  const router = useRouter();
  const { result } = router.query;

  return (
    <div className={styles.center}>
      <div className={styles.thirteen}>
        <span className={styles.result}>{result}</span>
      </div>
    </div>
  );
};

export default Result;
