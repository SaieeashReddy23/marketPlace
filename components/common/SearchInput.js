import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import IconButton from './IconButton'
import SlideModal from './SlideModal'
import { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { TextColor } from '../../utils/constants'

const SearchInput = ({ label, value, handleChange, placeholder }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [query, setQuery] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [data, setData] = useState([])

  const handleSearch = (text) => {
    setQuery(text)
    if (text) {
      const filtered = data.filter((item) =>
        item.toLowerCase().includes(text.toLowerCase())
      )
      setFilteredData(filtered)
    } else {
      setFilteredData([])
    }
  }

  const handleSelectItem = (item) => {
    handleChange(item)
    setIsVisible(false)
    setQuery('')
    setFilteredData([])
  }

  useEffect(() => {
    let dat = Array.from({ length: 20 }, (_, index) => {
      return `${label} -  ${index}`
    })
    setData(dat)
  }, [])

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
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleSelectItem(item)}>
                <View style={styles.resultItem}>
                  <Text>{item}</Text>
                </View>
              </TouchableOpacity>
            )}
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
