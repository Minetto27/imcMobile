import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
  Keyboard,
} from "react-native";

export default function Home() {
  const [valueHeight, setValueHeight] = useState(0);

  const [valueWeight, setValueWeight] = useState(0);

  const [imcValue, setImcValue] = useState(0);

  const imcCalculator = () => {
    if (valueWeight > 0 && valueHeight > 0) {
      return setImcValue(
        parseFloat((valueWeight / (valueHeight * valueHeight)).toFixed(2))
      );
    } else {
      setImcValue(0);
    }
  };

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <Image
        style={styles.image}
        source={require("../../assets/unnamed.png")}
      />
      <View style={styles.viewInputs}>
        <View>
          <Text style={{ fontSize: 30 }}>Altura</Text>
          <TextInput
            keyboardType="numeric"
            placeholder="Ex: 1.90"
            style={styles.input}
            onChangeText={(value) => setValueHeight(+value)}
          />
        </View>
        <View style={{ marginLeft: 30, marginBottom: 30 }}>
          <Text style={{ fontSize: 30 }}>Peso</Text>
          <TextInput
            onChangeText={(value) => setValueWeight(+value)}
            keyboardType="numeric"
            placeholder="Ex: 100"
            style={styles.input}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.buttonCalc}
        onPress={() => {
          Keyboard.dismiss();
          imcCalculator();
        }}
      >
        <Text
          style={{
            fontSize: 30,
            color: "#fff",
          }}
        >
          Calcular
        </Text>
      </TouchableOpacity>
      {imcValue !== 0 && (
        <View>
          <Text
            style={{
              marginTop: 35,
              fontSize: 20,
              textAlign: "center",
              color: "#b90000fb",
            }}
          >
            Seu IMC é de:
          </Text>
          <Text
            style={{
              marginTop: 5,
              fontSize: 40,
              textAlign: "center",
              color: "#b90000fb",
            }}
          >
            {imcValue}
          </Text>
          <Text
            style={{
              marginTop: 5,
              fontSize: 20,
              textAlign: "center",
              color:
                imcValue <= 18.5
                  ? "#dfcc29"
                  : imcValue >= 18.6 && imcValue <= 24.9
                  ? "#17c400"
                  : imcValue >= 25 && imcValue <= 29.9
                  ? "#00490a"
                  : imcValue >= 30 && imcValue <= 34.9
                  ? "#e43232"
                  : imcValue >= 35 && imcValue <= 39.9
                  ? "#ee0404"
                  : "#8d0000",
            }}
          >
            {imcValue <= 18.5
              ? "Abaixo do peso"
              : imcValue >= 18.6 && imcValue <= 24.9
              ? "Peso ideal"
              : imcValue >= 25 && imcValue <= 29.9
              ? "Levemente acima do peso"
              : imcValue >= 30 && imcValue <= 34.9
              ? "Obesidade grau I"
              : imcValue >= 35 && imcValue <= 39.9
              ? "Obesidade grau II"
              : "Obesidade grau III"}
          </Text>
        </View>
      )}
      <StatusBar style="auto" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 100,
    resizeMode: "stretch",
    marginBottom: 30,
  },
  input: {
    borderBottomColor: "#0c0c0c",
    borderBottomWidth: 1,
    fontSize: 20,
  },
  viewInputs: {
    flexDirection: "row",
    justifyContent: "space-between",
    gridGap: "5px 8px",
  },
  buttonCalc: {
    backgroundColor: "#108b00",
    padding: 15,
    borderRadius: 5,
  },
});
