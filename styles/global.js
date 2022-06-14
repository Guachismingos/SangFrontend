import { StyleSheet } from "react-native";
import { mainColor } from "./variables";

export const GlobalStyles = StyleSheet.create({
  //Containers
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    backgroundColor: mainColor,
    height: 50,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  //Texts
  h1: {},
});
