import React from 'react'
import {
    View,
    Text,
    StyleSheet, //For styling componets
    useColorScheme, //Dark-Light mode
    Appearance,
    SafeAreaView, //For mobile with notch etc
} from 'react-native'

function AppPro(): JSX.Element{  //AppPro should return a JSX Element
    const colorScheme = Appearance.getColorScheme(); //Checks sytem colourscheme
    const isDarkMode = colorScheme==="dark" ? useColorScheme() === 'dark' : useColorScheme() === 'light' //For Dark Mode and light mode
    return(      //Using the stylesheet in view      
        <View style={styles.container}> 
            <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
                Hello World
            </Text>
        </View>     
    )
}

const styles = StyleSheet.create({  //Creating a stylesheet
    container:{
        flex: 1,
        alignItems: 'center',  //crossaxis alignment - flex-start,center,flex-end
        justifyContent: 'center' //mainaxis alignment - same as above
    },
    whiteText: {
        color: '#FFFFFF',
        fontSize: 40
    },
    darkText: {
        color: '#000000'
    }
})

export default AppPro;