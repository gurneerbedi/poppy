import { Link } from "expo-router";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>Sign in to continue</Text>

      <View style={styles.card}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#999"
          style={styles.input}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          style={styles.input}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.links}>
          <Link href="/about" style={styles.link}>
            About
          </Link>
          <Link href="/profile" style={styles.link}>
            Profile
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5A4FCF",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 5,
  },

  subtitle: {
    fontSize: 16,
    color: "#E0E0E0",
    marginBottom: 30,
  },

  card: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 24,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 8,
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
  },

  button: {
    backgroundColor: "#5A4FCF",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  links: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },

  link: {
    color: "#5A4FCF",
    fontSize: 14,
    fontWeight: "500",
  },
});
