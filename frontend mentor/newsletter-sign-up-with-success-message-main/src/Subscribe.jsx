import {useState} from 'react'
import './App.css'
import checked from '../assets/images/icon-list.svg'
import fon from '../assets/images/illustration-sign-up-desktop.svg'

function Subscribe({setSuccess}) {
    const [email, setEmail] = useState('')
    //email validation
    const [error, setError] = useState(false)
    const [valid, setValid] = useState(false)

    const handleChange = (e) => {
        setEmail(e.target.value)
        setError(false)
        if (validateEmail(e.target.value)) {
            setValid(true)
        } else {
            setValid(false)
            info()
        }
    }
    const info = () =>{
        if (valid){
            document.getElementById('email').style.border = "1px solid #CC9491"
            document.getElementById('email').style.background = "#FFE8E6"
        }else{
            document.getElementById('email').style.border = "1px solid #C8C8C8"
            document.getElementById('email').style.background = "#F4F4F4"
        }
    }


    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            handleSubmit()
        }
    }
    const validateEmail = (email) => {
        if (email === '') {
            setError(true)
        }
        const re = /\S+@\S+\.\S+/
        //it will return true or false
        return re.test(email)
    }

    const handleSubmit = () => {
        if (!validateEmail(email)) {
            setValid(false)
        } else {
            setSuccess(true)
            localStorage.setItem('email', email)
            setValid(true)
        }
    }


    return (

        <div className="wrapper">
            <div className="text">
                <h1>Stay Updated!</h1>
                <p>Join 60,000+ product managers receiving monthly updates on:</p>  <br/>
                <ul style={{marginBottom: "10px"}}>
                    <li><img src={checked} alt=""/>Product discovery and building what matters</li>
                    <li><img src={checked} alt=""/>Measuring to ensure updates are success</li>
                    <li><img src={checked} alt=""/>And much more!</li>
                </ul>
                <div className="input">
                    <div className="info">
                        <p>Email address.</p>
                        {error && <p className="error" style={{color: "red", padding: 0, margin: 0}}>Email cannot be
                            empty</p>}
                        {!valid ? <p className="error" style={{color: "red", padding: 0, margin: 0}}>Please provide a
                                valid</p>
                            //nothing
                            : <p style={{color: "green", padding: 0, margin: 0}}>Well done!</p>
                        }
                    </div>


                    <input
                        id={"email"}
                        type="text"
                        placeholder="email@company.com"
                        value={email}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                    />


                    <button
                        className={"button"}
                        onClick={handleSubmit}
                    >
                        Subscribe
                    </button>

                </div>

            </div>
            <div className="image">
                <img src={fon} alt=""/>

            </div>
        </div>


    )
}

export default Subscribe
