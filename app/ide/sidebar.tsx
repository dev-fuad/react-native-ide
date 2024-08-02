import { LinearGradient } from 'expo-linear-gradient';
import { useRootNavigationState } from "expo-router";
import { useCallback, useMemo } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { lightTheme, palette } from "../../styles/colors";

const Sidebar = () => {
  const state = useRootNavigationState();

  const routes = useMemo(() =>
    state.routeNames?.filter((x) => !/^ide\/.*$/g.test(x)),
    [state.routeNames]
  );

  const renderRoute = useCallback(({ item }) => (
    <LinearGradient
      style={styles.listItem}
      colors={lightTheme.borderGradient}
      start={{ x: 0.7, y: 0 }}
      end={{ x: 0.78, y: 1 }}
    >
      <Pressable style={styles.listItemButton}>
        <Text>{item}</Text>
      </Pressable>
    </LinearGradient>
  ), []);

  const Header = () => (
    <h1><code>IDE</code></h1>
  );

  const Footer = () => (
    <pre>{JSON.stringify(state.routes, null, 2).replace(/\"key\": \"[0-9a-zA-Z\-\_]*\"/g, "")}</pre>
  );

  return (
    <View style={styles.sidePanel}>
      <FlatList
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
        data={routes}
        ListHeaderComponent={Header}
        renderItem={renderRoute}
        keyExtractor={(route) => route}
      />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  sidePanel: {
    width: 300,
  },
  listItem: {
    padding: 2,
    margin: 5,
  },
  listItemButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: palette.lightGreen
  },
})

export default Sidebar;
