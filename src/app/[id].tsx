import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import data from "assets/data/products.json";
import Animated, {
  LightSpeedInLeft,
  SlideInLeft,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const Details = () => {
  const { id } = useLocalSearchParams();
  const width = useSharedValue(600);

  // const scrollRef = useAnimatedRef<Animated.ScrollView>();

  // const scrollHandler = useScrollViewOffset(scrollRef);

  // const animatedStyle = useAnimatedStyle(() => {
  //   console.log(scrollHandler.value);
  //   return {
  //     transform: [
  //       // {
  //       //   translateY:
  //       //     scrollHandler.value > 300 ? withTiming(-150) : withTiming(0),
  //       // },
  //       {
  //         scaleY: scrollHandler.value > 300 ? withTiming(0) : withTiming(1),
  //       },
  //     ],
  //   };
  // });

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
      // header: (props: any) => (
      //   <Animated.View
      //     {...props}
      //     style={[{ backgroundColor: "red", height: 50 }, animatedStyle]}
      //   >
      //     <Text>Hello</Text>
      //   </Animated.View>
      // ),
    });
  }, []);

  const startAnimation = () => {
    const randomWidth = Math.floor(Math.random() * 300);
    width.value = withSpring(randomWidth);
  };
  return (
    <Animated.ScrollView
      style={{ flex: 1 }}
      // ref={scrollRef}
      contentContainerStyle={{ paddingBottom: 1300 }}
    >
      <Animated.Image
        source={{ uri: item.image }}
        style={{ width: "100%", height: 300 }}
        // sharedTransitionTag={`image-${id}`}
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
    </Animated.ScrollView>
  );
};

export default Details;

const styles = StyleSheet.create({});
