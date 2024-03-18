import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withDelay,
} from "react-native-reanimated";

const AnimatedScreen = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // Shared value to control animation progress (not used in this example)
  const animationProgress = useSharedValue(0);

  const goUp = () => {
    animationProgress.value = withDelay(5000, withSpring(-10));
  };

  useEffect(() => {
    console.log("Animating");
    goUp();
  }, []);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: animationProgress.value }],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyles]}>
        <Text>Component 1</Text>
      </Animated.View>
      <Animated.View style={[styles.box, animatedStyles]}>
        <Text>Component 2</Text>
      </Animated.View>
      {/* Add more components here and wrap them with Animated.View */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    backgroundColor: "#eee",
    margin: 10,
    padding: 10,
  },
});

export default AnimatedScreen;
