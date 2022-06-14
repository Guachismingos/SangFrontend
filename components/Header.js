import { Text, StatusBar, SafeAreaView } from "react-native";
import { Containerstyles } from "./../styles/global";
import { mainColor } from "../styles/variables";

const Header = () => {
  return (
    <SafeAreaView style={Containerstyles.headerContainer}>
      <StatusBar backgroundColor={mainColor} hidden={true} />
      <Text>Header</Text>
    </SafeAreaView>
  );
};

export default Header;
