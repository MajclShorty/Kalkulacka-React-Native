import { StyleSheet, Text, Pressable } from "react-native";

export default function Button({ symbol, isLargeButton, type, setCurrentExp, setPreviousExp }) {
    const colorTypes = {
        number: { notPressed: "#505050", pressed: "#808080" },
        operation: { notPressed: "#FF9500", pressed: "#FFB54D" },
        special: { notPressed: "#D4D4D2", pressed: "#F4F4F2" },
    };

    return (
        <Pressable
        onPress={() => {
            if (type === "number")
            {
                setCurrentExp((prevExp) => {
                    if (prevExp.length < 9)
                    {
                        return prevExp + symbol;
                    }

                    return prevExp;
                });
            }
            else if (type === "special")
            {
                if (symbol === "AC")
                {
                    setCurrentExp("");
                    setPreviousExp("");
                }
                else if (symbol === "DEL")
                {
                    setCurrentExp((prevExp) => {
                        return prevExp.slice(0, -1);
                    });
                }
            }
            else if (type === "operation")
            {
                if (symbol !== "=")
                {
                    let currentExpression = "";

                    setCurrentExp((currentExp) => {
                        currentExpression = currentExp;

                        return "";
                    });

                    setPreviousExp((exp) => {
                        if(exp.lenght > 0)
                        {
                            const updatedOperator = exp.slice(0, -1) + symbol;

                            return updatedOperator;
                        }
                        else
                        {
                            return currentExpression + symbol;
                        }
                    });
                }
                else
                {
                    let previousExp = "";
                    setPreviousExp((exp) => {
                        previousExp = exp;
                        return "";
                    });

                    setCurrentExp((exp) => {
                        let wholeExpression = previousExp + exp;
                        wholeExpression = wholeExpression.replace("÷", "/");
                        wholeExpression = wholeExpression.replace("X", "*");

                        try {
                            const result = eval(wholeExpression).toPrecision(8).replace(/\.?0+$/, "");

                            return result;
                        }
                        catch {
                            return "Invalid operation";
                        }
                    });
                }
            }
        }}  

            style={({ pressed }) => [
                {
                    backgroundColor: pressed
                        ? colorTypes[type].pressed
                        : colorTypes[type].notPressed,
                },
                styles.button,
                isLargeButton === true && { width: 170 },
            ]}
        >
            <Text
                style={[styles.text, type === "special" && { color: "black" }]}
            >
                {symbol}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 80,
        height: 80,
        borderRadius: 40,
        margin: 5,
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 35,
        textAlign: "center",
    }
});