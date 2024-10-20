import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import OrderItem from './OrderItem'
import { TextColor } from '../../utils/constants'
import IconButton from '../common/IconButton'
import OrderFilters from '../common/OrderFilters'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFocusEffect } from 'expo-router'
import { getAcceptedData } from '../../features/orders/accepted/acceptedSlice'

const items = [
  {
    id: 1,
    orderName: 'Office Supplies',
    orderPlacedDate: '2024-09-20',
    orderProjectName: 'Project Alpha',
  },
  {
    id: 2,
    orderName: 'Laptop',
    orderPlacedDate: '2024-09-21',
    orderProjectName: 'Project Beta',
  },
  {
    id: 3,
    orderName: 'Printer',
    orderPlacedDate: '2024-09-22',
    orderProjectName: 'Project Gamma',
  },
  {
    id: 4,
    orderName: 'Stationery',
    orderPlacedDate: '2024-09-23',
    orderProjectName: 'Project Delta',
  },
  {
    id: 5,
    orderName: 'Software License',
    orderPlacedDate: '2024-09-24',
    orderProjectName: 'Project Epsilon',
  },
  {
    id: 6,
    orderName: 'Tablet',
    orderPlacedDate: '2024-09-25',
    orderProjectName: 'Project Zeta',
  },
  {
    id: 7,
    orderName: 'External Hard Drive',
    orderPlacedDate: '2024-09-26',
    orderProjectName: 'Project Eta',
  },
  {
    id: 8,
    orderName: 'Monitors',
    orderPlacedDate: '2024-09-27',
    orderProjectName: 'Project Theta',
  },
  {
    id: 9,
    orderName: 'Networking Equipment',
    orderPlacedDate: '2024-09-28',
    orderProjectName: 'Project Iota',
  },
  {
    id: 10,
    orderName: 'Projector',
    orderPlacedDate: '2024-09-29',
    orderProjectName: 'Project Kappa',
  },
  {
    id: 11,
    orderName: 'Ergonomic Chairs',
    orderPlacedDate: '2024-09-30',
    orderProjectName: 'Project Lambda',
  },
  {
    id: 12,
    orderName: 'Whiteboard',
    orderPlacedDate: '2024-10-01',
    orderProjectName: 'Project Mu',
  },
  {
    id: 13,
    orderName: 'Camera',
    orderPlacedDate: '2024-10-02',
    orderProjectName: 'Project Nu',
  },
  {
    id: 14,
    orderName: 'Headphones',
    orderPlacedDate: '2024-10-03',
    orderProjectName: 'Project Xi',
  },
  {
    id: 15,
    orderName: 'Microphone',
    orderPlacedDate: '2024-10-04',
    orderProjectName: 'Project Omicron',
  },
  {
    id: 16,
    orderName: 'Conference Phone',
    orderPlacedDate: '2024-10-05',
    orderProjectName: 'Project Pi',
  },
  {
    id: 17,
    orderName: 'Desk Lamps',
    orderPlacedDate: '2024-10-06',
    orderProjectName: 'Project Rho',
  },
  {
    id: 18,
    orderName: 'Air Conditioner',
    orderPlacedDate: '2024-10-07',
    orderProjectName: 'Project Sigma',
  },
  {
    id: 19,
    orderName: 'Water Dispenser',
    orderPlacedDate: '2024-10-08',
    orderProjectName: 'Project Tau',
  },
  {
    id: 20,
    orderName: 'Coffee Machine',
    orderPlacedDate: '2024-10-09',
    orderProjectName: 'Project Upsilon',
  },
]

const Accepted = () => {
  const dispatch = useDispatch()
  const { data, loading, error } = useSelector((store) => store.accepted)
  const [filteredItems, setFilteredItems] = useState([...items])

  useFocusEffect(() => {
    dispatch(getAcceptedData())
  })
  return (
    <View style={styles.container}>
      {/* Filters */}
      <View style={styles.filtersContainer}>
        <OrderFilters items={items} setFilteredItems={setFilteredItems} />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          scrollEnabled={true}
          data={data}
          renderItem={({ item }) => <OrderItem {...item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  )
}
export default Accepted

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 10,
  },

  filtersContainer: {},

  searchInputContainer: {
    gap: 10,
    borderWidth: 1,
    borderColor: '#d9d9d9',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },

  inputText: {
    color: TextColor,
  },
  listContainer: {
    flex: 1,
  },
})
