import { Text, View, Image } from "react-native";
import { useTheme } from "./../context/ThemeContext";
import logo from "../assets/white_logo.png";

const Header = () => {
  const { GlobalStyles } = useTheme();

  return (
    <View style={GlobalStyles.headerContainer}>
      <View style={{ width: 120, flex: 1 }}>
        <Image source={logo} style={GlobalStyles.imageLogo} />
      </View>
    </View>
  );
};

export default Header;
