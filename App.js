import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './button';

export default function App() {
  const [currentExpression, setCurrentExpression] = useState("");
  const [previousExpression, setPreviousExpression] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.expression}>{currentExpression}</Text>
 
      <View style={styles.row}>
        <Button symbol={"AC"} isLargeButton={true} type={"special"} setCurrentExp={setCurrentExpression} setPreviousExp={setPreviousExpression} ></Button>
        <Button symbol={"DEL"} type={"special"} setCurrentExp={setCurrentExpression} setPreviousExp={setPreviousExpression} ></Button>
        <Button symbol={"÷"} type={"operation"} setCurrentExp={setCurrentExpression} setPreviousExp={setPreviousExpression} ></Button>
      </View>

      <View style={styles.row}>
        <Button symbol={"7"} type={"number"} setCurrentExp={setCurrentExpression} setPreviousExp={setPreviousExpression} ></Button>
        <Button symbol={"8"} type={"number"} setCurrentExp={setCurrentExpression} setPreviousExp={setPreviousExpression} ></Button>
        <Button symbol={"9"} type={"number"} setCurrentExp={setCurrentExpression} setPreviousExp={setPreviousExpression} ></Button>
        <Button symbol={"X"} type={"operation"} setCurrentExp={setCurrentExpression} setPreviousExp={setPreviousExpression} ></Button>
      </View>

      <View style={styles.row}>
        <Button symbol={"4"} type={"number"} setCurrentExp={setCurrentExpression} setPreviousExp={setPreviousExpression} ></Button>
        <Button symbol={"5"} type={"number"} setCurrentExp={setCurrentExpression} setPreviousExp={setPreviousExpression} ></Button>
        <Button symbol={"6"} type={"number"} setCurrentExp={setCurrentExpression} setPreviousExp={setPreviousExpression} ></Button>
        <Button symbol={"-"} type={"operation"} setCurrentExp={setCurrentExpression} setPreviousExp={setPreviousExpression} ></Button>
      </View>

      <View style={styles.row}>
        <Button symbol={"1"} type={"number"} setCurrentExp={setCurrentExpression} setPreviousExp={setPreviousExpression} ></Button>
        <Button symbol={"2"} type={"number"} setCurrentExp={setCurrentExpression} setPreviousExp={setPreviousExpression} ></Button>
        <Button symbol={"3"} type={"number"} setCurrentExp={setCurrentExpression} setPreviousExp={setPreviousExpression} ></Button>
        <Button symbol={"+"} type={"operation"} setCurrentExp={setCurrentExpression} setPreviousExp={setPreviousExpression} ></Button>
      </View>

      <View style={styles.row}>
        <Button symbol={"0"} type={"number"} setCurrentExp={setCurrentExpression} setPreviousExp={setPreviousExpression} ></Button>
        <Button symbol={"."} type={"number"} setCurrentExp={setCurrentExpression} setPreviousExp={setPreviousExpression} ></Button>
        <Button symbol={"="} isLargeButton={true} type={"operation"} setCurrentExp={setCurrentExpression} setPreviousExp={setPreviousExpression} ></Button>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 40
  },
  row: {
    flexDirection: "row"
  },
  expression: {
    color: "white",
    width: 350,
    fontSize: 69,
    textAlign: "right",
    marginBottom: 20
  }
});
