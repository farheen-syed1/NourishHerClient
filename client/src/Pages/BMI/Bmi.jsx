import { useState, useRef } from 'react';
import './Bmi.css';
import About from './About';

export default function Bmi() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [message, setMessage] = useState('');
  const [bmi, setBMI] = useState('');
  const [showAbout, setShowAbout] = useState(false);
  const [weightError, setWeightError] = useState(false);
  const [heightError, setHeightError] = useState(false);
  const aboutRef = useRef(null);

  function calculateBMI() {
    if (!weight || !height) {
      if (!weight) setWeightError(true);
      if (!height) setHeightError(true);
      return;
    }

    const h = height / 100;
    const bmi = weight / (h * h);

    if (bmi < 16) {
      setMessage('Severe Thinness.');
    } else if (bmi >= 16 && bmi < 17) {
      setMessage('Moderate Thinness.');
    } else if (bmi >= 17 && bmi < 18.5) {
      setMessage('Mild Thinness.');
    } else if (bmi >= 18.5 && bmi < 25) {
      setMessage('Healthy weight.');
    } else if (bmi >= 25 && bmi < 30) {
      setMessage('Overweight.');
    } else if (bmi >= 30 && bmi < 35) {
      setMessage('Obese Class I.');
    } else if (bmi >= 35 && bmi < 40) {
      setMessage('Obese Class II.');
    } else if (bmi >= 40) {
      setMessage('Obese Class III.');
    }

    setBMI('Your BMI is ' + bmi.toFixed(2));
  }

  function handleWeightChange(e) {
    setWeight(e.target.value);
    if (e.target.value) setWeightError(false);
  }

  function handleHeightChange(e) {
    setHeight(e.target.value);
    if (e.target.value) setHeightError(false);
  }

  function handleLearnMore() {
    setShowAbout(true);
    setTimeout(() => {
      aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100); // Wait for the component to render
  }

  return (
    <main>
      <div className="bmi-calculator">
        <div className="bmi-calculator__db">
          <img className="bmi-calculator__image" src="https://www.drjyotisingh.com/wp-content/uploads/2021/09/bck2.png" alt="dumb-bell" />
        </div>

        <div className="bmi-calculator__form">
          <h1 className="bmi-calculator__title">BMI Calculator</h1>
          <span className="bmi-calculator__description">
            Let's calculate your Body Mass Index. <br /> Type the values below
          </span>

          <div className="bmi-calculator__input-area">
            <input
              required
              className="bmi-calculator__input bmi-calculator__input--weight"
              value={weight}
              type="text"
              placeholder="Weight (in kg)"
              onChange={handleWeightChange}
            />
            {weightError && <span className='bmi__error'>Please input your weight!</span>}
            <input
              required
              className="bmi-calculator__input bmi-calculator__input--height"
              value={height}
              type="text"
              placeholder="Height (in cm)"
              onChange={handleHeightChange}
            />
            {heightError && <span className='bmi__error'>Please input your height!</span>}
            <button className="bmi-calculator__button" onClick={calculateBMI}>
              Calculate
            </button>
          </div>
          <h2 className="bmi-calculator__result">{message} {bmi}</h2>
          {message && <button className="bmi-calculator__more" onClick={handleLearnMore}>Learn More</button>}
        </div>
      </div>
      {showAbout && <div ref={aboutRef}><About /></div>}
    </main>
  );
}
