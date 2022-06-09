import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";

import * as Yup from "yup";

import Screen from "../comp/Screen";

import {
  ErrorMessage,
  AppForm,
  AppFormField,
  SubmitButton,
} from "../comp/Form";
import authApi from "../api/auth";

import useAuth from "../auth/useAuth";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

export default function LoginScreen() {
  const {logIn} = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password);

    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    logIn(result.data);
  };
  return (
    <Screen>
      <Image style={styles.logo} source={require("../assets/2AG7DDC.jpg")} />

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error="Invalid email and/or password"
          visible={loginFailed}
        />
        <AppFormField
          autoCorrect={false}
          autocapitalize="none"
          icon="email"
          name="email"
          keyboardType="email-address"
          placeholder="Email"
        />

        <AppFormField
          autocapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          secureTextEntry={true}
          placeholder="Password"
        />

        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginBottom: 70,
  },
});
