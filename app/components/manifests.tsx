import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Button,
  Input,
} from "@nextui-org/react";
import { IoSearch } from "react-icons/io5";
import ManifestItem from "./accordion";
import { Link } from "@remix-run/react";
import { TestMutation } from "~/data";

export default function Manifests(props: {
  tests: {
    id: number;
    name: string;
    titleTemplate: string;
    version: string;
    agent: string;
  }[];
}) {
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
            <Link to={"/add-test"}>
              <Button
                radius='sm'
                className='font-extrabold text-gray-800 dark:text-white'
                color='default'
                variant='shadow'
              >
                Add
              </Button>
            </Link>
          </div>
        </div>
      </CardHeader>
      <Divider className='w-[60vw] m-auto' />
      <CardBody>
        <div className='flex flex-col gap-3'>
          {props.tests.map((test: TestMutation) => {
            return (
              <div key={test.id}>
                <ManifestItem
                  id={test.id}
                  name={test.name}
                  titleTemplate={test.titleTemplate}
                  version={test.version}
                  agent={test.agent}
                />
              </div>
            );
          })}
        </div>
      </CardBody>
    </Card>
  );
}
