function HeaderItem({ title, Icon }) {
  return (
    <div className="group flex ease-in-out duration-400 flex-col items-center w-12 sm:w-20 hover:text-white hover:animate-bounce cursor-pointer">
      <Icon className="h-8 mb-1" />
      <h1 className="tracking-widest opacity-0 group-hover:opacity-100">
        {title}
      </h1>
    </div>
  );
}

export default HeaderItem;
