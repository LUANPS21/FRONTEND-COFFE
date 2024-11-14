"use client";

import { signIn } from "next-auth/react"
import styles from './styles.module.scss'
export default function loginForm() {
    async function login(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)

        const data = {
         email: formData.get("email"),
         password: formData.get("senha"),
        };

        signIn("Credentials",{
            ...data,
            callbackUrl: "/dashboard",
        })
    }
 return(
    <form onSubmit={login} className={styles.form}>
    <h2 className={styles.messageTitle}> <br/>Faca seu login agora.</h2>

    <input
        className={styles.input}
        name='email'
        type="email"
        placeholder="E-mail"
    />
    <input
        className={styles.input}
        name='Senha'
        type="password"
        placeholder="Senha"
    />
        <button type="submit" className={styles.submitButton}>
                Login
        </button>

    </form>
 );
    





}