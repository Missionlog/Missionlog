import React from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";
import ContactSellerForm from "../comp/ContactSellerForm";
import ListItem from "../comp/ListItems";
import AppText from "../comp/AppText";

function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <ScrollView>
      <KeyboardAvoidingView
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
      >
        <Image
          style={styles.image}
          preview={{ uri: listing.images[0].thumbnailUrl }}
          tint="light"
          uri={listing.images[0].url}
        />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{listing.title}</AppText>
          <AppText style={styles.price}>${listing.price}</AppText>
          <View style={styles.userContainer}>
            <ListItem
              image={require("../assets/FB_IMG_16222120462717233.jpg")}
              title="Ogunyede Oluwatosin"
              subTitle="5 Listings"
            />
          </View>
          <ContactSellerForm listing={listing} />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
