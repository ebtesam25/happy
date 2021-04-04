import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Avatar,Modal, Portal, Provider,ToggleButton   } from 'react-native-paper';





export default function Home() {
    const navigation = useNavigation();
    const [fontLoaded] = useFonts({
        A: require('../assets/fonts/a.ttf'),

      });
      const [visible, setVisible] = React.useState(false);

      const showModal = () => setVisible(true);
      const hideModal = () => setVisible(false);
      const [status, setStatus] = React.useState('checked');

  const onButtonToggle = value => {
    setStatus(status === 'checked' ? 'unchecked' : 'checked');
  };
    const [wallet, setWallet] = useState('1234 ••••••••••••••')
    const [balance, setBalance] = useState('10518')
    const [post, setPost] = useState([{id:1, name:'Jane Doe',date:'10/01/2021',time:'01:10 AM', img:'https://img.huffingtonpost.com/asset/5880dbed170000880192b060.jpeg?ops=scalefit_720_noupscale', description:'Hello world!', amount:200, emoji:'😊'},
    {id:2, name:'Stephen', date:'11/01/2021',time:'02:22 AM', img:'https://cakewhiz.com/wp-content/uploads/2020/02/Kids-Chocolate-Birthday-Cake-Recipe.jpg', description:'Celebrating my birthday!', amount:200, emoji:'😊'},
    {id:3, name:'Alex',date:'11/02/2021',time:'01:12 AM', img:'https://www.hellyhansen.com/wp-content/uploads/2020/11/kaylinweekendskitrip12.jpg', description:'Best skiing trip ever!', amount:430, emoji:'😄'},
    {id:4, name:'Jake',date:'11/03/2021',time:'04:32 PM', img:'https://static01.nyt.com/images/2021/02/11/sports/11cfp-live-update-win2/merlin_182236518_64f266b4-29d8-414c-826c-ae0aeb7fc967-articleLarge.jpg?quality=75&auto=webp&disable=upscale', description:'We won the game!', amount:120, emoji:'😁'},
    ]);
    const txList = post.map((data) => {
        return (
          
          <View style={{width:'90%', alignSelf:'center', borderRadius:10, paddingHorizontal:'5%', paddingVertical:'5%', marginVertical:'1.5%', backgroundColor:'#ffdf9a', borderRadius:20}}>
            <View style={{display:'flex', flexDirection:'row'}}><Avatar.Image size={30} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRngKClPOK22tmKPx3g6MyE1XF4r7guoBmNBw&usqp=CAU'}} style={{backgroundColor:"#FFF"}}/>
            <Text style={{fontFamily:'A', fontSize:17, textAlignVertical:'center', color:'#000'}}> {data.name}</Text>
            <Text style={{fontFamily:'A', fontSize:12, marginTop:'2.5%', color:'#e67f0d'}}>                                                        +Follow</Text></View>
            
              <Text style={{fontFamily:'A', fontSize:12, textAlignVertical:'center', color:'#ffdf9a', marginLeft:'10%'}}>{data.date} {data.time}</Text>
              
              <Image source={{uri:data.img}} style={{width:300, height:300, borderRadius:10, alignSelf:'center'}}></Image>
              <Text style={{fontFamily:'A', fontSize:12, textAlignVertical:'center', color:'#ffae03', marginLeft:'5%', marginTop:'5%'}}>{data.description}</Text>
              <TouchableOpacity onPress={()=>showModal()}><Text style={{fontFamily:'A', fontSize:20, textAlignVertical:'center', color:'#ffae03', textAlign:'left', marginLeft:'5%'}}>{data.emoji}{data.amount}</Text></TouchableOpacity>
              </View>
        )
      })

      if (!fontLoaded) {
        return null;
      }
      
    
   
    return (
        <View style={styles.container}>
          <Provider>
          <Portal>
            <View style={{ alignSelf:'center', marginTop:'15%',  width:'90%', borderRadius:10 }}>
              <View style={{marginHorizontal:'5%', marginTop:'5%', marginBottom:'2.5%'}}>
                <Text style={{fontFamily:'A', fontSize:25, color:'#e67f0d', textAlign:'left'}}>John Doe</Text>
                <Text style={{fontFamily:'A', fontSize:15, marginLeft:'1.5%', marginTop:'5%'}}>what's on your mind?</Text>
                <TextInput multiline style={{borderColor:'#e67f0d', width:'100%', borderRadius:10, borderWidth:1, alignSelf:'center', fontSize:12, paddingLeft:'5%', paddingVertical:'3.5%', marginTop:'1.5%', color:'#e67f0d'}} placeholder={'Share something positive'}></TextInput>
                <TouchableOpacity><View style={{display:'flex', flexDirection:'row', width:'90%', marginTop:'1.5%'}}><Icon name="paperclip" type="fontisto" color="#e67f0d" size={15}></Icon>
                <Text style={{fontFamily:'A', fontSize:15, color:'#e67f0d'}}> Attach Photo</Text></View></TouchableOpacity>
              </View>
              <TouchableOpacity><View style={{backgroundColor:"#e67f0d", width:'90%', alignSelf:'center', marginTop:'1.5%', borderRadius:5}}>
                <Text style={{fontFamily:'A', textAlign:'center', color:'#FFF', paddingVertical:'5%'}} onPress={()=>navigation.navigate('Check')}>Share</Text></View></TouchableOpacity>
            </View>
            
                <View>
                <Text style={{fontFamily:'A', fontSize:17, marginTop:'5%', marginLeft:'10%'}}>Happy stuff</Text>
                <View style={{height:'70%'}}><ScrollView>{txList}</ScrollView></View>
                </View>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={{borderRadius:10, backgroundColor:'#FFF', width:'80%', alignSelf:'center'}}>
          <Text style={{fontFamily:'A', fontSize:20, marginLeft:'5%', marginTop:'5%'}}>Reaction</Text>
          <View style={{flexDirection:'row', display:'flex', marginLeft:'2.5%', alignSelf:'center', marginBottom:'5%'}}>
            <TouchableOpacity><Text style={{fontSize:30}}>🙂</Text></TouchableOpacity>
            <TouchableOpacity><Text style={{fontSize:30}}>😊</Text></TouchableOpacity>
            <TouchableOpacity><Text style={{fontSize:30}}>😄</Text></TouchableOpacity>
            <TouchableOpacity><Text style={{fontSize:30}}>😁</Text></TouchableOpacity>
            <TouchableOpacity><Text style={{fontSize:30}}>😆</Text></TouchableOpacity>
            <TouchableOpacity><Text style={{fontSize:30}}>😅</Text></TouchableOpacity>
            <TouchableOpacity><Text style={{fontSize:30}}>😂</Text></TouchableOpacity>
            <TouchableOpacity><Text style={{fontSize:30}}>🤣</Text></TouchableOpacity>
            </View>
                </Modal>
                </Portal></Provider>
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