import { View, Text, StyleSheet } from "react-native";
import Card from "../components/Card";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Desenvolvedor</Text>
      <Card name="Rafael" job="Dev Pleno" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 60,
    marginVertical: 10,
    fontWeight: "bold",
  },
});

export default Home;
