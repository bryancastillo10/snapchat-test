import { useState, useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useFirstTimeOpen = () => {
    const [isFirstTime, setIsFirstTime] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(()=>{
        const checkFirstTimeOpen = async() =>{
            try{
                const hasOpened = await AsyncStorage.getItem("hasOpened");
                if( hasOpened === null){
                    setIsFirstTime(true);
                }else{
                    setIsFirstTime(false);
                }
            }
            catch(error){
                console.error("Error getting the local state at first time", error);
            }finally{
                setIsLoading(false);
            }
        }

        checkFirstTimeOpen();
    },[])

    return {isFirstTime, isLoading};
}