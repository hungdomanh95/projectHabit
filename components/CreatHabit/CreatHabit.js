import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux';
import {TouchableOpacity, StyleSheet, Text, View, Image,Dimensions,TextInput,SafeAreaView,ScrollView} from 'react-native';
import _ from 'lodash'
import iconEdit from "../../static/images/edit.png"
import {arrIconBest,arrIconFavorites} from "../ListData"
import {action} from "../../redux/action/habitAction"

const widthScreen = Dimensions.get('window').width
const heightScreen = Dimensions.get('window').height
const widthModal = 0.9
const CreatHabit = () => {
useDispatch
   const dispatch = useDispatch()
  const [text, onChangeText] = useState("");
  const [iconChoose,setIconChoose] = useState(undefined)
  console.log('iconChoose: ', iconChoose);
  const chooseIcon = (item) => {
    setIconChoose(item)
    // dispatch(action.addHabit())
  }

  return (
    <SafeAreaView style={styles.container} >
        <View style={{flexDirection:"row",alignItems:"center",height:"20%"}} >
          <Image source={iconEdit} style={{width:widthScreen/12,height:widthScreen/12}} />
          <TextInput
               style={styles.input}
               onChangeText={onChangeText}
               value={text}
               placeholder="PLEASE INPUT HABIT"
          />
        </View>
        <View style={{height:"80%"}} >
            <Text style={styles.text} >PLEASE CHOOSE ICON</Text>
            <ScrollView>
                <View style={{flexDirection:"row",flexWrap:"wrap",justifyContent:"flex-start",paddingVertical:"5%"}}>
                   {arrIconBest.map(item=>{
                       return (
                        <TouchableOpacity key={item.id} onPress={()=>chooseIcon(item)} >
                          <Image source={item.imageUrl} style={styles.icon} />
                        </TouchableOpacity>
                       )
                   })}
                   {arrIconFavorites.map(item=>{
                       return(
                         <TouchableOpacity key={item.id} onPress={()=>chooseIcon(item)} >
                           <Image source={item.imageUrl} style={styles.icon} />
                         </TouchableOpacity>
                       )
                   })}

                </View>
            </ScrollView>
        </View>
    </SafeAreaView>
  )
}
export default CreatHabit

const styles = StyleSheet.create({
  container:{
    padding:"10%",
  },
  text:{
    color:"black",
    fontSize:16,
    fontWeight:"bold",
    marginBottom:"5%"
  },
  icon:{
    width: widthScreen/10,
    height:  widthScreen/10,
    margin:"3%",
    // backgroundColor:"red",
    // marginRight:5,
    // marginVertical:"15%"
  }
});
