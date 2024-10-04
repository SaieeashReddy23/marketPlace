import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import IconButton from './IconButton'
import { TextColor } from '../../utils/constants'
import Feather from '@expo/vector-icons/Feather'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { useEffect, useState } from 'react'
import SlideModal from './SlideModal'

const sortOptions = [
  {
    title: 'Sort by Order Name',
    value: 'orderName',
  },
  {
    title: 'Sort by Ordered Date',
    value: 'orderPlacedDate',
  },
  {
    title: 'Sort by project Name',
    value: 'orderProjectName',
  },
]

// Only search and sort functionalities are implemented
const OrderFilters = ({ items, setFilteredItems }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [sortType, setSortType] = useState('orderName')
  const [isSortModalVisible, setIsSortModalVisible] = useState(false)

  const handleSearch = (value) => {
    setSearchQuery(value)
  }

  const handleSort = () => {
    setIsSortModalVisible(true)
  }

  const handleCloseSortModal = () => {
    setIsSortModalVisible(false)
  }

  const handleSortType = (value) => {
    setSortType(value)
    setIsSortModalVisible(false)
  }

  const handleFilter = () => {
    console.log('filters is pressed')
    alert('Filter not yet implemented')
  }

  const handleClearQuery = () => {
    setSearchQuery('')
  }

  useEffect(() => {
    let filteredItems = items
      ?.filter((item) =>
        item.orderName
          .toLocaleLowerCase()
          .includes(searchQuery.toLocaleLowerCase())
      )
      ?.sort((a, b) => {
        return a[sortType] > b[sortType] ? 1 : -1
      })
    setFilteredItems(filteredItems)
  }, [searchQuery, sortType])

  return (
    <View style={styles.container}>
      <View style={styles.searchInputContainer}>
        <IconButton icon='search' size={15} />
        <TextInput
          placeholder='search...'
          style={styles.inputText}
          value={searchQuery}
          onChangeText={handleSearch}
        />
        {searchQuery !== '' && (
          <IconButton icon='close' size={15} onPress={handleClearQuery} />
        )}
      </View>
      <View style={styles.sortAndFiltersContainer}>
        <Pressable
          style={[
            styles.button,
            { borderRightWidth: 1, borderRightColor: '#d9d9d9' },
          ]}
          onPress={handleSort}
        >
          <MaterialIcons name='sort' size={15} color='black' />
          <Text style={styles.buttonLabel}>Sort</Text>
        </Pressable>
        <Pressable style={[styles.button]} onPress={handleFilter}>
          <Feather name='filter' size={15} color='black' />
          <Text style={styles.buttonLabel}>Filter</Text>
        </Pressable>
      </View>
      <SlideModal
        isVisible={isSortModalVisible}
        onClose={handleCloseSortModal}
        modalHeight='35%'
      >
        <View style={styles.sortOptionsContainer}>
          {sortOptions.map(({ title, value }, index) => {
            return (
              <View style={styles.sortOption} key={index}>
                <Pressable
                  style={styles.sortOptionButton}
                  onPress={() => handleSortType(value)}
                >
                  {/* <Feather name='filter' size={15} color='black' /> */}
                  <Text style={styles.sortOptionText}>{title}</Text>
                  <View style={styles.sortOptionActiveOuterContainer}>
                    {value === sortType && (
                      <View
                        style={styles.sortOptionActiveInnerContainer}
                      ></View>
                    )}
                  </View>
                </Pressable>
              </View>
            )
          })}
        </View>
      </SlideModal>
    </View>
  )
}
export default OrderFilters

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    gap: 10,

    justifyContent: 'space-between',
  },

  searchInputContainer: {
    gap: 10,
    flex: 1,
    borderWidth: 1,
    borderColor: '#d9d9d9',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  inputText: {
    color: TextColor,
    flex: 1,
  },

  sortAndFiltersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d9d9d9',
    borderRadius: 5,
  },

  button: {
    flexDirection: 'row',
    gap: 1,
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 5,
  },

  buttonLabel: {
    color: TextColor,
    fontSize: 10,
    letterSpacing: 1,
  },

  sortOptionsContainer: {
    marginTop: 20,
  },
  sortOption: {
    marginBottom: 10,
  },
  sortOptionButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#d9d9d9',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sortOptionText: {
    fontSize: 16,
  },

  sortOptionActiveOuterContainer: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#d9d9d9',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  sortOptionActiveInnerContainer: {
    width: 12,
    height: 12,
    // borderWidth: 1,
    // borderColor: '#d9d9d9',
    borderRadius: 20,
    backgroundColor: '#5f87ed',
  },
})
