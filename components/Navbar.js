import request from '../utils/request';
import { useRouter } from 'next/router';
function Navbar() {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="flex justify-between whitespace-nowrap text-2xl px-10 sm:px-20 space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide ">
        {Object.entries(request).map(([key, { title, url }]) => {
          return (
            <h2
              key={key}
              className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
              onClick={() => router.push(`/?genre=${key}`)}
            >
              {title}
            </h2>
          );
        })}
        {/* {Object.entries(request).map(([key, { title, url }]) => {
          return <h2>{title}</h2>;
        })} */}
      </div>
      <div className="bg-gradient-to-l from-[#05202A] h-10 w-1/12 absolute top-0 right-0" />
    </nav>
  );
}

export default Navbar;
