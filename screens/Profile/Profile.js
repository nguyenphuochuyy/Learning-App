import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useFocusEffect } from '@react-navigation/native';
import ellipse12 from "../../assets/images/Ellipse12.png";
import Reactangle12 from "../../assets/images/Rectangle12.png";
import Reactangle13 from "../../assets/images/Rectangle13.png";

export default function Profile({ navigation }) {
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [activeBottomTab, setActiveBottomTab] = useState("Profile"); 

  useFocusEffect(
    useCallback(() => {
      // Đặt active tab về "Profile" mỗi khi màn hình này được focus
      setActiveBottomTab("Profile");
    }, [])
  );

  // Sample course data
  const courses = [
    { id: '1', image: Reactangle12, title: "Course 1" },
    { id: '2', image: Reactangle13, title: "Course 2" },
    { id: '3', image: Reactangle12, title: "Course 3" },
    { id: '4', image: Reactangle13, title: "Course 4" },
    { id: '5', image: Reactangle12, title: "Course 5" },
    { id: '6', image: Reactangle13, title: "Course 6" },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      {/* Profile Picture and Info */}
      <View style={styles.profileContainer}>
        <Image source={ellipse12} style={styles.profileImage} />
        <Text style={styles.profileName}>Xiao Chao Meng</Text>
        <Text style={styles.profileTagline}>007</Text>
        <TouchableOpacity style={styles.editIcon}>
          <MaterialIcons name="edit" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      {/* About Me */}
      <View style={styles.aboutContainer}>
        <Text style={styles.aboutTitle}>About Me</Text>
        <Text style={styles.aboutText}>
          Lorem ipsum dolor sit amet consectetur. Lectus viverra sed aliquam quis enim leo.
          Turpis nec facilisis placerat dolor ac donec.
        </Text>
      </View>

      {/* Skills */}
      <View style={styles.skillsContainer}>
        <Text style={styles.skillsTitle}>My Skills</Text>
        <View style={styles.skillsList}>
          {["UI/UX", "Website Design", "Figma", "Animation", "User Persona", "XD"].map((skill, index) => (
            <View key={index} style={styles.skillItem}>
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Enrolled Courses */}
      <View style={styles.coursesHeader}>
        <Text style={styles.coursesTitle}>Enrolled Courses</Text>
        <TouchableOpacity onPress={() => setShowAllCourses(!showAllCourses)}>
          <Text style={styles.seeAllText}>{showAllCourses ? "Show Less" : "See All"}</Text>
        </TouchableOpacity>
      </View>

      {/* Conditional Rendering of Courses */}
      {showAllCourses ? (
        <FlatList
          data={courses}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.courseItemVertical}>
              <Image source={item.image} style={styles.courseImageVertical} />
              <Text style={styles.courseTitle}>{item.title}</Text>
            </View>
          )}
          showsVerticalScrollIndicator={false} 
        />
      ) : (
        <View style={styles.coursesContainer}>
          <Image source={Reactangle12} style={styles.courseImage} />
          <Image source={Reactangle13} style={styles.courseImage} />
        </View>
      )}

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
          setActiveBottomTab("Profile");
          navigation.navigate("Profile");
        }}>
          <FontAwesome name="user" size={24} color={activeBottomTab === "Profile" ? "gray" : "white"} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f8f8f8",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
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
  profileContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  profileTagline: {
    color: "#666",
  },
  editIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  aboutContainer: {
    backgroundColor: "#F4F9FF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  aboutTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  aboutText: {
    color: "#666",
  },
  skillsContainer: {
    backgroundColor: "#F4F9FF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  skillsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  skillsList: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skillItem: {
    backgroundColor: "#e0e0e0",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginRight: 10,
    marginTop: 5,
  },
  skillText: {
    fontSize: 14,
    color: "#333",
  },
  coursesHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  coursesTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  seeAllText: {
    color: "#007AFF",
  },
  coursesContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20,
  },
  courseImage: {
    width: 200,
    height: 170,
    borderRadius: 10,
    marginRight: 10,
  },
  courseItemVertical: {
    alignItems: "center",
    marginVertical: 10,
  },
  courseImageVertical: {
    width: 350,
    height: 200,
    borderRadius: 10,
  },
  courseTitle: {
    marginTop: 5,
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
