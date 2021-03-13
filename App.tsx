import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AnimatedTabBar, { TabsConfig, BubbleTabBarItemConfig } from '@gorhom/animated-tabbar';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './src/screen/Home'
import Menu from './src/screen/Menu'


const tabs: TabsConfig<BubbleTabBarItemConfig> = {
  Home: {
    labelStyle: {
      color: '#192034',
    },
    icon: {
      component: ({ size }) => (
        <Icon name="home" size={size} color="#192034" />
      ),
      activeColor: '',
      inactiveColor: '',
    },
    background: {
      activeColor: 'rgba(0, 140, 69 ,1)',
      inactiveColor: 'rgba(0, 140, 69 ,1)',
    },
  },
  Menu: {
    labelStyle: {
      color: '#192034',
    },
    icon: {
      component: ({ size }) => (
        <Icon name="pizza" size={size} color="#192034" />
      ),
      activeColor: '',
      inactiveColor: '',
    },
    background: {
      activeColor: 'rgba(244, 245, 240,1)',
      inactiveColor: 'rgba(244, 245, 240,1)',
    },
  },
  Location: {
    labelStyle: {
      color: '#192034',
    },
    icon: {
      component: ({ size }) => (
        <Icon name="compass" size={size} color="#192034" />
      ),
      activeColor: '',
      inactiveColor: '',
    },
    background: {
      activeColor: 'rgba(205, 33, 42,1)',
      inactiveColor: 'rgba(205, 33, 42,1)',
    },
  }
};

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          tabBar={props => (
            <AnimatedTabBar style={styles.navigator} tabs={tabs} {...props} />
          )}
        >
          <Tab.Screen
            name="Home"
            component={Home}
          />
          <Tab.Screen
            name="Menu"
            component={Menu}
          />
          <Tab.Screen
            name="Location"
            component={Home}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigator: {
    backgroundColor: "#192034"
  }
});