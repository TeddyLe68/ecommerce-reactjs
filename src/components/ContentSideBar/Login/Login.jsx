import InputCommon from "@components/InputCommon/InputCommon";
import styles from "./styles.module.scss";
import Button from "@components/Button/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext, useEffect, useState } from "react";
import { ToastContext } from "@/contexts/ToastProvider";
import { register, signIn, getInfo } from "@/apis/authService";
import Cookies from "js-cookie";
import { SideBarContext } from "@/contexts/SideBarProvider";
import { StoreContext } from "@/contexts/storeProvider";
function Login() {
  const { container, title, boxRememberMe, lostPw } = styles;
  const [isRegister, setIsRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useContext(ToastContext);
  const { setIsOpen } = useContext(SideBarContext);
  const { setUserId } = useContext(StoreContext);

  const handleToggle = () => {
    setIsRegister(!isRegister);
    formik.resetForm();
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 character")
        .required("Password is required"),
      cfmpassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
    }),
    onSubmit: async (values) => {
      if (isLoading) return;
      const { email: username, password } = values;
      setIsLoading(true);
      if (isRegister) {
        await register({ username, password })
          .then((res) => {
            toast.success(res.data.message, {
              position: "bottom-right",
            });
            setIsLoading(false);
            setIsOpen(false);
          })
          .catch((err) => {
            setIsLoading(false);
            toast.error("Sign up failed", {
              position: "bottom-right",
            });
          });
        // window.location.reload();
      }
      if (!isRegister) {
        await signIn({ username, password })
          .then((res) => {
            setIsLoading(false);
            const { id, token, refreshToken } = res.data;
            setUserId(id);
            Cookies.set("token", token);
            Cookies.set("refreshToken", refreshToken);
            Cookies.set("userId", id);
            toast.success("Sign in successfully", { position: "bottom-right" });
            setIsOpen(false);
          })
          .catch((err) => {
            setIsLoading(false);
            toast.error("Sign in failed", { position: "bottom-right" });
          });
      }
    },
  });
  return (
    <div className={container}>
      <div className={title}>{isRegister ? "SIGN UP" : "SIGN IN"}</div>
      <form onSubmit={formik.handleSubmit}>
        <InputCommon
          id="email"
          label="Email"
          type="text"
          isRequired
          formik={formik}
        />

        <InputCommon
          id="password"
          label="Password"
          type="password"
          isRequired
          formik={formik}
        />
        {isRegister && (
          <InputCommon
            id="cfmpassword"
            label="Confirm Password"
            type="password"
            isRequired
            formik={formik}
          />
        )}
        {!isRegister && (
          <div className={boxRememberMe}>
            <input type="checkbox" />
            <span>Remember me</span>
          </div>
        )}
        <Button
          content={isLoading ? "Loading..." : isRegister ? "SIGN UP" : "LOGIN"}
          type="submit"
        />
      </form>
      <Button
        content={
          isRegister ? "Already have an account ?" : "Don't have an account"
        }
        type="submit"
        isPrimary={false}
        style={{ marginTop: "10px" }}
        onClick={handleToggle}
      />

      {!isRegister && <div className={lostPw}>Lost your password?</div>}
    </div>
  );
}

export default Login;
