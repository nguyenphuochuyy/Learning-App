import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default SignUp = ({navigation}) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignUp = async () => {
        if (password !== confirmPassword) {
            Alert.alert("Lỗi", "Mật khẩu xác nhận không khớp!");
            return;
        }

        try {
            const response = await fetch("http://192.168.22.10:8080/BE_LearningApp/api/v1/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    email,
                    password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                Alert.alert("Thành công", "Tài khoản đã được tạo thành công!");
                // Điều hướng tới màn hình đăng nhập hoặc xử lý tiếp
                navigation.navigate("Login");
            } else {
                Alert.alert("Lỗi", data.message || "Đã xảy ra lỗi, vui lòng thử lại!");
            }
        } catch (error) {
            Alert.alert("Lỗi", "Không thể kết nối đến máy chủ.");
        }
    };

    return (
        <>
            <View style={{ flex: 1, backgroundColor: "#fff" }}>
                <View style={{ alignItems: "center" }}>
                    <Text style={{ fontSize: 30, fontWeight: "500" }}>Đăng Ký</Text>
                    <Text style={{ color: "gray", marginTop: 15 }}>Tạo tài khoản của bạn ngay bây giờ</Text>
                </View>
                <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
                    <View style={{ marginRight: "auto", marginLeft: "auto" }}>
                        <Text style={{ fontWeight: "500" }}>Tên người dùng</Text>
                        <TextInput
                            placeholder="Nhập tên của bạn"
                            style={styles.input}
                            value={username}
                            onChangeText={setUsername}
                        />
                    </View>
                    <View style={{ marginRight: "auto", marginLeft: "auto", marginTop: 30 }}>
                        <Text style={{ fontWeight: "500" }}>Email</Text>
                        <TextInput
                            placeholder="nhapemail@gmail.com"
                            style={styles.input}
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>

                    <View style={{ marginRight: "auto", marginLeft: "auto", marginTop: 25 }}>
                        <Text style={{ fontWeight: "500" }}>Mật khẩu</Text>
                        <TextInput
                            secureTextEntry
                            placeholder="************"
                            style={styles.input}
                            value={password}
                            onChangeText={setPassword}
                        />
                    </View>
                    <View style={{ marginRight: "auto", marginLeft: "auto", marginTop: 25 }}>
                        <Text style={{ fontWeight: "500" }}>Xác nhận mật khẩu</Text>
                        <TextInput
                            secureTextEntry
                            placeholder="************"
                            style={styles.input}
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                        />
                    </View>

                    <View style={{ marginTop: 40, alignItems: "center" }}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={handleSignUp}
                        >
                            <Text style={{ textAlign: "center", color: "#fff" }}>ĐĂNG KÝ</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    input: {
        borderColor: "#ddd",
        padding: 8,
        borderWidth: 1,
        width: 300,
        borderRadius: 10,
        marginTop: 10,
    },
    button: {
        width: 300,
        height: 54,
        backgroundColor: "#0F3975",
        justifyContent: "center",
        borderRadius: 7,
    },
});
