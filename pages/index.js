import Head from 'next/head'

import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import { useRouter } from 'next/router'
import { schemaIniciarSesion } from '../../schemas/iniciarSesion'
import swal from 'sweetalert'

export default function Home() {

  const Router = useRouter()

const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schemaIniciarSesion)
  })

  const onSubmit = async data => {
    const res = await fetch(`localhost:8080/login/`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        correo: data.correo,
        password: data.password
      })
    })
    const resJSON = await res.json()
    if (res.status !== 200) {
      swal({
        title: 'Error al iniciar sesion.',
        text: resJSON.msg,
        icon: 'error',
        button: 'Ok'
      })
    } else {
      swal({
        title: 'Finalizado.',
        text: resJSON.msg,
        icon: 'success',
        button: 'Ok',
        timer: '3000'
      })
      localStorage.setItem('id', resJSON.id);
      localStorage.setItem('token', resJSON.token)
      Router.push('/cliente/list')
    }
  }


  return (
    <>
    <Head>
    <title>OCCEND | Log In</title>
    <meta name="description" content="Generated by create next app" />
    <link rel="icon" href="/favicon.ico" />
    </Head>
  
      <div className={styles.container}>
          

            <Header/>
          <center>

          <form className={styles.loginForm}>
                
                <font face="Work Sans">
                
                <center><h1>Iniciar Sesión</h1></center>

                <input className={styles.inputLogin} type={'email'} placeholder="Correo"></input><br/>
                <input className={styles.inputLogin} type="password" placeholder="Contraseña"></input><br/>
                <center>
                  <button className={styles.btnLog}>Acceder</button>
                  
                  
                </center>
                </font>
            </form>
          


          </center>
          
        </div>
    
    
    </>

    
  )
}
