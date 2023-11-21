import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import Ionicons from 'react-native-vector-icons/Ionicons';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Main Screen</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings Screen</Text>
    </View>
  );
}

function AddScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Add Screen</Text>
    </View>
  );
}
function NotificationsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}
function SearchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Search Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {


  const [notifications, setNotifications] = useState(1);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let mainButtonColor = 'black';

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            }else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }else if (route.name === 'Add') {
              color = 'white';
              size = 40;

              if (focused) mainButtonColor = 'rgb(0, 122, 255)';

              iconName = focused ? 'finger-print' : 'finger-print';

            }else if (route.name === 'Notifications') {
              iconName = focused ? 'notifications' : 'notifications-outline';
            }else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            }


            if (route.name === 'Add') {
              return (
                <View style={{
                  width: 65,
                  height: 65,
                  paddingLeft: 2,
                  paddingTop: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: -5,
                  backgroundColor:  mainButtonColor,
                  borderRadius: 100,

                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 0,
                  },
                  shadowOpacity: 0.3,
                  shadowRadius: 5,
                  elevation: 5
                 }}>
                  <Ionicons name={iconName} size={size} color={color} />
                </View>
              );
            }else if (route.name === 'Notifications'){
              return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: -30 }}>
                  {
                    notifications > 0 ? (
                      <View style={{
                        position: 'absolute',
                        top: 20,
                        right: 5,
                        zIndex: 1,
                        width: 9,
                        height: 9,
                        borderRadius: 100,
                        backgroundColor: 'red',
                        }}>

                      </View>
                    ) : null
                  }
                  <Ionicons name={iconName} size={size} color={color} />
                </View>
              )
            }else{
              return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: -30 }}>
                  <Ionicons name={iconName} size={size} color={color} />
                </View>
              );
            }


          },
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 40,
            left: 20,
            right: 20,
            borderRadius: 20,
            height: 70,

            elevation: 10,
            shadowColor: 'black',
            shadowOffset: {
              height: 0,
              width: 0
            },
            shadowOpacity: 0.1,
            shadowRadius: 10
          }
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Tab.Screen name="Search" component={SearchScreen} options={{ title: 'Search' }} />
        <Tab.Screen name="Add" component={AddScreen} options={{ title: 'Add' }} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} options={{ title: 'Notifications' }} />
        <Tab.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }}  />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
