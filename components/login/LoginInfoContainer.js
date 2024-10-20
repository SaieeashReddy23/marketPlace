import { useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Button from '../common/Button'
import { TextColor } from '../../utils/constants'
import OtpInput from '../common/OtpInput'
import { useDispatch, useSelector } from 'react-redux'
import {
  sendOtp,
  setDemoUser,
  setError,
  setMobileNumber,
  verifyOtp,
} from '../../features/auth/authSlice'
import { router } from 'expo-router'
import { Alert } from 'react-native'

const OTPLength = 6

const LoginInfoContainer = () => {
  const dispatch = useDispatch()
  const [otp, setOtp] = useState(new Array(OTPLength).fill(''))
  const { error, isOtpSent, loading, mobileNumber } = useSelector(
    (state) => state.auth
  )

  const handleSendOtp = () => {
    if (mobileNumber.length != 10 || !/^\d+$/.test(mobileNumber)) {
      dispatch(setError('Please enter a valid 10-digit mobile number.'))
      return
    }
    dispatch(sendOtp(mobileNumber))
  }

  const handleVerifyOtp = () => {
    dispatch(verifyOtp(otp.join('')))
    router.replace('/')
  }

  const handleDemoUser = () => {
    dispatch(setDemoUser())
    router.replace('/')
  }

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
          onChangeText={(text) => dispatch(setMobileNumber(text))}
          editable={!isOtpSent}
        />
      </View>

      {isOtpSent ? (
        <>
          <View style={styles.inputContainer}>
            <Text style={styles.inputText}>Enter OTP</Text>
            <OtpInput length={OTPLength} otp={otp} setOtp={setOtp} />
          </View>
          <View style={styles.signInButtonContainer}>
            <Button
              label='Verify OTP'
              onPress={handleVerifyOtp}
              loading={loading}
            />
          </View>
        </>
      ) : (
        <View style={styles.signInButtonContainer}>
          <Button label='Send OTP' onPress={handleSendOtp} loading={loading} />
        </View>
      )}

      <View style={styles.signInButtonContainer}>
        <Button label='Demo user' onPress={handleDemoUser} loading={loading} />
      </View>

      {error ? <Text style={styles.error}>{error}</Text> : null}
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
