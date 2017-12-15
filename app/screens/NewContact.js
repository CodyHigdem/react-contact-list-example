import React, { Component } from 'react';
import{ ScrollView, View } from 'react-native';


import colors from '../config/colors';
import { TextInput }from '../components/TextInput';
import { PrimaryButton } from '../components/Buttons';
const fields = [
    {
        placeholder: 'First Name',
        stateKey: 'firstName'
    },
    {
        placeholder: 'Last Name',
        stateKey: 'lastName'
    },
    {
        placeholder: 'Mobile',
        stateKey: 'mobile'
    },
    {
        placeholder: 'email',
        stateKey: 'email',
        keyboardtype: 'email-address'
    }
]
class NewContact extends Component {
    constructor(props){
        super(props);

        this.state = {};
    }

    onInputChange = (text, stateKey)=>{
        const mod = {};
        mod[stateKey] = text;
        this.setState(mod);
    }

    handdleSubmit = () =>{
        alert('submit');
    }
    render(){
        return(
            <ScrollView 
                style={{backgroundColor: colors.background}}
            >
            {
                fields.map((field) => {
                    return (
                        <TextInput
                        key={field.stateKey}
                        onChangeText={(text)=> this.onInputChange(text, field.stateKey)}
                        {...field}
                    />
                    )
                })
            }

            <View>
                <PrimaryButton
                    label="save"
                    onPress={()=> this.handdleSubmit}


/>
            </View>

            </ScrollView>
        );
    }
}
export default NewContact