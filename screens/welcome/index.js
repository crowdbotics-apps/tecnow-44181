import React from "react";
import { View, Image, Text, ScrollView, SafeAreaView, StyleSheet, Button } from "react-native";

const WelcomeScreen = () => {
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.group}>
          <Image style={styles.logo} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <Text style={styles.text}>Welcome to TecNOW</Text>
        </View>
        <View style={styles.group}>
          <Button title="Sign In" onPress={() => {}} />
          <Button title="Create Account" onPress={() => {}} />
          <Button title="Open Ticket" onPress={() => {}} />
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8F8FC",
    height: "100%"
  },
  scrollView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20
  },
  group: {
    alignItems: "center",
    width: 170,
    height: 113
  },
  logo: {
    height: 180,
    width: 180,
    padding: 40,
    borderRadius: 30,
    margin: 40
  },
  text: {
    textAlign: "center",
    fontSize: 28,
    color: "#828AB0",
    fontWeight: "700"
  }
});
export default WelcomeScreen;