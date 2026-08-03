import { router } from 'expo-router'
import { Button, StyleSheet, Text, View } from 'react-native'

import { colors } from '@/theme/colors'

export default function Target() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Target</Text>
      <Button title="Voltar" onPress={() => router.back()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.blue[500],
  },
})
