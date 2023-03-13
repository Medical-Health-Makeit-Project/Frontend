import { Heading } from '@components/heading';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import headingImage from '@assets/heading-login.png';
import { BsArrowRight } from 'react-icons/bs';
import { Button } from '@components/buttons/Button.components';
import '@pages/register/register.page.scss';

export const Register = () => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
    termsAndConditions: false,
  });

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    setData({ ...data, [name]: type === 'checkbox' ? checked : value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (data.password === data.repeatPassword) {
      if (data.termsAndConditions) {
        console.log(data);
      } else {
        alert('You must agree to terms and conditions');
      }
    } else {
      alert('Passwords must match');
    }
  };
  //console.log(data);
  const {
    firstName,
    lastName,
    username,
    email,
    password,
    repeatPassword,
    termsAndConditions,
  } = data;

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
              I agree with the <p>Terms & Conditions</p>
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

          <Button
            variant="solid"
            color="info"
            className="register__buton"
            type="submit"
          >
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
