import type { Selection } from "@nextui-org/react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import BreadCrumbs from "./breadcrumbs";
import { IoAdd, IoAddCircle, IoArrowUpCircle } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { Form, useLocation } from "@remix-run/react";

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

export function ManifestInput({
  keyOption,
  option,
  valueOrObject,
  chips,
  setChips,
}: any) {
  const location = useLocation();
  const [value, setValue] = useState<Selection>(new Set([valueOrObject]));
  const [value1, setValue1] = useState("");
  // const [value2, setValue2] = useState("");

  useEffect(() => {
    setChips([]);
  }, [setChips, value]);

  const handleClose = (chipToRemove: string) => {
    setChips(chips.filter((chip: string) => chip !== chipToRemove));
    if (chips.length === 1) {
      setChips([]);
    }
  };

  const handleInputKeyDown = (e: {
    key: string;
    preventDefault: () => void;
  }) => {
    const newChip = value1.trim();
    if (e.key === "Enter") {
      e.preventDefault();
      if (
        newChip !== "" &&
        !chips.includes(newChip) &&
        Array.from(value).includes("value")
      ) {
        setChips([...chips, newChip]);
        setValue1("");
      }
    } else if (e.key === "Backspace" && value1 === "") {
      const lastChip = chips[chips.length - 1];
      handleClose(lastChip);
    }
  };

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex flex-row items-center'>
        <Input
          size='lg'
          defaultValue={keyOption}
          name='keyOption'
          aria-label='Key Input'
          radius='none'
          className='rounded-s-sm'
          classNames={{ base: "w-72", inputWrapper: "rounded-l-lg" }}
          variant='faded'
          placeholder='key 1'
          type='text'
        />{" "}
        <div className='flex flex-row items-start justify-center'>
          <Input
            placeholder='Set option...'
            startContent={
              <div className={`flex flex-row max-w-96 py-2 overflow-x-scroll`}>
                <Input
                  className='hidden'
                  name='chipsKeys'
                  value={JSON.stringify(chips)}
                />
                {chips.map((chip: any) => {
                  return (
                    <Chip
                      key={chip}
                      color={"default"}
                      variant='faded'
                      onClose={() => handleClose(chip)}
                    >
                      {chip}
                    </Chip>
                  );
                })}
              </div>
            }
            value={value1}
            onValueChange={setValue1}
            onKeyDown={handleInputKeyDown}
            defaultValue={option}
            name='manifestOption'
            aria-label='Text Input Manifest Option'
            radius='none'
            size='lg'
            className='flex flex-col'
            classNames={{
              base: "w-96",
              input: "overflow-x-scroll",
            }}
            variant='faded'
            type='text'
            endContent={
              <div>
                {Array.from(value).includes("value") ? (
                  <IoAddCircle
                    // onClick={onOpen}
                    className='w-6 h-6 cursor-pointer'
                  />
                ) : (
                  <IoArrowUpCircle
                    // onClick={onOpen}
                    className='w-6 h-6 cursor-pointer'
                  />
                )}
              </div>
            }
          />{" "}
        </div>
        <Select
          size='lg'
          name='valueOrObject'
          aria-label='Text Input Manifest Option'
          classNames={{ base: "w-72", trigger: "rounded-r-lg" }}
          radius='none'
          className='max-w-xs'
          selectedKeys={value}
          onSelectionChange={setValue}
          defaultSelectedKeys={valueOrObject}
          variant='faded'
        >
          <SelectItem key={"value"}>Value</SelectItem>
          <SelectItem key={"object"}>Object</SelectItem>
        </Select>
      </div>
    </div>
  );
}
