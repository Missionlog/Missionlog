import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";

import defaultStyles from "../config/styles";
import AppButton from "../comp/AppButton";

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={0}
      style={styles.backGround}
      resizeMode="contain"
      source={require("../assets/secondhand.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/04-app-icon-inspiration.jpg")}
        />
        <Text style={styles.text2}> Sell anything you want</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
        <AppButton
          title="Register"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backGround: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 25,
  },
  buttonContainer: {
    width: "100%",
    color: defaultStyles.color.medium,
    padding: 25,
    position: "absolute",
  },

  logo: {
    width: 80,
    height: 80,
  },
  logoContainer: {
    position: "absolute",
    top: 30,
    alignItems: "center",
  },
  text2: {
    fontSize: 25,
    fontWeight: "500",
    marginVertical: 2,
  },
});
