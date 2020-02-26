import React, { useContext, useEffect, useState } from 'react';
import { useHttp } from "../hooks/http.hook";
import { Check } from "../components/Check";
import NewHooksCheck from "../components/NewHooksCheck";
import { useMessage } from "../hooks/message.hook";
import { AuthContext } from "../context/AuthContext";

export const AuthPage = () => {
  const auth = useContext(AuthContext)
  const message = useMessage();
  const { loading, error, request, clearError } = useHttp();
  const [form, setForm] = useState({
    email: '', password: ''
  })

  useEffect(() => {
    message(error)
    clearError();
  }, [error])

  useEffect(() => {
    window.M.updateTextFields()
  }, [])

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const registerHandler = async () => {
    try {
      const data =  await request('/api/auth/register', 'POST', {...form});
      console.log('data',data);
    }catch (e) {

    }
  }

  const loginHandler = async () => {
    try {
      const data =  await request('/api/auth/login', 'POST', {...form});
      message(data.message);
      auth.login(data.token, data.userId);
      console.log('data',data);
    }catch (e) {
    }
  }

  return(
    <div className="row">
     <div className="col s6 offset-s3">
       <h1>Сократи ссылку</h1>
       <div className="card blue darken-1">
         <div className="card-content white-text">
           <span className="card-title">Авторизация</span>
           <h1>{error }</h1>
           {/*<Check />*/}
           {/*<NewHooksCheck />*/}
           <div>

             <div className="input-field">
               <input
                 placeholder="Введите email"
                 id="email"
                 type="text"
                 className="yellow-input"
                 name="email"
                 onChange={changeHandler}
               />
                 <label htmlFor="email">Email</label>
             </div>


             <div className="input-field">
               <input
                 placeholder="Введите пароль"
                 id="password"
                 type="password"
                 className="yellow-input"
                 name="password"
                 onChange={changeHandler}
               />
               <label htmlFor="email">Пароль</label>
             </div>

           </div>
         </div>
         <div className="card-action">
           <button
             onClick={loginHandler}
             disabled={loading}
             className="btn yellow darken-4"
             style={{marginRight: 10}}>
             Войти
           </button>
           <button
             className="btn grey lighten-1 black-text"
             onClick={registerHandler}
             disabled={loading}
           >
             Регистрация
           </button>
         </div>
       </div>
     </div>
    </div>
  )
}
