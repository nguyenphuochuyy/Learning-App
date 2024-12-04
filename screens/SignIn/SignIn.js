// import { useEffect, useState } from "react";
// import { Alert } from "react-native";
// import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
// export default SignIn = ({ navigation }) => {


//     const fetchUsers = async () => {
//         try {
//             const response = await fetch("http://192.168.22.10:8080/BE_LearningApp/api/v1/users");
//             if (!response.ok) {
//                 throw new Error('Something went wrong');
//             }
//             const data = await response.json();
//             setUsers(data.data);
//         } catch (error) {
//              Alert.alert("Error", "Something went wrong");
//         }
//     }
//     // const users = [
//     //     { id: 1, email: "user@gmail.com", password: "12345678"},
//     //     { id: 2, email: "admin@gmail.com", password: "admin123" },
//     //     { id: 3, email: "user1@gmail.com", password: "user1" },
//     //     { id: 4, email: "user2@gmail.com", password: "user2" },
//     //     { id: 5, email: "user3@gmail.com", password: "user3" },
//     // ];
//     useEffect(()=>{
//         fetchUsers();
//     },[])
//     const [users, setUsers] = useState([]);
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [loading, setLoading] = useState(false);
//     const handleSignIn = () => {
//         setLoading(true);
//         const user = users.find((u) => u.email === email && u.password === password);
//         setTimeout(() => {
//             setLoading(false);
//             if (user) {
//                 // Đăng nhập thành công
//                 Alert.alert("Success", "Login successful!", [
//                     { text: "OK", onPress: () => navigation.navigate("Home") },
//                 ]);
//             } else {
//                 // Sai thông tin đăng nhập
//                 Alert.alert("Error", "Invalid email or password.");
//             }
//         }, 1000); // Thêm độ trễ giả lập xử lý
//     };

//     return (
//         <>
//             <View style={{ flex: 1, backgroundColor: '#fff' }}>
//                 <View style={{ alignItems: 'center' }}>
//                     <Text style={{ fontSize: 30, fontWeight: '500' }} >Sign In</Text>
//                     <Text style={{ color: 'gray', marginTop: 15 }}> Welcome back! Please sign in to continue.  </Text>
//                 </View>
//                 <View style={{ paddingHorizontal: 20, marginTop: 50 }}>
//                     <View
//                         style={{
//                             marginRight: 'auto',
//                             marginLeft: 'auto'
//                         }}
//                     >
//                         <Text style={{ fontWeight: '500' }}>Email Here</Text>
//                         <TextInput value={email}
//                             onChangeText={setEmail} placeholder="user@gmail.com" style={{ borderColor: '#ddd', padding: 8, borderWidth: 1, width: 300, borderRadius: 10, marginRight: 'auto', marginLeft: 'auto', marginTop: 10 }}></TextInput>
//                     </View>

//                     <View
//                         style={{
//                             marginRight: 'auto',
//                             marginLeft: 'auto',
//                             marginTop: 25
//                         }}
//                     >
//                         <Text style={{ fontWeight: '500' }}>Password</Text>

//                         <TextInput value={password}
//                             onChangeText={setPassword} secureTextEntry placeholder="************" style={{ borderColor: '#ddd', padding: 8, borderWidth: 1, width: 300, borderRadius: 10, marginRight: 'auto', marginLeft: 'auto', marginTop: 10 }}></TextInput>
//                         <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
//                             <Text style={{
//                                 marginTop: 5,
//                                 fontSize: 12,
//                                 color: '#6C6C6C'
//                             }}>Quên mật khẩu ?</Text>
//                         </View>
//                     </View>

//                     <View style={{ marginTop: 40, alignItems: 'center' }}>
//                         <TouchableOpacity style={{ width: 300, height: 54, backgroundColor: '#0F3975', justifyContent: 'center', borderRadius: 7 }} onPress={handleSignIn} disabled={loading}>
//                             <Text style={{ textAlign: 'center', color: '#fff' }}>ĐĂNG NHẬP</Text>
//                         </TouchableOpacity>
//                     </View>
//                     <View>
//                         <Text style={{
//                             textAlign: 'center',
//                             color: '#888',
//                             marginVertical: 10
//                         }}>Or Sign In With</Text>
//                     </View>
//                     <View>
//                         <TouchableOpacity style={styles.socialButtonFacebook}>

