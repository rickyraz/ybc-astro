import HeroSlider from "../components/HeroSlider";
import ProductSlider from "../components/ProductSlider";
// Landing Page Components
import Welcome from "../components/landing_page/Welcome";
import ProductFilter from "../components/landing_page/ProductFilter";
import ArticleHome from "../components/landing_page/ArticleHome";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Product Detail Components
import ProductSingle from "../components/single_product/Product";
import Feature from "../components/single_product/Feature";
import Specs from "../components/single_product/Specs";

const queryClient = new QueryClient();

// aku akan mengimportnya ke index.astro = untuk landing page
function YbcLanding() {
  return (
    <QueryClientProvider client={queryClient}>
      <LandingPage />
    </QueryClientProvider>
  );
}

function YbcProduct({ slug }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductDetail slug={slug} />
    </QueryClientProvider>
  );
}

// aku membutuhkan 1 lagi yang akan ditaruh di pages/product/[slug]/index.astro = untuk detail produk

const LandingPage = () => {
  return (
    <main>
      <HeroSlider loop_status={true} />
      <ProductSlider title={"PRODUK TERLARIS"} />
      <Welcome />
      <ProductFilter />
      <ArticleHome />
    </main>
  );
};

const ProductDetail = ({ slug }) => {
  console.log("slug di Product Detail : App", slug);

  return (
    <main>
      <HeroSlider loop_status={false} />
      <ProductSingle />
      <Feature />
      <Specs />
      <ProductSlider title={"PRODUK TERKAIT"} />
    </main>
  );
};

export { YbcLanding, YbcProduct };
