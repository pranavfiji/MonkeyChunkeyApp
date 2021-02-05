import React from 'react';
import { StyleSheet, Text, View, TextInput,Image,TouchableOpacity} from 'react-native';
import {Audio} from 'expo-av';

class PhonicSounds extends React.Component{
    playSound=async(soundChunk)=>{
        var soundLink = 'https://whitehatjrcontent.s3.ap-south-1.amazonaws.com/phones/' + soundChunk + '.mp3';
        await Audio.Sound.createAsync( { uri: soundLink, }, { shouldPlay: true } );

    }
    render(){
        return(
            <TouchableOpacity style={styles.chunkButton}
             onPress={()=>{
                 this.playSound(this.props.soundChunk)
             }}>
                <Text style={styles.displayText}>{this.props.wordChunk} </Text>
            </TouchableOpacity>
        )
    }
}
const styles=StyleSheet.create({
    chunkButton:{
        width:"40%",
        height:50,
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        borderRadius:20,
        margin:5,
        backgroundColor:"grey",
        borderWidth:2
      },
      displayText:{
        textAlign:"center",
        fontSize:30,
        color:"red",
        fontWeight:"bold",
    
    
      }
})
export default PhonicSounds;