import * as React from 'react';
import { View, Text, Button } from 'react-native';

function SplashScreen({ navigation }) {
    return (
      <View>
          <Text>Splash screen</Text>
          <Button title="Next"
        onPress={() => navigation.navigate('onbording')}/>
      </View>
    );
  }

  export default SplashScreen;