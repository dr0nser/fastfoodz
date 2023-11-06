import React from "react";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./customcomponents/Header.tsx";
import Footer from "./customcomponents/Footer.tsx";
import Home from "./pages/Home.tsx";
import Menu from "./pages/Menu.tsx";
import { RecoilRoot } from "recoil";
import Cart from "./pages/Cart.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/clerk-react";
import Auth from "./pages/Auth.tsx";
import { Toaster } from "./components/ui/toaster.tsx";
import Orders from "./pages/Orders.tsx";

const queryClient = new QueryClient();
const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

const router = createBrowserRouter([
  {
    path: "/sign-in",
    element: (
      <ClerkProvider publishableKey={clerkPubKey}>
        <SignedIn>
          <Auth />
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </ClerkProvider>
    ),
  },
  {
    path: "/",
    element: (
      <React.StrictMode>
        <ClerkProvider publishableKey={clerkPubKey}>
          <QueryClientProvider client={queryClient}>
            <RecoilRoot>
              <App>
                <Header />
                <Outlet />
                <Footer />
                <Toaster />
              </App>
            </RecoilRoot>
          </QueryClientProvider>
        </ClerkProvider>
      </React.StrictMode>
    ),
    children: [
      {
        path: "/orders",
        element: (
          <>
            <SignedIn>
              <Orders />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/:slug",
        element: <Menu />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
    errorElement: (
      <RecoilRoot>
        <App>
          <ErrorPage />
        </App>
      </RecoilRoot>
    ),
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
