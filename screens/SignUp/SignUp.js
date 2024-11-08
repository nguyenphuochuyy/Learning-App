import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

export default SignUp = () => {
    return (
        <>
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 30, fontWeight: '500' }} >Sign Up</Text>
                    <Text style={{ color: 'gray', marginTop: 15 }}>Lorem ipsum dolor sit amet a</Text>
                    <Text style={{ color: 'gray' }}>aconsectetur</Text>
                </View>
                <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
                    <View
                        style={{
                            marginRight: 'auto',
                            marginLeft: 'auto'
                        }}
                    >
                        <Text style={{ fontWeight: '500' }}>Full Name</Text>
                        <TextInput placeholder="Your name here" style={{ borderColor: '#ddd', padding: 8, borderWidth: 1, width: 300, borderRadius: 10, marginRight: 'auto', marginLeft: 'auto', marginTop: 10 }}></TextInput>
                    </View>
                    <View
                        style={{
                            marginRight: 'auto',
                            marginLeft: 'auto',
                            marginTop : 30
                        }}
                    >
                        <Text style={{ fontWeight: '500' }}>Email Here</Text>
                        <TextInput placeholder="Contact@gmail.com" style={{ borderColor: '#ddd', padding: 8, borderWidth: 1, width: 300, borderRadius: 10, marginRight: 'auto', marginLeft: 'auto', marginTop: 10 }}></TextInput>
                    </View>

                    <View
                        style={{
                            marginRight: 'auto',
                            marginLeft: 'auto',
                            marginTop: 25
                        }}
                    >
                        <Text style={{ fontWeight: '500' }}>Password</Text>

                        <TextInput secureTextEntry placeholder="************" style={{ borderColor: '#ddd', padding: 8, borderWidth: 1, width: 300, borderRadius: 10, marginRight: 'auto', marginLeft: 'auto', marginTop: 10 }}></TextInput>


                    </View>

                    <View style={{ marginTop: 40, alignItems: 'center' }}>
                        <TouchableOpacity style={{ width: 300, height: 54, backgroundColor: '#0F3975', justifyContent: 'center', borderRadius: 7 }}>
                            <Text style={{ textAlign: 'center', color: '#fff' }}>SIGN UP</Text>
                        </TouchableOpacity>
                    </View>


                    <View>
                        <Text style={{
                            textAlign: 'center',
                            color: '#888',
                            marginVertical: 10
                        }}>Or Sign In With</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.socialButtonFacebook}>

                            <Text style={styles.socialButtonText}>Sign In with Facebook</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialButtonGoogle}>
                            <Text style={{
                                color: '#6C6C6C'
                            }}>Sign In with Google</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.signUpText}>
                            <Text>Don't Have An Account? <Text style={styles.signUpLink}>Sign In Here</Text></Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    signUpText: {
        marginTop: 20,
        alignItems: 'center',
    },
    signUpLink: {
        color: '#003366',
        fontWeight: 'bold',
    },
    socialButtonFacebook: {
        flexDirection: 'row',
        backgroundColor: '#1877F2',
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    socialButtonGoogle: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderWidth: 1,
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    socialButtonText: {
        marginLeft: 10,
        color: 'white',
        fontWeight: 'bold',
    },

});