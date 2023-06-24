import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Picker } from "@react-native-picker/picker";

export default function MoodEntry() {
  return (
    <View style={styles.create}>
      <Text style={{ textAlign: "center" }}>Whats your mood today?</Text>
      <Ionicons name="arrow-down" size={24} color="black" style={{ textAlign: "center" }} />

      <Picker
        style={{ backgroundColor: 'white', width: 300, height: 215 }}
        selectedValue='item1'
        pickerData={['item1', 'item2']}
        onValueChange={value => { console.log(value) }}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    textAlign: "center",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
})