import { View, Text, Image } from "react-native";
import { useTheme } from './../../context/ThemeContext';

const CardButton = ({image, title}) => {

    const { GlobalStyles } = useTheme();

  return (
    <View>
        {/* <Image source={image}/> */}
      <Text>{title}</Text>
    </View>
  );
};

export default CardButton;
