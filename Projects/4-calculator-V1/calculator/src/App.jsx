import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";

function App() {
  return (
    <>
      <h1 className={styles.heading}>CALCULATOR</h1>
      <div className={styles.calculator}>
        <Display />
        <ButtonsContainer />
      </div>
    </>
  );
}

export default App;
