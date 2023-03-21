import {  Button, View } from 'react-native';


function ProfileScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
         accessibilityLabel="btnSettings"
         testID="btnSettings"
          title="Go to Settings"
          onPress={() => navigation.navigate('Settings')}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }
export default ProfileScreen;


