import React from 'react';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';


// AuthorizationScreen component
const AuthorizationScreen = (props) => {
  const {
    logIn,
    name,
    onChange,
    password
  } = props;

  return <section className="login">
    <div className="login__logo">
      <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" />
    </div>
    <h2 className="login__title">Необходима авторизация</h2>
    <p className="login__text">Представтесь!</p>
    <form className="login__form" action="">
      <p className="login__field">
        <label className="login__label" htmlFor="name">Логин</label>
        <input
          className="login__input"
          id="name"
          name="name"
          onChange={onChange}
          type="text"
          value={name}
        />
      </p>
      <p className="login__field">
        <label className="login__label" htmlFor="password">Пароль</label>
        <input
          className="login__input"
          id="password"
          name="password"
          onChange={onChange}
          type="text"
          value={password}
        />
        <span className="login__error">Неверный пароль</span>
      </p>
      <button
        className="login__button button"
        onClick={logIn}
        type="submit"
      >
        <Link to="/">Войти</Link>
      </button>
    </form>
  </section>;
};


AuthorizationScreen.propTypes = {
  logIn: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
};

export default AuthorizationScreen;
