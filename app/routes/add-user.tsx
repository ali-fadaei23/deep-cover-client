import { Button, Input } from "@nextui-org/react";
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import ManifestOption from "~/components/manifest-option";

export const meta: MetaFunction = () => {
  return [
    { title: "Deep COVER | New User" },
    { name: "description", content: "Welcome to New User Page" },
  ];
};

export default function AddUser() {
  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center gap-2'>
      <div className='w-2/5 flex flex-row items-end justify-between gap-2'>
        <Input
          radius='sm'
          classNames={{ base: "w-72", label: "font-bold" }}
          label='Name'
          labelPlacement='outside'
          placeholder='Enter your name...'
          variant='faded'
          // endContent={
          //   <IoSearch className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />
          // }
          type='text'
        />
        <div className='flex flex-row items-center gap-2'>
          <Button
            radius='sm'
            className='font-extrabold bg-default-300 dark:bg-default-500 dark:text-black text-gray-800 '
            color='danger'
            variant='faded'
          >
            Cancel
          </Button>

          <Button
            radius='sm'
            className='font-extrabold bg-green-300 dark:bg-green-500 dark:text-black text-gray-800'
            color='warning'
            variant='faded'
          >
            Save
          </Button>
        </div>
      </div>
      <div className='w-2/5 flex flex-row items-center justify-between'>
        <p className='font-bold'>Title Template</p>
        <Input
          radius='sm'
          classNames={{ base: "w-72" }}
          variant='faded'
          type='text'
        />
      </div>
      <ManifestOption />
    </div>
  );
}
