import Layout from "@/components/template/Layout";
import styles from '@/styles/Pages.module.css';

export default function Profile() {
  return (
    <Layout
        title="Perfil do Usuário"
        subtitle="Administre as suas inromações de usuário!"
    >
        <h2 className={styles.description}>Perfil do Usuário</h2>
    </Layout>
  );
}