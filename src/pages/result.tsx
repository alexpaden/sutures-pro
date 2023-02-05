import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
import React from "react";

const Result = () => {
  const router = useRouter();
  const { result } = router.query;

  return (
    <div>
      <p>{result}</p>
    </div>
  );
};

export default Result;
