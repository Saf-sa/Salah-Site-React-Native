import { View, Text, StyleSheet, Button } from "react-native";
import React from 'react'


const Gaya = ({ navigation }) => {
  return (
    <View style={styles.gayaGallery}>
      <Button
        title=" Back to Photo Gallery"
        onPress={() => navigation.navigate("Photo")}
      />
      <Text style={styles.title}>Gaya Gallery</Text>
      <Button
        title=" Back to Photo Gallery"
        onPress={() => navigation.navigate("Photo")}
      />
    </View>
  );
};

export default Gaya

const styles = StyleSheet.create({
  gayaGallery: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  },

  title: {
    marginTop: 30,
    marginBottom: 30,
    fontSize: 30,
    color: "white",
  },
});