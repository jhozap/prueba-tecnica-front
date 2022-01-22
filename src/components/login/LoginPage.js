import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import loginService from '../../services/loginService';

import './login.css';

const LoginPage = () => {

    const auth = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLogin = async (args) => {

        try {
            const { email, password } = args;

            console.log(email, password);

            const data = await loginService.login(email, password);

            auth.setToken(data.token);
            auth.setUser(data.user);

        } catch (error) {
            console.log()
        }
    }


    return (
        <div className="login">
            <div className="row">
                <div className="col-md-6 login-form-1 login-container">
                    <h3>Ingreso</h3>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="email"
                                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                            />
                        </div>

                        {errors.email?.type === "required" && <div className="alert alert-danger mt-2" role="alert">
                            el correo es obligatorio
                        </div>}

                        {errors.email?.type === "pattern" && <div className="alert alert-danger mt-2" role="alert">
                            el correo no tiene el formto correcto
                        </div>}


                        <div className="form-group mt-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="password"
                                {...register("password", { required: true })}
                            />
                        </div>

                        {errors.password && <div className="alert alert-danger mt-2" role="alert">
                            el password es obligatorio
                        </div>}

                        <div className="form-group mt-3">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Login"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
