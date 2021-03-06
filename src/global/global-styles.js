import { StyleSheet, Dimensions } from "react-native";
/**
 * @description This is the style sheet for the Log In and Sign Up forms.
 */
const containerWidth = "100%";
const imageHeight = 100;
const imageWidth = 100;
const buttonFontSize = 19;
const inputFontSize = 16;
const letterSpacing = 0.25;
const borderRadius = 100;
const borderWidth = 1;
const signLogoSize=24;

const styles = StyleSheet.create({
  textForgotPass: {
    fontSize: buttonFontSize,
    fontWeight: "bold",
    letterSpacing: letterSpacing,
    color: "darkviolet",
  },
  textSignIn: {
    color: "white",
    fontWeight: "bold",
    fontSize: buttonFontSize,
  },

  formButton: {
    borderRadius: borderRadius,
  },

  textAG: {
    color: "black",
    fontWeight: "bold",
    fontSize: buttonFontSize,
  },

  error: {
    color: "red",
    fontSize: inputFontSize,
  },

  formInput: {
    fontSize: inputFontSize,
    borderBottomWidth: borderWidth,
    borderColor: "white",
  },

  datePicker: {
    borderBottomWidth: borderWidth,
    borderColor: "white",
    width: "100%",
  },

  textSignUp: {
    fontSize: buttonFontSize,
    fontWeight: "bold",
    letterSpacing: letterSpacing,
    color: "darkviolet",
  },

  //styles for NavBar.js
  mainContainer: {
    width: containerWidth,
    padding: "5%",
  },

  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    width: containerWidth,
    flexDirection: "row",
    justifyContent: "center",
  },

  text: {
    fontSize: buttonFontSize,
    letterSpacing: letterSpacing,
    color: "white",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
  },

  buttonActive: {
    backgroundColor: "black",
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },

  profileImage: {
    alignItems: "center",
    justifyContent: "center",
    width: imageHeight,
    height: imageHeight,
    borderRadius: borderRadius,
  },

  //styles for App.js
  appContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  profile: {
    alignItems: "center",
  },

  name: {
    fontSize: 20,
  },

  image: {
    width: imageWidth,
    height: imageHeight,
    borderRadius: 50,
  },

  //styles for KeyboardAvoidingInputs.js
  keyboardAvoidingViewStyle: {
    flex: 1,
    width: Dimensions.get("screen").width,
  },

  //Sign in and Sign out logo image
  signLogo: {
    width: signLogoSize,
    height: signLogoSize,
    alignItems: "flex-start",
    
    justifyContent: "flex-start",
  },
});

export default styles;
