import Layout from "@/components/template/Layout";
import styles from '@/styles/Pages.module.css';

export default function Home() {
  return (
    <Layout titulo ="Pagina inicial" subtitulo="Estamos construindo um template Admin!">
      <h2 className={styles.description}>Conteudo!!</h2>
    </Layout>
  );
}