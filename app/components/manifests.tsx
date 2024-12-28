import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Button,
  Input,
} from "@nextui-org/react";
import { IoSearch } from "react-icons/io5";

export default function Manifests() {
  return (
    <Card className='max-w-full'>
      <CardHeader className='flex gap-3'>
        <div className='flex w-full items-center justify-between'>
          <p className='text-lg font-bold'>Manifests</p>
          <div className='flex flex-row gap-2'>
            <Input
              classNames={{ base: "w-72" }}
              variant='bordered'
              endContent={
                <IoSearch className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />
              }
              type='text'
            />
            <Button
              className='font-bold text-gray-900'
              color='default'
              variant='solid'
            >
              Add
            </Button>
          </div>
        </div>
      </CardHeader>
      <Divider className='h-[1.5px]' />
      <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>

      <CardFooter></CardFooter>
    </Card>
  );
}
