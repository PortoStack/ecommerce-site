import { Outlet } from "react-router";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export const Layout = () => {
  return (
    <>
      <header id="top">
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export const ProductLayout = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
}

export const ProfileLayout = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
}