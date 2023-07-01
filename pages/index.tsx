import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import requests from "@/utils/requests";
import Banner from "@/components/Banner";
import { Movie } from "@/typings";

const inter = Inter({ subsets: ["latin"] });
interface Props {
  netflixOriginals: Movie[];
  trendingNow: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  horrorMovies: Movie[];
  romanceMovies: Movie[];
  documentaries: Movie[];
}
export default function Home({
  netflixOriginals,
  actionMovies,
  comedyMovies,
  documentaries,
  horrorMovies,
  romanceMovies,
  topRated,
  trendingNow,
}: Props) {
  return (
    <>
      <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-slate-300 ">
        <Header />
        <main>
          {/* Banner */}
          <Banner netflixOriginals={netflixOriginals} />
          <section>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
            <h1>row</h1>
          </section>
          <h1>row</h1>
        </main>
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ]);

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    },
  };
};
