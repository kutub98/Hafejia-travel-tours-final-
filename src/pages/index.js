// import HomePage from "@/Home/HomePage"
// import Rootlayout from "@/Layout/Rootlayout"
// import ImageDisplay from "@/UI/Advertise"

// const Home = () => {
//   return (
//     <div className="">
//       <title>Home || Hafejia Travel Tours</title>
//       <HomePage></HomePage>
//     </div>
//   )
// }

// export default Home

// Home.getLayout = function getLayout(page) {
//   return <Rootlayout>{page}</Rootlayout>
// }

import HomePage from '@/Home/HomePage';
import Rootlayout from '@/Layout/Rootlayout';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
const Home = () => {
  return (
    <div className="">
      <title>Home || Hafejia Travel Tours</title>
      <HomePage></HomePage>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      // The serverSideTranslations function is responsible for loading the
      // necessary translation files for the current locale.
      ...(await serverSideTranslations(locale, ['common', 'homepage'])),
    },
  };
}

Home.getLayout = function getLayout(page) {
  return <Rootlayout>{page}</Rootlayout>;
};

export default Home;
