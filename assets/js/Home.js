import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";



const Home = () => {
    const linkedin = () => {
        Linking.openURL("https://www.linkedin.com/in/guilherme-pguimar%C3%A3es/");
    };
    const github = () => {
        Linking.openURL("https://github.com/guilherme-pg");
    };

    return (
        <View style={styles.container}>

            <View style={styles.container_image_name}>

                
                <Text style={styles.title}>HOME</Text>
                <Text style={styles.information}>Data Scientist</Text>
            </View>
        

            <View style={styles.container_icon}>
                <TouchableOpacity style={styles.icon} onPress={linkedin} >
                    <AntIcon name="linkedin-square" color="#304145" size={50} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.icon} onPress={github}>
                    <AntIcon name="github" color="#304145" size={50} />
                </TouchableOpacity>
            </View>
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



export default Home;