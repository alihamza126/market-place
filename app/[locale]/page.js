import Categories from "@/components/categories/Categories";
import CatLists from "@/components/CatLists/CatLists";
import Faqs from "@/components/faqs/Faqs";
import { Featured } from "@/components/featured/Featured";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import NewsLetter from "@/components/newsLetter/NewsLetter";
// import { useTranslations } from "next-intl";


const page = async ({ params }) => {

  // const t = useTranslations("name")
  // console.log(params)

  const { locale } = await params;


  return (
    <div className="bg-background">
      <Header locale={locale} />
      <Featured locale={locale} />
      {/* -------user-development-------- */}
      <Categories locale={locale} />
      <CatLists locale={locale} />
      {/* <NewsLetter /> */}


      {/* <h2>
          {t("title")}
          {t("placeholder")}
        </h2> */}
        <Faqs/>
      {/* <Footer/> */}
    </div>
  )
}

export default page
