import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function Detail2({ navigation  , route}) {
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

      {/* Chọn Phương Thức Thanh Toán */}
      <Text style={styles.sectionTitle}>Chọn Phương Thức Thanh Toán</Text>

      <TouchableOpacity style={[styles.paymentOption, styles.selectedOption]}>
        <Text style={styles.optionText}>+ Chuyển Khoản Momo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.paymentOption]}>
        <Text style={styles.optionText}>+ Chuyển Khoản Ngân Hàng</Text>
      </TouchableOpacity>

      {/* Nút Bắt Đầu */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Detail3" , {item});
        }}
      >
        <Text style={styles.buttonText}>BẮT ĐẦU</Text>
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
  paymentOption: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#f9f9f9",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  selectedOption: {
    backgroundColor: "#E6F0FF",
  },
  optionText: {
    fontSize: 16,
    color: "#333",
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
