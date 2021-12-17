import { Form, Formik } from "formik"
import { TextInput } from "../forms"
import * as Yup from 'yup';
import { startLogin } from "../../actions/auth";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";


export const Login = () => {
    const dispatch = useAppDispatch();
    let navigate = useNavigate();
    const { checking, uid } = useAppSelector( state => state.auth);
    // const path: LastPath = localStorage.getItem('lastPath')
    const path = localStorage.getItem('lastPath');

    if(uid !=='') {
        (path) ? navigate(path, {replace: true}) : navigate('/', {replace: true})
    }
   
    return (
        <div className='container-fluid row'>
            <div className='col'>
                <p className="fs-2">Login</p>
                <Formik
                    initialValues={{
                        email:'',
                        password: ''
                    }}
                    onSubmit={({email, password}) => {
                        // console.log(email, password);
                        dispatch(startLogin(email, password));
                    }}
                    validationSchema={Yup.object({
                        email: Yup.string()
                                    .email('El email es inválido.')
                                    .required('Ingrese su e-mail.'),
                        password: Yup.string()
                                    .required('Ingrese la constraseña')
                    })}
                >
                {
                    (formik) => (
                        <Form className="appForm">
                            <TextInput label="E-mail" name="email" placeholder="E-mail" type="email"/>
                            <TextInput label="Contraseña" name="password" placeholder="Contraseña" type="password"  className="input-text"/>
                            <button type="submit" className="input-button">Submit</button>
                        </Form>
                    )
                }
                </Formik>
            </div>

        </div>
    
)}



// $body-bg: #c1bdba;
// $form-bg: #13232f;
// $white: #ffffff;

// $main: #1ab188;
// $main-light: lighten($main, 5%);
// $main-dark: darken($main, 5%);

// $gray-light: #a0b3b0;
// $gray: #ddd;

// $thin: 300;
// $normal: 400;
// $bold: 600;
// $br: 4px;

