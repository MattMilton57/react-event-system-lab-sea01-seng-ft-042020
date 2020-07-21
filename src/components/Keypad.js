import React from 'react';

class Keypad extends React.Component{

    keystroke = (e) => {
        console.log('Entering password...')
    }

 render(){
     return <input type="password" onKeyUp={this.keystroke}></input>
 }
}
export default Keypad
