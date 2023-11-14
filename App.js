import * as React from "react";
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
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            }else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }else if (route.name === 'Add') {
              iconName = focused ? 'add' : 'add-outline';
            }else if (route.name === 'Notifications') {
              iconName = focused ? 'notifications' : 'notifications-outline';
            }else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            }

            return (
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: -30 }}>
                <Ionicons name={iconName} size={size} color={color} />
              </View>
            );
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
