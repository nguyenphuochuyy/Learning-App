import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import avt1 from "../../assets/images/avt1.png";
import ChatGPTBox from "../ChatBox";

const Started1 = ({navigation}) => {
    return (
        <>
            <View style={styles.container}>
                <View style={{ alignItems: 'flex-end' }}>
                    <TouchableOpacity style={styles.skip} onPress={() => { navigation.navigate("Login") }}>
                        <Text>BỎ QUA</Text>
                    </TouchableOpacity>
                </View>
                <View>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 25 }}>
                    <Image source={avt1} />
                </View>

                <View style={{ marginTop: 25, alignItems: 'center' }}>
                    <View>
                        <Text style={{ fontSize: 25, fontWeight: '500' }}>Mở Khóa Tiềm Năng</Text>
                        <Text style={{ fontSize: 25, fontWeight: '500', textAlign: 'center' }}>cùng Edu Hub</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ textAlign: 'center' }}>
                            Chào mừng bạn đến với Edu Hub, nơi tốt nhất để học tập và phát triển. 
                            Chúng tôi sẽ đồng hành cùng bạn để đạt được mục tiêu và thực hiện ước mơ của mình.
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'center' }}>
                    <View style={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        marginHorizontal: 5,
                        backgroundColor: '#0F3975',
                    }}></View>
                    <View style={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        marginHorizontal: 5,
                        backgroundColor: '#ccc',
                    }}>
                    </View>
                    <View style={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        marginHorizontal: 5,
                        backgroundColor: '#ccc',
                    }}>
                    </View>
                    <View style={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        marginHorizontal: 5,
                        backgroundColor: '#ccc',
                    }}></View>
                </View>
                <View style={{ marginTop: 40, alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Started2') }} style={{ width: 200, height: 54, backgroundColor: '#0F3975', justifyContent: 'center', borderRadius: 10 }}>
                        <Text style={{ textAlign: 'center', color: '#fff' }}>TIẾP TỤC</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
    },
    skip: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 20,
        backgroundColor: '#F1F1F1',
    },
});

export default Started1;
