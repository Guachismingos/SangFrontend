import { View, Text, FlatList } from "react-native";
import React from "react";
import CardButton from "../uiElements/CardButton";
import icon from "../../assets/favicon.png";

const GridMenu = () => {
  const options = [
    { title: "Requisitos", image: icon },
    { title: "Proyectos", image: icon },
  ];

  const renderItem = ({ item: {image, title} }) => (
    <CardButton image={image} title={title} />
  );

  return (
    <FlatList
      numColumns={2}
      data={options}
      renderItem={renderItem}
      keyExtractor={item => item.title}
      style={{ backgroundColor: "green", borderRadius: 10 }}
    />
  );
};

export default GridMenu;
