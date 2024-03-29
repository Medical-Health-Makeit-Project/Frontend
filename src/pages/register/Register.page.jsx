import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import { BsArrowRight } from 'react-icons/bs';
import { SelectCountry } from './components/SelectCountry.register';
import { SelectBlood } from './components/SelectBlood.register';
import { Heading } from '@components/heading';
import { Button } from '@components/buttons';
import { _Modal } from '@components/modal';
import { Loading } from '@components/loading';
import { registerService } from './service/registerUsers.service';
import { errorMessage } from '@utils/toastify/error.toastify';
import { successMessage } from '@utils/toastify/success.toastify';
import { TermsAndCoditions } from '@components/termsAndConditions';
import { PublicRoutes } from '@routes';
import { REGISTER_USER } from '@constants/';
import headingImage from '@assets/heading-login.png';
import './register.page.scss';

export const Register = () => {
  const [userData, setUserData] = useState({
    name: '',
    lastname: '',
    username: '',
    email: '',
    phone: '',
    gender: '',
    birthdate: Date.now(),
    nationality: '',
    password: '',
    blood_type: '',
    repeatPassword: '',
    termsAndConditions: false,
  });
  const [isLoadingData, setIsLoadingData] = useState(false);
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    setUserData({ ...userData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const hasEmptyField = Object.keys(userData).some(
        (key) => userData.hasOwnProperty(key) && !!userData[key] === ''
      );
      if (hasEmptyField) return errorMessage('You must complete the form!');
      if (userData.password === userData.repeatPassword) {
        if (userData.termsAndConditions) {
          setIsLoadingData(true);
          const { repeatPassword, termsAndConditions, ...remainingProps } = userData;
          await registerService(REGISTER_USER, remainingProps);
          setUserData({
            name: '',
            lastname: '',
            username: '',
            email: '',
            phone: '',
            gender: '',
            birthdate: Date.now(),
            nationality: '',
            password: '',
            blood_type: '',
            repeatPassword: '',
            termsAndConditions: false,
          });
          setIsLoadingData(false);
          navigate(PublicRoutes.LOGIN);
          return successMessage('Your register was succeeded!');
        } else {
          setIsLoadingData(false);
          errorMessage('You must accept the terms and conditions');
        }
      } else {
        setIsLoadingData(false);
        errorMessage('Passwords must match');
      }
    } catch (error) {
      setIsLoadingData(false);
      errorMessage(`${error.response?.data || error.message}: Existing user`);
    }
  };

  const {
    name: firstName,
    lastname: lastName,
    username,
    email,
    phone,
    password,
    repeatPassword,
    termsAndConditions,
  } = userData;

  return (
    <section className="register__container">
      <Heading title="Register" image={headingImage} />

      <section className="main__register">
        <h2 className="register__title">Register</h2>

        <form className="form__register-container" onSubmit={handleSubmit}>
          <div className="name__container input__container">
            <label htmlFor="firstName">Name</label>
            <input
              id="name"
              name="name"
              placeholder="Enter your name"
              type="text"
              className="name__input input-box"
              value={userData.name}
              onChange={(event) => handleChange(event)}
            />
          </div>
          <div className="name__container input__container">
            <label htmlFor="lastName">Last name</label>
            <input
              id="lastname"
              name="lastname"
              placeholder="Enter your last name"
              type="text"
              className="lastName__input input-box"
              value={userData.lastname}
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
              className="unsername__input input-box"
              value={userData.username}
              onChange={(event) => handleChange(event)}
            />
          </div>

          <div className="email__container input__container">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              placeholder="Enter your email"
              type="text"
              className="email__input input-box"
              value={userData.email}
              pattern="^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,4}"
              onChange={(event) => handleChange(event)}
            />
          </div>

          <div className="phone__container input__container">
            <label htmlFor="phone">Phone number</label>
            <input
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              type="number"
              className="phone__input input-box"
              value={userData.phone}
              pattern="/^s*(?:+?(d{1,3}))?[\-. (]*(d{3})[\-. )]*(d{3})[\-. ]*(d{4})(?: *x(d+))?s*$/"
              onChange={(event) => handleChange(event)}
            />
          </div>

          <div className="birthday__container input__container">
            <label htmlFor="bithday">Enter your birthday:</label>
            <DatePicker
              id="birthDate"
              name="birthDate"
              selected={userData.birthdate}
              dateFormat="dd/MM/yyyy"
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              onChange={(date) => {
                setUserData({ ...userData, birthdate: date });
              }}
              required
              className="input-box"
            />
          </div>

          <div className="gender__container input__container">
            <label htmlFor="gender">Select your gender:</label>
            <select
              id="gender"
              name="gender"
              type="select"
              className="email__input input-box"
              onChange={(event) => handleChange(event)}
              value={userData.gender}
            >
              <option value="">Select...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="non-binary">Non binary</option>
            </select>
          </div>

          <div className="country__container input__container">
            <label htmlFor="nationality">Select your country:</label>
            <SelectCountry handleChange={handleChange} />
          </div>

          <div className="blood__container input__container">
            <label htmlFor="blood_type">Select your blood type:</label>
            <SelectBlood handleChange={handleChange} />
          </div>

          <div className="password__container input__container">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              className="password__input input-box"
              pattern="^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$"
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
              className="Repeatassword__input input-box"
              value={repeatPassword}
              onChange={(event) => handleChange(event)}
              pattern="^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$"
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
              checked={termsAndConditions}
              onChange={(event) => handleChange(event)}
            />
          </div>
          <Button
            variant="solid"
            color="info"
            className="register__button"
            type="submit"
            onSubmit={handleSubmit}
          >
            {isLoadingData ? <Loading /> : 'Register now'}
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
