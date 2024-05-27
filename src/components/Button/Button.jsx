import css from "./Button.module.css";

const Button = ({ children }) => {
  return (
    <>
      <button type="click" className={css["connect-wallet-btn"]}>
        {children}
      </button>
    </>
  );
};

export default Button;
