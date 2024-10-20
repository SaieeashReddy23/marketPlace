import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, Platform, Modal } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import IconButton from './IconButton'

const formatDate = (date) => {
  if (date === '') {
    return ''
  }

  const day = date.getDate().toString().padStart(2, '0') // DD
  const month = (date.getMonth() + 1).toString().padStart(2, '0') // MM
  const year = date.getFullYear() // YYYY
  const hours = date.getHours().toString().padStart(2, '0') // HH
  const minutes = date.getMinutes().toString().padStart(2, '0') // mm
  const seconds = date.getSeconds().toString().padStart(2, '0') // ss

  return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`
}

// Fix datapicker for ios
const DatePickerComponent = ({ setValue }) => {
  const [date, setDate] = useState(new Date())
  const [show, setShow] = useState(false)

  // Set today's date as the minimum selectable date
  const today = new Date()

  const handleOnchangeIos = ({ type }, selectedDate) => {
    if (type === 'set') {
      const currentDate = selectedDate || date
      setDate(currentDate)
    }
  }

  const handleDoneIos = () => {
    const formattedDate = formatDate(date)
    setValue(formattedDate)
    setShow(false)
  }

  const handleOnchangeAndroid = ({ type }, selectedDate) => {
    console.log('Type : ', type)
    console.log('Selected Date : ', selectedDate)
    if (type === 'set') {
      const currentDate = selectedDate || date
      const formattedDate = formatDate(currentDate)
      setShow(false)
      setDate(currentDate)
      setValue(formattedDate)
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
      {/* {show && (
        <DateTimePicker
          testID='dateTimePicker'
          display='spinner'
          value={date}
          mode='date'
          is24Hour={true}
          onChange={onChange}
        />
      )} */}

      {Platform.OS === 'ios' && show && (
        <Modal
          transparent={true}
          animationType='fade'
          visible={show}
          onRequestClose={() => setShow(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <DateTimePicker
                value={date}
                mode='date'
                display='spinner'
                onChange={handleOnchangeIos}
                style={styles.picker}
                minimumDate={today}
              />
              <Button title='Done' onPress={handleDoneIos} />
            </View>
          </View>
        </Modal>
      )}

      {Platform.OS === 'android' && show && (
        <DateTimePicker
          value={date}
          mode='date'
          display='spinner'
          onChange={handleOnchangeAndroid}
          style={styles.picker}
          minimumDate={today}
        />
      )}
      {/* <Text>Selected Date: {date.toLocaleDateString()}</Text> */}
    </View>
  )
}
export default DatePickerComponent

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // Modal background with transparency
  },
  modalContent: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: 300,
  },
  picker: {
    width: 300,
    height: 200,
  },
  selectedDateText: {
    marginTop: 20,
    fontSize: 16,
    color: '#333',
  },
})
