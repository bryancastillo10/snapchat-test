import { SetStateAction, Dispatch } from "react"
import { View, StyleSheet, TouchableOpacity } from "react-native"
import { IconButton } from "./IconButton"
import { Link } from "expo-router"
import { ThemedText } from "./ThemedText"
import { CameraMode } from "expo-camera"

interface BottomRowToolsProps{
    cameraMode:CameraMode;
    setCameraMode: Dispatch<SetStateAction<CameraMode>>;
}

export const BottomRowTools = ({cameraMode,setCameraMode}:BottomRowToolsProps) => {
  return (
    <View style={[styles.bottomContainer, styles.directionRowItemsCenter]}>
        <Link href={"/media-library" as never} asChild>
            <IconButton
                androidName="image"
                onPress={()=>{}}
            />
        </Link>
        <View style={styles.directionRowItemsCenter}>
            <TouchableOpacity onPress={()=>setCameraMode("picture")}>
                <ThemedText
                    style={{fontWeight: cameraMode === "picture" ? "bold":"100"}}
                >
                    Snap
                </ThemedText>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setCameraMode("video")}>
            <ThemedText
                    style={{fontWeight: cameraMode === "video" ? "bold":"100"}}
                >
                    Video
                </ThemedText>
            </TouchableOpacity>
        </View>
        <IconButton 
            androidName="search"
            onPress={()=>{}}
        />
    </View>
    );
}

const styles = StyleSheet.create({
    directionRowItemsCenter:{
        flexDirection:"row",
        alignItems:"center",
        gap:12
    },
    bottomContainer:{
        width:"100%",
        justifyContent:"space-between",
        position:"absolute",
        alignSelf:"center",
        bottom:6
    }
})
