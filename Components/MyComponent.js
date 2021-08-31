import React, {Component} from 'react';
import { Text, Button } from 'react-native';

export default class MyComponent extends Component{
    constructor(props){
        super(props);
        this.eliminar = this.props.onDelete.bind(this, this.props.person.DNI);
    }
    render(){
        return(
        <>
            <Text style={{fontSize: 20}}>{this.props.person.DNI}) {this.props.person.apellido}, {this.props.person.nombre} - {this.props.person.edad}</Text>
            <Button title='Eliminar' onPress={this.eliminar}/>
        </>);
    }
}