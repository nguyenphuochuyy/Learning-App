import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import avt1 from "../../assets/images/avt1.png";
const Started1 = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={{ alignItems: 'flex-end' }}>
                    <TouchableOpacity style={styles.skip}>
                        <Text >SKIP</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 25 }}>
                    <Image source={avt1} />
                </View>

                <View style={{ marginTop: 25, alignItems: 'center' }}>
                    <View >
                        <Text style={{ fontSize: 25, fontWeight: '500' }}>Unlock Your Potential </Text>
                        <Text style={{ fontSize: 25, fontWeight: '500', textAlign: 'center' }}>with Edu Hub</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ textAlign: 'center' }}>
                            Lorem ipsum dolor sit amet a aconsectetur. Ut proin accumsan be
                        </Text>
                    </View>
                </View>
                <View style={{flexDirection : 'row' , marginTop : 20 , justifyContent : 'center'}}>
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
                      <View style={{
                      
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            marginHorizontal: 5,
                            backgroundColor: '#ccc',
                      
                    }}></View>
                    
                </View>

                <View style={{ marginTop: 40, alignItems: 'center' }}>
                    <TouchableOpacity style={{ width: 200, height: 54, backgroundColor: '#0F3975', justifyContent: 'center', borderRadius: 10 }}>
                        <Text style={{ textAlign: 'center', color: '#fff' }}>CONTINUE</Text>
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
export default Started1