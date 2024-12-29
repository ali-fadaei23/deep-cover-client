import { Button, Link } from "@nextui-org/react";
import { IoClose } from "react-icons/io5";

export default function Banner() {
  return (
    <div className='flex w-full items-center gap-x-3 border-b-1 border-divider bg-background/[0.15] px-6 py-2 backdrop-blur-xl sm:px-3.5 sm:before:flex-1'>
      <p className='text-small text-foreground'>
        <Link className='text-inherit' href='#'>
          The first month of 2025 Release is here: new version of Deep Cover. 👋
        </Link>
      </p>
      <div className='flex flex-1 justify-end'>
        <Button isIconOnly className='-m-1' size='sm' variant='light'>
          <span className='sr-only'>Close Banner</span>
          <IoClose className='text-default-600 w-4 h-4' width={20} />
        </Button>
      </div>
    </div>
  );
}
