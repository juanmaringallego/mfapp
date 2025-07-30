import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import DataDisplay from './components/DataDisplay';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <DataDisplay />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
