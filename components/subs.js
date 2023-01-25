import React,{Component} from 'react'
class Subs extends Component {
    state = {message:'welcome to our site:'} 
    changeMessage(){
        this.setState({
            message:'Thank you for joining us..'
        })
    }
    render() { 
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Subscribe to our news letter</button>
            </div>
        );
    }
}
 
export default Subs;