import { useState } from 'react';
import './Bmi.css';
import Dumbbell from '../../assets/dumbell.png'
import About from './About';

export default function Bmi(){
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [message, setMessage] = useState('');
  const [bmi, setBMI] = useState('');

  function calculateBMI() {
    const h = height / 100;
    const bmi = weight / (h * h);

    if (bmi < 16) {
      setMessage('Severe Thinness. ')
      setBMI('Your BMI is ' + bmi.toFixed(2));
    } else

    if (bmi >= 16 && bmi < 17) {
      setMessage('Moderate Thinness. ')
      setBMI('Your BMI is ' + bmi.toFixed(2));
    } else
    
    if (bmi >= 17 && bmi < 18.5) {
      setMessage('Mild Thinness. ')
      setBMI('Your BMI is ' + bmi.toFixed(2));
    } else

    if (bmi >= 18.5 && bmi < 25) {
      setMessage('Healthy weight. ')
      setBMI('Your BMI is ' + bmi.toFixed(2));
    } else
    
    if (bmi >= 25 && bmi < 30) {
      setMessage('Overweight. ')
      setBMI('Your BMI is ' + bmi.toFixed(2));
    } else
    
    if (bmi >= 30 && bmi < 35) {
      setMessage('Obese Class I. ')
      setBMI('Your BMI is ' + bmi.toFixed(2));
    } else

    if (bmi >= 35 && bmi < 40) {
      setMessage('Obese Class II. ')
      setBMI('Your BMI is ' + bmi.toFixed(2));
    } else

    if (bmi >= 40) {
      setMessage('Obese Class III. ')
      setBMI('Your BMI is ' + bmi.toFixed(2));
    }
  }

  return(
    <main>
    <div className="bmi-calculator">
      <div className="bmi-calculator__db">
      <img className="bmi-calculator__image" src="https://www.drjyotisingh.com/wp-content/uploads/2021/09/bck2.png" alt="dumb-bell" />
      </div>

     
      <div className="bmi-calculator__from">
      <h1 className="bmi-calculator__title">BMI Calculator</h1>
    <span className="bmi-calculator__description">
      Let's calculate your Body Mass Index. <br /> Type the values below
    </span>
    
    <div className="bmi-calculator__input-area">
      <input
        className="bmi-calculator__input bmi-calculator__input--weight"
        value={weight}
        type="text"
        placeholder="Weight (in kg)"
        onChange={(e) => setWeight(e.target.value)}
      />
  
      <input
        className="bmi-calculator__input bmi-calculator__input--height"
        value={height}
        type="text"
        placeholder="Height (in cm)"
        onChange={(e) => setHeight(e.target.value)}
      />
      <button className="bmi-calculator__button" onClick={calculateBMI}>
        Calculate
      </button>
    </div>
    <h2 className="bmi-calculator__result">{message} {bmi}</h2>
      </div>
    


  </div>
  <About/>
  </main>
  
  )
}