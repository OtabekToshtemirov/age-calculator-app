import {useState} from 'react'
import './App.css'
import checked from '../assets/images/icon-list.svg'
import fon from '../assets/images/illustration-sign-up-desktop.svg'
import success from "./Success.jsx";

function Subscribe({setSuccess}) {
    const [email, setEmail] = useState('')
    //email validation
    const [error, setError] = useState(false)

    const handleChange = (e) => {
        setEmail(e.target.value)

    }


    const handleBlur = () => {
        if (!email) {
            setError(true)
        }
    }

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            handleSubmit()
        }
    }

    const handleSubmit = () => {
        if (!email) {
            setError(true)
        } else {
            setSuccess(true)
        }
    }


    return (
        <div className="App">
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
                        {error && <p className="error" style={{color: "red", padding: 0, margin: 0}}>Email cannot be
                            empty</p>}
                        <label htmlFor="">
                            <input
                                type="text"
                                placeholder="email@company.com"
                                value={email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                onKeyDown={handleKeyDown}
                            />
                        </label>

                        <button onClick={handleSubmit} className={'button'}>Subscribe to monthly newsletter</button>

                    </div>

                </div>
                <div className="image">
                    <img src={fon} alt=""/>

                </div>
            </div>

        </div>
    )
}

export default Subscribe
