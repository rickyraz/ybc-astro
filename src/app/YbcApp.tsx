import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { fetchProduct } from "../services/product_detail_service";
import { fetchProductByCategory } from "../services/product_per_category";
import { fetchHeroAll } from "../services/product_hero";
// -----
import HeroSlider from "../components/HeroSlider";
import ProductSlider from "../components/ProductSlider";
// Landing Page Components
import Welcome from "../components/landing_page/Welcome";
import ProductFilter from "../components/landing_page/ProductFilter";
import ArticleHome from "../components/landing_page/ArticleHome";
// Product Detail Components
import ProductSingle from "../components/single_product/Product";
import Feature from "../components/single_product/Feature";
import Specs from "../components/single_product/Specs";
import { Suspense } from "react";

const queryClient = new QueryClient();

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

// --------------------------------------------

const LandingPage = () => {
  const {
    data: heroAll,
    isError: isHeroAllFetchError,
    isPending: isHeroAllFetchPending,
  } = useQuery({
    queryKey: ["hero-all"],
    queryFn: () => fetchHeroAll(),
    staleTime: 600_000_000,
  });

  const heroAllData = heroAll?.data;
  console.log("heroAllData", heroAllData);

  if (isHeroAllFetchPending) {
    return <div>Loading...</div>;
  }

  if (isHeroAllFetchError) {
    return <div>Something error with the site, comeback again</div>;
  }

  return (
    <main>
      {heroAll && heroAll.data && (
        <HeroSlider
          loop_status={true}
          hero_data={heroAllData}
          position_hero={"landing_page"}
        />
      )}
      <ProductSlider
        title={"PRODUK TERLARIS"}
        per_view_desk={4}
        product_spesific_data=""
      />
      <Welcome />
      <ProductFilter />
      <ArticleHome />
    </main>
  );
};

const ProductDetail = ({ slug }) => {
  const {
    data: productData,
    isError: isProductFetchError,
    isPending: isProductFetchPending,
  } = useQuery({
    queryKey: ["product-detail", slug],
    queryFn: () => fetchProduct(slug),
    enabled: !!slug,
    staleTime: 600_000_000,
  });

  const produk = productData?.data;
  const hero = productData?.data.images;
  const features = productData?.data.features;
  const specifications = productData?.data.specifications;
  const categoryId = productData?.data.categoryId;

  if (isProductFetchPending) {
    return <div>Loading...</div>;
  }

  if (isProductFetchError) {
    return <div>Something error with the site, comeback again</div>;
  }

  return (
    <main>
      {hero && produk && features && specifications && (
        <>
          <HeroSlider
            loop_status={false}
            hero_data={hero}
            position_hero={"product_detail"}
          />
          <ProductSingle product_single_data={produk} />
          <Feature feature_data={features} />
          <Specs specifications={specifications} />
        </>
      )}
      {categoryId && (
        <Suspense fallback={<div>Loading related products...</div>}>
          <CategoriesAndProducts
            categoryId={categoryId}
            excludeProductId={produk.id}
          />
        </Suspense>
      )}
    </main>
  );
};

const CategoriesAndProducts = ({ categoryId, excludeProductId }) => {
  const {
    data: productByCategoryData,
    isError: isProductByCategoryFetchError,
    isPending: isProductByCategoryFetchPending,
  } = useSuspenseQuery({
    queryKey: ["product-by-category", categoryId],
    queryFn: () => fetchProductByCategory(categoryId),
    staleTime: 600000000,
  });

  if (isProductByCategoryFetchPending) {
    return <div>Loading related products...</div>;
  }

  if (isProductByCategoryFetchError) {
    return <div>Error loading related products.</div>;
  }

  // Filter products to exclude the one with the given ID
  const filteredProducts = productByCategoryData.data.filter(
    (product) => product.id !== excludeProductId
  );

  return (
    <ProductSlider
      title={"PRODUK TERKAIT"}
      per_view_desk={3}
      product_spesific_data={filteredProducts}
    />
  );
};

export { YbcLanding, YbcProduct };
