import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Input,
} from "@nextui-org/react";
import BreadCrumbs from "./breadcrumbs";
import { IoAdd } from "react-icons/io5";

export default function ManifestOption() {
  return (
    <div className='w-2/5 flex flex-col items-center justify-between'>
      <p className='w-full font-extrabold'>Manifests</p>
      <Card radius='sm' className='max-w-full w-full'>
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
                placeholder='key 2'
                type='text'
              />{" "}
              <Input
                radius='none'
                classNames={{ base: "w-72", inputWrapper: "rounded-r-lg" }}
                variant='faded'
                placeholder='value'
                type='text'
              />
            </div>
            <div className='flex flex-row items-center'>
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
              <Input
                radius='none'
                classNames={{ base: "w-72", inputWrapper: "rounded-r-lg" }}
                variant='faded'
                placeholder='Object'
                type='text'
              />
            </div>
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
