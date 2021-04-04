import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';





export default function Welcome() {
    const navigation = useNavigation();
    const [fontLoaded] = useFonts({
        A: require('../assets/fonts/a.ttf'),

      });
      useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login');
        }, 3000);
      },[]);

      if (!fontLoaded) {
        return null;
      }
      
    
   
    return (
        <View style={styles.container}>
            <View style={{ alignSelf:'center', marginTop:'25%' }}>
            <Image source={require('../assets/logo.png')} style={{width:100, height:100, resizeMode:'contain', alignSelf:'center'}}></Image>
              <View style={{alignSelf:'center'}}>
                <Text style={{fontFamily:'A', fontSize:15, color:'#ffae03', textAlign:'center'}}>your happy place</Text>
              </View>
              
            </View>
            <Image source={require('../assets/footer.png')} style={{width:500, height:700, resizeMode:'contain', position:'absolute', bottom:-200, left:-50}}></Image>
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
        height: '55%',
        width: '100%',
        marginTop: '-5%',
        resizeMode: 'contain',
        alignSelf: 'center'
    },

});