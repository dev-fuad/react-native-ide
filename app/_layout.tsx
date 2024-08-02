import { Slot } from "expo-router";
import { Platform } from "react-native";
import IDE from "./ide";

export default function App({ workspace }) {
  if (Platform.OS === 'web' && !workspace) {
    return <IDE />
  }

  return <Slot />;
};
