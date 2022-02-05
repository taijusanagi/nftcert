import type { AppProps } from "next/app";

import { AppWrapper } from "../components/utils/AppWapper";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
};
export default MyApp;