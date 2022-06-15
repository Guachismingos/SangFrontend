import { useTheme } from "./../context/ThemeContext";
import { View } from "react-native";
import GridMenu from "../components/Home/GridMenu";

const Home = () => {
  const { GlobalStyles } = useTheme();

  return (
  <View style={GlobalStyles.mainContainer}>
    <GridMenu/>
  </View>
  );
};

export default Home;
