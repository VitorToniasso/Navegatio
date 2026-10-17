import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

import { Button } from "@/components/Button";
import { CurrencyInput } from "@/components/CurrencyInput";
import { Input } from "@/components/Input";
import { PageHeader } from "@/components/PageHeader";

export default function Transaction() {
  // id da meta — será usado para vincular a transação ao salvar no banco
  const params = useLocalSearchParams<{ id: string }>();
  const [amount, setAmount] = useState<number | null>(null);
  const [reason, setReason] = useState("");

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <PageHeader
        title="Nova transação"
        subtitle="A cada valor guardado você fica mais próximo da sua meta. Se esforce para guardar e evitar retirar."
      />

      <View style={{ marginTop: 32, gap: 24 }}>
        <CurrencyInput
          label="Valor (R$)"
          value={amount}
          onChangeValue={setAmount}
        />

        <Input
          label="Motivo"
          placeholder="Ex: Investir em CDB de 110% no banco XPTO"
          value={reason}
          onChangeText={setReason}
        />

        <Button title="Salvar" />
      </View>
    </View>
  );
}
