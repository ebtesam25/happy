import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import * as Location from 'expo-location';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { ActivityIndicator, Colors } from 'react-native-paper';






export default function Check() {
    const navigation = useNavigation();
    const [fontLoaded] = useFonts({
        A: require('../assets/fonts/a.ttf'),

      });
     
    const [loading, setLocation] = useState(false);
      useEffect(() => {
        setTimeout(() => {
          setLocation(true)
        }, 3000);
      
      }, []);
   

      if (!fontLoaded) {
        return null;
      }
   
    
    
   
    return (
        <View style={styles.container}>
            <View style={{ alignSelf:'center', marginTop:'25%' }}>
            <Image source={require('../assets/logo.png')} style={{width:100, height:100, resizeMode:'contain', alignSelf:'center'}}></Image>
              {loading &&<View style={{alignSelf:'center'}}>
                <Text style={{fontFamily:'A', fontSize:20, color:'#e67f0d', textAlign:'center'}}>Congratulations, your post has been approved!</Text>
                
               <Image source={require('../assets/approved.png')} style={{width:300, height:520, resizeMode:'contain', marginTop:'25%', alignSelf:'center', borderRadius:20}}></Image>
     
              </View>}
              {!loading &&<ActivityIndicator animating={true} color={Colors.orange500} size={40} />}
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
        height: '55%',
        width: '100%',
        marginTop: '-5%',
        resizeMode: 'contain',
        alignSelf: 'center'
    },

});