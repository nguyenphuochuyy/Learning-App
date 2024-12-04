import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";
const AllCourses = ({ route , navigation }) => {
    const { courses } = route.params; // Lấy danh sách courses từ tham số
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCourses, setFilteredCourses] = useState(courses);
    const [activeBottomTab, setActiveBottomTab] = useState("home");
    // Hàm xử lý tìm kiếm
    const handleSearch = (text) => {
        setSearchQuery(text);
        if (text === '') {
            setFilteredCourses(courses);
        } else {
            const filtered = courses.filter(course =>
                course.title.toLowerCase().includes(text.toLowerCase())
            );
            setFilteredCourses(filtered);
        }
    };

    const renderCourseItem = ({ item }) => (
        <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardSubtitle}>{item.author}</Text>
                <Text style={styles.cardDescription}>{item.description}</Text>
                <Text style={styles.cardInfo}>
                    {item.lessons} Thời gian học • {item.hours} giờ
                </Text>
                <Text style={styles.cardPrice}>${item.price}</Text>
                <View>
                    <TouchableOpacity style={styles.enrollButton} onPress={()=>{navigation.navigate('Detail1' , {item})}}>
                        <Text style={styles.enrollText}>Đăng Kí Ngay</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );

    return (
        <View style={styles.container}>
            {/* Tiêu đề */}
            <Text style={styles.title}>All Courses</Text>

            {/* Ô tìm kiếm */}
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search courses..."
                    value={searchQuery}
                    onChangeText={handleSearch}
                />
            </View>

            {/* Danh sách khóa học */}
            {filteredCourses.length > 0 ? (
                <FlatList
                    data={filteredCourses}
                    renderItem={renderCourseItem}
                    keyExtractor={(item) => item.id}
                />
            ) : (
                <Text style={styles.noResultsText}>No courses found</Text>
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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    searchContainer: {
        flexDirection: 'row',
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    searchInput: {
        flex: 1,
    },
    card: {
        flexDirection: 'row',
        marginBottom: 15,
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        elevation: 3,
    },
    cardImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 10,
    },
    cardContent: {
        flex: 1,
        justifyContent: 'space-between',
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    cardSubtitle: {
        color: '#666',
        fontSize: 14,
        marginBottom: 5,
    },
    cardDescription: {
        color: '#444',
        fontSize: 12,
        marginBottom: 5,
    },
    cardInfo: {
        fontSize: 12,
        color: '#888',
    },
    cardPrice: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#3366FF',
        marginTop: 5,
    },
    enrollButton: {
        marginTop: 10,
        backgroundColor: '#3366FF',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 15,
    },
    enrollText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    noResultsText: {
        textAlign: 'center',
        color: '#888',
        marginTop: 20,
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

export default AllCourses;
