import Link from "next/link";
import Layout from "../../components/Layout";
import FileExplorer from "../../components/FileExplorer";

const IndexPage = () => (
  <Layout title="Home | LostBox">
    <FileExplorer />
  </Layout>
);

export default IndexPage;
