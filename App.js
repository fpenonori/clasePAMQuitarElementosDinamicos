import React, {Component} from 'react';
import { Button, ScrollView, View } from 'react-native';
import MyComponent from './Components/MyComponent'
export default class App extends Component {
  constructor(){
    super();
    this.state = {
      valores: [],
      original: [
        {DNI: 1, nombre: 'Francisco', apellido: 'Penonori', edad: '26'},
        {DNI: 2, nombre: 'Tomas', apellido: 'Penonori', edad: '21'},
        {DNI: 3, nombre: 'Candela', apellido: 'Penonori', edad: '20'}, 
      ],
    }
  }

  eliminarPersona(DNI){
    console.log(DNI);
    console.log(this.state.valores);
    var result =  this.state.valores.filter(item => item.DNI != DNI);
    this.setState({valores: result});
  }

  reset(){
    this.setState({valores: this.state.original})
  }

  componentDidMount(){
    this.reset();
  }

  render(){
    const listado = this.state.valores.map( item => <MyComponent key={item.DNI} person={item} onDelete={this.eliminarPersona.bind(this)}/>);
    return (
      <View>
        <View style={{height:100}}/>
        <Button title='Reset' onPress={this.reset.bind(this)}/>
        <ScrollView>
          {listado}
        </ScrollView>
      </View>
    );
  }
}