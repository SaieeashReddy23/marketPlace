import { StyleSheet, Text, View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import Accepted from '../../../components/orders/Accepted'
import Recieved from '../../../components/orders/Recieved'
import Rejected from '../../../components/orders/Rejected'
import Requested from '../../../components/orders/requested'

const Tab = createMaterialTopTabNavigator()

const Orders = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        style={styles.tabsContainer}
        screenOptions={({ route }) => ({
          // tabBarStyle: {
          //   backgroundColor: '#6200ea', // Tab bar background color
          // },
          tabBarLabelStyle: {
            fontSize: 9,
            textTransform: 'capitalize',
            letterSpacing: 1,
          },
          tabBarIndicatorStyle: {
            backgroundColor: '#b3b3ff',
          },
          // tabBarActiveTintColor: '#0000e6',
        })}
      >
        <Tab.Screen name='accepted' component={Accepted} />
        <Tab.Screen name='recieved' component={Recieved} />
        <Tab.Screen name='rejected' component={Rejected} />
        <Tab.Screen name='requested' component={Requested} />
      </Tab.Navigator>
    </View>
  )
}
export default Orders

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  tabsContainer: {
    borderWidth: 1,
    borderColor: '#f2f2f2',
    borderRadius: 10,
  },
  tabButton: {
    // paddingVertical: 10,
    // paddingHorizontal: 20,
    borderRadius: 10, // Optional: To give rounded corners to tab buttons
  },
})
