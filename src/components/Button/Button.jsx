import css from "./Button.module.css";

const Button = ({ children }) => {
  return (
    <>
      <Button type="click" className={css["connect-wallet-btn"]}>
        {children}
      </Button>
    </>
  );
};

export default Button;
