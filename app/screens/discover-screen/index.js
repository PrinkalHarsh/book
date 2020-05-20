import * as React from 'react';
import { View, Text, Button } from 'react-native';

function DiscoverScreen({ navigation }) {
    return (
      <View>
        <Text>Discover screen</Text>
        <Button title="Next"
        onPress={() => navigation.navigate('library')}/>
         <Button title="Go back" onPress={() => navigation.goBack('')} />
      </View>
    );
  }

  export default DiscoverScreen;