//                             <Text style={styles.socialButtonText}>Sign In with Facebook</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity style={styles.socialButtonGoogle}>
//                             <Text style={{
//                                 color: '#6C6C6C'
//                             }}>Sign In with Google</Text>
//                         </TouchableOpacity>

//                         <TouchableOpacity style={styles.signUpText}>
//                             <Text>Chưa có tài khoản? <TouchableOpacity onPress={()=>{navigation.navigate('SignUp')}} style={styles.signUpLink}>Đăng kí tại đây</TouchableOpacity></Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </View>
//         </>
//     )
// }
// const styles = StyleSheet.create({
//     signUpText: {
//         marginTop: 20,
//         alignItems: 'center',
//     },
//     signUpLink: {
//         color: '#003366',
//         fontWeight: 'bold',
//     },
//     socialButtonFacebook: {
//         flexDirection: 'row',
//         backgroundColor: '#1877F2',
//         height: 50,
//         borderRadius: 8,
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginVertical: 10,
//     },
//     socialButtonGoogle: {
//         flexDirection: 'row',
//         backgroundColor: '#fff',
//         borderColor: '#ddd',
//         borderWidth: 1,
//         height: 50,
//         borderRadius: 8,
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginVertical: 10,
//     },
//     socialButtonText: {
//         marginLeft: 10,
//         color: 'white',
//         fontWeight: 'bold',
//     },

// });


import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default SignIn = ({ navigation }) => {
    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchUsers = async () => {
        try {
            const response = await fetch("http://192.168.22.10:8080/BE_LearningApp/api/v1/users");
            if (!response.ok) {
                throw new Error("Đã xảy ra lỗi khi kết nối đến máy chủ");
            }
            const data = await response.json();
            setUsers(data.data);
        } catch (error) {
            Alert.alert("Lỗi", "Không thể tải danh sách người dùng.");
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleSignIn = () => {
        setLoading(true);
        const user = users.find((u) => u.email === email && u.password === password);
        setTimeout(() => {
            setLoading(false);
            if (user) {
                // Đăng nhập thành công
                Alert.alert("Thành công", "Đăng nhập thành công!", [
                    { text: "OK", onPress: () => navigation.navigate("Home") },
                ]);
            } else {
                // Sai thông tin đăng nhập
                Alert.alert("Lỗi", "Email hoặc mật khẩu không đúng.");
            }
        }, 1000); // Giả lập độ trễ xử lý
    };

    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <View style={{ alignItems: "center", marginTop: 50 }}>
                <Text style={{ fontSize: 30, fontWeight: "500" }}>Đăng Nhập</Text>
                <Text style={{ color: "gray", marginTop: 15 }}>Chào mừng bạn quay lại!</Text>
            </View>
            <View style={{ paddingHorizontal: 20, marginTop: 50 }}>
                <View style={{ marginHorizontal: "auto" }}>
                    <Text style={{ fontWeight: "500" }}>Email</Text>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        placeholder="nhapemail@gmail.com"
                        style={styles.input}
                    />
                </View>
                <View style={{ marginTop: 25 }}>
                    <Text style={{ fontWeight: "500" }}>Mật khẩu</Text>
                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        placeholder="************"
                        style={styles.input}
                    />
                    <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                        <Text style={styles.forgotPasswordText}>Quên mật khẩu?</Text>
                    </View>
                </View>
                <View style={{ marginTop: 40, alignItems: "center" }}>
                    <TouchableOpacity
                        style={styles.signInButton}
                        onPress={handleSignIn}
                        disabled={loading}
                    >
                        <Text style={styles.signInButtonText}>ĐĂNG NHẬP</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: "center", marginTop: 20 }}>
                    <Text>
                        Chưa có tài khoản?{" "}
                        <Text
                            style={styles.signUpLink}
                            onPress={() => navigation.navigate("SignUp")}
                        >
                            Đăng ký tại đây
                        </Text>
                    </Text>
                </View>
            </View>
        </View>
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
    forgotPasswordText: {
        marginTop: 5,
        fontSize: 12,
        color: "#6C6C6C",
    },
    signInButton: {
        width: 300,
        height: 54,
        backgroundColor: "#0F3975",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 7,
    },
    signInButtonText: {
        color: "#fff",
        fontWeight: "bold",
    },
    signUpLink: {
        color: "#003366",
        fontWeight: "bold",
    },
});
