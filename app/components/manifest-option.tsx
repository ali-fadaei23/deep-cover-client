import type { Selection } from "@nextui-org/react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import BreadCrumbs from "./breadcrumbs";
import { IoAdd, IoAddCircle, IoArrowUpCircle } from "react-icons/io5";
import { useState } from "react";

export default function ManifestOption() {
  const [value, setValue] = useState<Selection>(new Set(["value"]));

  return (
    <div className='w-2/5 flex flex-col items-center justify-between'>
      <p className='w-full font-extrabold'>Manifests</p>
      <Card radius='sm' className='max-w-full w-full my-3'>
        <CardHeader className='flex gap-3'>
          <div className='flex w-full items-center justify-between'>
            <div className='flex flex-row gap-2'>
              <BreadCrumbs />
            </div>
          </div>
        </CardHeader>
        <Divider className='w-[39vw] m-auto' />
        <CardBody>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-row items-center'>
              <Input
                radius='none'
                className='rounded-s-sm'
                classNames={{ base: "w-72", inputWrapper: "rounded-l-lg" }}
                variant='faded'
                placeholder='key 1'
                type='text'
              />{" "}
              <Input
                radius='none'
                classNames={{ base: "w-72" }}
                variant='faded'
                type='text'
                endContent={
                  <div>
                    {Array.from(value).includes("value") ? (
                      <IoAddCircle className='w-6 h-6 cursor-pointer' />
                    ) : (
                      <IoArrowUpCircle className='w-6 h-6 cursor-pointer' />
                    )}
                  </div>
                }
              />{" "}
              <Select
                classNames={{ base: "w-72", trigger: "rounded-r-lg" }}
                radius='none'
                className='max-w-xs'
                selectedKeys={value}
                onSelectionChange={setValue}
                defaultSelectedKeys={"value"}
                variant='faded'
              >
                <SelectItem key={"value"}>Value</SelectItem>
                <SelectItem key={"object"}>Object</SelectItem>
              </Select>
            </div>
            {/* <div className='flex flex-row items-center'>
              <Input
                radius='none'
                className='rounded-s-sm'
                classNames={{ base: "w-72", inputWrapper: "rounded-l-lg" }}
                variant='faded'
                placeholder='key 2'
                type='text'
              />{" "}
              <Input
                radius='none'
                classNames={{ base: "w-72" }}
                variant='faded'
                placeholder='Recarsive'
                type='text'
              />{" "}
              <Select
                aria-label='value or object'
                classNames={{ base: "w-72", trigger: "rounded-r-lg" }}
                radius='none'
                className='max-w-xs'
                selectedKeys={value}
                onSelectionChange={setValue}
                defaultSelectedKeys={value}
                variant='faded'
              >
                <SelectItem key={"value"}>Value</SelectItem>
                <SelectItem key={"object"}>Object</SelectItem>
              </Select>
            </div> */}
          </div>
        </CardBody>
        <CardFooter>
          <div className='w-full flex items-center justify-end'>
            <Button
              isIconOnly
              radius='full'
              className='font-extrabold text-gray-800'
              color='warning'
              variant='faded'
            >
              <IoAdd />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
