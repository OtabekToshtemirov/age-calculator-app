import { useState } from 'react'
import './App.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

function App() {
    const dateOfBirth = {
        year: 0,
        month: 0,
        day: 0
    }

    const age = {
        //added comments here
        years: 0,
        months: 0,
        days: 0
    }

    const calculateAge = (dateOfBirth) => {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1;
        const currentDay = currentDate.getDate();
        // Calculate age
        let years = currentYear - dateOfBirth.year;
        let months = currentMonth - dateOfBirth.month;
        let days = currentDay - dateOfBirth.day;

        // If the current day is less than the day of birth, subtract 1 from the month

        if (days<0){
            months--;
            const daysInPrevMonth = new Date(currentDay, currentMonth - 1, 0).getDate()
            days = daysInPrevMonth + days;
        }

        // If the current month is less than the month of birth, subtract 1 from the year
        if (months<0){
            years--;
            months = 12 + months;
        }

        return {
            years,
            months,
            days
        }
        
    }


    const daysInMonth = (month, year) => {
        return new Date(year, month, 0).getDate();
    }

    const [day, setDay] = useState("--")
    const [month, setMonth] = useState("--")
    const [year, setYear] = useState("--")
    const [dayFieldError, setDayFieldError] = useState("");
    const [monthFieldError, setMonthFieldError] = useState("");
    const [yearFieldError, setYearFieldError] = useState("");
    const [userAge, setUserAge] = useState({
        years: "--",
        months: "--",
        days: "--",
    });

    const handleDayChange = (e) => {
       setDay(e.target.value)
    }

    const handleMonthChange = (e) => {
        setMonth(e.target.value)
    }

    const handleYearChange = (e) => {
        setYear(e.target.value)
    }

    const validateInput = (e) => {
        let isValid = true;

        if (day ===""){
            setDayFieldError("Please enter a valid day");
            isValid = false;
        } else if(day>daysInMonth(month, year)){
            setDayFieldError("Please enter a valid day");
            isValid = false;
        } else {
            setDayFieldError("");
        }


        if (month ===""){
            setMonthFieldError("Please enter a valid month");
            isValid = false;
        }
        else if(month>12 || month<1){
            setMonthFieldError("Please enter a valid month");
            isValid = false;
        } else {
            setMonthFieldError("");
        }

        const currentYear = new Date().getFullYear();
        if (year ===""){
            setYearFieldError("Please enter a valid year");
            isValid = false;
        }
        else if(year>currentYear){
            setYearFieldError("Please enter a valid year");
            isValid = false;
        }
        else {
            setYearFieldError("");
        }

        return isValid;
    }

    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateInput(e)){
            dateOfBirth.year = year;
            dateOfBirth.month = month;
            dateOfBirth.day = day;
            setUserAge(calculateAge(dateOfBirth));
        }
        setDay("");
        setMonth("");
        setYear("");
    }


  return (
    <div className="App">
        <form onSubmit={handleSubmit} className={"row"}>
             <div className="col-4">
                 <label htmlFor="day">DAY</label>
                 <input type="number" id="day" name="day" value={day} onChange={handleDayChange} />
                 <p style={{color:"red",fontSize:13,marginLeft:10}} className="error">{dayFieldError}</p>
             </div>

             <div className="col-4">
                 <label htmlFor="month">MONTH</label>
                 <input type="number" id="month" name="month" value={month} onChange={handleMonthChange} />
                 <p style={{color:"red",fontSize:13,marginLeft:10}} className="error">{monthFieldError}</p>
             </div>
            
             <div className="col-4">
                 <label htmlFor="year">YEAR</label>
                 <input type="number" id="year" name="year" value={year} onChange={handleYearChange} />
                 <p style={{color:"red",fontSize:13,marginLeft:10}} className="error">{yearFieldError}</p>
                 <button type="submit">
                        <FontAwesomeIcon icon={faArrowRight} />
                 </button>
             </div>

        </form>
        <hr/>
        <div className="output">
            <h1 className={"result"}><span>{userAge.years}</span> years</h1>
            <h1 className={"result"}><span>{userAge.months}</span> months</h1>
            <h1 className={"result"}><span>{userAge.days}</span> days</h1>
        </div>
    </div>
  );
}

export default App
