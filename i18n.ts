import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

const locales = ["en", "hi", "ko"];

export default getRequestConfig(async ({ requestLocale }) => {
   let locale = await requestLocale;
   
   if (!locales.includes(locale as any)) notFound();

   return {
      messages: (await import(`./lang/${locale}.json`)).default,
   };
});
