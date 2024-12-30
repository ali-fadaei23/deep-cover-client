import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
  Input,
} from "@nextui-org/react";
import { IoSearch } from "react-icons/io5";
import ManifestItem from "./accordion";

export default function Manifests() {
  return (
    <Card radius='sm' className='max-w-full w-full h-[70vh]'>
      <CardHeader className='flex gap-3'>
        <div className='flex w-full items-center justify-between'>
          <p className='text-3xl font-extrabold'>Manifests</p>
          <div className='flex flex-row gap-2'>
            <Input
              radius='sm'
              classNames={{ base: "w-72" }}
              variant='faded'
              endContent={
                <IoSearch className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />
              }
              type='text'
            />
            <Button
              radius='sm'
              className='font-extrabold text-gray-800 dark:text-white'
              color='default'
              variant='shadow'
            >
              Add
            </Button>
          </div>
        </div>
      </CardHeader>
      <Divider className='w-[60vw] m-auto' />
      <CardBody>
        <div className='flex flex-col gap-3'>
          <ManifestItem />
          <ManifestItem />
          <ManifestItem />
        </div>
      </CardBody>
    </Card>
  );
}
