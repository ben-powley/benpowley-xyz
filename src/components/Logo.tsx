const Logo = () => {
  return (
    <a href="/">
      <img
        src="ben-photo.JPG"
        alt="Ben Powley"
        className="rounded-full w-32 h-32"
        loading="lazy"
      />
      <h1 className="text-4xl lg:text-6xl font-bold">
        benpowley<span className="opacity-20">.xyz</span>
      </h1>
      <div className="text-sm lg:text-xl opacity-80 font-bold">
        Full Stack Software Developer.
      </div>
    </a>
  );
};

export default Logo;
