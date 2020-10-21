import React from "react";
import Title from "../Title";

class Jumbotron extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            title:this.props.titulo,
            jumbotron_texto: "Textos: ",
            lista_de_Djs_Favoritos: ["Hardwell ","Quintino ","Mike Williams ","Blasterjaxx ","W&W ","Yellow Claw "],
            link:"link-copado"
        }
    }
    render() {
        return (
            <div className="jumbotron">
                <Title title = {this.state.title}/>
                <p className="lead">{this.state.jumbotron_texto}</p>
                <hr className="my-4" />
                <p>{this.state.lista_de_Djs_Favoritos}</p>
                <a className="btn btn-primary btn-lg" href={this.state.link} role="button">Learn more</a>
            </div>
        );
    }
}
export default Jumbotron;