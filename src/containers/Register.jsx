import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/components/Register.scss';

const Register = () => (
  <section className='register'>
    <section className='register__container'>
      <h2>Regístrate</h2>
      <form className='register__container--form'>
        <input className='input' type='text' placeholder='Nombre' />
        <input className='input' type='text' placeholder='Correo' />
        <input className='input' type='password' placeholder='Contraseña' />
        <Link to="/home">

        <button className='button'> Registrarme </button>
        </Link>
      </form>
      <a href='/'>Iniciar sesión</a>
    </section>
  </section>

);

export default Register;
