import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import CustomPressable from "@/components/CustomPressable";
import Ionicons from "@expo/vector-icons/Ionicons";

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const API_ENDPOINT = "https://randomuser.me/api/?results=30";

const SearchBar = () => {
  // state variables
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [fullData, setFullData] = useState<any[]>([]);

  // useEffect hooks
  useEffect(() => {
    setIsLoading(true);
    fetchData(API_ENDPOINT);
  }, []);

  const fetchData = async (uri: string) => {
    try {
      console.log("Fetching data");
      const response = await fetch(uri);
      const json = await response.json();
      setData(json.results);
      console.log("🚀 ~ fetchData ~ data:", json.results);
    } catch (error: any) {
      console.log(error);
      setError(error);
    }
    setIsLoading(false);
  };

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
    width: withTiming(isSearchBarOpen.value ? 0 : 182),
  }));

  // onChange handler
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  if (isLoading) {
    return (
      <View
        style={[
          // StyleSheet.absoluteFill,
          { flex: 1, alignItems: "center", justifyContent: "center" },
        ]}
      >
        <ActivityIndicator size={24} />
      </View>
    );
  } else if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>
          Error in fetching data... Please check your internet connection
        </Text>
      </View>
    );
  }
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

        {/* <View style={{ flexDirection: "row", gap: 10 }}>
          <View
            style={{ flexDirection: "row", borderWidth: 1, borderRadius: 19 }}
          >
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
            <AnimatedTextInput
              placeholder="Search for anything"
              style={[inputAnimatedStyle]}
              numberOfLines={1}
              clearButtonMode="always"
              value={searchQuery}
              onChangeText={() => setSearchQuery(searchQuery)}
            />
          </View>
          <CustomPressable
            viewStyle={styles.searchViewStyle}
            buttonStyle={styles.searchButtonStyle}
            onPress={hideSearchBar}
          >
            <Ionicons name="mail-outline" size={30} />
          </CustomPressable>
        </View> */}
      </View>
      <TextInput
        placeholder="Search for anything"
        style={{
          marginHorizontal: 15,
          marginVertical: 15,
          paddingHorizontal: 15,
          paddingVertical: 10,
          borderWidth: 1,
          borderRadius: 5,
        }}
        value={searchQuery}
        onChangeText={handleSearch}
        autoCorrect={false}
        autoCapitalize="none"
      />
    </ScrollView>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  searchButtonStyle: {
    borderRadius: 19,
  },
  searchViewStyle: {
    height: 38,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
