import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import IconButton from './IconButton'
import SlideModal from './SlideModal'
import { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { TextColor } from '../../utils/constants'
import axios from 'axios'
import { useSelector } from 'react-redux'

const dummyreqData = {
  data: 'data',
  isApiCallNeeded: false,
  url: '123',
  requestType: 'get',
  reqBody: 'some body',
}

const SearchInput = ({ label, value, handleChange, placeholder, id }) => {
  const { department } = useSelector((store) => store.auth.userInfo)
  const [isVisible, setIsVisible] = useState(false)
  const [query, setQuery] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [data, setData] = useState([])
  const [isLoading, setIsLoding] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleSearch = async (text) => {
    setQuery(text)
  }

  const handleSelectItem = (item) => {
    handleChange(item.itemData)
    setIsVisible(false)
    setQuery('')
    setFilteredData([])
  }

  const renderItem = ({ item }) => {
    const { itemId, itemData } = item || {}

    return (
      <TouchableOpacity onPress={() => handleSelectItem(item)}>
        <View style={styles.resultItem}>
          <Text>{itemData}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  // useEffect(() => {
  //   let dat = Array.from({ length: 20 }, (_, index) => {
  //     return `${label} -  ${index}`
  //   }).filter(({ itemData }) =>
  //     itemData.toLowerCase().includes(query.toLowerCase())
  //   )

  //   setData(dat)

  // }, [query])

  return (
    <View>
      <View style={styles.inputFormContainer}>
        <Text style={styles.inputFormHeader}>{label}</Text>
        <View style={styles.inputFormValueContainer}>
          <TextInput
            placeholder={placeholder}
            style={styles.inputText}
            value={value}
            onChangeText={handleChange}
            editable={false}
          />
          <IconButton icon='search' onPress={() => setIsVisible(true)} />
        </View>
      </View>
      <SlideModal
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
        modalHeight='85%'
      >
        <View style={styles.modalHeader}>
          <Text style={styles.modalHeaderText}>{placeholder}</Text>
        </View>
        <View style={styles.modalSearchInputContainer}>
          <IconButton icon='search' size={20} />
          <TextInput
            placeholder='search...'
            value={query}
            onChangeText={handleSearch}
            style={styles.inputText}
          />
        </View>
        <View style={styles.searchResultsContainer}>
          <FlatList
            data={filteredData}
            keyExtractor={(item) => item.itemId}
            renderItem={renderItem}
          />
        </View>
      </SlideModal>
    </View>
  )
}
export default SearchInput

const styles = StyleSheet.create({
  container: {},
  inputFormContainer: {
    gap: 5,
    marginBottom: 10,
    marginHorizontal: 10,
  },

  inputFormHeader: {
    fontWeight: 'semibold',
    color: '#8c8c8c',
    letterSpacing: 1,
    left: 5,
  },
  inputFormValueContainer: {
    borderWidth: 1,
    borderColor: '#d9d9d9',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  inputText: {
    color: TextColor,
  },

  modalHeader: {
    marginBottom: 20,
  },
  modalHeaderText: {
    fontWeight: 'semibold',
    letterSpacing: 1,
    fontSize: 20,
  },

  modalSearchInputContainer: {
    gap: 10,
    borderWidth: 1,
    borderColor: '#d9d9d9',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 30,
  },

  searchResultsContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#d9d9d9',
    borderRadius: 10,
    marginBottom: 30,
    padding: 10,
  },

  resultItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#d9d9d9',
    borderRadius: 10,
    marginBottom: 10,
  },
})
