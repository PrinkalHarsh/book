import * as React from 'react';
import { View, Text, Button } from 'react-native';

function WelcomeScreen({ navigation }) {
    return (
      <View>
        <Text>Welcome screen</Text>
        <Button title="Next"
        onPress={() => navigation.navigate('discover')}/>
         <Button title="Go back" onPress={() => navigation.goBack('')} />
      </View>
    );
  }

  export default WelcomeScreen;