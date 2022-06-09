import React, { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../comp/Screen";
import Card from "../comp/Card";
import route from "../navigation/route";
import listingsApi from "../api/listings";
import AppText from "../comp/AppText";
import AppButton from "../comp/AppButton";
import ActivityIndicator from "../comp/ActivityIndicator";
import useApi from "../hooks/useApi";

export default function ListingsScreen({ navigation }) {
  const {
    data: listings,
    error,
    loading,
    request: loadListings,
  } = useApi(listingsApi.getListings);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen>
        {error && (
          <>
            <AppText> Couldnt't retrieve the listings</AppText>
            <AppButton title="Retry" onPress={loadListings} />
          </>
        )}
        <FlatList
          data={listings}
          keyExtractor={(listings) => listings.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={"$" + item.price}
              imageUrl={item.images[0].url}
              onPress={() => navigation.navigate(route.LISTING_DETAILS,item)}
              thumbnailUrl={item.images[0].thumbnailUrl}
            />
          )}
        />
      </Screen>
    </>
  );
}
