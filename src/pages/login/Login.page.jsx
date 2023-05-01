import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { BiShow, BiHide } from 'react-icons/bi';
import { Heading } from '@components/heading';
import { Button } from '@components/buttons';
import { Loading } from '@components/loading';
import { AUTHENTICATION, TOKEN } from '@constants';
import { errorMessage } from '@utils/toastify';
import { PublicRoutes } from '@routes';
import { authService } from './service';
import { findUserWithToken } from '@redux/thunks';
import { useIsLoading } from '@hooks';
import headingImage from '@assets/heading-login.png';
import './login.page.scss';

export const Login = () => {
  const [isLoading] = useIsLoading();

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const [showPwd, setShowPwd] = useState(false);
  const inputName = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    inputName?.current?.focus();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserData({ ...userData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleAuth = async () => {
    if (Object.values(userData).some((e) => e === '')) {
      errorMessage('You need to complete the form.');
    }
    try {
      const isToken = await authService(AUTHENTICATION, userData);
      if (isToken instanceof Error) throw isToken;
      localStorage.setItem(TOKEN, isToken.ACCESS_TOKEN);
      await dispatch(findUserWithToken(isToken.ACCESS_TOKEN));
      navigate(PublicRoutes.HOME);
    } catch (error) {
      localStorage.removeItem(TOKEN);
      navigate(PublicRoutes.login);
      errorMessage(error.response?.data || error);
    }
    setUserData({
      email: '',
      password: '',
    });
    setShowPwd(false);
  };

  const handleShowPwd = () => {
    setShowPwd(!showPwd);
  };
  const { password } = userData;

  if (isLoading) return <Loading />;
  return (
    <section className="login__container">
      <Heading title="Login" image={headingImage} />
      <section className="login__main">
        <h2 className="login__title">Login</h2>
        <form className="form__container" autoComplete="off">
          <div className="user__container input__container">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              ref={inputName}
              placeholder="Email"
              name="email"
              id="email"
              minLength="3"
              pattern="^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,4}"
              required
              className="user__input input-box"
              onChange={handleChange}
              value={userData.email}
            />
          </div>

          <div className="password__container input__container ">
            <label htmlFor="password">Password</label>
            <div className="pwd__container">
              <input
                type={showPwd ? 'text' : 'password'}
                placeholder="Password"
                name="password"
                id="password"
                minLength="3"
                required
                pattern="/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/"
                className="password__input input-box"
                onChange={handleChange}
                value={password}
              />
              <span className="hide-show" onClick={handleShowPwd}>
                {showPwd ? <BiShow /> : <BiHide />}
              </span>
            </div>
          </div>

          <div className="bottom__section">
            <div className="remember__container">
              <label htmlFor="done">Remember me</label>
              <input id="done" name="rememberMe" type="checkbox" className="remember__button" />
            </div>
            <div className="forgot__container">
              <p>Forgot password ?</p>
            </div>
          </div>

          <div className="account__container-register">
            <p>Don't have an account?</p>
            <div className="link__container">
              <Link to="/home/register">
                <p>Register now</p>
              </Link>
            </div>
          </div>

          <Button variant="solid" color="info" className="login__button" onClick={handleAuth}>
            Login
          </Button>
        </form>
      </section>
    </section>
  );
};
