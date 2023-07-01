import React, { useEffect } from "react";
import Image from "next/image";
import { Movie } from "@/typings";
import { useState } from "react";
import { baseUrl } from "@/constants/movie";
import { FaPlay } from "react-icons/fa";

interface Props {
  netflixOriginals: Movie[];
}

const Banner = ({ netflixOriginals }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);
  return (
    <>
      <div>
        <div className="absolute top-0 -z-10 left-0 h-[95vh] w-screen">
          <Image
            src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path} `}
            layout="fill"
            alt="netflix banner"
            objectFit="cover"
          />
        </div>
        <div className="absolute top-40">
          <h1 className="relative lg:text-7xl ">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <p className="relative">{movie?.overview}</p>
        </div>

        <div className="absolute inline-flex space-x-4 top-[50vh]">
          <button className="banner_button bg-white text-black ">
            <FaPlay className="" />
            Play
          </button>
          <button className="banner_button bg-gray-400">More info</button>
        </div>
      </div>
    </>
  );
};

export default Banner;
