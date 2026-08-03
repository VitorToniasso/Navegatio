import { router } from 'expo-router'
import { Button, StyleSheet, Text, View } from 'react-native'

import { colors } from '@/theme/colors'

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Navega</Text>

      <Button title="Nova meta" onPress={() => router.navigate('/target')} />
      <Button
        title="Transação"
        onPress={() => router.navigate('/transaction/765890')}
      />
      <Button
        title="Progresso"
        onPress={() => router.navigate('/in-progress/12')}
      />
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
    marginBottom: 12,
  },
})
