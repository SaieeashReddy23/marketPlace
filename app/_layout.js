import { Provider, useDispatch, useSelector } from 'react-redux'
import store from '../store'
import { ExpoRoot, Slot, useRouter } from 'expo-router'
import { Stack } from 'expo-router/stack'
import { useEffect } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const RootNavigator = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { userInfo, isLoggedIn, token, loading } = useSelector(
    (store) => store.auth
  )

  useEffect(() => {
    if (!isLoggedIn && !loading) {
      router.replace('/')
    }
  }, [loading, isLoggedIn])

  return (
    <Provider store={store}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='index' />
        <Stack.Screen name='(protected)' />
      </Stack>
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
