import React from "react";
import ListItem from "../LisItem";

class List extends React.Component {
    constructor (){
        super();
        this.state = {
            items: [
                {
                    text:"Cras",
                    actived:false
                },
                {
                    text:"Dapibus",
                    actived:false
                },
                {
                    text:"Morbi",
                    actived:false
                },
                {
                    text:"Porta",
                    actived:false
                }
            ]
        }
    }
    render() {
        return (
            <ul className="list-group">
                {this.state.items.map((item)=>{
                    return (
                        <ListItem texto={item.text}/>
                    )
                })}

            </ul>
        );
    }
}
export default List;