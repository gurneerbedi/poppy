import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text>Profile Page</Text>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "purple",
  },
});
