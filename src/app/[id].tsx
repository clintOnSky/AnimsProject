import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import data from "assets/data/products.json";
import Animated, {
  FadeInLeft,
  FadeInRight,
  FadingTransition,
  LightSpeedInLeft,
  SlideInLeft,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { sharedElementTransition } from "../utils/SharedElementTransition";

const Details = () => {
  const { id } = useLocalSearchParams();
  const width = useSharedValue(600);

  const navigation = useNavigation();

  const item: any = data?.find((item) => item.id.toString() === id);
  console.log(`image-${id}`);
  useEffect(() => {
    startAnimation();
    navigation.setOptions({
      title: "Details",
      // headerShown: false,
      headerStyle: {
        backgroundColor: "blue",
      },
      headerTitleStyle: {
        color: "#fff",
      },
    });
  }, []);

  const startAnimation = () => {
    const randomWidth = Math.floor(Math.random() * 300);
    width.value = withSpring(randomWidth);
  };
  return (
    <ScrollView>
      <Animated.Image
        source={{ uri: item.image }}
        style={{ width: "100%", height: 300 }}
        sharedTransitionTag={`image-${id}`}
        // sharedTransitionStyle={sharedElementTransition}
      />
      <Animated.Text
        entering={LightSpeedInLeft.duration(500).delay(400)}
        style={{ fontWeight: "bold", fontSize: 18, padding: 16 }}
      >
        {item.title}
      </Animated.Text>
      <Animated.Text
        entering={SlideInLeft.duration(500).delay(800)}
        style={{ fontSize: 18, padding: 16 }}
      >
        {item.description}
      </Animated.Text>
    </ScrollView>
  );
};

export default Details;

const styles = StyleSheet.create({});
