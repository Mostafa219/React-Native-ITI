import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Image
        source={require("./assets/logo.png")}
        style={{ TextAlign: "center" }}
      />
      <Image
        source={require("./assets/banner.png")}
        style={{
          width: "95%",
          height: 250,
          resizeMode: "contain",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
      <ScrollView>
        <View>
          <Image
            style={{ width: "350", height: "300", borderRadius: 20 }}
            source={require("./assets/image1.png")}
          />
          <Text
            style={{ paddingTop: "10", paddingBottom: "20", paddingLeft: "20" }}
          >
            Lego Star Wars Terrifying Tal
          </Text>
        </View>
        <View>
          <Image
            style={{ width: "350", height: "300", borderRadius: 20 }}
            source={require("./assets/image2.png")}
          />
          <Text
            style={{ paddingTop: "10", paddingBottom: "20", paddingLeft: "20" }}
          >
            Lego Star Wars Terrifying Tal
          </Text>
        </View>
        <Image
          style={{ width: "350", height: "300", borderRadius: 20 }}
          source={require("./assets/image3.png")}
        />
        <Text
          style={{ paddingTop: "10", paddingBottom: "20", paddingLeft: "20" }}
        >
          Lego Star Wars Terrifying Tal{" "}
        </Text>
        <Image
          style={{ width: "350", height: "300", borderRadius: 20 }}
          source={require("./assets/image4.png")}
        />
        <Text
          style={{ paddingTop: "10", paddingBottom: "20", paddingLeft: "20" }}
        >
          Lego Star Wars Terrifying Tal{" "}
        </Text>
        <Image
          style={{ width: "350", height: "300", borderRadius: 20 }}
          source={require("./assets/image5.jpg")}
        />

        <Text
          style={{ paddingTop: "10", paddingBottom: "20", paddingLeft: "20" }}
        >
          Lego Star Wars Terrifying Tal{" "}
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    // paddingTop: 50,
    marginBottom: 180,
  },
});
