import Image from "next/image";
import { styled } from "@/stitches.config";
import HeaderNav from "@/src/app/modules/HeaderNav";
import Banner from "@/src/app/modules/Banner";
import Seeding from "@/src/app/modules/Seeding";
import Choose from "@/src/app/modules/Choose";
import Service from "@/src/app/modules/Service";
import Touch from "@/src/app/modules/Touchpoint";
import Future from "@/src/app/modules/Future";
import Package from "@/src/app/modules/Package";
import Footer from "@/src/app/modules/Footer";
export default function Home() {
  return (
    <main>
      <HeaderNav />
      <Banner />
      <Seeding />
      <Choose />
      <Service />
      <Touch />
      <Future />
      <Package />
      <Footer />
    </main>
  );
}
