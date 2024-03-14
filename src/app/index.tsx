import CustomPressable from "@/components/CustomPressable";
import { Link } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Animated, { SlideInLeft } from "react-native-reanimated";

export default function Page() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Animated.View entering={SlideInLeft.duration(300).springify()}>
        <CustomPressable
          title="Go to Scroll Page"
          href="/scroll"
          viewStyle={styles.viewStyle}
          buttonStyle={styles.buttonStyle}
        />
        {/* <CustomPressable title="Go to Scroll Page" href="/scroll" /> */}
      </Animated.View>
      <Animated.View entering={SlideInLeft.duration(300).springify()}>
        <CustomPressable
          title="Go to Search Page"
          href="/search"
          viewStyle={styles.viewStyle}
          buttonStyle={styles.buttonStyle}
        />
      </Animated.View>
      <Animated.View entering={SlideInLeft.duration(300).springify()}>
        <CustomPressable
          title="Go to Header Page"
          href="/header"
          viewStyle={styles.viewStyle}
          buttonStyle={styles.buttonStyle}
        />
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  content: {
    padding: 10,
    alignItems: "center",
    gap: 10,
  },
  viewStyle: {
    borderWidth: 1,
    borderColor: "#e3e3e3",
    borderRadius: 10,
    elevation: 5,
    overflow: "hidden",
  },
  buttonStyle: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#FFF",
  },
});
