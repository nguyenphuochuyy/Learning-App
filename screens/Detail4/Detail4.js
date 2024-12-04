import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Image } from "react-native";
import avt_Detail4 from "../../assets/images/avt_detail4.png";

export default function Detail4({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Thanh Tiến Trình */}
      <View style={styles.progressContainer}>
        <View style={styles.stepContainer}>
          <View style={[styles.step]}>
            <Text style={styles.stepNumber}>1</Text>
          </View>
          <Text style={styles.stepText}>Tổng Quan</Text>
        </View>

        <View
          style={{
            width: 80,
            height: 1,
            backgroundColor: "blue",
            marginHorizontal: 5,
          }}
        />

        <View style={styles.stepContainer}>
          <View style={[styles.step, styles.activeStep]}>
            <Text style={styles.stepNumber}>2</Text>
          </View>
          <Text style={styles.stepText}>Phương Thức Thanh Toán</Text>
        </View>

        <View
          style={{
            width: 80,
            height: 1,
            backgroundColor: "#ccc",
            marginHorizontal: 5,
          }}
        />

        <View style={styles.stepContainer}>
          <View style={styles.step}>
            <Text style={styles.stepNumber}>3</Text>
          </View>
          <Text style={styles.stepText}>Xác Nhận</Text>
        </View>
      </View>

      {/* Biểu Tượng Hoàn Thành Giao Dịch */}
      <View style={styles.checkmarkContainer}>
        <Text style={styles.checkmark}>✔</Text>
      </View>

      {/* Văn Bản Hoàn Thành Giao Dịch */}
      <Text style={styles.completionText}>Giao Dịch Đã Hoàn Thành</Text>
      
      {/* Hình Minh Họa */}
      <View style={styles.imageContainer}>
        <Image
          source={avt_Detail4}
          style={styles.image}
        />
      </View>

      {/* Nút Bắt Đầu */}
      <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Profile')}}>
        <Text style={styles.buttonText}>BẮT ĐẦU HỌC</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f8f8f8",
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
    alignItems: "center",
    borderWidth: 1,
    backgroundColor: "#F4F9FF",
    height: 108,
    borderRadius: 10,
    borderColor: "#ccc",
  },
  step: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "gray",
    borderRadius: 100,
    width: 70,
    height: 70,
  },
  stepContainer: {
    alignItems: "center",
    width: 100, 
  },
  activeStep: {
    backgroundColor: "#007AFF",
    borderRadius: 100,
    padding: 8,
  },
  stepNumber: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  stepText: {
    marginTop: 4,
    fontSize: 12,
  },
  checkmarkContainer: {
    marginTop: 10,
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "#007AFF",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  checkmark: {
    fontSize: 40,
    color: "#007AFF",
  },
  completionText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  imageContainer: {
    marginVertical: 20,
    padding: 10,
    alignItems: "center",
  },
  image: {
    width: 166,
    height: 240,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
