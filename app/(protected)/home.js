import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import OrderItem from '../../components/orders/OrderItem'
import { useState } from 'react'
import OrderFilters from '../../components/common/OrderFilters'
import { Platform } from 'react-native'
const screenWidth = Dimensions.get('window').width // Get screen width

// const items = Array.from({ length: 20 }, (_, i) => ({
//   id: i,
//   itemName: `order ${i}`,
// }))

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

const buttons = [
  {
    id: 1,
    buttonType: 'Requested',
    buttonText: 'Requested',
    buttonColor: '#FF6384',
    count: 20,
  },
  {
    id: 2,
    buttonType: 'Accepted',
    buttonText: 'Accepted',
    buttonColor: '#36A2EB',
    count: 30,
  },
  {
    id: 3,
    buttonType: 'Recieved',
    buttonText: 'Recieved',
    buttonColor: '#FFCE56',
    count: 18,
  },
  {
    id: 4,
    buttonType: 'Rejected',
    buttonText: 'Rejected',
    buttonColor: '#4BC0C0',
    count: 27,
  },
]

const home = () => {
  const [selectedType, setSelectedType] = useState('Requested')
  const [filteredItems, setFilteredItems] = useState([...items])
  const firstRingSize = screenWidth * 0.4 // 50% of screen width
  const secondRingSize = firstRingSize * 0.89 // 90% of the first ring size
  const thirdRingSize = secondRingSize * 0.85 // 75% of the second ring size
  const fourthRingSize = thirdRingSize * 0.85 // 50% of the third ring size

  const handleOrderType = (ordersType) => {
    setSelectedType(ordersType)
  }

  return (
    <View style={styles.container}>
      {/* Dashboard indent history */}
      <View style={styles.historyContainer}>
        <View>
          <Text style={styles.historyHeader}>Indent History</Text>
        </View>
        <View style={styles.chartOuterContainer}>
          <View style={styles.chartContainer}>
            <AnimatedCircularProgress
              size={firstRingSize}
              width={5}
              fill={70} // 70% filled
              tintColor='#FF6384' // First ring color
              backgroundColor='#F9F9F9' // First ring background color
            />
            <AnimatedCircularProgress
              size={secondRingSize}
              width={5}
              fill={60} // 50% filled
              tintColor='#36A2EB' // Second ring color
              backgroundColor='#E0F7FA' // Second ring background color
              style={{ position: 'absolute', top: firstRingSize * 0.06 }} // Adjust position if needed
            />
            <AnimatedCircularProgress
              size={thirdRingSize}
              width={5}
              fill={50} // 30% filled
              tintColor='#FFCE56' // Third ring color
              backgroundColor='#FFF3E0' // Third ring background color
              style={{ position: 'absolute', top: secondRingSize * 0.15 }} // Adjust position if needed
            />
            <AnimatedCircularProgress
              size={fourthRingSize}
              width={5}
              fill={40} // 90% filled
              tintColor='#4BC0C0' // Fourth ring color
              backgroundColor='#E0F7EC' // Fourth ring background color
              style={{ position: 'absolute', top: thirdRingSize * 0.25 }} // Adjust position if needed
            />
            {/* <Text style={{ position: 'absolute', fontSize: 18 }}>Progress</Text> */}
          </View>
          <View style={styles.buttonsContainer}>
            {buttons.map(
              ({ id, buttonType, buttonText, buttonColor, count }) => {
                return (
                  <View
                    style={[
                      styles.button,
                      selectedType === buttonType && styles.scaledButton,
                    ]}
                    key={id}
                  >
                    <View
                      style={[styles.dot, { backgroundColor: buttonColor }]}
                    ></View>
                    <Pressable onPress={() => handleOrderType(buttonType)}>
                      <Text
                        style={[
                          styles.buttonLabel,
                          selectedType === buttonType && styles.boldText,
                        ]}
                      >
                        {buttonText}
                      </Text>
                    </Pressable>
                    <View style={styles.count}>
                      <Text>{`(${count})`}</Text>
                    </View>
                  </View>
                )
              }
            )}
          </View>
        </View>
      </View>

      {/* Selected ones */}
      <View style={styles.ordersContainer}>
        <View style={styles.selectedTypeContainer}>
          <Text style={styles.selectedTypeText}>{selectedType}</Text>
        </View>
        <View style={styles.filtersContainer}>
          <OrderFilters items={items} setFilteredItems={setFilteredItems} />
        </View>
        <View style={styles.listContainer}>
          <FlatList
            scrollEnabled={true}
            data={filteredItems}
            renderItem={({ item }) => <OrderItem {...item} />}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </View>
  )
}
export default home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },

  historyContainer: {
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    gap: 20,
  },

  historyHeader: {
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  chartOuterContainer: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },

  chartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonsContainer: {
    alignItems: 'center',
    marginLeft: 15,
  },
  button: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  scaledButton: {
    transform: [{ scale: 1.1 }], // Scales the box to 1.5 times its original size
  },
  dot: {
    width: 10, // Diameter of the dot
    height: 10,
    borderRadius: 5, // Makes the dot circular
    backgroundColor: '#FF6347', // Color of the dot (Tomato red, you can change it)
  },
  buttonLabel: {},
  boldText: {
    fontWeight: 'semibold',
    letterSpacing: 1,
  },
  count: {},

  ordersContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    // padding: 10,
    borderRadius: 10,
  },

  selectedTypeContainer: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  selectedTypeText: {
    fontSize: 16,
    letterSpacing: 1,
    fontWeight: 'semibold',
  },

  filtersContainer: {
    // marginBottom: 20,
    // padding: 10,
  },

  listContainer: {
    flex: 1,
  },
})
