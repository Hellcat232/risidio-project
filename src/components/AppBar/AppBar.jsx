import css from "./AppBar.module.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";

const AppBar = () => {
  return (
    <header className={css["app-bar"]}>
      <Logo />
      <Button>Connect Wallet</Button>
    </header>
  );
};

export default AppBar;
