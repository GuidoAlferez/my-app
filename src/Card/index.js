//Vamos a crear el componente Ract "Card"
//Importo react
import React from "react";

class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            card_title:this.props.title,
            random: this.props.number
            
        }
    }
    render(){
        //this.state.random = "Jazmin";
        return(
            <div className="card" style={{width:"18rem"}}>
                <img src="http://miro.medium.com/max/3840/0*oZLL-N4dGNlBe4Oh.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{this.state.card_title}</h5>
                    <p className="card-text">Aloha</p>
                <a href="#" className="btn btn-primary">{this.state.random}</a>
                </div>

                
            </div>
        );
    }
}
export default Card;