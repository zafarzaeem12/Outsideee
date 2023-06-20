import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const AppBackground = ({ children ,title }) => {
    return (
        <View style={styles.conatiner}>
            <View style={{ marginTop: 45 }}>
                <Text style={styles.titleText}>{title}</Text>
            </View>
            <View style={styles.children}>
                {children}
            </View>

        </View>
    )
}

export default AppBackground

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        width: '100%',
        backgroundColor: '#ffffff'
    },
    safe: { flex: 1 },
    children: {
        marginHorizontal: 20,
        marginVertical: 1,

    }
})