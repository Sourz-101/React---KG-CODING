import styles from "./Disply.module.css";

const Display = ({displayValue}) => {
  return <textarea className={styles.display} type="text" value={displayValue} readOnly />;
};

export default Display;
