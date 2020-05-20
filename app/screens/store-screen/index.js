import * as React from 'react';
import { View, Text, Button } from 'react-native';

function StoreScreen({ navigation }) {
    return (
      <View>
        <Text>Store screen</Text>
        <Button title="Next"
        onPress={() => navigation.navigate('profile')}/>
         <Button title="Go back" onPress={() => navigation.goBack('')} />
      </View>
    );
  }

  export default StoreScreen;