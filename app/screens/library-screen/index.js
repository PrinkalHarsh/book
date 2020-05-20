import * as React from 'react';
import { View, Text, Button } from 'react-native';

function LibraryScreen({ navigation }) {
    return (
      <View>
        <Text>library screen</Text>
        <Button title="Next"
        onPress={() => navigation.navigate('store')}/>
         <Button title="Go back" onPress={() => navigation.goBack('')} />
      </View>
    );
  }

  export default LibraryScreen;