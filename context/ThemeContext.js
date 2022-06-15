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
      padding: 30,
      flex: 1,
    },
    headerContainer: {
      backgroundColor: mainColor,
      justifyContent: "center",
      alignItems: "flex-start",
      display: "flex",
      height: 75,
      paddingLeft: 10,
    },
    //Texts
    h1: {
      fontFamily: "Quick-Sand",
      fontWeight: "bold",
      fontSize: 18,
    },
    //Images
    imageLogo: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: "contain",
    },
    //Ui Elements
    uiCardButton : {
      borderColor: mainColor
    }
  });

  const value = { GlobalStyles };

  return (
    <ThemeContext.Provider value={value}>
      {fontsLoaded && children}
    </ThemeContext.Provider>
  );
};
