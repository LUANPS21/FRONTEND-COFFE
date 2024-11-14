import styles from './styles.module.scss'
import Image from 'next/image'
import cafeImage from '../../../public/DALL·E 2024-09-26 10.48.56 - A dynamic scene of coffee being poured into a cup. The coffee is mid-air, with droplets splashing as the stream flows from a coffee pot into a simple  1 (1).svg'
import LoginForm from '../form/LoginForm';
import Link from 'next/link';

export default function Page(){
  return(
    <main>
        <div className={styles.container}>
                <Image
                className={styles.img} 
                src={cafeImage}
                alt='Imagem de fundo'
                objectFit='cover' // A imagem cobre toda área de fundo
                quality={100}
                priority={true}
                />
                <h1 className={styles.loginTitle}>LOGIN</h1>

            <div className={styles.content}>
          
                <div className={styles.rightSection}>
                    <h2 className={styles.frase}>Olá!<br/> seja bem vindo de volta. </h2>
                    <LoginForm/>
                </div>
            </div>
            <div className={styles.subText}>
                <p>Não tem uma conta? <Link href= '/cadastro'> Cadastre-se </Link> </p>
                
            </div>
        </div>
    </main>
  );
}