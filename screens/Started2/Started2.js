import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import avt2 from "../../assets/images/avt2.png";

const Started2 = ({ navigation }) => {
    return (
        <>
            <View style={styles.container}>
                <View style={{ alignItems: 'flex-end' }}>
                    <TouchableOpacity style={styles.skip}>
                        <Text>BỎ QUA</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 25 }}>
                    <Image source={avt2} />
                </View>

                <View style={{ marginTop: 25, alignItems: 'center' }}>
                    <View>
                        <Text style={{ fontSize: 25, fontWeight: '500', textAlign: 'center' }}>Nâng Cao</Text>
                        <Text style={{ fontSize: 25, fontWeight: '500', textAlign: 'center' }}>Hành Trình Học Tập</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ textAlign: 'center' }}>
                            Chào mừng bạn đến với Edu Hub, nơi kiến thức và cơ hội mở ra con đường thành công cho bạn.
                        </Text>

                    </View>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'center' }}>
                    <View style={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        marginHorizontal: 5,
                        backgroundColor: '#ccc',
                    }}></View>
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
                    }}></View>
                    <View style={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        marginHorizontal: 5,
                        backgroundColor: '#ccc',
                    }}></View>
                </View>

                <View style={{ marginTop: 40, alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Started3') }} style={{ width: 200, height: 54, backgroundColor: '#0F3975', justifyContent: 'center', borderRadius: 10 }}>
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

export default Started2;
