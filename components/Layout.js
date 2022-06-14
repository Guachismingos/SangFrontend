import { ThemeProvider } from "../context/ThemeContext";
import { View } from "react-native";
import React from "react";
import Header from "./Header";

const Layout = () => {
  return (
    <View>
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    </View>
  );
};

export default Layout;
