import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { BiShow, BiHide } from 'react-icons/bi';
import { Heading } from '@components/heading';
import { Button } from '@components/buttons';
import { Loading } from '@components/loading';
import { AUTH, TOKEN } from '@constants';
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
    username: '',
    password: '',
    remberMe: false,
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
      errorMessage('You need fill every field on the form');
    }
    try {
      const isToken = await authService(AUTH, userData);
      if (isToken instanceof Error) throw isToken;
      localStorage.setItem(TOKEN, isToken.ACCESS_TOKEN);
      const isUser = await dispatch(findUserWithToken(isToken.ACCESS_TOKEN));
      if (isUser.payload === 'Unauthorized')
        throw new Error('Something went wrong, contact your nearest dev!');
      navigate(PublicRoutes.HOME);
    } catch (error) {
      localStorage.removeItem(TOKEN);
      navigate(PublicRoutes.login);
      errorMessage(error.message);
    }
    setUserData({
      username: '',
      password: '',
      remberMe: false,
    });
    setShowPwd(false);
  };

  const handleShowPwd = () => {
    setShowPwd(!showPwd);
  };
  const { password, remember } = userData;

  if (isLoading) return <Loading />;
  return (
    <section className="login__container">
      <Heading title="Login" image={headingImage} />
      <section className="login__main">
        <h2 className="login__title">Login</h2>
        <form className="form__container">
          <div className="user__container input__container">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              ref={inputName}
              placeholder="Username"
              name="username"
              id="username"
              minLength="3"
              pattern="[A-Za-z\s]{3,}"
              required
              className="user__input input-box"
              onChange={handleChange}
              value={userData.username}
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
                pattern="^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$"
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
              <input
                id="done"
                name="remberMe"
                type="checkbox"
                className="remember__button"
                onChange={handleChange}
                checked={remember}
              />
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
