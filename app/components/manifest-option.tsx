import type { Selection } from "@nextui-org/react";
import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  useDisclosure,
  useDraggable,
} from "@nextui-org/react";
import BreadCrumbs from "./breadcrumbs";
import { IoAdd, IoAddCircle, IoArrowUpCircle } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { Form } from "@remix-run/react";
import ChipInput from "./chip-input";

export default function ManifestOption({
  keyOption,
  option,
  valueOrObject,
}: any) {
  const [value, setValue] = useState<Selection>(new Set([valueOrObject]));
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [chips, setChips] = useState<string[]>([]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const targetRef = useRef(null);
  const { moveProps } = useDraggable({ targetRef, isDisabled: !isOpen });

  useEffect(() => {
    console.log(
      `ModalValue: ##### ${value1} ---------------------- InputValue: #####: ${value2}`
    );
  }, [value1, value2]);

  const handleClose = (chipToRemove: string) => {
    setChips(chips.filter((chip) => chip !== chipToRemove));
    if (chips.length === 1) {
      setChips([]);
    }
  };

  const handleInputKeyDown = (e: {
    key: string;
    preventDefault: () => void;
  }) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const newChip = value1.trim();
      if (newChip !== "" && !chips.includes(newChip)) {
        setChips([...chips, newChip]);
        setValue1("");
      }
    } else if (e.key === "Backspace" && value1 === "") {
      const lastChip = chips[chips.length - 1];
      handleClose(lastChip);
    }
  };

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
              {/* <Form action='/add-test'>
                <Modal
                  ref={targetRef}
                  isOpen={isOpen}
                  onOpenChange={onOpenChange}
                >
                  <ModalContent>
                    {(onClose) => (
                      <>
                        <ModalHeader
                          {...moveProps}
                          className='flex flex-col gap-1'
                        >
                          Manifest Option Name
                        </ModalHeader>
                        <ModalBody>
                          <Input
                            value={value1}
                            onValueChange={setValue1}
                            onKeyDown={handleInputKeyDown}
                            name='name'
                            radius='sm'
                            classNames={{ base: "w-72", label: "font-bold" }}
                            label='Name'
                            labelPlacement='outside'
                            placeholder='Enter your name...'
                            variant='faded'
                            type='text'
                          />
                        </ModalBody>
                        <ModalFooter>
                          <Button
                            color='danger'
                            variant='light'
                            onPress={onClose}
                          >
                            Close
                          </Button>
                          <Button
                            type='submit'
                            color='primary'
                            onPress={onClose}
                          >
                            Save
                          </Button>
                        </ModalFooter>
                      </>
                    )}
                  </ModalContent>
                </Modal>
              </Form> */}
              <div className='flex flex-col items-start justify-center'>
                {chips.map((chip) => (
                  <Chip
                    key={chip}
                    color={"default"}
                    variant='faded'
                    onClose={() => handleClose(chip)}
                  >
                    {chip}
                  </Chip>
                ))}
                <Input
                  value={value1}
                  onValueChange={setValue1}
                  onKeyDown={handleInputKeyDown}
                  defaultValue={option}
                  name='manifestOption'
                  aria-label='Text Input Manifest Option'
                  radius='none'
                  className='flex flex-col'
                  classNames={{ base: "w-72" }}
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
