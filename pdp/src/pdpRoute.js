import React from "react";

import { getProductById } from "home/products";

import PDPContent from "./PDPContent";

export const route = {
  loader: ({ params: { id } }) => getProductById(id),
  element: <PDPContent />,
};
