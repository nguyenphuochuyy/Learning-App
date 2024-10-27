import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import avt5 from "../../assets/images/avt5.png";
const Started5 = ({navigation}) => {
    return (
        <>
            <View style={styles.container}>
                {/* <View style={{ alignItems: 'flex-end' }}>
                    <TouchableOpacity style={styles.skip}>
                        <Text >SKIP</Text>
                    </TouchableOpacity>
                </View> */}

                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 25 }}>
                    <Image source={avt5} />
                </View>

                <View style={{ marginTop: 25, alignItems: 'center' }}>
                    <View >
                        <Text style={{ fontSize: 25, fontWeight: '500' , textAlign : 'center' }}>Join Edu Hub To</Text>
                        <Text style={{ fontSize: 25, fontWeight: '500', textAlign: 'center' }}>KickStart Your Lesson</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ textAlign: 'center' }}>
                            Lorem ipsum dolor sit amet a aconsectetur. Ut proin accumsan be
                        </Text>
                    </View>
                </View>
             
                <View style={{ marginTop: 40, alignItems: 'center' , flexDirection : 'row' , justifyContent : 'space-around' }}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('')}} style={{ width: 150, height: 54, backgroundColor: '#0F3975', justifyContent: 'center', borderRadius: 10 }}>
                        <Text style={{ textAlign: 'center', color: '#fff' }}>SIGN IN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>{navigation.navigate('')}} style={{ width: 150, height: 54, backgroundColor: '#FFF', borderColor : '#0F3975', borderWidth : 1, justifyContent: 'center', borderRadius: 10 }}>
                        <Text style={{ textAlign: 'center', color: '#000' }}>SIGN UP</Text>
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
export default Started5