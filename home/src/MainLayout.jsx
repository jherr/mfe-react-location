import React from "react";
import { Router, ReactLocation, Outlet } from "react-location";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import Header from "home/Header";
import Footer from "home/Footer";
import HomeContent from "home/HomeContent";
import CartContent from "cart/CartContent";

const location = new ReactLocation();

const routes = [
  { path: "/", element: <HomeContent /> },
  {
    path: "product",
    children: [
      {
        path: ":id",
        import: () => import("pdp/pdpRoute").then((res) => res.route),
      },
    ],
  },
  { path: "cart", element: <CartContent /> },
];

export default function MainLayout() {
  return (
    <Router location={location} routes={routes}>
      <div className="text-3xl mx-auto max-w-6xl">
        <Header />
        <div className="my-10">
          <Outlet />
        </div>
        <Footer />
      </div>
    </Router>
  );
}
