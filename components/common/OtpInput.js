import { useRef } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { TextColor } from '../../utils/constants'

const OtpInput = ({ length = 6, otp, setOtp }) => {
  const inputRefs = useRef([])

  const handleChange = (text, index) => {
    const updatedOtp = [...otp]
    updatedOtp[index] = text
    setOtp(updatedOtp)

    // If the user enters a value, move to the next input field
    if (text.length === 1 && index < length - 1) {
      inputRefs.current[index + 1].focus()
    }

    // If the user deletes a value, move back to the previous input field
    if (text === '' && index > 0) {
      inputRefs.current[index - 1].focus()
    }

    // Call the callback if OTP is completely filled
    // if (updatedOtp.join('').length === length) {
    //   onOtpComplete(updatedOtp.join(''))
    // }
  }

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs.current[index - 1].focus()
    }
  }
  return (
    <View style={styles.otpContainer}>
      {otp.map((_, index) => (
        <View style={styles.otpInputContainer} key={index}>
          <TextInput
            ref={(el) => (inputRefs.current[index] = el)}
            style={styles.otpInput}
            keyboardType='number-pad'
            maxLength={1}
            value={otp[index]}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
          />
        </View>
      ))}
    </View>
  )
}
export default OtpInput

const styles = StyleSheet.create({
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  otpInputContainer: {},
  otpInput: {
    borderBottomWidth: 2,
    borderColor: TextColor,
    width: 40,
    height: 50,
    textAlign: 'center',
    fontSize: 20,
  },
})
