import React from 'react';

import {
  useWindowDimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,

} from 'react-native';



export default function HomeCarousel() {
  const deviceHeight = useWindowDimensions().height;
  const deviceWidth = useWindowDimensions().width;

  const carouselData = [
    {
      id: "01",
      image: require("../assests/c_image1.png")
    },

    {
      id: "02",
      image: require("../assests/c_image2.png")
    },

    {
      id: "03",
      image: require("../assests/c_image3.png")
    }
  ]


  const renderItems = ({ item, index }: any) => {

    return (
      <View>
        <Image source={item.image} style={{ height: '90%',width : deviceWidth }} />

      </View>
    )

  }

  const renderDotIndicatos = () =>{
    return carouselData.map((dot,index)=>{
      return (
        <View key = {index} style = {{marginHorizontal: 6 ,backgroundColor : 'red',height : 10,width : 10,borderRadius :5}}></View>
      )
    })
  }

  const handleScroll = (event : any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x
    console.log(scrollPosition)
    const index  = scrollPosition / deviceWidth
    console.log(index)
  }

  return (
    <View>
      <FlatList data={carouselData} renderItem={renderItems} keyExtractor={(item)=>item.id} horizontal = {true} pagingEnabled = {true} onScroll={handleScroll}/>

      <View style = {{flexDirection : 'row' , justifyContent : 'center'}}>
         {renderDotIndicatos()}
      </View>
    </View>
  )
}