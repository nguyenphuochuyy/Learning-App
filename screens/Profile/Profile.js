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


export default function Profile({ navigation }) {

  const [activeBottomTab, setActiveBottomTab] = useState("Profile");
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [courses, setCourses] = useState([]);
   // hàm fetch list coureses từ api
   const fetchCourses = async () => {
    try {
      const response = await fetch("https://670fa54fa85f4164ef2b50e6.mockapi.io/course");
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      // Đặt active tab về "Profile" mỗi khi màn hình này được focus
      setActiveBottomTab("Profile");
      fetchCourses();
    }, [])
  );

  // Dữ liệu khóa học mẫu
  const SliceCourse = courses.slice(0, 4);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={styles.backText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Hồ sơ</Text>
        </View>

        {/* Hình ảnh và thông tin cá nhân */}
        <View style={styles.profileContainer}>
          <Image source={ellipse12} style={styles.profileImage} />
          <Text style={styles.profileName}>Huy</Text>
          <TouchableOpacity style={styles.editIcon}>
            <MaterialIcons name="edit" size={20} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Giới thiệu về tôi */}
        <View style={styles.aboutContainer}>
          <Text style={styles.aboutTitle}>Giới thiệu về tôi</Text>
          <Text style={styles.aboutText}>
            Tôi là một người đam mê thiết kế và phát triển sản phẩm. Tôi luôn tìm kiếm những cơ hội để sáng tạo và cải thiện trải nghiệm người dùng.
            Với kinh nghiệm trong việc tạo ra các giải pháp thiết kế đột phá, tôi mong muốn đóng góp vào sự phát triển của ngành công nghệ.
          </Text>
        </View>

        {/* Kỹ năng */}
        <View style={styles.skillsContainer}>
          <Text style={styles.skillsTitle}>Kỹ năng của tôi</Text>
          <View style={styles.skillsList}>
            {["JavaScript", "Thiết kế website", "Figma", "Java", "DSA", "C++"].map((skill, index) => (
              <View key={index} style={styles.skillItem}>
                <Text style={styles.skillText}>{skill}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Các khóa học đã đăng ký */}
        <View style={styles.coursesHeader}>
          <Text style={styles.coursesTitle}>Khóa học đã tham gia</Text>
          <TouchableOpacity onPress={() => setShowAllCourses(!showAllCourses)}>
            <Text style={styles.seeAllText}>{showAllCourses ? "Hiện ít hơn" : "Xem tất cả"}</Text>
          </TouchableOpacity>
        </View>

        {/* Hiển thị khóa học */}
        {showAllCourses ? (
          <FlatList
            data={SliceCourse}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.courseItemVertical}>
                <Image source={{ uri: item.image}} style={styles.courseImageVertical} />
                <Text style={styles.courseTitle}>{item.name}</Text>
              </View>
            )}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <View style={styles.coursesContainer}>
            <Image source={{uri : courses[0].image}} style={styles.courseImage} />
             <Image source={ {uri : courses[1].image}} style={styles.courseImage} />
          </View>
        )}
      </ScrollView>

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  scrollContent: {
    paddingBottom: 80, // Đảm bảo có không gian cho Bottom Navigation
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
    bottom: 0,
    left: 16,
    right: 16,
  },
});
