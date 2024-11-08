import { Image, Text, TouchableOpacity, View , TextInput} from "react-native"
export default ResetPass = ()=>{
    return(
        <View style={{backgroundColor : '#fff'}}>
            <View style={{marginLeft : 15}}>
                <TouchableOpacity>
                    <Image source={require('../../assets/images/arrow-left-line.png')} />
                </TouchableOpacity>
            </View>
            <View style={{marginTop:100 , alignItems : 'center'}}>
                <Text style={{fontSize : 28  , fontWeight : 500}}>Reset Password</Text>
                <Text>Lorem ipsum dolor sit amet a aconsectetur</Text>
                
            </View>
            <View style={{ paddingHorizontal: 20, marginTop: 50 }}>
                    <View
                        style={{
                            marginRight: 'auto',
                            marginLeft: 'auto'
                        }}
                    >
                        <Text style={{ fontWeight: '500' }}>Password</Text>
                        <TextInput placeholder="***************" style={{ borderColor: '#ddd', padding: 8, borderWidth: 1, width: 300, borderRadius: 10, marginRight: 'auto', marginLeft: 'auto', marginTop: 10 }}></TextInput>
                    </View>

                    <View
                        style={{
                            marginRight: 'auto',
                            marginLeft: 'auto',
                            marginTop: 25
                        }}
                    >
                        <Text style={{ fontWeight: '500' }}>Confirm Password</Text>

                        <TextInput secureTextEntry placeholder="***************" style={{ borderColor: '#ddd', padding: 8, borderWidth: 1, width: 300, borderRadius: 10, marginRight: 'auto', marginLeft: 'auto', marginTop: 10 }}></TextInput>
                     

                    </View>

                    <View style={{ marginTop: 40, alignItems: 'center' }}>
                        <TouchableOpacity style={{ width: 300, height: 54, backgroundColor: '#0F3975', justifyContent: 'center', borderRadius: 7 }}>
                            <Text style={{ textAlign: 'center', color: '#fff' }}>SUBMIT</Text>
                        </TouchableOpacity>
                    </View>


                  
                   
                </View>
        </View>
    )
}