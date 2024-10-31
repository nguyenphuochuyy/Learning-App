import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { MaterialIcons, FontAwesome, Entypo } from "@expo/vector-icons";

export default function Notifications({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          {/* <Text style={styles.backText}>←</Text> */}
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
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

      {/* Notification Items */}
      {notificationData.map((item, index) => (
        <View key={index} style={styles.notificationItem}>
          <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
            {item.icon}
          </View>
          <View style={styles.notificationContent}>
            <Text style={styles.notificationTitle}>{item.title}</Text>
            <Text style={styles.notificationText}>{item.description}</Text>
          </View>
          <Text style={styles.timeText}>{item.time}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const notificationData = [
  {
    title: "Transaction Completed",
    description: "Lorem Ipsum Dummy Text Here",
    time: "5 mins ago",
    color: "#1E90FF",
    icon: <FontAwesome name="check-circle" size={24} color="white" />,
  },
  {
    title: "Lesson Completed",
    description: "Lorem Ipsum Dummy Text Here",
    time: "5 mins ago",
    color: "#FFA500",
    icon: <FontAwesome name="thumbs-up" size={24} color="white" />,
  },
  {
    title: "Due Date Is near",
    description: "Lorem Ipsum Dummy Text Here",
    time: "5 mins ago",
    color: "#FF4500",
    icon: <Entypo name="calendar" size={24} color="white" />,
  },
  {
    title: "Transaction Completed",
    description: "Lorem Ipsum Dummy Text Here",
    time: "5 mins ago",
    color: "#1E90FF",
    icon: <FontAwesome name="check-circle" size={24} color="white" />,
  },
  {
    title: "Transaction Completed",
    description: "Lorem Ipsum Dummy Text Here",
    time: "5 mins ago",
    color: "#1E90FF",
    icon: <FontAwesome name="check-circle" size={24} color="white" />,
  },
  {
    title: "Transaction Completed",
    description: "Lorem Ipsum Dummy Text Here",
    time: "5 mins ago",
    color: "#1E90FF",
    icon: <FontAwesome name="check-circle" size={24} color="white" />,
  },
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
  notificationItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F4F9FF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  notificationText: {
    fontSize: 14,
    color: "#666",
  },
  timeText: {
    fontSize: 12,
    color: "#888",
  },
});

