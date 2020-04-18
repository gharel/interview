import NextI18Next from "next-i18next";

const languages = ["fr", "en"]; // @TODO add this to remove warning line but see: https://github.com/isaachinman/next-i18next/issues/562

const NextI18NextInstance = new NextI18Next({
	// debug: true,
	defaultNS: "translations",
	localePath: "public/locales",
	defaultLanguage: "fr",
	otherLanguages: ["en"],
	localeSubpaths: {
		en: "en",
	},
});

NextI18NextInstance.i18n.languages = languages; // @TODO add this to remove warning line but see: https://github.com/isaachinman/next-i18next/issues/562

export const {
	appWithTranslation,
	withTranslation,
	useTranslation,
	Link,
	i18n,
} = NextI18NextInstance;

export default NextI18NextInstance;
