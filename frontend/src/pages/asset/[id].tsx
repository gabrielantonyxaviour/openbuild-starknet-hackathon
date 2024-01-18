import Asset from "@/components/Asset";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";

export default function AssetPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      {id && (
        <Asset
          address={(id as string).split("-")[1]}
          tokenId={(id as string).split("-")[0]}
        />
      )}
    </Layout>
  );
}
