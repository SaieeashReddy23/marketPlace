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
      <Tabs>
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
    </ProtectedRoute>
  )
}
export default ProtectedRoutesLayout

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
  },
})
