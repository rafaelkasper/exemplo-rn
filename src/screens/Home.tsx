import { View, Text, StyleSheet, FlatList } from "react-native";
import Card from "../components/Card";
import { FeedItem } from "../types/Feed";

const Home = () => {
  const posts: FeedItem[] = [
    {
      id: "1",
      avatar: "https://source.unsplash.com/random",
      username: "rafael",
      content: "loren ipsum",
      image: "https://source.unsplash.com/random",
      likes: 10,
      reposts: 50,
      comments: 100,
    },
    {
      id: "2",
      avatar: "https://source.unsplash.com/random",
      username: "fulano",
      content: "loren ipsum ipsum",
      image: "https://source.unsplash.com/random",
      likes: 1,
      reposts: 5,
      comments: 10,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Posts</Text>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <Card
            id={item.id}
            avatar={item.avatar}
            username={item.username}
            content={item.content}
            image={item.image}
            likes={item.likes}
            reposts={item.reposts}
            comments={item.comments}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    fontSize: 60,
    marginVertical: 10,
    fontWeight: "bold",
  },
});

export default Home;
