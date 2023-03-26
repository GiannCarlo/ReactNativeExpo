import React from 'react'
import { Button, View, FlatList, Text } from 'react-native';

function HomeScreen({ navigation }) {
  const [names, updateNames] = React.useState([{ key: 'Giann' }, { key: 'Diane' }, { key: 'Zendrick' }]);

  // updateNames( oldnames => [...oldnames, [{ key: 'Giann' }, { key: 'Diane' }, { key: 'Zendrick' }]]);

  const DisplayItems = () => {
    return (
      <View style={{display:'flex', flexDirection:'column', justifyContent:'space-between', flex:0.5, alignItems:'center',alignContent:'space-between'}}>
        <Text>{'LIST OF NAMES'}</Text>
        <FlatList
     
          data={names}
          renderItem={({ item }) => <Text style={{  padding: 10,borderWidth:2,
            fontSize: 18,
            height: 44, }}>{item.key}</Text>}
        />
      </View>
    );
  }


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <DisplayItems />
      <Button
        testID='btnProfile'
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

export default HomeScreen;


