import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Header from '../../components/Header'
import MainHead from '../../components/MainHead'


export default function List(){
    return(
        <>
        <MainHead tituloPestana="Menú Principal"/>
        <div className={styles.container}>

                        
                <Header/>

                <center>
                <form className={styles.buscarForm}>
                <input className={styles.barraBusqueda} placeholder="Nombre, empresa, correo, etc."></input>
                <button className={styles.btnBuscar}><font face="Work Sans">BUSCAR</font></button>
                </form>
                </center>

                <div className={styles.cont}>

                <div className={styles.tablaCont}>

                        <div className={styles.headTabla}>
                        Nombre(s) | Paterno | Materno | Empressa | Email | Teléfono | Cel
                        </div>
                        
                        <div className={styles.clienteC}>                
                                <div className={styles.datoCliente}>
                                Juan Martín<b> | </b>
                                Nápoles<b> | </b>
                                Munguía<b> | </b> 
                                OCCEND<b> | </b>
                                correo@occend.com.mx<b> | </b> 
                                1234567890<b> | </b> 
                                0987654321
                                </div>
                        </div>                   

                </div>

                </div>
                </div>
        </>
        
    )
}