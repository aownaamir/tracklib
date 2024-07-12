import Link from "next/link";
import Image from "next/image";
import React from "react";

const navIcons = [
  {
    src: "/assets/icons/search.svg",
    alt: "search",
  },
  {
    src: "/assets/icons/black-heart.svg",
    alt: "search",
  },
  {
    src: "/assets/icons/user.svg",
    alt: "search",
  },
];

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1">
          <Image
<<<<<<< HEAD
            src="/assets/icons/logo.svg"
            width={27}
            height={27}
=======
            src="/assets/icons/logo.png"
            width={40}
            height={40}
>>>>>>> 5335367 (Your descriptive commit message)
            alt="logo"
            className="rounded-full"
          />
<<<<<<< HEAD
          <p className="nav-logo">
            Price<span className="text-primary">Wise</span>
=======
          <p
            className="nav-logo"
            style={{ fontSize: "3rem", padding: "0px", margin: "0px" }}
          >
            Track<span className="text-green-500">Lib</span>
>>>>>>> 5335367 (Your descriptive commit message)
          </p>
        </Link>
        <div className="flex items-center gap-5">
          {navIcons.map((icon) => (
            <Image
              key={`${Math.random()}`}
              src={icon.src}
              alt={icon.alt}
              width={28}
              height={28}
              className="object-contain"
            />
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
