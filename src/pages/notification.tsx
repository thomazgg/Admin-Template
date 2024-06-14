import Layout from "@/components/template/Layout";
import { useData } from "@/data/hook/useAppData";

export default function Notificacoes() {
  const { changeTheme } = useData();

  return (
    <Layout
        title="Notificações"
        subtitle="Aqui você irá gerenciar suas notificações!"
    >
        <button onClick={changeTheme}>Alternar Tema</button>
    </Layout>
  );
}