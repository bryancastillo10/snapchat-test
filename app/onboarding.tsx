import { TouchableOpacity, Text, StyleSheet, Alert} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Colors } from '@/constants/Colors';
import {usePermissions} from "expo-media-library";
import {useCameraPermissions, useMicrophonePermissions} from "expo-camera";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

export default function OnBoardingScreen() {
  const [cameraPermissions, requestCameraPermission] = useCameraPermissions();
  const [microphonePermissions, requestMicrophonePermission] = useMicrophonePermissions();
  const [mediaLibraryPermission, requestMediaLibraryPermission] = usePermissions();

  const handleGetStart = async() =>{
    const allPermissions = await requestAllPermissions();
    if(allPermissions){
      router.replace("/(tabs)")
    }else{
      Alert.alert("To get started with this app. Please allow the requested permissions");
    }
  };

  const requestAllPermissions = async() => {
    const cameraStatus = await requestCameraPermission();
    if(!cameraStatus?.granted){
      Alert.alert("Error", "Camera permission is required in this app");
      return false;
    }

    const microphoneStatus = await requestMicrophonePermission();
    if(!microphoneStatus?.granted){
      Alert.alert("Error","Microphone permission is required in this app");
      return false;
    }

    const mediaLibraryStatus = await requestMediaLibraryPermission();
    if(!mediaLibraryPermission?.granted){
      Alert.alert("Error", "Media Library permission is required in this app");
      return false;
    }
    await AsyncStorage.setItem("hasOpened","true");
    return true;
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#545454' }}
      headerImage={
        <MaterialCommunityIcons name="camera-enhance" size={250} color={Colors.dark.snapPrimary} />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">SnapChat Camera </ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedText>
          Welcome to the SnapChat Clone, this app requires permissions
      </ThemedText>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">
          📸 Let's take some pictures
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">
          🏝️ Capture perfect moments
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">
          🎙️ Sound's on
        </ThemedText>
      </ThemedView>
      <TouchableOpacity 
        onPress={handleGetStart}
        style={styles.buttonContainer}
        > 
        <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    marginTop:4
  },
  buttonContainer:{
    backgroundColor:"#FFFC00",
    paddingVertical:8,
    paddingHorizontal:4,
    borderRadius:15,
    marginVertical:8
  },
  buttonText:{
    color:"#111000",
    textAlign:"center",
    fontWeight:"semibold",
    fontSize:22,
  }
});
