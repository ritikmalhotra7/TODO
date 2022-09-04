import { View, Text, StyleSheet } from "react-native";
import React from 'react';

export default function Header() {

    return (
        <View style={styles.header}>
            <Text style={styles.title}>
                MyTodos
            </Text>
        </View>
    )
};


const styles = StyleSheet.create({
    header: {
        height: 50, paddingTop: 17, backgroundColor: 'coral'
    },
    title: {
        textAlign: 'center',
        color: "#fff",
        fontSize: 20,
        fontWeight: 'bold',
    }
});