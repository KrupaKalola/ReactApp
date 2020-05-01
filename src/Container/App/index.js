import React, { Component, useState } from 'react'
import User from '../User'
import Nav from '../Navbar'
// export default class App extends Component {
//     state={
//         loggedIn:false
//     }
//     clickLogin=()=>{
//         this.setState({loggedIn:true})

//     }
//     clickLogout=()=>{
//         this.setState({loggedIn:false})

//     }

//     render() {
//         const loggedIn = this.state.loggedIn
//         if(loggedIn){
//             return <Nav submitForm={this.clickLogout}/>
//         }
//         else{
//             return <User submitForm={this.clickLogin}/>
//         }
//     }
// }

function App() {
    const [loggedIn, setLoggedIn] = useState(localStorage.getItem('loggedIn'));
    const clickLogin = () => {
        localStorage.setItem('loggedIn', 'true')
        setLoggedIn('true')
    }
    const clickLogout = () => {
        localStorage.setItem('loggedIn', 'false')
        setLoggedIn('false')

    }
    if (loggedIn =='true') {
        return <Nav submitForm={clickLogout} />
    }
    else {
        return <User submitForm={clickLogin} />
    }
}

export default App;