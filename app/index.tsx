import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Page1() {
  return (
    <View style={styles.container}>
      <Text>Page 1!</Text>
      <Link href="/page2">Next</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
