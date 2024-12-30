// import Banner from "~/components/banner";
// import NavigationBar from "~/components/navbar";
import type { MetaFunction } from "@remix-run/node";
import BreadCrumbs from "~/components/breadcrumbs";
import Footer from "~/components/footer";
import Manifests from "~/components/manifests";

export const meta: MetaFunction = () => {
  return [
    { title: "Deep COVER" },
    { name: "description", content: "Welcome to DeepC!" },
  ];
};

export default function Index() {
  return (
    <div className='flex h-screen w-screen flex-col items-center gap-2'>
      {/* <Banner />   */}
      {/* <NavigationBar /> */}
      <div className='flex w-full flex-col items-start'>
        <BreadCrumbs />
      </div>
      <div className='w-2/3 h-full flex items-center'>
        <Manifests />
      </div>
      <Footer />
    </div>
  );
}
