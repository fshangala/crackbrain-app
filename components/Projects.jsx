import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

export function Home({ navigation }){
  return(
    <View>
      <Text>Home page!</Text>
      <Button icon="home" title="Go to details" onPress={()=>{navigation.navigate("Detail")}} >Go to details</Button>
    </View>
  );
}

export function Detail(){
  return(
    <View>
      <Text>Details Page</Text>
    </View>
  );
}