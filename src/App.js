import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import { HomePage } from "./pages/Home";
import { ProductsPage } from "./pages/Products";
import { ProductPage } from "./pages/Product";
import { useEffect } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />
      },
      {
        path: "/home",
        element: <HomePage />
      },
      {
        path: "/products",
        element: <ProductsPage />
      },
      {
        path: "/products/:id",
        element: <ProductPage />
      }
    ]
  }
]);

export default function App() {
  const fetchUsers = async () => {};
  useEffect(() => {
    fetchUsers();
  }, []);
  return <RouterProvider router={router} />;
}
