import { View , Text, StyleSheet, Image } from "react-native"
import banner from "../../assets/images/logo_firstscreen.png";
import { useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import ChatGPTBox from "../ChatBox";
const Started0 = ()=>{
    const navigation = useNavigation();
    useEffect(()=>{
        const timer = setTimeout(() => {
            // navigation.reset({
            //     index: 0,
            //     routes: [{ name: 'Started1' }], // Thay 'NextScreen' bằng tên màn hình tiếp theo của bạn
            // });
            navigation.navigate('Started1')
        }, 2000); 
        return () => clearTimeout(timer); 
    },[navigation])
    return(
        <>
            <View style={styles.container}>
                <Image source={banner} />
              
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container : {
        flex : 1 ,
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : '#fff' 
    }
})
export default Started0