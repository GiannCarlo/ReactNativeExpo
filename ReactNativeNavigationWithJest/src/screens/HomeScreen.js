
import { Button, View } from 'react-native';
import axios from 'axios'
import React, { useEffect } from 'react';
import { FlatList, SafeAreaView, StatusBar, Text } from 'react-native-web';

//https://pokeapi.co/api/v2/pokemon


async function getJSONData(setData) {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
    setData(response);
  } catch (error) {
  }
}


function HomeScreen({ navigation }) {
  const [names, setNames] = React.useState([]);

  useEffect(() => {
    getJSONData(setData);
  }, [names]);

  const setData = (data) => {
    const listData = data.data.results;
    const newList = [];
    for (let a = 0; a < listData.length; a++) {

      newList.push(listData[a].name);
    }
    setNames(newList);
  }

  const Item = ({ title }) => (
    <View style={{
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    }}>
      <Text style={{ fontSize: 32 }}>{title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={{
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    }}>
      <FlatList
        data={names}
        renderItem={({ item }) => <Item title={item} />}
        keyExtractor={item => item}
        
      />
      <Button
        testID='btnProfile'
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;


