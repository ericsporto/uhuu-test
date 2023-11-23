import React from 'react';
import Image from 'next/image';

function Header() {
  return (
    <header className="flex h-14 w-full items-center md:justify-start px-28 bg-theme-secondary">
      <Image
        src="/logo-uhuu.svg"
        alt="uhuu-logo"
        width={184.74}
        height={24}
        priority
      />
    </header>
  );
}

export default Header;
