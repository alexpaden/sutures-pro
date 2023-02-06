import axios from "axios";
import Router from "next/router";
import styles from "@/styles/Home.module.css";

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const medicalReport = event.currentTarget.medicalReport.value;

  const response = await axios.post("/api/translate", { medicalReport });
  const result = response.data;

  Router.push({
    pathname: "/result",
    query: { result },
  });
};

const MedicalReportForm = () => {
  return (
    <div className={styles.center}>
      <div className={styles.thirteen}>
        <form
          className={`${styles.form} ${styles.formcenter}`}
          onSubmit={handleSubmit}
        >
          <input
            name="medicalReport"
            type="textarea"
            className={styles.input}
            placeholder="Type your medical report here"
          />
          <button className={styles.button} type="submit">
            Submit
          </button>
          <span>**loading is slow after submit**</span>
        </form>
      </div>
    </div>
  );
};

export default MedicalReportForm;
