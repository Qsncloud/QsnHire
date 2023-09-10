import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, StatusBar, ScrollView, View, ActivityIndicator, PanResponder } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import AllNavigation from './AllNavigation';

const App = () => {
 
  return (
      <View style={{flex:1}}>
      <StatusBar barStyle="auto" />
        <AllNavigation />
      </View>
  
  );
};

export default App;
