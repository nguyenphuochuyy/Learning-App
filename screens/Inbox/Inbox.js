import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import ellipse12 from "../../assets/images/Ellipse12.png";
import ellipse11 from "../../assets/images/Ellipse11.png";
import ellipse13 from "../../assets/images/Ellipse13.png";

export default function Inbox({ navigation }) {
  const [activeTab, setActiveTab] = useState("Chat");
  const [activeBottomTab, setActiveBottomTab] = useState("home");

  const chatData = [
    { id: "1", name: "John", message: "Hi, Good Evening Bro.!", time: "14:59", count: "03", image: ellipse12 },
    { id: "2", name: "Maria", message: "Hi, Good Evening Bro.!", time: "14:59", count: "03", image: ellipse13 },
    { id: "3", name: "Yamamoto", message: "Hi, Good Evening Bro.!", time: "14:59", count: "03", image: ellipse11 },
    { id: "4", name: "Anh", message: "Hi, Good Evening Bro.!", time: "14:59", count: "03", image: ellipse12 },
    { id: "5", name: "Julia", message: "Hi, Good Evening Bro.!", time: "14:59", count: "03", image: ellipse13 },
    { id: "6", name: "Xiao Chao Meng", message: "Hi, Good Evening Bro.!", time: "14:59", count: "03", image: ellipse11 },
  ];

  const renderChatItem = ({ item }) => (
    <View style={styles.chatItem}>
      <Image source={item.image} style={styles.avatar} />
      <View style={styles.chatInfo}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
      <View style={styles.chatDetails}>
        <View style={styles.messageCount}>
          <Text style={styles.countText}>{item.count}</Text>
        </View>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          {/* <Text style={styles.backText}>←</Text> */}
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Inbox</Text>
      </View>

      {/* Search Box */}
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={18} color="#666" />
        <TextInput style={styles.searchInput} placeholder="Search Here" placeholderTextColor="#666" />
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Chat" && styles.activeTab]}
          onPress={() => setActiveTab("Chat")}
        >
          <Text style={[styles.tabText, activeTab === "Chat" && styles.activeTabText]}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Calls" && styles.activeTab]}
          onPress={() => setActiveTab("Calls")}
        >
          <Text style={[styles.tabText, activeTab === "Calls" && styles.activeTabText]}>Calls</Text>
        </TouchableOpacity>
      </View>

      {/* Chat List */}
      <FlatList
        data={chatData}
        keyExtractor={(item) => item.id}
        renderItem={renderChatItem}
        contentContainerStyle={styles.chatList}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => {
          setActiveBottomTab("home");
          navigation.navigate("Home");
        }}>
          <FontAwesome name="home" size={24} color={activeBottomTab === "home" ? "gray" : "white"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          setActiveBottomTab("file-text");
          navigation.navigate("Inbox");
        }}>
          <FontAwesome name="file-text" size={24} color={activeBottomTab === "file-text" ? "gray" : "white"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          setActiveBottomTab("bell");
          navigation.navigate("MyCourses");
        }}>
          <FontAwesome name="bell" size={24} color={activeBottomTab === "bell" ? "gray" : "white"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          setActiveBottomTab("user");
          navigation.navigate("Profile");
        }}>
          <FontAwesome name="user" size={24} color={activeBottomTab === "user" ? "gray" : "white"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  backButton: {
    paddingRight: 10,
  },
  backText: {
    fontSize: 18,
    color: "#000",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    paddingHorizontal: 10,
    borderRadius: 10,
    margin: 16,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: "#007AFF",
  },
  tabText: {
    fontSize: 16,
    color: "#666",
  },
  activeTabText: {
    color: "#fff",
  },
  chatList: {
    paddingHorizontal: 16,
  },
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F4F9FF",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  chatInfo: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  message: {
    color: "#666",
  },
  chatDetails: {
    alignItems: "center",
  },
  messageCount: {
    backgroundColor: "#007AFF",
    borderRadius: 15,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginBottom: 5,
  },
  countText: {
    color: "#fff",
    fontSize: 12,
  },
  time: {
    fontSize: 12,
    color: "#666",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#007AFF",
    borderRadius: 20,
    position: "absolute",
    bottom: 20,
    left: 16,
    right: 16,
  },
});
