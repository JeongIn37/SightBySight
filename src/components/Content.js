import React, {Component} from "react";

class Content extends Component{
    render(){
        return(
            <article>
                <h2>내부 내용</h2>
                {this.props.desc}
            </article>
        )
    }
}

export default Content;