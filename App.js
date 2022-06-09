import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/comp/OfflineNotice";
import NavigationTheme from "./app/navigation/NavigationTheme";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import AppLoading from "expo-app-loading";
import { navigationRef } from "./app/navigation/rootNavigation";
import logger from "./app/utility/logger";

logger.start();

export default function App() {
  logger.log(new Error("an error occured"));

  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) return;
  };

  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreUser}
        onFinish={() => setIsReady(true)}
        onError={console.warns}
      />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={NavigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
