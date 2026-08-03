import { router, useLocalSearchParams } from 'expo-router'
import { Button, StyleSheet, Text, View } from 'react-native'

import { colors } from '@/theme/colors'

export default function Transaction() {
  const params = useLocalSearchParams<{ id: string }>()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ID: {params.id}</Text>
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
    fontSize: 20,
    color: colors.blue[500],
  },
})
