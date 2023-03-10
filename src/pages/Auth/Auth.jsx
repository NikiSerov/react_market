import { LoginForm } from "./components/LoginForm/LoginForm";
import { RegisterForm } from "./components/RegisterForm/RegisterForm";
import s from "./Auth.module.scss";
import { Button } from "antd";
import { useState } from "react";

export const Auth = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const handleRegistrationSuccess = () => {
    setIsLoginForm(true);
  };
  return (
    <div className={s.authContainer}>
      <div className={s.auth}>
        {isLoginForm ? (
          <LoginForm />
        ) : (
          <RegisterForm handleSuccess={handleRegistrationSuccess} />
        )}
        <span className={s.separator}>or</span>
        <Button
          type="link"
          className={s.switchButton}
          onClick={() => setIsLoginForm((prev) => !prev)}
        >
          {isLoginForm ? "Register" : "Login"}
        </Button>
      </div>
    </div>
  );
};
