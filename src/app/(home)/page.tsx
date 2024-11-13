import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/700.css";
import AOSProvider from "@/components/aos";
import Banner from "@/components/banner";
import Products from "@/components/products";
import Testimonials from "@/components/testimonial";
import CompanyOverview from "@/components/companyoverview";

export default function Home() {
  return (
    <AOSProvider>
      <Banner/>
      <CompanyOverview/>
      <Products/>
      <Testimonials/>
    </AOSProvider>
  );
}
