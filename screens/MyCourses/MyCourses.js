import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function MyCourses({ navigation }) {
  const [activeBottomTab, setActiveBottomTab] = useState("bell");
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Hàm lấy dữ liệu từ MockAPI
    const fetchCourses = async () => {
      try {
        const response = await fetch("https://6459e17165bd868e930aa3ad.mockapi.io/courses");
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, []);

  const renderCourseItem = ({ item }) => (
    <View style={styles.courseItem}>
      <Image source={{ uri: item.image }} style={styles.courseImage} />
      <View style={styles.courseInfo}>
        <Text style={styles.courseTitle}>{item.title}</Text>
        <Text style={styles.courseAuthor}>By{item.author}</Text>
        <View style={styles.progressContainer}>
          <View style={[styles.progressBar, { width: `${item.progressValue * 100}%` }]} />
        </View>
        <Text style={styles.courseProgress}>{item.progress}</Text>
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
        <Text style={styles.headerTitle}>My Courses</Text>
      </View>

      {/* Courses List */}
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={renderCourseItem}
        contentContainerStyle={styles.courseList}
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
    backgroundColor: "#fff",
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
  courseList: {
    paddingHorizontal: 16,
  },
  courseItem: {
    flexDirection: "row",
    backgroundColor: "#F4F9FF",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  courseImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  courseInfo: {
    flex: 1,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  courseAuthor: {
    fontSize: 14,
    color: "#666",
  },
  progressContainer: {
    height: 6,
    backgroundColor: "#e0e0e0",
    borderRadius: 3,
    overflow: "hidden",
    marginVertical: 5,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#007AFF",
  },
  courseProgress: {
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
