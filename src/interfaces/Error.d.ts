import { WithTranslation } from "next-i18next";

declare namespace ErrorPage {
	export interface Props extends WithTranslation {
		statusCode?: number;
	}

	export interface InitialProps {
		namespacesRequired: string[];
	}
}

export { ErrorPage };
