import { useRef } from 'react';
import { View, StyleSheet, Text} from 'react-native';

import {CameraView} from "expo-camera";
import * as WebBrowser from "expo-web-browser";

export default function HomeScreen() {
  const cameraRef = useRef<CameraView>(null);
  return (
    <View style={{flex: 1}}>
      <CameraView
        ref={cameraRef}
        style={{flex:1}}
      />
    </View>
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
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
