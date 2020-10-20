import React from "react";

class ListItem extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            //Primer caracter del texto  enviado
            fist_char: this.props.texto[0]
        }
    }
    render() {
        return (
        <li className={`list-group-item`}>{this.props.texto.toUpperCase()}</li>
          
        );
    }
}
export default ListItem;