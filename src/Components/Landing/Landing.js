import Header from '../Header/Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {setRenterUser, setOwnerUser} from '../../redux/reducer'
import {useState, useEffect} from 'react';

const Landing = props => {
    const [email, setEmail] = useState(''),
          [password, setPassword] = useState(''),
          [verPassword, setVerPassword] = useState(''),
          [ownerView, setOwnerView] = useState(false),
          [registerView, setRegisterView] = useState(false);

const registerRenter = () => {
    if(password && password === verPassword) {
        axios.post('/auth/registeruser', {email, password})
        .then(res => {
            props.setOwnerUser(res.data)
            props.history.push('/profile')
        })
        .catch(err => {
            console.log(err)
            alert('Email already in use, please login')
            setEmail('')
            setPassword('')
            setVerPassword('')
        })
    } else {
        alert('Passwords do not match')
    }
}

const registerOwner = () => {
    if(password && password === verPassword) {
        axios.post('/auth/registerowner', {email, password})
        .then(res => {
            props.setRenterUser(res.data)
            console.log(props.user)
            props.history.push('/profile')
        })
        .catch(err => {
            console.log(err)
            setEmail('')
            setPassword('')
            setVerPassword('')
        })
    } else {
        alert('Passwords do not match')
    }
}  


const loginRenter = () => {
    if(ownerView){
        axios.post('/auth/ownerlogin', {email, password})
        .then(res => {
            props.history.push('/profile')
        })
        .catch(err => {
            console.log(err)
            alert('Email or password incorrect')
            setEmail('')
            setPassword('')
        })
    }
}

const loginOwner = () => {
    axios.post('/auth/userlogin', {email, password})
    .then(res => {
        props.history.push('/profile')
    })
    .catch(err => {
        console.log(err)
        alert('Email or password incorrect')
        setEmail('')
        setPassword('')
    })    
}


    return (
        <div>
            {console.log(props)}
            <Header />
                {!registerView
                ? ( 
                    <div className = 'login'>
                        <input
                            placeholder = 'Email Address'
                            value = {email}
                            type = 'text'
                            onChange = {(e) => setEmail(e.target.value)} />
                        <input
                            placeholder = 'Password'
                            value = {password}
                            type = 'password'
                            onChange = {(e) => setPassword(e.target.value)} />
                        <button onClick = {() => loginRenter()}>Login</button>
                        <p>Need an account? <span onClick = {() => setRegisterView(!registerView)}>REGISTER HERE</span></p>
                    </div>
                ) : (
                    <div>
                        <input
                            placeholder = 'Email Address'
                            type = 'text'
                            value = {email}
                            onChange = {(e) => setEmail(e.target.value)} />
                        <input
                            placeholder = 'Password'
                            value = {password}
                            type = 'password'
                            onChange = {(e) => setPassword(e.target.value)} />
                        <input
                            placeholder = 'Verify Password'
                            value = {verPassword}
                            type = 'password'
                            onChange = {(e) => setVerPassword(e.target.value)} />
                        <button onClick = {() => registerRenter()}>Register</button>
                        <p>Click <span onClick = {() => setRegisterView(!registerView)}>HERE</span> to go back to login</p>
                    </div>
                )}
        </div>
    )
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {setRenterUser, setOwnerUser})(Landing);