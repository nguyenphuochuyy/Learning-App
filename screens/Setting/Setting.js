import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import ellipse11 from "../../assets/images/Ellipse11.png";

export default function Settings({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={styles.headerIcons}>
        <TouchableOpacity style={styles.iconButton}
          onPress={() => navigation.navigate("Setting")}
          >
            <MaterialIcons name="settings" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}
          onPress={() => navigation.navigate("Notification")}
          >
            <MaterialIcons name="notifications" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Profile Picture */}
      <View style={styles.profileContainer}>
        <Image
          source={ellipse11}
          style={styles.profileImage}
        />
      </View>

      {/* Settings Options */}
      <View style={styles.optionsContainer}>
        {settingsOptions.map((item, index) => (
          <TouchableOpacity key={index} style={styles.optionItem}>
            <View style={styles.optionIcon}>{item.icon}</View>
            <Text style={styles.optionText}>{item.title}</Text>
            <MaterialIcons name="chevron-right" size={24} color="#000" />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const settingsOptions = [
  { title: "Edit Profile", icon: <FontAwesome name="user" size={24} color="#1E90FF" /> },
  { title: "Payment Option", icon: <FontAwesome name="credit-card" size={24} color="#1E90FF" /> },
  { title: "My Certificates", icon: <FontAwesome name="file-text" size={24} color="#1E90FF" /> },
  { title: "Terms & Conditions", icon: <FontAwesome name="file-text-o" size={24} color="#1E90FF" /> },
  { title: "Help Center", icon: <FontAwesome name="headphones" size={24} color="#1E90FF" /> },
  { title: "Invite Friends", icon: <FontAwesome name="paper-plane" size={24} color="#1E90FF" /> },
  { title: "Logout", icon: <FontAwesome name="sign-out" size={24} color="#1E90FF" /> },
];

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f8f8f8",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
  },
  backText: {
    fontSize: 18,
    color: "#000",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  headerIcons: {
    flexDirection: "row",
  },
  iconButton: {
    marginLeft: 10,
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  optionsContainer: {
    backgroundColor: "#F4F9FF",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  optionItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  optionIcon: {
    width: 30,
    alignItems: "center",
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    color: "#000",
    marginLeft: 10,
  },
});

