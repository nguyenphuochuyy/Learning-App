import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import wc1 from "../../assets/images/watching1.png"
import wc2 from "../../assets/images/watching2.png"
import ChatGPTBox from '../ChatBox';
const Home = ({navigation , params}) => {
  const user = params;
  const [courses , setCourses] = useState([]);
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

  
  useEffect(() => {
    fetchCourses();


  } , []);
  const courseSlice = courses.slice(0, 5);
  const [activeBottomTab, setActiveBottomTab] = useState("Home"); 
  const continueWatchingData = [
    { id: '1', title: 'Icon Design', creator: 'By Tom Hanksom', progress: '80% Done', imageUrl: require('../../assets/images/watching1.png')},
    { id: '2', title: 'Wireframes', creator: 'By Alex Watson', progress: '20% Done', imageUrl:require('../../assets/images/watching2.png') },
  ];



  const renderContinueWatchingItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.imageUrl}  style={styles.cardImage} />
      <View>
      <Text style={styles.cardTitle}>{item.title}</Text>
    
      <Text style={styles.cardSubtitle}>{item.creator}</Text>
      <Text style={styles.cardProgress}>{item.progress}</Text>
      </View>
      
    </View>
    
  );

  const renderTrendingNowItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image}} style={styles.cardImage} />
      {/* <Text style={styles.cardTitle}>{item.title}</Text> */}
      <View style={{justifyContent : 'center' , alignItems : 'center' , marginTop : 15}}>
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Text style={styles.cardSubtitle}>By{item.author}</Text>
      </View>
    
      <Text style={styles.cardRating}>{'⭐'.repeat(item.rating)}</Text>
    </View>
  );
  return (
   
    <View style={styles.container}>
     
      <View style={styles.header}>
    
        <Text style={styles.welcomeText}>Xin chào <Text style={styles.nameText}>HUY</Text></Text>
        <FontAwesome name="cog" size={24} color="black" style={styles.settingsIcon} />
      </View>
      
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={20} color="gray" style={styles.searchIcon} />
        <TextInput placeholder="Tìm kiếm" style={styles.searchInput} />
      </View>
      
      <View style={styles.tagsContainer}>
        <TouchableOpacity style={styles.tag}><Text>NODEJS</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tag}><Text>REACTJS</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tag}><Text>JAVA</Text></TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tiếp tục xem</Text>
        <TouchableOpacity><Text style={styles.viewAllText}  onPress={() => navigation.navigate('AllCourses', { courses })}>Xem thêm</Text></TouchableOpacity>
      </View>



      <FlatList
        data={continueWatchingData}
        renderItem={renderContinueWatchingItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.list}
      />


      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Khóa học hot</Text>
        <TouchableOpacity><Text style={styles.viewAllText}  onPress={() => navigation.navigate('AllCourses', { courses })}>Xem thêm</Text></TouchableOpacity>
      </View>
      <FlatList
        data={courseSlice}
        renderItem={renderTrendingNowItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.list}
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
    paddingBottom: 80, 
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
  },
  nameText: {
    fontWeight: 'bold',
    color: '#3366FF',
  },
  settingsIcon: {
    marginLeft: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
  },
  tagsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tag: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAllText: {
    color: '#3366FF',
  },
  list: {
    padding : 10,
  },
  card: {
    width: 160,
    marginRight: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    height: 200,
    alignItems: 'center',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  cardImage: {
    width: '100%',
    height: 80,
    borderRadius: 10,
  },
  cardTitle: {
    textAlign : 'center',
    fontWeight: 'bold',
    fontSize: 12,

  },
  cardSubtitle: {
    color: '#666',
    fontSize: 12,
  },
  cardProgress: {
    marginTop: 5,
    color: '#3366FF',
  },
  cardRating: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    fontSize: 14,
    color: '#FFD700',
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#007AFF",
    borderRadius: 20,
    position: "absolute",
    bottom: 5,
    left: 16,
    right: 16,
    zIndex : 999,
  },
});

export default Home;
