import {
  SharedTransition,
  WithSpringConfig,
  withSpring,
} from "react-native-reanimated";

const SPRING_CONFIG = {
  mass: 1,
  stiffness: 100,
  damping: 200,
};

export const sharedElementTransition = SharedTransition.custom((values) => {
  "worklet";
  return {
    height: withSpring(values.targetHeight, SPRING_CONFIG),
    width: withSpring(values.targetWidth, SPRING_CONFIG),
  };
});
