import Header from '../Header/Header';
import axios from 'axios';
import {useState, useEffect} from 'react';

const Landing = props => {
    const [email, setEmail] = useState(''),
          [password, setPassword] = useState(''),
          [verPassword, setVerPassword] = useState(''),
          [ownerView, setOwnerView] = useState(false),
          [registerView, setRegisterView] = useState(false);

const register = () => {
    if(ownerView) {
        if(password && password === verPassword) {
            axios.post('/auth/registerowner', {email, password})
            .then(res => {
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
    } else {
        if(password && pasword === verPassword) {
            axios.post('/auth/registeruser', {email, password})
            .then(res => {
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
}

const login = () => {
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
    } else {
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
}


    return (
        <div>
            <Header />
            <section className='form-container'>

            </section>
        </div>
    )
}

export default Landing;