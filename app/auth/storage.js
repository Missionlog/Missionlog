import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";
import logger from "../utility/logger";

const key = "AuthToken";

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    logger.log("error storing auth token ", error);
  }
};

const getUser = async () => {
  const token = await getToken();
  return token ? jwtDecode(token) : null;
};

const getToken = async () => {
  try {
    const authToken = await SecureStore.getItemAsync(key);
    return authToken;
  } catch (error) {
    logger.log("Error getting auth token ", error);
  }
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    logger.log("error removing removing auth token", error);
  }
};

export default { getToken, storeToken, getUser, removeToken };
