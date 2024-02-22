import { router } from "expo-router";
import {
  Button,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const AnimatedInput = Animated.createAnimatedComponent(TextInput);
const AnimatedImage = Animated.createAnimatedComponent(Image);

export default function Page() {
  const width = useSharedValue(150);
  const height = useSharedValue(150);
  const backgroundColor = useSharedValue("#32dfdf");

  const startAnimation = () => {
    const randomWidth = Math.floor(Math.random() * 300) + 100;
    const randomHeight = Math.floor(Math.random() * 300) + 100;
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    backgroundColor.value = withTiming(randomColor, { duration: 3000 });
    width.value = withTiming(randomWidth);
    height.value = withTiming(randomHeight);
  };

  const animatedStyles = useAnimatedStyle(() => ({
    width: width.value,
    height: height.value,
    backgroundColor: backgroundColor.value,
  }));

  const animatedInputStyles = useAnimatedStyle(() => ({
    backgroundColor: backgroundColor.value,
  }));
  return (
    <ScrollView style={styles.container}>
      <Button title="Start Animation" onPress={startAnimation} />
      <AnimatedInput
        style={[animatedInputStyles, { height: 50, margin: 10 }]}
      />
      <AnimatedImage
        source={{ uri: "assets/favicon.png" }}
        style={animatedStyles}
      />
      <Animated.View style={animatedStyles}></Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
