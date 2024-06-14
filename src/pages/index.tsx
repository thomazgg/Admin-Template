import Layout from "@/components/template/Layout";
import styles from '@/styles/Pages.module.css';

export default function Home() {
  return (
    <Layout
        title="Pagina inicial"
        subtitle="Estamos construindo um template Admin!"
    >
        <h2 className={styles.description}>Conteudo!!</h2>
    </Layout>
  );
}