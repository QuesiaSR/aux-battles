import Head from "next/head";
import { navigation } from "@/lib/utils";
import Navbar from "@/components/navbar";

export default function Home() {
  navigation.forEach(v => {
    v.current = false;
  });

  return (
    <>
      <Head>
        <title>Aux Battles</title>
        <link rel="icon" type="image/png" href="auxlogo.png"></link>
      </Head>
      <Navbar />
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <img className="m-auto bounce" src="auxlogo.png" />
        </div>
      </main>
    </>
  );
}
