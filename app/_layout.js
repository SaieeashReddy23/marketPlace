import { Provider, useDispatch, useSelector } from 'react-redux'
import store from '../store'
import { Slot, useRouter } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { Stack } from 'expo-router/stack'
import { useEffect } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router'

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'login',
}

// SplashScreen.preventAutoHideAsync()

const RootNavigator = () => {
  // const dispatch = useDispatch()
  // const router = useRouter()
  // const { userInfo, isLoggedIn, token, loading } = useSelector(
  //   (store) => store.auth
  // )

  // useEffect(() => {
  //   if (!isLoggedIn && !loading) {
  //     router.replace('/')
  //   }
  // }, [loading, isLoggedIn])

  return (
    <Provider store={store}>
      {/* <SafeAreaView style={styles.container}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name='index' />
          <Stack.Screen name='(protected)' />
        </Stack>
      </SafeAreaView> */}
      <SafeAreaView style={styles.container}>
        <Slot />
      </SafeAreaView>
    </Provider>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingBottom: 10,
  },
})
