import css from "./AppBar.module.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const AppBar = () => {
  return (
    <header className={css["app-bar"]}>
      <Link to="/">
        <Logo />
      </Link>

      <Button>Connect Wallet</Button>
    </header>
  );
};

export default AppBar;
