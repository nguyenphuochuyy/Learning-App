import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";

export default function Detail3({ navigation, route }) {
  const { item } = route.params;
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

      {/* Thêm Thông Tin */}
      <Text style={styles.sectionTitle}>Thông Tin Chuyển Khoản MoMo</Text>

      <TextInput style={styles.input} placeholder="Số Điện Thoại MoMo" keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="Mã Thanh Toán MoMo" />

      {/* Thông Tin Mua Hàng */}
      <Text style={styles.sectionTitle}>Thông Tin Mua Hàng:</Text>
      <View style={styles.purchaseBox}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ padding: 1 }}>Ngày: 13-4-24</Text>
          <Text style={{ padding: 1 }}>Giá Khóa Học: {item.price}$</Text>
        </View>
        <View style={{ flexDirection: "row", paddingTop: 10, justifyContent: "center" }}>
          <Text style={{ padding: 1 }}>Ưu Đãi: Giảm 20%</Text>
        </View>
      </View>

      {/* Giá Cuối Cùng */}
      <View style={{ alignItems: "flex-end" }}>
        <Text style={styles.finalPrice}>
          Giá Cuối Cùng: <Text style={styles.price}> {item.price - item.price * 0.2}$</Text>
        </Text>
      </View>

      {/* Nút Bắt Đầu */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Detail4");
        }}
      >
        <Text style={styles.buttonText}>XÁC NHẬN CHUYỂN KHOẢN</Text>
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
    width: 100, // Đảm bảo các bước có cùng chiều rộng
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

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginVertical: 10,
    backgroundColor: "#F4F9FF",
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfInput: {
    width: "48%",
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

