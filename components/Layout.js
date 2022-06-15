import { ThemeProvider } from "../context/ThemeContext";
import { mainColor } from "../styles/variables";
import { View, StatusBar } from "react-native";
import MainContainer from "./MainContainer";
import Header from "./Header";

const Layout = () => {
  return (
    <View style={{ flex: 1 }}>
      <ThemeProvider>
        <StatusBar backgroundColor={mainColor} />
        <Header />
        <MainContainer />
      </ThemeProvider>
    </View>
  );
};

export default Layout;
