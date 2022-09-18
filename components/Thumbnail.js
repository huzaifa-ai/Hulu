import React from 'react';
import Image from 'next/image';
import { ThumbUpIcon } from '@heroicons/react/24/solid';

function Thumbnail({ value }) {
  // console.log(value);
  const Base_url = 'https://image.tmdb.org/t/p/original/';
  return (
    <div className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      {console.log(value)}
      <Image
        src={`${Base_url}${value.backdrop_path || value.poster_path}`}
        layout="responsive"
        width={1920}
        height={1000}
      />
      <div className="p-2">
        <p className="truncate max-w-md ">{value.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {value.title}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {value.media_type && `${value.media_type} *`} {value.release_date}
        </p>
      </div>
    </div>
  );
}

export default Thumbnail;
