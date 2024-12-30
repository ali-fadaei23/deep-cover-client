import type { Selection } from "@nextui-org/react";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useState } from "react";
import ManifestOption from "~/components/manifest-option";
import { IoStopwatch } from "react-icons/io5";

export const meta: MetaFunction = () => {
  return [
    { title: "Deep COVER | New User" },
    { name: "description", content: "Welcome to New User Page" },
  ];
};

export default function AddUser() {
  const [value, setValue] = useState<Selection>(new Set(["http"]));
  const [value2, setValue2] = useState<Selection>(new Set(["query"]));
  const [value3, setValue3] = useState<Selection>(new Set(["manifest"]));
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
      <div className='w-2/5 flex flex-row items-center justify-between my-2'>
        <p className='font-bold'>Title Template</p>
        <Input
          radius='sm'
          classNames={{ base: "w-72" }}
          placeholder='Enter your title template...'
          variant='faded'
          type='text'
        />
      </div>
      <ManifestOption />
      <div className='w-2/5 flex flex-row items-center justify-between my-1'>
        <p className='font-bold'>Version</p>
        <Input
          defaultValue='1'
          radius='sm'
          classNames={{ base: "w-32" }}
          variant='faded'
          type='text'
        />
      </div>
      <div className='w-2/5 flex flex-row items-center justify-between my-1'>
        <p className='font-bold'>Agent</p>
        <Select
          classNames={{ base: "w-32" }}
          radius='sm'
          className='max-w-xs'
          selectedKeys={value}
          onSelectionChange={setValue}
          defaultSelectedKeys={"value"}
          variant='faded'
        >
          <SelectItem key={"http"}>Http</SelectItem>
        </Select>
      </div>
      <div className='w-2/5 flex flex-row items-center justify-between my-1'>
        <p className='font-bold'>Version</p>
        <Input
          placeholder='Enter your url...'
          radius='sm'
          classNames={{ base: "w-52" }}
          variant='faded'
          type='text'
        />
      </div>
      <div className='w-2/5 flex flex-row items-center justify-between my-1'>
        <p className='font-bold'>Headers</p>
        <p>___________________________</p>
      </div>
      <div className='w-2/5 flex flex-row items-center justify-between my-1'>
        <p className='font-bold'>Debounce</p>
        <Input
          classNames={{ base: "w-32" }}
          variant='faded'
          placeholder='to seconds'
          type='text'
          endContent={<IoStopwatch className='w-6 h-6 cursor-pointer' />}
        />{" "}
      </div>
      <div className='w-2/5 flex flex-row items-center justify-between my-1'>
        <p className='font-bold'>Payload</p>
        <Select
          classNames={{ base: "w-32" }}
          radius='sm'
          className='max-w-xs'
          selectedKeys={value2}
          onSelectionChange={setValue2}
          variant='faded'
        >
          <SelectItem key={"query"}>Query</SelectItem>
          <SelectItem key={"body"}>Body</SelectItem>
        </Select>
      </div>{" "}
      <div className='w-2/5 flex flex-row items-center justify-between my-1'>
        <p className='font-bold'>Payload Root</p>
        <Select
          classNames={{ base: "w-52" }}
          radius='sm'
          className='max-w-xs'
          selectedKeys={value3}
          onSelectionChange={setValue3}
          variant='faded'
        >
          <SelectItem key={"manifest"}>From Manifest</SelectItem>
        </Select>
      </div>
    </div>
  );
}
