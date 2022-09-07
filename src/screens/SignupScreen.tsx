import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function SignupScreen() {
  return (
    <View style={styles.container}>
      <Text>Sign-up</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});