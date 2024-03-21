import { StyleSheet, Text, View } from "react-native";

interface Props {
  name: string;
  job: string;
}

const Card = ({ name, job }: Props) => {
  const formatName = (value: string) => {
    return value.toUpperCase();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{formatName(name)}</Text>
      <Text style={styles.subtitle}>{job}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderWidth: 2,
    borderColor: "#252525",
    backgroundColor: "#fafa",
  },
  title: {
    fontSize: 44,
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 40,
  },
});

export default Card;
