import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from "react-native";

const UpcomingWeather = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>UPCW</Text>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
export default UpcomingWeather;
