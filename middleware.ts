import createMiddleware from "next-intl/middleware";

export default createMiddleware({
   locales: ["en", "hi", "ko"],
   defaultLocale: "en",
});

export const config = {
   matcher: ["/", "/(en|hi|ko)/:path*"],
};
