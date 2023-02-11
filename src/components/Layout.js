import { Suspense } from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Header />
      {children}
    </Suspense>
  );
};

export default Layout;
