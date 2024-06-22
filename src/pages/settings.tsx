import Layout from "@/components/template/Layout";
import styles from '@/styles/Pages.module.css';

export default function Settings() {
  return (
    <Layout
        title="Configurações"
        subtitle="Personalize o sistema por aqui!"
    >
        <h2 className={styles.description}>Conteudo!!</h2>
    </Layout>
  );
}