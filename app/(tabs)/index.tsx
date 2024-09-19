import { useRef, useState } from 'react';
import { View, StyleSheet, Text} from 'react-native';

import {CameraMode, CameraView} from "expo-camera";
import * as WebBrowser from "expo-web-browser";
import {BottomRowTools} from '@/components/BottomRowTools';

export default function HomeScreen() {
  const cameraRef = useRef<CameraView>(null);
  const [cameraMode, setCameraMode] = useState<CameraMode>("picture");
  return (
    <View style={{flex: 1}}>
      <CameraView
        mode={cameraMode}
        ref={cameraRef}
        style={{flex:1}}
      >
      <BottomRowTools
        cameraMode={cameraMode}
        setCameraMode={setCameraMode}
      />
      </CameraView>
    </View>
  );
}


