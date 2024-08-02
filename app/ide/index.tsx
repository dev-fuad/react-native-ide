import { StyleSheet } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { lightTheme } from '../../styles/colors';
import Sidebar from './sidebar';
import Workspace from './workspace';

export default function IDE() {
  return (
    <LinearGradient
      style={styles.container}
      colors={lightTheme.backgroundGradient}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      locations={[0, 0.4, 0.6, 0.7]}
    >
      <Sidebar />
      <Workspace />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    flexDirection: 'row',

    backgroundColor: '#E5E5E5',
  },
});
