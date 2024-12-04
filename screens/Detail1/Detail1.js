import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function Detail1({ navigation , route }) {
  const { item } = route.params;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Thanh Tiến Trình */}
      <View style={styles.progressContainer}>
        <View style={styles.stepContainer}>
          <View style={[styles.step, styles.activeStep]}>
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
          <View style={styles.step}>
            <Text style={styles.stepNumber}>2</Text>
          </View>
          <Text style={styles.stepText}>Thanh Toán</Text>
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

      {/* Chi Tiết Khóa Học */}
      <Text style={styles.sectionTitle}>Tổng Quan</Text>
      <Text style={styles.courseDetail}>
        Tên Bài Học: <Text style={styles.boldText}>{item.name}</Text>
      </Text>

      <View style={styles.infoBox}>
        <View style={{ marginVertical: 10 }}>
          <Text style={styles.infoText}>📚 100 + Bài Học</Text>
          <Text style={styles.infoText}>⏱ 7 Tuần</Text>
        </View>
        <View style={{ marginVertical: 10 }}>
          <Text style={styles.infoText}>📄 Chứng Chỉ</Text>
          <Text style={styles.infoText}>💸 Giảm Giá 20%</Text>
        </View>
      </View>

      <Text style={styles.courseDetail}>Đánh Giá Khóa Học : {'⭐'.repeat(item.rating)}</Text>
      <Text style={styles.courseDetail}>
        Thời Gian Khóa Học: <Text style={styles.boldText}>{item.hours} Giờ</Text>
      </Text>
      <Text style={styles.courseDetail}>
        Tên Giảng Viên: <Text style={styles.boldText}>{item.author}</Text>
      </Text>

      {/* Chi Tiết Mua Hàng */}
      <Text style={styles.sectionTitle}>Chi Tiết Mua Hàng:</Text>
      <View style={styles.purchaseBox}>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <Text style={{ padding: 1 }}>Ngày: 13-4-24</Text>
          <Text style={{ padding: 1 }}>Giá Khóa Học: {item.price}$</Text>
        </View>
        <View style={{ flexDirection: "row", marginLeft: 40, paddingTop: 10 }}>
          <Text style={{ padding: 1 }}>Mã Giảm Giá: Giảm 20%</Text>
        </View>
      </View>

      {/* Giá Cuối Cùng */}
      <View style={{ alignItems: "flex-end" }}>
        <Text style={styles.finalPrice}>
          Giá Cuối Cùng: <Text style={styles.price}>{item.price - (item.price *0.2)}$</Text>
        </Text>
      </View>

      {/* Nút Bắt Đầu */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Detail2" , { item });
        }}
      >
        <Text style={styles.buttonText}>BẮT ĐẦU</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1 ,
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
  courseDetail: {
    fontSize: 16,
    marginTop: 10,
  },
  boldText: {
    fontWeight: "bold",
  },
  infoBox: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#e0e0e0",
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#F4F9FF",
  },
  infoText: {
    marginVertical: 10,
    fontSize: 14,
  },
  purchaseBox: {
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 10,
    borderColor: "#ccc",
  },
  finalPrice: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
  price: {
    color: "#007AFF",
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
