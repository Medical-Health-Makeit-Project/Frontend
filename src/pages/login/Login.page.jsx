import { useState } from 'react';
import { Heading } from '@components/heading';
import headingImage from '@assets/heading-login.png';
import { Link } from 'react-router-dom';
import { Button } from '@components/buttons/Button.components';
import './login.page.scss';

export const Login = () => {
  const [data, setData] = useState({
    user: '',
    password: '',
    done: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
    setData({
      user: '',
      password: '',
      done: false,
    });
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setData({ ...data, [name]: type === 'checkbox' ? checked : value });
  };

  const { user, password, done } = data;
  return (
    <section className="login__container">
      <Heading title="Login" image={headingImage} />
      <section className="login__main">
        <h2 className="login__title">Login</h2>
        <form className="form__container" onSubmit={handleSubmit}>
          <div className="user__container input__container">
            <label htmlFor="user">Username or email</label>
            <input
              type="text"
              placeholder="Username or email"
              name="user"
              id="user"
              minLength="3"
              pattern="[A-Za-z\s]{3,}"
              required
              className="user__input input-box"
              onChange={(event) => handleChange(event)}
              value={user}
            />
          </div>

          <div className="password__container input__container ">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              minLength="3"
              pattern="^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$"
              required
              className="password__input input-box"
              onChange={(event) => handleChange(event)}
              value={password}
            />
          </div>

          <div className="bottom__section">
            <div className="remember__container">
              <label htmlFor="done">Remember me</label>
              <input
                id="done"
                name="done"
                type="checkbox"
                className="remember__button"
                onChange={(event) => handleChange(event)}
                checked={done}
              />
            </div>
            <div className="forgot__container">
              <p>Forgot password ?</p>
            </div>
          </div>

          <div className="account__container-register">
            <p>Don't have an account?</p>
            <div className="link__container">
              <Link to="/">
                <p>Register now</p>
              </Link>
            </div>
          </div>

          <div>
            <Button
              variant="solid"
              color="info"
              className="login__button"
              type="submit"
            >
              Login
            </Button>
          </div>
        </form>
      </section>
    </section>
  );
};
