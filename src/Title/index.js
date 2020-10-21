import React from "react";

class Title extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            title: this.props.title
        }
    }
    render() {
        return (
            <>
            {this.state.title && (
                <h1 className="display-4">{this.state.title}</h1>

            )}
            </>
            
        );
    }
}
export default Title;