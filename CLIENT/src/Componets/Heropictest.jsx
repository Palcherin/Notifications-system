import "./Heropic.css"
import React, {Component} from 'react'

export class  Heropictest extends Component {
 render() {
 return (
    <div className="heropictest">
        <div className="heropictest-container" >
           <h1>{this.props.heading}</h1>
           <p>{this.props.text}</p> 
           <div>{this.props.src}</div>
        </div>
    </div>
  )
}
}

