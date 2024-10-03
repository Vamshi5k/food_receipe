import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const FoodScreen = () => {
  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: '#fff' }}>
      <View style={{ 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        paddingVertical: 16 
      }}>
        <Image 
          source={{ uri: 'https://storage.googleapis.com/fc-freepik-pro-rev1-europe-west1-reimagine-ai/reimagine/144864/144864315/152782851/a3d876cf-d69a-42e2-84c3-33a9c533df8a.jpg' }} 
          style={{ 
            width: 50, 
            height: 50, 
            borderRadius: 8 
          }}
          accessibilityLabel="User profile image"
        />
        <Text style={{ 
          flex: 1, 
          textAlign: 'center', 
          fontSize: 20, 
          fontWeight: 'bold',
          color: 'black',
        }}>
          Hey, Vamshi
        </Text>
        <TouchableOpacity onPress={() => console.log("Clicked Notification")}>
          <Icon name="notifications" size={24} color="#000" style={{ marginLeft: 8 }} />
        </TouchableOpacity>
      </View>

      <Text style={{ 
        fontSize: 30, 
        fontWeight: '800', 
        textAlign: 'left', 
        marginVertical: 16,
        color: '#000',
      }}>
        What's cooking for us tonight?
      </Text>

      <View style={{ 
        flexDirection: 'row', 
        alignItems: 'center', 
        marginBottom: 16 
      }}>
        <TextInput 
          style={{ 
            flex: 1, 
            borderWidth: 1, 
            borderColor: '#ccc', 
            borderRadius: 8, 
            padding: 10, 
            marginRight: 8 
          }} 
          placeholder="Foods, drinks, healthy"
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity style={{
          width: 50, 
          height: 50, 
          justifyContent: 'center', 
          alignItems: 'center', 
          borderRadius: 8, 
          backgroundColor: '#000'
        }} onPress={() => console.log("Search clicked")}>
          <Icon name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={{
        width: '100%',
        height: 50,
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
      }}>
       <Text style={{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
       }}>Recommended</Text>
       <TouchableOpacity style={{
        width: 80,
        height: 40,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
       }} onPress={() => console.log("View All clicked")}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ color: 'black', fontWeight: 'bold' }}>View All</Text>
          <Icon name="chevron-forward" size={16} color="black" style={{ marginLeft: 5 }} />
        </View>
       </TouchableOpacity>
      </View>
    </View>
  );
};

export default FoodScreen;
