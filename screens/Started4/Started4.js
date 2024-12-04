import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import avt4 from "../../assets/images/avt4.png";
const Started4 = ({navigation}) => {
    return (
        <>
            <View style={styles.container}>
                <View style={{ alignItems: 'flex-end' }}>
                    <TouchableOpacity style={styles.skip}>
                        <Text>BỎ QUA</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 25 }}>
                    <Image source={avt4} />
                </View>

                <View style={{ marginTop: 25, alignItems: 'center' }}>
                    <View>
                        <Text style={{ fontSize: 25, fontWeight: '500', textAlign: 'center' }}>Bắt đầu</Text>
                        <Text style={{ fontSize: 25, fontWeight: '500', textAlign: 'center' }}>hành trình học tập</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ textAlign: 'center' }}>
                            Tham gia Edu Hub ngay để khám phá và phát triển kỹ năng của bạn một cách toàn diện.
                        </Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', marginTop: 20, justifyContent: 'center'}}>
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
                </View>

                <View style={{ marginTop: 40, alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => {navigation.navigate('Started5')}} style={{ width: 200, height: 54, backgroundColor: '#0F3975', justifyContent: 'center', borderRadius: 10 }}>
                        <Text style={{ textAlign: 'center', color: '#fff' }}>TIẾP TỤC</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10
    },
    skip: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 20,
        backgroundColor: '#F1F1F1',
    }
})
export default Started4;
