// import React, { Component } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLock,faUser ,faUnlock} from '@fortawesome/free-solid-svg-icons';
// import './User.css'

// export default class User extends Component {
//     state={
//         username: '',
//         password: '',
//         type: "password",
//         icon: faLock,
        
//     }
//     toggleVisibility=()=>{
//         if(this.state.type==="password"){
//             this.setState({type:"text", icon:faUnlock})

//         }else{
//             this.setState({type:"password", icon:faLock})
//         }
//     }
//     handleChange=(e)=>{
//         this.setState({[e.target.name]:e.target.value})
//         console.log(e.target.name)
//     }
//     submit=(e)=>{
       
//         if(this.state.username!=='' && this.state.password!==''){
//             const username = this.state.username
//             console.log(username)
//             localStorage.setItem('username', username)
//             return this.props.submitForm
//         }
//     }
//     render() {
       
//         const center = {
//             textAlign: "center",
//             color: "#fff",
//             fontSize: "25px"
//         }
//         const pos = {
//             position: "relative"
//         }
//         return (
//             <div className="mainBg">
//                 <img src={process.env.PUBLIC_URL + '/nividata_white-1.png'} alt='logo' style={{width:'165px', marginTop:'20px', marginLeft: '40px'}}/>
//                 <div className="formContainer">
//                     <form onSubmit={this.submit(this.props.submitForm)}>
//                         <h3 style={center}>Sign In</h3>
//                         {/* <label className="formLabel">User Id</label><br></br> */}
//                         <div style={pos}>
//                             <span className="icon">
//                             <FontAwesomeIcon icon={faUser} className="icon-user"/>
//                             </span>
//                             <input className="inputField paddingLeft" type="text" name='username' value={this.state.username} placeholder="Username" autoComplete="off" onChange={this.handleChange}></input>
//                         </div>
//                         <br />
//                         {/* <label className="formLabel">Password</label><br></br> */}
//                        <div style={pos}>
//                        <span className="icon1">
//                                 <FontAwesomeIcon icon={this.state.icon} className="icon-user" onClick={this.toggleVisibility}/>
//                             </span>
//                         <input className="inputField" type={this.state.type} name='password' value={this.state.password} placeholder="Password" onChange={this.handleChange}></input>
//                        </div>
//                         <br />
//                         <input className="btn" type="submit" value="Login"></input>
//                     </form>
//                     <p className="register">New User?<a href="./user">  Register</a></p>
//                 </div>
//             </div>
//         )
//     }
// }




import React,{useState} from 'react'
import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUser, faUnlock } from '@fortawesome/free-solid-svg-icons';
import './User.css'

function User(props) {

    const [pwdType, setPwdType]= useState('password')
    const [pwdIcon , setPwdIcon]= useState(faLock)

    // ////////////////////Inline css////////////////////////////////////
    const center = {
        textAlign: "center",
        color: "#fff",
        fontSize: "25px"
    }
    const pos = {
        position: "relative"
    }

    //////////////////////Toggle Password visibility///////////////
    const toggleVisibility = () => {
        if (pwdType === "password") {
            setPwdType('text')
            setPwdIcon(faUnlock)

        } else {
            setPwdType('password')
            setPwdIcon(faLock)
        }
    }


    const { register, handleSubmit, errors } = useForm();

    /////////////////////////Submit Method/////////////////
    const onSubmit = (data) => {
        debugger
        const username = data.username;
        console.log(username)
        localStorage.setItem('username', username)
        const submitForm = props.submitForm;
        submitForm()
    }
    return (
        <div className="mainBg">
        <img src={process.env.PUBLIC_URL + '/nividata_white-1.png'} alt='logo' style={{ width: '165px', marginTop: '20px', marginLeft: '40px' }} />
        <div className="formContainer">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3 style={center}>Sign In</h3>
                <div className='inputContainer' style={pos}>
                    <span className="icon">
                        <FontAwesomeIcon icon={faUser} className="icon-user" />
                    </span>
                    <input className="inputField paddingLeft" type="text" name='username' placeholder="Username" autoComplete="off" ref={register({ required: true, minLength: 2 })}></input>
                    {errors.username && errors.username.type === 'minLength' && <p>Username length must be atleast 2 characters</p>}

                </div>
                <br />
                <div className='inputContainer' style={pos}>
                    <span className="icon">
                        <FontAwesomeIcon icon={pwdIcon} className="icon-user" onClick={toggleVisibility} />
                    </span>
                    <input className="inputField paddingLeft" type={pwdType} name='password' placeholder="Password" ref={register({ required: true , minLength: 6})}></input>
                    {errors.password && errors.password.type=== 'minLength' && <p>Password length must be atleast 6 characters</p>}

                </div>
                <br />
                <input className="btn" type="submit" value="Login"></input>
            </form>
            <p className="register">New User?<a href="./user">  Register</a></p>
        </div>
    </div>
    )
}

export default User;