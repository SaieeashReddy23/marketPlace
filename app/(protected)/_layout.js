import { Tabs } from 'expo-router'

import { Ionicons } from '@expo/vector-icons'
import TabBarButton from '../../components/common/TabBarButton'
import NotificationsButton from '../../components/common/NotificationsButton'
import { useSelector } from 'react-redux'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProtectedRoute from '../../components/common/ProtectedRoute'

const ProtectedRoutesLayout = () => {
  const { requestType } = useSelector((store) => store.request)
  const handleNotificationPress = () => {
    alert('notification button pressed')
  }

  return (
    <ProtectedRoute>
      {/* <SafeAreaView style={{ flex: 1 }}> */}
      <Tabs
        screenOptions={{
          tabBarStyle: {
            height: 70, // Increase the height
            paddingBottom: 10, // Add padding to ensure it's not cut off
            paddingTop: 5,
          },
          headerStyle: {
            // height: 80,
          },
          headerStatusBarHeight: 10,
          // tabBarItemStyle: {
          //   marginHorizontal: 0, // Adds space between tab buttons
          // },
        }}
      >
        <Tabs.Screen
          name='home'
          options={{
            title: 'Home',
            headerRight: () => (
              <NotificationsButton onPress={handleNotificationPress} />
            ),
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='home' size={size} color={color} /> // Home icon
            ),
          }}
        />
        <Tabs.Screen
          name='orders'
          options={{
            title: 'Orders',
            headerRight: () => (
              <NotificationsButton onPress={handleNotificationPress} />
            ),
            tabBarLabel: 'Orders',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='list' size={size} color={color} /> // Home icon
            ),
          }}
        />
        <Tabs.Screen
          name='add'
          options={{
            title: `Request for ${requestType}`,
            tabBarLabel: '',
            headerRight: () => (
              <NotificationsButton onPress={handleNotificationPress} />
            ),
            tabBarButton: ({ color, size }) => {
              return <TabBarButton color={color} size={size} />
            },
          }}
        />
        <Tabs.Screen
          name='edit'
          options={({ route }) => ({
            title: `edit - ${route.params?.id}`,
            tabBarLabel: '',
            headerRight: () => (
              <NotificationsButton onPress={handleNotificationPress} />
            ),
            tabBarButton: () => null,
          })}
        />
        <Tabs.Screen
          name='cart'
          options={{
            title: 'Cart',
            headerRight: () => (
              <NotificationsButton onPress={handleNotificationPress} />
            ),
            tabBarLabel: 'Cart',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='cart' size={size} color={color} /> // Home icon
            ),
          }}
        />
        <Tabs.Screen
          name='account'
          options={{
            title: 'Account',
            headerRight: () => (
              <NotificationsButton onPress={handleNotificationPress} />
            ),
            tabBarLabel: 'Account',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='person' size={size} color={color} /> // Home icon
            ),
          }}
        />
      </Tabs>
      {/* </SafeAreaView> */}
    </ProtectedRoute>
  )
}
export default ProtectedRoutesLayout

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
  },
})
