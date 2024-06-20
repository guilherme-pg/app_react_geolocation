import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import dice from "../images/icon-dice.png";
import desktopPattern from "../images/pattern-divider-desktop.png";
import mobilePattern from "../images/pattern-divider-mobile.png";

const Advice = () => {
  const [advice, setAdvice] = useState({
    id: "",
    quote: "",
  });

  const [buttonClick, setButtonClick] = useState(0);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) =>
        setAdvice({
          id: data.slip.id,
          quote: data.slip.advice,
        })
      )
      .catch((error) => console.error("Error ", error));
  }, [buttonClick]);

  const generateNewQuote = () => {
    setButtonClick(buttonClick + 1);
  };

  const { width } = Dimensions.get('window');
  const isMobile = width <= 393;

  return (
    <View style={styles.container}>
      <View style={[styles.wrapper, isMobile && styles.wrapperMobile]}>
        <View style={[styles.card, isMobile && styles.cardMobile]}>
          <Text style={[styles.id, isMobile && styles.idMobile]}>ADVICE #{advice.id}</Text>
          <Text style={[styles.quote, isMobile && styles.quoteMobile]}>“{advice.quote}”</Text>
          <Image
            source={isMobile ? require("../images/pattern-divider-mobile.png") : require("../images/pattern-divider-desktop.png")}
            style={styles.image}
          />
        </View>
        <TouchableOpacity style={styles.dice} onPress={generateNewQuote}>
          <Image source={require("../images/icon-dice.png")} style={styles.diceImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    backgroundColor: 'hsl(217, 19%, 24%)',
    width: 540,
    height: 332,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  wrapperMobile: {
    width: 342,
    height: 347,
    
  },
  card: {
    width: 444,
    height: 213,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 47,
    textAlign: 'center',
    padding: 30
  },
  cardMobile: {
    width: 302.652,
    height: 209.515,
  },
  id: {
    fontSize: 14,
    color: 'hsl(150, 100%, 66%)',
    letterSpacing: 3,
  },
  idMobile: {
    fontSize: 12,
  },
  quote: {
    fontSize: 28,
    color: 'hsl(193, 38%, 86%)',
  },
  quoteMobile: {
    fontSize: 24,
    letterSpacing: -0.24,
  },
  image: {
    marginVertical: 20,
  },
  dice: {
    height: 64,
    width: 64,
    backgroundColor: 'hsl(150, 100%, 66%)',
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    top: 35,
  },
  diceImage: {
    height: 32,
    width: 32,
  },
});

export default Advice;