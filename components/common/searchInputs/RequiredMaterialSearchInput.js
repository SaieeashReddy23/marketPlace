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
import { MDMBaseUrl, MDMBaseUrlV2, TextColor } from '../../../utils/constants'
import IconButton from '../IconButton'
import SlideModal from '../SlideModal'

const RequiredMaterialSearchInput = ({
  label,
  value,
  handleChange,
  placeholder,
  projectId,
}) => {
  const { department } = useSelector((store) => store.auth.userInfo)
  const [isVisible, setIsVisible] = useState(false)
  const [query, setQuery] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    try {
      setIsLoading(true)
      setError(null)

      const url = `${MDMBaseUrl}/erp-purchase-item/search`
      const reqBody = {
        company: '7777',
        searchTerm: query,
      }

      console.log('calling : ', url)
      console.log('reqBody : ', reqBody)

      const resp = await axios.post(url, { ...reqBody })

      const materialList = resp.data?.data || []
      const parsedMaterialList = materialList.map(
        ({
          id,
          description,
          detailDescription,
          unit,
          unitDescription,
          itemGroup,
          itemGroupDescription,
        }) => {
          return {
            itemId: id,
            itemData: detailDescription,
            unit,
            unitDescription,
            itemGroup,
            itemGroupDescription,
          }
        }
      )
      setFilteredData(parsedMaterialList)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
      setError(error.message)
    }
  }

  const handleClearQuery = () => {
    setQuery('')
    setFilteredData([])
  }
  const handleOpenModal = () => {
    // if (!projectId) {
    //   alert('Pls fill the project first')
    //   return
    // }
    console.log('open modla btn pressed')
    setIsVisible(true)
    // fetchData()
  }

  const handleSearch = async (text) => {
    setQuery(text)
  }

  const handleSelectItem = (item) => {
    handleChange((prev) => {
      return {
        ...prev,
        ['itemId']: item.itemId,
        ['itemDesc']: item.itemData,
        ['uomId']: item.unit,
        ['uom']: item.unitDescription,
        ['itemGroupId']: item.itemGroup,
        ['itemGroupDesc']: item.itemGroupDescription,
      }
    })
    setIsVisible(false)
    setQuery(item.itemData.slice(0, 20))
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
      fetchData()
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
          {filteredData.length > 0 && (
            <FlatList
              data={filteredData}
              keyExtractor={(item) => item.itemId}
              renderItem={renderItem}
            />
          )}
          {filteredData.length === 0 && query && <Text>No data found</Text>}
        </View>
      </SlideModal>
    </View>
  )
}
export default RequiredMaterialSearchInput

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
