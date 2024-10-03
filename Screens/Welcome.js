import { ImageBackground, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={{ width: '100%', height: '100%' }}
      source={{ uri: 'https://images.unsplash.com/photo-1564758564527-b97d79cb27c1?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
      resizeMode="cover"
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          paddingBottom: 40,
        }}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 36,
            fontWeight: '800',
            textAlign: 'left',
            marginBottom: 10,
          }}
        >
          Let Your Favourite Food Find You
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            textAlign: 'left',
            marginVertical: 10,
            lineHeight: 24,
          }}
        >
          Discover new tastes and cuisines that suit your cravings. 
          Whether you're at home or on the go, let us bring the food to you!
        </Text>
        <TouchableOpacity
          accessible={true}
          accessibilityLabel="Find Food button"
          style={{
            width: '97%',
            padding: 15,
            backgroundColor: 'white',
            borderRadius: 13,
            alignItems: 'center',
            marginTop: 20,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.5,
            elevation: 5,
          }}
          activeOpacity={0.7}
          onPress={() => {navigation.navigate('Food')}}
        >
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              fontSize: 18,
            }}
          >
            Find Food
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Welcome;
