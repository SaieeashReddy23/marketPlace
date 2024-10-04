import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, Platform } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import IconButton from './IconButton'

const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0') // January is 0!
  const year = date.getFullYear()
  return `${day}/${month}/${year}`
}

// Fix datapicker for ios
const DatePickerComponent = ({ setValue }) => {
  const [date, setDate] = useState(new Date())
  const [show, setShow] = useState(false)

  const onChange = ({ type }, selectedDate) => {
    if (type === 'set') {
      const currentDate = selectedDate || date
      console.log(currentDate.toLocaleDateString())
      setShow(false)
      setDate(currentDate)
      setValue(formatDate(currentDate))
    } else {
      setShow(!show)
    }
  }

  const showDatepicker = () => {
    setShow(true)
  }
  return (
    <View>
      <IconButton icon='calendar' onPress={showDatepicker} />
      {/* <Button title='Show Date Picker' /> */}
      {show && (
        <DateTimePicker
          testID='dateTimePicker'
          // display={Platform.OS === 'ios' ? 'calendar' : 'default'}
          display='spinner'
          value={date}
          mode='date'
          is24Hour={true} // Change to false if you want 12-hour format
          onChange={onChange}
        />
      )}
      {/* <Text>Selected Date: {date.toLocaleDateString()}</Text> */}
    </View>
  )
}
export default DatePickerComponent

const styles = StyleSheet.create({})
