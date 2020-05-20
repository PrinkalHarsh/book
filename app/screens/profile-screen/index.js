import * as React from 'react';
import { View, Text, Button } from 'react-native';

function ProfileScreen({ navigation }) {
    return (
      <View>
        <Text>Profile screen</Text>
         <Button title="Go back" onPress={() => navigation.goBack('')} />
      </View>
    );
  }

  export default ProfileScreen;