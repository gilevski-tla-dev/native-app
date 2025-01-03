import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { Colors, Radius } from "../tokens";

export function Input(props: TextInputProps) {
  return (
    <TextInput
      style={styles.input}
      {...props}
      placeholderTextColor={Colors.gray}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.violetDark,
    height: 58,
    paddingHorizontal: 24,
    borderRadius: Radius.r10,
    fontSize: 16,
  },
});
