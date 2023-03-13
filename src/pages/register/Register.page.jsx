import { Heading } from '@components/heading';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import headingImage from '@assets/heading-login.png';
import { BsArrowRight } from 'react-icons/bs';
import { Button } from '@components/buttons/Button.components';
import '@pages/register/register.page.scss';

export const Register = () => {
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    termsAndConditions: false,
  });

  /*const handleChange = (event) =>{
    const {name, type, value, checked} = event.target
    setData{...data,[name] = type === 'checkbox' ? }
}*/

  const { username, email, password, termsAndConditions } = data;
  return (
    <section className="register__container">
      <Heading title="Register" image={headingImage} />

      <section className="main__register">
        <h2 className="register__title">Register</h2>

        <form className="form__register-container">
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
              className="password__input"
              value={password}
              onChange={(event) => handleChange(event)}
            />
          </div>

          <div className="terms__container">
            <label htmlFor="terms" className="terms__label">
              I agree with the <p>Terms & Conditions</p>
            </label>
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              checked={termsAndConditions}
              onChange={(event) => handleChange(event)}
            />
          </div>

          <Button variant="solid" color="info" className="register__buton">
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
