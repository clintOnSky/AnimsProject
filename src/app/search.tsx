import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import CustomPressable from "@/components/CustomPressable";
import Ionicons from "@expo/vector-icons/Ionicons";

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const SearchBar = () => {
  // window dimension
  const { width } = useWindowDimensions();
  console.log("🚀 ~ SearchBar ~ width:", width);
  // shared values
  const isSearchBarOpen = useSharedValue(false);

  const showSearchBar = () => {
    isSearchBarOpen.value = true;
  };
  const hideSearchBar = () => {
    isSearchBarOpen.value = false;
  };

  // animated styles
  const inputAnimatedStyle = useAnimatedStyle(() => ({
    opacity: withTiming(isSearchBarOpen.value ? 1 : 0),
    width: withTiming(isSearchBarOpen.value ? width - 108 : 0),
    paddingHorizontal: withTiming(isSearchBarOpen.value ? 15 : 0),
  }));

  const textAnimatedStyle = useAnimatedStyle(() => ({
    opacity: withTiming(isSearchBarOpen.value ? 0 : 1),
    width: withTiming(isSearchBarOpen.value ? 0 : 82),
  }));

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 10,
        }}
      >
        <Animated.Text
          style={[textAnimatedStyle, { fontSize: 30 }]}
          numberOfLines={1}
        >
          Hello Clinton
        </Animated.Text>

        <View
          style={{ flexDirection: "row", gap: 10, backgroundColor: "beige" }}
        >
          <View
            style={{ flexDirection: "row", borderWidth: 1, borderRadius: 19 }}
          >
            <AnimatedTextInput
              placeholder="Search for anything"
              style={[inputAnimatedStyle]}
              numberOfLines={1}
            />
            <CustomPressable
              viewStyle={{
                borderRadius: 19,
              }}
              buttonStyle={{
                height: 38,
                aspectRatio: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={showSearchBar}
            >
              <Ionicons name="search-outline" size={30} />
            </CustomPressable>
          </View>
          <CustomPressable
            viewStyle={{
              borderRadius: 19,
            }}
            buttonStyle={{
              height: 38,
              aspectRatio: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={hideSearchBar}
          >
            <Ionicons name="mail-outline" size={30} />
          </CustomPressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
});
