import React, {Component} from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

class Inputs extends Component{
    state={
        todo: '',
        todos: []
        
    };

    

    handleTodo = (text) => {
      this.setState({ todo: text })
   }

    addTodo = (tod) =>{this.state.todos.push(`\n ${tod}`);
    this.textInput.clear();}

   

    
    render(){
        return(
             <View style = {styles.container}>
             <Text style = {styles.heading}>Enter Tasks</Text>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Enter Todo"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleTodo} ref={input => { this.textInput = input }}/>

               <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.addTodo(this.state.todo)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>

              <Text style = {styles.heading}>{this.state.todos}</Text>
         </View>
        );
    }
}

export default Inputs;

const styles = StyleSheet.create({
   container: {
      paddingTop: 23,
      fontFamily: 'sansserif'
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   },

   heading:{
       fontFamily:'sans-serif'
      
   }
})