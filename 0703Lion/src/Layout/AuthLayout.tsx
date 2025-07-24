import type { PropsWithChildren } from "react";
import "./AuthLayout.scss";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return <div className="auth-layout">{children}</div>;
};

export default AuthLayout; 