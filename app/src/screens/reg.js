import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import { TextInput } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';





export default function Register({}) {
    const navigation = useNavigation();
    const [fontLoaded] = useFonts({
        A: require('../assets/fonts/a.ttf'),

      });
    if (!fontLoaded) {
        return null;
      }

    return (
        <View style={styles.container}>
            <View style={{ marginTop: '20%'}}>
            <Image source={require('../assets/logo.png')} style={{height:100, width:100, resizeMode:'contain', alignSelf:'center'}}></Image>
           
              <View style={{marginTop:'5%', backgroundColor:'#FFF', alignSelf:'center', width:'100%'}}>
                 <View style={{marginHorizontal:'10%', marginTop:'10%'}}>
                <Text style={{fontFamily:'A', fontSize:20}}>full name</Text>
                <TextInput style={{borderColor:'#e67f0d', width:'100%', borderRadius:10, borderWidth:2, alignSelf:'center', fontSize:17, paddingLeft:'5%', paddingVertical:'3.5%', marginTop:'1.5%', color:'#e67f0d'}}></TextInput>
                <Text style={{fontFamily:'A', fontSize:20}}>email address</Text>
                <TextInput style={{borderColor:'#e67f0d', width:'100%', borderRadius:10, borderWidth:2, alignSelf:'center', fontSize:17, paddingLeft:'5%', paddingVertical:'3.5%', marginTop:'1.5%', color:'#e67f0d'}}></TextInput>
                <Text style={{fontFamily:'A', fontSize:20}}>password</Text>
                <TextInput secureTextEntry style={{borderColor:'#e67f0d', width:'100%', borderRadius:10, borderWidth:2, alignSelf:'center', fontSize:17, paddingLeft:'5%', paddingVertical:'3.5%', marginTop:'1.5%', color:'#e67f0d'}}></TextInput>
                <Text style={{fontFamily:'A', fontSize:20}}>confirm password</Text>
                <TextInput secureTextEntry style={{borderColor:'#e67f0d', width:'100%', borderRadius:10, borderWidth:2, alignSelf:'center', fontSize:17, paddingLeft:'5%', paddingVertical:'3.5%', marginTop:'1.5%', color:'#e67f0d'}}></TextInput>
                </View>    
                <TouchableOpacity onPress={()=>navigation.navigate('Login')}><Text style={{fontFamily:'A', fontSize:20, textAlign:'center', alignSelf:'center', backgroundColor:'#e67f0d', color:'#FFF', width:'70%', paddingVertical:'4.5%', borderRadius:10, elevation:0, marginTop:'15%'}}>
                    REGISTER
                 </Text></TouchableOpacity>

                 <View style={{flexDirection:'row', display:'flex', marginTop:'10%', alignSelf:'center'}}>
                 <Text style={{fontFamily:'A', fontSize:17, textAlign:'center'}}>or login</Text>
                 <TouchableOpacity><Text style={{fontFamily:'A', fontSize:17, textAlign:'center', color:'#e67f0d'}} onPress={()=>navigation.navigate('Login')}> here</Text></TouchableOpacity>
                </View>

              </View>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        position: 'relative',
        backgroundColor: '#FFF'
    },
    header: {
        height: '75%',
        width: '100%',
        marginTop: '5%',
        resizeMode: 'contain',
        alignSelf: 'center'
    },

});