import { StyleSheet, Text, View } from "react-native";
import { FeedItem } from "../types/Feed";

const Card = ({
  avatar,
  username,
  content,
  image,
  likes,
  reposts,
  comments,
}: FeedItem) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{username}</Text>
      <Text style={styles.subtitle}>{content}</Text>
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
