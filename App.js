import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from "react-native";

const App = () => {
    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.container}>
                <Text style={styles.tem}>6</Text>
                <Text style={styles.feels}>Feel like 5</Text>
                <View style={styles.highLowWrapper}>
                    <Text style={styles.highLow}>High : 8  </Text>
                    <Text style={styles.highLow}>Low : 6 </Text>
                </View>
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    container: {
        backgroundColor: "#feddef",
        flex:1,
        alignItems:"center"
    },
    tem:{
        color:"black",
        fontSize:48
    },
    feels:{
        fontSize:30,
        color:"black"
    },
    highLow:{
        fontSize:20,
        color:"black"
    },
    highLowWrapper:{
        flexDirection:'row'
    }
})
export default App