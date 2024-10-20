import { Redirect, Stack } from 'expo-router'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

const AppLayout = () => {
  const { isLoggedIn, loading, userInfo } = useSelector((store) => store.auth)

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size='large' color='#0000ff' />
      </View>
    )
  }

  if (!isLoggedIn) {
    return <Redirect href='/login' />
  }

  return (
    <Stack>
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      {/* <Stack.Screen name='modal' options={{ presentation: 'modal' }} /> */}
    </Stack>
  )
}
export default AppLayout

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
