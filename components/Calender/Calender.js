import React, { Fragment, useState } from 'react'
import { TouchableOpacity, StyleSheet, Text, View, Image,Dimensions,CheckBox,TextInput,SafeAreaView,FlatList,ScrollView   } from 'react-native';
import DateTime from 'react-native-customize-selected-date'
import _ from 'lodash'
import iconSport from "../../static/images/run.png"
import iconBook from "../../static/images/book.png"
import iconHeart from "../../static/images/heart.png"
import iconEdit from "../../static/images/edit.png"
import {arrIconBest} from "../ListData"

const widthScreen = Dimensions.get('window').width
const heightScreen = Dimensions.get('window').height
const widthModal = 0.9
const Calender = ({ navigation }) => {
    const [time,setTime] = useState("")
    const [dateChoose,setDateChoose] = useState("")
    const [statusPopup,setStatusPopup] = useState({name:'',status:false})
    const [arrHabit1,setArrHabit1] = useState([])
    const [arrHabit2,setArrHabit2] = useState([])
    const [arrHabit3,setArrHabit3] = useState([])

    const [checkHabit1, setCheckHabit1] = useState(false);
    const [checkHabit2, setCheckHabit2] = useState(false);
    const [checkHabit3, setCheckHabit3] = useState(false);

    const [text, onChangeText] = useState("");
    console.log('text: ', text);

    const onChangeDate = (date) => {
        console.log("onChangeDate");
        if(_.includes(arrHabit1, date)) setCheckHabit1(true)
        else setCheckHabit1(false)
        if(_.includes(arrHabit2, date)) setCheckHabit2(true)
        else setCheckHabit2(false)
        if(_.includes(arrHabit3, date)) setCheckHabit3(true)
        else setCheckHabit3(false)
        setStatusPopup({name:'ADD_DATE',status:true})
        setDateChoose(date)
    }

    const closePopup = () => {
        setStatusPopup({name:'',status:false})
    }
    const addHabit = () => {
        if(checkHabit1) setArrHabit1([...arrHabit1,dateChoose])
        else setArrHabit1(arrHabit1.filter(item=> item !== dateChoose))
        if(checkHabit2) setArrHabit2([...arrHabit2,dateChoose])
        else setArrHabit2(arrHabit2.filter(item=> item !== dateChoose))
        if(checkHabit3) setArrHabit3([...arrHabit3,dateChoose])
        else setArrHabit3(arrHabit3.filter(item=> item !== dateChoose))
        setStatusPopup({name:'',status:false})
    }
    const reset = () => {
        setArrHabit1([])
        setArrHabit2([])
        setArrHabit3([])
        setCheckHabit1(false)
        setCheckHabit2(false)
        setCheckHabit3(false)
    }
    const  renderChildDay = (day) => {
        return(
            <Fragment>
                {_.includes(arrHabit1, day) &&  <Image source={iconSport} style={styles.iconHabit} /> }
                {_.includes(arrHabit2, day) &&  <Image source={iconBook} style={[styles.iconHabit,{left:10}]} />}
                {_.includes(arrHabit3, day) &&  <Image source={iconHeart} style={[styles.iconHabit,{left:30}]} /> }
            </Fragment>
        )
    }

    const addNewHabit = () => {
        setStatusPopup({name:'ADD_HABIT',status:true})
    }

    const renderItem = ({ item }) => (
        <Image source={item.imageUrl} style={styles.icon} />
    );

    return (
        <View style={styles.container}>
        <DateTime
          date={time}
          changeDate={(date) => onChangeDate(date)}
          format='YYYY-MM-DD'
          renderChildDay={(day) => renderChildDay(day)}
        />
        <View style={{flexDirection:"row",justifyContent:"space-evenly",width:widthScreen,marginTop:"5%"}} >
            <TouchableOpacity style={[styles.btnAction,{backgroundColor:"#e74c3c"}]} onPress={reset} >
                <Text style={styles.text} >RESET</Text>
            </TouchableOpacity>
            <TouchableOpacity   style={[styles.btnAction,{backgroundColor:"#27ae60"}]}
                                onPress={() => navigation.navigate('Creat')}
            >
                <Text style={styles.text} >ADD HABIT</Text>
            </TouchableOpacity>
        </View>

        {statusPopup.status &&
            <View style={styles.containerPopup} >
                <View style={styles.popup} >
                    <View style={styles.title} >
                        {statusPopup.name === "ADD_DATE" ?
                            <Text style={[styles.text,{color:"black"}]}  >HÔM NAY ĐÃ DUY TRÌ ĐƯỢC THÓI QUEN NÀO ?</Text>
                            :
                            <Text style={[styles.text,{color:"black"}]}  >THÊM MỚI THÓI QUEN NÀO ?</Text>
                        }
                    </View>
                    <View style={styles.body} >
                        <View style={styles.checkboxContainer}>
                            <Image source={iconSport} style={styles.imgHarbit} />
                            <CheckBox
                                value={checkHabit1}
                                onValueChange={setCheckHabit1}
                                style={styles.checkbox}
                            />
                            <Text style={styles.label}>Tập thể dục chăm chỉ</Text>
                        </View>
                        <View style={styles.checkboxContainer}>
                            <Image source={iconBook} style={styles.imgHarbit} />
                            <CheckBox
                                value={checkHabit2}
                                onValueChange={setCheckHabit2}
                                style={styles.checkbox}
                            />
                            <Text style={styles.label}>Học Anh Văn chăm chỉ</Text>
                        </View>
                        <View style={styles.checkboxContainer}>
                            <Image source={iconHeart} style={styles.imgHarbit} />
                            <CheckBox
                                value={checkHabit3}
                                onValueChange={setCheckHabit3}
                                style={styles.checkbox}
                            />
                            <Text style={styles.label}>Đi làm sớm được thưởng</Text>
                        </View>
                    </View>
                    <View style={styles.action} >
                        <TouchableOpacity style={[styles.btnAction,{backgroundColor:"#27ae60"}]} onPress={addHabit} >
                            <Text style={styles.text} >CONRFIM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.btnAction,{backgroundColor:"#e74c3c"}]} onPress={closePopup} >
                            <Text style={styles.text} >CANCEL</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        }

      </View>
    )
}

