import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import BreadCrumbs from "./breadcrumbs";
import { IoAdd } from "react-icons/io5";
import { ManifestInput } from "./manifest-input";

export default function ManifestOption({
  keyOption,
  option,
  valueOrObject,
  chips,
  setChips,
}: any) {
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
          <ManifestInput
            chips={chips}
            setChips={setChips}
            keyOption={keyOption}
            option={option}
            valueOrObject={valueOrObject}
          />
        </CardBody>
        <CardFooter>
          <div className='w-full flex items-center justify-end'>
            <Button
              isIconOnly
              radius='full'
              className='font-extrabold'
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
