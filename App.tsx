import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert
} from 'react-native';

export default function App() {
  const [title, setTitle] = useState('');
  const [cards, setCards] = useState<string[]>([]);

  const addCard = () => {
    if (!title.trim()) {
      Alert.alert('Please enter a title');
      return;
    }
    if (title.trim()) {
      setCards([...cards, title]);
      setTitle('');
    }
  };

  const deleteCard = (index: number) => {
    const newCards = [...cards];
    newCards.splice(index, 1);
    setCards(newCards);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter title"
        value={title}
        onChangeText={setTitle} />
      <Button title="Add" onPress={addCard} />

      <ScrollView style={styles.scrollContainer}>
        {cards.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardText}>{item}</Text>
            <Button title="Delete" color="red" onPress={() => deleteCard(index)} />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    color: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  scrollContainer: {
    marginTop: 15,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    marginTop: 5,
    borderRadius: 5,
  },
  cardText: {
    fontSize: 16,
  }
});