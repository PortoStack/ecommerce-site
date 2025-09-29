// Import router
import { Route, Routes, useLocation } from "react-router";

// Import animation
import { AnimatePresence } from "motion/react";
import { PageWrapper } from "./components/ui/Animation";

// Import layouts
import { Layout, ProductLayout, ProfileLayout } from "./layout";

// Import pages
import { Home } from "./pages/home";
import { Shop } from "./pages/shop";
import { Login } from "./pages/auth/login";
import { Register } from "./pages/auth/register";
import { NotFound } from "./pages/404";
import { Product } from "./pages/product";
import { Profile } from "./pages/user/profile";
import { Cart } from "./pages/user/cart";
import { Contact } from "./pages/contact";
import { About } from "./pages/about";

export const AnimatedRoutes = () => {

  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname} >
        <Route path="/" element={<Layout />}>
          {/* Home route */}
          <Route
            index
            element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            }
          />
          {/* Shop route */}
          <Route
            path="/shop"
            element={
              <PageWrapper>
                <Shop />
              </PageWrapper>
            }
          />
          {/* About route */}
          <Route
            path="/about"
            element={
              <PageWrapper>
                <About />
              </PageWrapper>
            }
          />
          {/* Contact route */}
          <Route
            path="/contact"
            element={
              <PageWrapper>
                <Contact />
              </PageWrapper>
            }
          />
          {/* Profile route */}
          <Route path="/user" element={<ProfileLayout />}>
            <Route
              path=":id"
              element={
                <PageWrapper>
                  <Profile />
                </PageWrapper>
              }
            />
            <Route
              path=":id/cart"
              element={
                <PageWrapper>
                  <Cart />
                </PageWrapper>
              }
            />
          </Route>
          {/* Product route */}
          <Route path="/product" element={<ProductLayout />}>
            <Route
              path=":id"
              element={
                <PageWrapper>
                  <Product />
                </PageWrapper>
              }
            />
          </Route>
        </Route>
        {/* Authentication route */}
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
        {/* Not Found route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}