import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { TextColor } from '../../utils/constants'
import Button from '../../components/common/Button'
import { logout } from '../../features/auth/authSlice'
import { router } from 'expo-router'
import { useEffect } from 'react'

const account = () => {
  const dispatch = useDispatch()
  const { userInfo, isLoggedIn } = useSelector((store) => store.auth) || {}

  const { userName, userMailId, userMobileNumber, assignedProjects } =
    userInfo || {}

  const handleSignOut = () => {
    dispatch(logout())
    // router.replace('/')
  }

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     router.replace('/login')
  //   }
  // }, [isLoggedIn])

  const renderProjectItem = ({ item }) => {
    const { projectName, projectCode } = item
    return (
      <View style={styles.projectContainer}>
        <View style={styles.projectInfoContainer}>
          <Text style={styles.projectInfoHeader}>Project Code </Text>
          <Text> : </Text>
          <Text style={styles.projectInfoValue}>{projectCode}</Text>
        </View>
        <View style={styles.projectInfoContainer}>
          <Text style={styles.projectInfoHeader}>Project Name </Text>
          <Text> : </Text>
          <Text style={styles.projectInfoValue}>{projectName}</Text>
        </View>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.infoHeader}>Account Holder Name</Text>
        <Text style={styles.infoValue}>{userName}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoHeader}>Mail Id </Text>
        <Text style={styles.infoValue}>{userMailId}</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoHeader}>Mobile Number</Text>
        <Text style={styles.infoValue}>{userMobileNumber}</Text>
      </View>

      <View style={styles.projectsOuterContainer}>
        <Text style={styles.infoHeader}>Assigned Projects</Text>
        <View style={styles.projectsContainer}>
          <FlatList
            scrollEnabled={true}
            data={assignedProjects}
            renderItem={renderProjectItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>

      <View>
        <Button label='Sign out' onPress={handleSignOut} color='#D9534F' />
      </View>
    </View>
  )
}
export default account

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  infoContainer: {
    gap: 3,
    marginBottom: 20,
  },
  infoHeader: {
    fontSize: 15,
    color: '#8c8c8c',
    fontWeight: 'semibold',
  },
  infoValue: {
    fontSize: 20,
    color: TextColor,
    letterSpacing: 1,
    fontWeight: 'semibold',
  },

  projectsOuterContainer: {
    flex: 1,
    gap: 3,
    marginBottom: 20,
  },

  projectsContainer: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#f2f2f2',
    paddingHorizontal: 10,
    marginTop: 5,
  },

  projectContainer: {
    borderBottomWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    gap: 5,
  },

  projectInfoContainer: {
    flexDirection: 'row',
    gap: 5,
  },

  projectInfoHeader: {
    width: 80,
    color: '#8c8c8c',
    fontSize: 11,
  },

  projectInfoValue: {
    color: TextColor,
  },
})
