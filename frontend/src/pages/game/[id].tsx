import Game from "@/components/Game";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";

export default function GamePage() {
  const router = useRouter();
  return (
    <Layout>
      <Game address={router.query.id as string} />
    </Layout>
  );
}
