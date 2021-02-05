
import React from 'react';
import { StyleSheet, Text, View, TextInput,Image,TouchableOpacity,Alert} from 'react-native';
import {Header} from 'react-native-elements';
import db from './localDb'
import PhonicSounds from './phonicSound';




console.log(db["and"].phones)
 export default class App extends React.Component{
   constructor(){
      super();
      this.state={
        text:'',
        chunks:[],
        phonic:[]
         
      }
   }
   render(){
     return(
        <View style={styles.container}>
          <Header backgroundColor={"white"} centerComponent={
            {
              text:'Monkey Chunky',
              style:{color:"black",fontSize:45 ,fontWeight:"bold",fontStyle:"Fat Basic"}
              }
            }>
            
          </Header>
          <Image style={styles.imageIcon} 
          source={{
            uri:"https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png"
          }}
          >

          </Image>
          <TextInput style={styles.inputBox}
           value={this.state.text}
          onChangeText={(textObj)=>{
            this.setState({
              text:textObj
            })
             
          }}>


          </TextInput>
          <TouchableOpacity style={styles.goButton}
          onPress={
              ()=>{
                var lowerCaseWord=this.state.text.toLowerCase();
                db[lowerCaseWord]?(
                  this.setState({
                    chunks:db[lowerCaseWord].chunks
                  }),
                  this.setState({
                    phonic:db[lowerCaseWord].phones
                  })
                ):
                (
                  Alert.alert("The word dosen't exist in our database"),
                  console.log("The word dosen't exist in our database")
                  )
                
               
              }
          } >
              <Text style={styles.buttonText}>
                Go  
              </Text> 
          </TouchableOpacity>
       <View> 
            {
              this.state.chunks.map(
                (item,index)=>{
                    return(
                      <PhonicSounds wordChunk={this.state.chunks[index]}
                      soundChunk={this.state.phonic[index]}> </PhonicSounds>
                    )
                }
              )
            }

       </View>

        </View>
     );
   }
 }

const  styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    

   
  },
  inputBox:{
    marginTop:50,
    width:"70%",
    height:40,
    alignSelf:"center",
    textAlign:"center",
    borderWidth:4,

     
  },
  goButton:{
    width:"10%",
    height:55,
    alignSelf:"center",
    margin:10,
    padding:10,
    borderWidth:4,
    borderRadius:10

  },
  buttonText:{
    textAlign:"center",
    fontSize:30,
    fontWeight:"bold",

  },
  
  imageIcon:{
    width:250,
    height:250,
    alignSelf:"center"

  },
  

});
