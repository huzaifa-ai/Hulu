import Image from 'next/image';
import HeaderItem from './HeaderItem';
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/24/solid';

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto  ">
      <div className="flex flex-grow max-w-2xl justify-evenly ">
        <HeaderItem title="Home" Icon={HomeIcon} />
        <HeaderItem title="Badge" Icon={UserIcon} />
        {/* <HeaderItem title="Collection" Icon={CollectionIcon} />
        <HeaderItem title="Lightning" Icon={LightningBoltIcon} />
        <HeaderItem title="Search" Icon={SearchIcon} />
        <HeaderItem title="User" Icon={UserIcon} /> */}
      </div>
      <div>
        <Image
          className="object-contain"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg"
          width={150}
          height={100}
        />
      </div>
    </header>
  );
}

export default Header;
