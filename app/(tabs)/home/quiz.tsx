import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface Question {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export default function QuizScreen() {
  const [question, setQuestion] = useState<Question | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=1&type=multiple')
      .then((response) => response.json())
        .then((data) => {
          console.log(data.results[0]);
        setQuestion(data.results[0]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question?.question}</Text>
      {/* Display answer options */}
      {question?.incorrect_answers.map((answer, index) => (
        <Button key={index} title={answer} onPress={() => {}} />
      ))}
      {/* Correct answer */}
      <Button title={question?.correct_answer|| ''} onPress={() => {}} />
      {/* Add next question navigation */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  question: {
    fontSize: 18,
    marginBottom: 20,
  },
});
