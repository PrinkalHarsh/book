import * as React from 'react';
import { View, Text, Button } from 'react-native';

function OnbordingScreen({ navigation }) {
    return (
      <View>
        <Text>OnBording screen</Text>
        <Button title="Next"
        onPress={() => navigation.navigate('welcome')}/>
         <Button title="Go back" onPress={() => navigation.goBack('')} />
      </View>
    );
  }

  export default OnbordingScreen;