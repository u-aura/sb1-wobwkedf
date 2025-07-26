import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.alphaContainer}>
        <Text style={styles.alpha}>α</Text>
      </View>
      <View style={styles.navigation}>
        <Text style={styles.fromText}>from</Text>
        <Text style={styles.brand}>El-AEnon</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  alphaContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alpha: {
    fontSize: 160,
    color: '#007BFF', // blue color similar to the logo
    fontWeight: 'bold',
  },
  navigation: {
    marginBottom: 30,
    alignItems: 'center',
  },
  fromText: {
    fontSize: 18,
    color: '#000000',
  },
  brand: {
    fontSize: 22,
    color: '#007BFF', // same blue color for "El-AEnon"
    fontWeight: 'bold',
  },
});

export default SplashScreen;
