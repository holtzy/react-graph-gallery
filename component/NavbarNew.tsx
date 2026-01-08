'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { useContext } from 'react';
import { SheetTrigger } from './UI/sheet';
import { Button, buttonVariants } from './UI/button';
import { CourseLogo } from './CourseLogo';

const Navbar = () => {
  //const { user } = useContext(AuthContext);
  const user = {};

  return (
    <nav
      className="fixed bg-opacity-0 w-full backdrop-blur-sm z-30"
      style={{ height: 100 }}
    >
      <div className="fixed top-2 left-4">
        <SheetTrigger asChild>
          <Menu size={36} className="text-primary cursor-pointer" />
        </SheetTrigger>
      </div>
      <div className="wrapper h-full">
        <div className="flex flex-row justify-between items-center">
          {/* LEFT: course logo */}
          <Link href="/" className="invisible sm:visible no-decoration">
            <CourseLogo />
          </Link>

          {/* RIGHT: Buttons */}
          <div className="flex space-x-2 items-center">
            <SheetTrigger asChild>
              <Button variant={'outline'}>Lessons</Button>
            </SheetTrigger>
            {user?.hasPaid && (
              <a href="https://discord.gg/rJSRamzwmV" target="_blank">
                <img
                  src="/asset/discord-logo.webp"
                  alt="discord logo"
                  width={30}
                  height={30}
                  className="transition ease-in-out duration-300 hover:brightness-150"
                />
              </a>
            )}

            {/* If not logged in, allow to login in the login page */}
            {!user && (
              <Link
                href="/login"
                className={
                  buttonVariants({ variant: 'outline' }) + ' ' + 'no-decoration'
                }
              >
                Login
              </Link>
            )}

            {/* If not paid user, show the enroll button */}
            {/* {!user?.hasPaid && <EnrollButton text={'Enroll'} />} */}

            {/* If logged in, show avatar and its logout button */}
            {/* {user && <AvatarButton />} */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
