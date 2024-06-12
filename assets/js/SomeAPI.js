import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";



const SomeAPI = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.information}>SOME API</Text>
        

        </View>
    );
};



const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ECE9E1",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    padding: 15
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: "#304145"
  },
  container_image_name: {
    backgroundColor: "#ECE9E1",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  information: {
    fontSize: 20,
    marginBottom: 20,
    color: "#304145"
  },
  home_image: {
    width: 300,
    height: 350,
    resizeMode: "cover"
  },
  container_icon: {
    flexDirection: "row",
    marginTop: 20
  },
  icon: {
    marginHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5
  }
});



export default SomeAPI;