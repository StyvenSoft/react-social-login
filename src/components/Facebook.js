import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Facebook extends Component {

    state = {
        isLoggedIn : false,
        userID : '',
        name : '',
        email : '',
        picture : ''
    }

    responseFacebook  = response => {
       // console.log(response);
        this.setState({
            isLoggedIn : true,
            userID : response.userID,
            name : response.name,
            email : response.email,
            picture : response.picture.data.url
        })
    }    
    componentClicked = () => console.log('Clicked');
    

    render() {
        let fbContent;

        if(this.state.isLoggedIn) {
            fbContent = (
                <div style={{
                    width : '400px',
                    margin : 'auto',
                    background: 'rgb(144, 143, 143)',
                    padding : '20px'
                }}>
                    <img src={this.state.picture} alt={this.state.name}/>
                    <h2>Bienvenido {this.state.name}</h2>
                    <p>Email: {this.state.email}</p>
                </div>
            );
        } else {
            fbContent = (<FacebookLogin
                appId="181659849886116"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />)
        } 

        return (
            <div>
                {fbContent}
            </div>
        )
    }
}
