import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/Fontisto';
import AsyncStorage from '@react-native-async-storage/async-storage'

import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');
const customContainers = [
  {
    title: 'Expand your Reach',
    content: 'Reach out to unlimited audience and connect potential customers to your business.',
    backgroundImage: require('../assets/Onboarding4.png'), 
  },
  {
    title: 'Expand your Reach',
    content: 'Reach out to unlimited audience and connect potential customers to your business.',
    backgroundImage: require('../assets/onboarding1.png'), 
  },
  {
    title: 'Expand your Reach',
    content: 'Reach out to unlimited audience and connect potential customers to your business.',
    backgroundImage: require('../assets/Onboarding3.png'), 
  },
]; 
const WelcomeScreen = ({navigation}) => {
  const [shouldShowSlideshow, setShouldShowSlideshow] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    checkIfSlideshowShown();
  }, []);

  const checkIfSlideshowShown = async () => {
    try {
      const value = await AsyncStorage.getItem('@slideshow_shown');
      if (value === null) {
        setShouldShowSlideshow(true);
      }
    } catch (error) {
      console.error('Error checking AsyncStorage:', error);
    }
  };

  const handleIndexChanged = (index) => {
    setActiveIndex(index);
  };

  const handleSlideshowEnd = async () => {
    try {
    await AsyncStorage.setItem('@slideshow_shown', 'true');
      setShouldShowSlideshow(false);
    } catch (error) {
      console.error('Error saving to AsyncStorage:', error);
    }
  };



 
  return (
    <View style={styles.container}>
   
      {shouldShowSlideshow ? (
        <Swiper
          style={styles.wrapper}
          loop={false}
          dotColor="white"
          activeDotColor="#2a0a2b"
          onIndexChanged={handleIndexChanged}
          onIndexChanged={(index) => {
            if (index === customContainers.length - 1) {
              handleSlideshowEnd();
            }
          }}
        >
          {customContainers.map((container, index) => (
            <View key={index} style={styles.slide}>
              <ImageBackground source={container.backgroundImage} style={styles.imageBackground}>
                <View style={styles.textContainer}>
                  <Text style={styles.title}>{container.title}</Text>
                  <Text style={styles.content}>{container.content}</Text>
                  <View style={{width:100, height:40, backgroundColor:'white',borderRadius:10, justifyContent:'center', alignItems:'center', marginTop:10}}>
                  <Text style={{fontSize:16, color:'rgb(42,10,43)'}}>Slide >>> </Text>
                  </View>
                </View>
              </ImageBackground>
            </View>
          ))}
        </Swiper>
      ) : (
        <View style={styles.additionalPage}>
        <ImageBackground source={require('../assets/Onboarding2.png')} style={styles.imageBackground}>
        <View  style={{width:'80%', height:200, justifyContent:'center', marginTop:30}}>
        <Text style={{fontSize:45,fontWeight:'bold', color:'white'}}>What are you doing today?</Text>
       
        </View>
        <View style={styles.textContainer}>
        <TouchableOpacity style={[styles.continueButton,{  }]}
        onPress={() => navigation.navigate('Hire')} >
        <View style={[styles.iconContainer, {borderColor:'white'}]}>
        <Icon name="tools" size={20} color="white"/>
        </View>
         <Text style={[styles.continueButtonText, {color:'white'}]}>
        Hire a Service</Text>
       </TouchableOpacity>
       <TouchableOpacity style={[styles.continueButton,{ backgroundColor:'white'}]}
       onPress={() => navigation.navigate('Home')}>
       
       <View style={styles.iconContainer}>
       <Icons name="shopping-store" size={20} color="rgb(42,10,43)" /> 
        </View>
         <Text style={[styles.continueButtonText, {color:'rgb(42,10,43)'}]}>Buy Online</Text>
       </TouchableOpacity>
       <TouchableOpacity style={[styles.continueButton,{   backgroundColor:'white'}]}
       onPress={() => navigation.navigate('Vendor')}
       >
      
       <View style={styles.iconContainer}>
        <Icon name="user-alt" size={20} color="rgb(42,10,43)"/>
        </View>
         <Text style={[styles.continueButtonText, {color:'rgb(42,10,43)'}]}>Become a vendor</Text>
       </TouchableOpacity>
        </View>
        </ImageBackground>
        </View>
      )}
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {},
  slide: {
    flex: 1,
  },
 
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
   // paddingVertical:55
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white', // Set text color to contrast with the background
  },
  content: {
    fontSize: 22,
    color: 'white', // Set text color to contrast with the background
  },
  textContainer:{
    width:'85%',
   padding:20,
  marginTop:90
  },
  continueButton: {
    backgroundColor: 'rgb(42,10,43)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection:'row',
    marginTop:20,
    borderColor:'rgb(42,10,43)',
    borderWidth:1,
    //justifyContent:'space-between',
    alignItems:'center'
  },
  continueButtonText: {
    color: '#ffffff',
    fontSize: 20,
    marginLeft:40
  },
  iconContainer:{
    width:35,
    height:35,
   borderRadius:10,
   borderWidth:1,
   borderColor:'rgb(42,10,43)',
   justifyContent:'center',
   alignItems:'center'
  },
  additionalPage: {
    flex: 1,
    
  },
  
});



export default WelcomeScreen;