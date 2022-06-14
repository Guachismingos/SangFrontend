import { Text, StatusBar, SafeAreaView } from "react-native";
import { mainColor } from "../styles/variables";
import { useTheme } from "./../context/ThemeContext";

const Header = () => {
  const { GlobalStyles } = useTheme();

  return (
    <SafeAreaView style={GlobalStyles.headerContainer}>
      <StatusBar backgroundColor={mainColor} hidden={true} />
      <Text style={GlobalStyles.h1}>Grupo Sang</Text>
    </SafeAreaView>
  );
};

export default Header;
