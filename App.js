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
      <Text style={{ paddingTop: "15", fontSize: 25, fontWeight: "bold" }}>
        Brand
      </Text>
      <ScrollView horizontal>
        <View style={styles.brand}>
          <Text style={styles.brandtext}>Disney</Text>
        </View>
        <View style={[styles.brand, { backgroundColor: "transparent" }]}>
          {/* <View style={{ ...styles.brand, backgroundColor: "transparent" }}> these are the two way if you need to orride a properity style */}
          <Text style={styles.brandtext}>Pixar</Text>
        </View>
        <View style={styles.brand}>
          <Text style={{ ...styles.brandtext, color: "red" }}>Marvel</Text>
        </View>
        <View style={styles.brand}>
          <Text style={styles.brandtext}>Star Wars</Text>
        </View>
        <View style={styles.brand}>
          <Text style={styles.brandtext}>Disney</Text>
        </View>
      </ScrollView>
      <ScrollView>
        <Image
          source={require("./assets/newlogo.png")}
          style={{
            resizeMode: "contain",
          }}
        />
        <View style={styles.card}>
          <Image style={styles.image} source={require("./assets/image1.png")} />
          <Text style={styles.text}>Lego Star Wars Terrifying Tal</Text>
        </View>
        <View style={styles.card}>
          <Image style={styles.image} source={require("./assets/image2.png")} />
          <Text style={styles.text}>Lego Star Wars Terrifying Tal</Text>
        </View>
        <View style={styles.card}>
          <Image style={styles.image} source={require("./assets/image3.png")} />
          <Text style={styles.text}>Lego Star Wars Terrifying Tal </Text>
        </View>
        <View style={styles.card}>
          <Image style={styles.image} source={require("./assets/image4.png")} />
          <Text style={styles.text}>Lego Star Wars Terrifying Tal </Text>
        </View>
        <View style={styles.card}>
          <Image style={styles.image} source={require("./assets/image5.jpg")} />

          <Text style={styles.text}>Lego Star Wars Terrifying Tal </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#87CEFA",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    // paddingTop: 50,
    marginBottom: 180,
  },
  card: {
    backgroundColor: "white",
    width: "370",
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  image: {
    width: "350",
    height: "250",
    borderRadius: 20,
  },
  text: { paddingTop: "15", fontWeight: "bold", paddingLeft: "15" },
  brand: {
    marginBottom: 80,
    marginInline: 10,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 50,
  },
  brandtext: { fontWeight: "bold", fontSize: 15 },
});
