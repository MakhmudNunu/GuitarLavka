import Banner from "@/pages/Home/Banner/Banner";
import styles from "./page.module.scss";
import Brends from "@/pages/Home/Brends/Brends";
import Categories from "@/pages/Home/Categories/Categories";
import Populars from "@/pages/Home/Populars/Populars";
import Services from "@/pages/Home/Services/Services";
import InviteToClub from "@/pages/Home/InviteToClub/InviteToClub";

export default function Home() {
  return (
    <>
      <Banner />
      <Brends />
      <Populars />
      <Services />
      <InviteToClub />
    </>
  );
}
