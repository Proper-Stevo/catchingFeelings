import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function MoodEntry() {
  const [selectedMood, setSelectedMood] = useState('Mood');

  const handleMoodChange = (value) => {
    setSelectedMood(value);
    console.log(value);
  };

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center' }}>What's your mood today?</Text>
      <Picker
        style={{ backgroundColor: 'white', width: 300, height: 215 }}
        selectedValue={selectedMood}
        onValueChange={handleMoodChange}
      >
        <Picker.Item label='Mood' value="Mood"/>
        <Picker.Item label="Happy" value="Happy" />
        <Picker.Item label="Sad" value="Sad" />
        <Picker.Item label="Angry" value="Angry" />
      </Picker>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
