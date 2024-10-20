import { Redirect, router } from 'expo-router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeAuth } from '../../features/auth/authSlice'

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch()
  const { isLoggedIn, loading, userInfo } = useSelector((store) => store.auth)

  useEffect(() => {
    dispatch(initializeAuth())
  }, [dispatch])

  if (!isLoggedIn) {
    return <Redirect href='/' />
  }

  return isLoggedIn ? children : null
}
export default ProtectedRoute
