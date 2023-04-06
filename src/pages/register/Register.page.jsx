import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { SelecCountry } from './components/SelectCountry.register';
import { SelectBlood } from './components/SelecBlood.register';
import { Heading } from '@components/heading';
import { Button } from '@components/buttons/Button.components';
import { _Modal } from '@components/modal';
import { TermsAndCoditions } from '@components/termsAndConditions';
import headingImage from '@assets/heading-login.png';
import './register.page.scss';

export const Register = () => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    gender: '',
    coutry: '',
    password: '',
    repeatPassword: '',
    termsAndConditions: false,
  });

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    setData({ ...data, [name]: type === 'checkbox' ? checked : value });
  };
  console.log(data);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (data.password === data.repeatPassword) {
      if (data.termsAndConditions) {
        //to-do: backend POST
        console.log(data);
      } else {
        alert('You must agree to terms and conditions');
      }
    } else {
      alert('Passwords must match');
    }
  };

  const { firstName, lastName, username, email, password, repeatPassword, termsAndConditions } =
    data;

  return (
    <section className="register__container">
      <Heading title="Register" image={headingImage} />

      <section className="main__register">
        <h2 className="register__title">Register</h2>

        <form className="form__register-container" onSubmit={handleSubmit}>
          <div className="name__container input__container">
            <label htmlFor="firstName">Name</label>
            <input
              id="firstName"
              name="firstName"
              placeholder="Enter your name"
              type="text"
              required
              className="name__input input-box"
              value={firstName}
              onChange={(event) => handleChange(event)}
            />
          </div>
          <div className="name__container input__container">
            <label htmlFor="lastName">Last name</label>
            <input
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
              type="text"
              required
              className="lastName__input input-box"
              value={lastName}
              onChange={(event) => handleChange(event)}
            />
          </div>
          <div className="username__container input__container">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              placeholder="Username"
              type="text"
              minLength="3"
              pattern="[A-Za-z\s]{3,}"
              required
              className="unsername__input input-box"
              value={username}
              onChange={(event) => handleChange(event)}
            />
          </div>

          <div className="email__container input__container">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              placeholder="Enter your mail"
              type="text"
              required
              className="email__input input-box"
              value={email}
              onChange={(event) => handleChange(event)}
            />
          </div>

          <div className="gender__container input__container">
            <label htmlFor="gender">Select your gender:</label>
            <select
              id="gender"
              name="gneder"
              type="select"
              required
              className="email__input input-box"
              onChange={(event) => handleChange(event)}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="non-binary">Non binary</option>
            </select>
          </div>

          <div className="country__container input__container">
            <label htmlFor="country">Selec your country:</label>
            <SelecCountry handleChange={handleChange} />
          </div>

          <div className="blood__container input__container">
            <label htmlFor="blood_type">Selec your blood type:</label>
            <SelectBlood handleChange={handleChange} />
          </div>

          <div className="password__container input__container">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="password__input input-box"
              value={password}
              onChange={(event) => handleChange(event)}
            />
          </div>

          <div className="repeatPassword__container input__container">
            <label htmlFor="repeatPassword">Repeat your password</label>
            <input
              id="repeatPassword"
              name="repeatPassword"
              type="password"
              required
              className="Repeatassword__input input-box"
              value={repeatPassword}
              onChange={(event) => handleChange(event)}
            />
          </div>

          <div className="terms__container">
            <label htmlFor="terms" className="terms__label">
              I agree with the{' '}
              <div>
                <_Modal
                  dispatcher="Terms and Conditions"
                  className="terms__modal"
                  content={<TermsAndCoditions />}
                />
              </div>
            </label>
            <input
              id="terms"
              name="termsAndConditions"
              type="checkbox"
              required
              checked={termsAndConditions}
              onChange={(event) => handleChange(event)}
            />
          </div>

          <Button variant="solid" color="info" className="register__buton" type="submit">
            Register now
            <span className="arrow-button">
              <BsArrowRight size={18} />
            </span>
          </Button>

          <div className="toLogin__container">
            <p>Already have an account?</p>
            <div className="toLogin__link">
              <Link to="/home/login">
                <p>Login</p>
              </Link>
            </div>
          </div>
        </form>
      </section>
    </section>
  );
};
