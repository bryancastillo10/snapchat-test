import { Ionicons } from "@expo/vector-icons";
import { ComponentProps } from "react";
import {ViewStyle, StyleProp, TouchableOpacity} from "react-native";


const containerPadding = 5;
const containerWidth = 34;
const iconSize = 25;

interface IconButtonProps{
    androidName: ComponentProps<typeof Ionicons>["name"];
    containerStyle?: StyleProp<ViewStyle>;
    onPress:()=>void;
    width?:number;
    height?:number;
}

export const IconButton = ({
    androidName,
    containerStyle,
    onPress,
    width,
    height
}:IconButtonProps) => {
  return (
    <TouchableOpacity
        onPress={onPress}
        style={[{
          backgroundColor:"111000",
          padding:containerPadding,
          borderRadius:(containerWidth + containerPadding * 2)/2,
          width: containerWidth
        }, containerStyle]}
    >
        <Ionicons 
        name={androidName}
        size={25}
        color={"white"}
        />
    </TouchableOpacity>
  )
}


