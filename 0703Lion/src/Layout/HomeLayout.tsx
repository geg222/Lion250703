import type { PropsWithChildren } from "react";
import Header from "../components/Common/Header";
import "./HomeLayout.scss";

const HomeLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="home-layout">
      <Header />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default HomeLayout;
