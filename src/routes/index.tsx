/** @format */

import React from "react";
import { AppRoutes } from "./app.routes";
import { NavigationContainer } from "@react-navigation/native";

export default function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
