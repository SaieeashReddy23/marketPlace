import { useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Button from '../common/Button'
import { TextColor } from '../../utils/constants'
import OtpInput from '../common/OtpInput'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../features/auth/authSlice'
import { router } from 'expo-router'
import { Alert } from 'react-native'

const OTPLength = 6

const LoginInfoContainer = () => {
  const dispatch = useDispatch()
  const [mobileNumber, setMobileNumber] = useState('')
  const [otp, setOtp] = useState(new Array(OTPLength).fill(''))
  const [errorMessage, setErrorMessage] = useState('')
  const [otpSent, setOtpSent] = useState(false)
  const { isLoggedIn } = useSelector((state) => state.auth)

  const generatedOtp = '123456'

  const handleSendOtp = () => {
    if (mobileNumber.length != 10 || !/^\d+$/.test(mobileNumber)) {
      setErrorMessage('Please enter a valid 10-digit mobile number.')
      return
    }
    setOtpSent(true)
    setErrorMessage('')
    Alert.alert('OTP sent', 'Your OTP is 123456 (for demo purpose)')
  }

  const handleVerifyOtp = () => {
    if (otp.join('') === generatedOtp) {
      Alert.alert('Login Successful', 'You have successfully logged in.')
      setErrorMessage('')
      dispatch(login({ mobileNumber, otp }))
    } else {
      setErrorMessage('Invalid OTP. Please try again')
    }
  }

  useEffect(() => {
    if (isLoggedIn) {
      router.replace('/home')
    }
  }, [isLoggedIn])

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>Mobile Number</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter mobile number'
          keyboardType='numeric'
          maxLength={10}
          value={mobileNumber}
          onChangeText={(text) => setMobileNumber(text)}
        />
      </View>

      {otpSent ? (
        <>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Enter OTP</Text>
            <OtpInput length={OTPLength} otp={otp} setOtp={setOtp} />
          </View>
          <View style={styles.signInButtonContainer}>
            <Button label='Verify OTP' onPress={handleVerifyOtp} />
          </View>
        </>
      ) : (
        <View style={styles.signInButtonContainer}>
          <Button label='Send OTP' onPress={handleSendOtp} />
        </View>
      )}

      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
    </View>
  )
}
export default LoginInfoContainer

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
  },

  inputContainer: {
    gap: 5,
    color: TextColor,
  },

  inputText: {
    letterSpacing: 1,
  },

  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    fontSize: 16,
    color: TextColor,
    letterSpacing: 1,
  },

  signInButtonContainer: {
    marginTop: 10,
  },
  error: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
})
