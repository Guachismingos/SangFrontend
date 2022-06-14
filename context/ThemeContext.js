import Quicksand from "../assets/fonts/Quicksand.ttf";
import { createContext, useContext } from "react";
import { mainColor } from "../styles/variables";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [fontsLoaded] = useFonts({ "Quick-Sand": Quicksand });

  const GlobalStyles = StyleSheet.create({
    //Containers
    mainContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    headerContainer: {
      backgroundColor: mainColor,
      justifyContent: "center",
      alignItems: "flex-start",
      display: "flex",
      height: 50,
      paddingLeft: 20 
    },
    //Texts
    h1: {
      fontFamily: "Quick-Sand",
      fontWeight: "900",
      fontSize: 18
      
    },
  });

  const value = { GlobalStyles };

  return (
    <ThemeContext.Provider value={value}>{fontsLoaded && children}</ThemeContext.Provider>
  );
};
