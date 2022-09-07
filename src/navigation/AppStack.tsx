import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useCallback } from 'react'

import { useAppSelector } from '../app/store';
import { useAppDispatch } from '../app/store';
import { currentUser } from '../common/userSlice';
import AuthStack from './AuthStack';
import HomeScreen from '../screens/HomeScreen';

export default function AppStack() {
  
  const { user } = useAppSelector((user) => user.auth);


  useEffect(() => { 
    console.log("current use", user);
  }, [user])
  

  const dispatch = useAppDispatch();

  const initApp = useCallback(async () => {
    await dispatch(currentUser);
  }, [dispatch]);

  // console.log(initApp);

  return (
    <NavigationContainer>
      {user !== null ? <HomeScreen /> : <AuthStack />}
    </NavigationContainer>
  )
}
