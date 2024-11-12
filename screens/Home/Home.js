import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import wc1 from "../../assets/images/watching1.png"
import wc2 from "../../assets/images/watching2.png"
const Home = ({navigation}) => {
  const [activeBottomTab, setActiveBottomTab] = useState("Home"); 
  const continueWatchingData = [
    { id: '1', title: 'Icon Design', creator: 'By Tom Hanksom', progress: '80% Done', imageUrl: require('../../assets/images/watching1.png')},
    { id: '2', title: 'Wireframes', creator: 'By Alex Watson', progress: '20% Done', imageUrl:require('../../assets/images/watching2.png') },
  ];

  const trendingNowData = [
    { id: '1', title: 'UI UX Design', creator: 'By Sarah Smith', rating: 5, imageUrl: require('../../assets/images/Rectangle13.png') },
    { id: '2', title: 'App Design', creator: 'By Mike John', rating: 4, imageUrl: require('../../assets/images/Rectangle12.png') },
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
      <Image source={item.imageUrl} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardSubtitle}>{item.creator}</Text>
      <Text style={styles.cardRating}>{'⭐'.repeat(item.rating)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome <Text style={styles.nameText}>Ayesha</Text></Text>
        <FontAwesome name="cog" size={24} color="black" style={styles.settingsIcon} />
      </View>
      
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={20} color="gray" style={styles.searchIcon} />
        <TextInput placeholder="Search Here" style={styles.searchInput} />
      </View>
      
      <View style={styles.tagsContainer}>
        <TouchableOpacity style={styles.tag}><Text>UI/UX</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tag}><Text>Website Design</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tag}><Text>Figma</Text></TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Continue Watching</Text>
        <TouchableOpacity><Text style={styles.viewAllText}>View All</Text></TouchableOpacity>
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
        <Text style={styles.sectionTitle}>Trending Now</Text>
        <TouchableOpacity><Text style={styles.viewAllText}>View All</Text></TouchableOpacity>
      </View>
      <FlatList
        data={trendingNowData}
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
    flex: 1,
    padding: 20,
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
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAllText: {
    color: '#3366FF',
  },
  list: {
    marginBottom: 20,
  },
  card: {
    width: 169,
    marginRight: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: 10,
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
    marginTop: 5,
    fontSize: 16,
    color: '#FFD700',
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
    zIndex : 999,
  },
});

export default Home;
