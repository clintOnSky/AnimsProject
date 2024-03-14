import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { Href, Link } from "expo-router";

interface CustomPressableProps {
  onPress?: () => void;
  href?: Href<string>;
  title?: string;
  children?: React.ReactNode;
  viewStyle?: StyleProp<ViewStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
}
const CustomPressable = ({
  href,
  onPress,
  title,
  children,
  buttonStyle,
  viewStyle,
}: CustomPressableProps) => {
  return (
    <View
      style={[
        {
          overflow: "hidden",
        },
        viewStyle,
      ]}
    >
      {href ? (
        <Link asChild href={href}>
          <Pressable
            style={buttonStyle}
            android_ripple={{
              color: "gray",
            }}
          >
            {children ? children : <Text>{title}</Text>}
          </Pressable>
        </Link>
      ) : (
        <Pressable
          style={buttonStyle}
          android_ripple={{
            color: "gray",
          }}
          onPress={onPress}
        >
          {children ? children : <Text>{title}</Text>}
        </Pressable>
      )}
    </View>
  );
};

export default CustomPressable;

const styles = StyleSheet.create({});
