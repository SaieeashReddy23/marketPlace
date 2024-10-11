import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { TextColor } from '../../../utils/constants'
import IconButton from '../IconButton'
import SlideModal from '../SlideModal'

const ProjectSearchInput = ({ label, value, handleChange, placeholder }) => {
  const { department } = useSelector((store) => store.auth.userInfo)
  const [isVisible, setIsVisible] = useState(false)
  const [query, setQuery] = useState(value)
  const [filteredData, setFilteredData] = useState([])

  const handleOpenModal = () => {
    console.log('open modla btn pressed')
    setIsVisible(true)
  }

  const handleSearch = async (text) => {
    setQuery(text)
  }

  const handleClearQuery = () => {
    setQuery('')
  }

  const handleSelectItem = (item) => {
    handleChange((prev) => {
      return {
        ...prev,
        ['projectId']: item.itemId,
        ['projectDesc']: item.itemData,
      }
    })
    setIsVisible(false)
    setQuery(item.itemData)
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

  useEffect(() => {
    if (query) {
      const parsedData = department?.projects
        .map(({ id, description }) => {
          return {
            itemId: id,
            itemData: description,
          }
        })
        .filter(({ itemData }) =>
          itemData.toLowerCase().includes(query.toLowerCase())
        )

      setFilteredData(parsedData)
    } else {
      const parsedData = department?.projects.map(({ id, description }) => {
        return {
          itemId: id,
          itemData: description,
        }
      })
      setFilteredData(parsedData)
    }
  }, [query])

  return (
    <View>
      <View style={styles.inputFormContainer}>
        <Text style={styles.inputFormHeader}>{label}</Text>
        <Pressable onPress={handleOpenModal}>
          <View pointerEvents='none'>
            {/* Disables TextInput click and lets Pressable handle it */}
            <View style={styles.inputFormValueContainer}>
              <TextInput
                placeholder={placeholder}
                style={styles.inputText}
                value={value}
                editable={false}
              />
            </View>
          </View>
        </Pressable>
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
          {query !== '' && (
            <IconButton icon='close' size={15} onPress={handleClearQuery} />
          )}
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
export default ProjectSearchInput

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
    paddingVertical: 10,
  },

  inputText: {
    color: TextColor,
    width: '85%',
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