export default Calender
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:"center",
      alignItems:"center"
    },
    iconHabit: {
      width: widthScreen/25,
      height:  widthScreen/25,
      position: 'absolute',
      top: -8,
      left: -10
    },
    containerPopup:{
        position:"absolute",
        left:0,
        top:0,
        backgroundColor:"rgba(0,0,0,0.5)",
        width:widthScreen,
        height:heightScreen,
        justifyContent:"center",
        alignItems:"center"
    },
    popup:{
        // flex:1,
        backgroundColor:"white",
        width:widthScreen*widthModal,
        height:widthScreen*widthModal,
        borderRadius:20
    },
    title:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        borderBottomColor:"red",
        borderBottomWidth:1
    },
    action:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
        borderTopColor:"red",
        borderTopWidth:1,
    },
    body:{
        flex:4,
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:64,
        paddingVertical: 10,
        // backgroundColor:"red"
    },
    text:{
        color:"white",
        fontSize:16,
        fontWeight:"bold"
    },
    btnAction:{
        width:widthScreen/4,
        height:widthScreen/10,
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center"
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
        alignItems:"center",
        width:"100%",
        // backgroundColor:"red"
    },
    label: {
        margin: 8,
    },
    icon:{
        width: widthScreen/10,
        height:  widthScreen/10,
        marginRight:5,
        // backgroundColor:"green"
    },
    imgHarbit:{
        width: widthScreen/10,
        height:  widthScreen/10,
    },
    input: {
        width:widthScreen*widthModal/1.5,
        // height:widthScreen/12,
        borderBottomWidth: 1,
        borderRadius:8,
        padding:8,
        paddingLeft:16,
        marginLeft:8
      },
  });
