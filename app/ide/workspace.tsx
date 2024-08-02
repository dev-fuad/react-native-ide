import { StyleSheet, View } from 'react-native';
import { palette } from '../../styles/colors';
import App from '../_layout';
import './styles';

const Screen = ({ children }) => <div className='screen'>{children}</div>;

export default function Workspace() {
  return (
    <View style={styles.container}>
      <Screen>
        <App workspace />
      </Screen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 5,

    backgroundColor: palette.green,
  },
});
