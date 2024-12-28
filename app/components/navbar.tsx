import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Avatar,
  Button,
} from "@nextui-org/react";
import { IoFileTray } from "react-icons/io5";
import ThemeSwitch from "./theme-switch";

export const AcmeLogo = () => {
  return (
    <svg fill='none' height='64' width='64' viewBox='0 0 32 32'>
      <path
        clipRule='evenodd'
        d='M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z'
        fill='currentColor'
        fillRule='evenodd'
      />
    </svg>
  );
};

export default function NavigationBar() {
  return (
    <Navbar isBordered maxWidth='full' shouldHideOnScroll>
      <NavbarBrand>
        <AcmeLogo />
        <p className='font-bold text-inherit'>Deep Cover</p>
      </NavbarBrand>
      {/* <NavbarContent className='hidden sm:flex gap-4' justify='center'></NavbarContent> */}
      <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className='hidden lg:flex'>
          <div className='w-8 h-8 flex items-center justify-center rounded-lg bg-default-100 hover:bg-default-200'>
            <IoFileTray />
          </div>
        </NavbarItem>

        <NavbarItem>
          <Avatar
            isBordered
            color='default'
            src='https://i.pravatar.cc/150?u=a04258114e29026302d'
          />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
