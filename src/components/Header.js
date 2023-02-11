import styles from "../routes/Home.module.css";
import logo from "../logo.png";
const Header = () => {
  return (
    <div>
      {" "}
      <header className={styles.header}>
        <img alt="logo" src={logo} />
      </header>
    </div>
  );
};

export default Header;
