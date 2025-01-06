import type { Selection } from "@nextui-org/react";
import {
  Button,
  Input,
  Select,
  SelectItem,
  Listbox,
  ListboxItem,
} from "@nextui-org/react";
import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { useMemo, useState } from "react";
import ManifestOption from "~/components/manifest-option";
import { IoStopwatch, IoAdd } from "react-icons/io5";
import { ListboxWrapper } from "~/components/list-box-wrapper";
import { Form, redirect, useNavigate } from "@remix-run/react";
import { createTest } from "~/data";

export const meta: MetaFunction = () => {
  return [
    { title: "Deep COVER | New User" },
    { name: "description", content: "Welcome to New User Page" },
  ];
};

export const action = async ({ params, request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  const updates = Object.fromEntries(formData);
  await createTest(updates);
  return redirect("/");
};

export default function AddTest() {
  const navigate = useNavigate();
  const [value, setValue] = useState<Selection>(new Set(["http"]));
  const [value2, setValue2] = useState<Selection>(new Set(["query"]));
  const [value3, setValue3] = useState<Selection>(new Set(["manifest"]));
  const [selectedKeys, setSelectedKeys] = useState<Selection>(
    new Set(["header-1"])
  );
  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", "),
    [selectedKeys]
  );
  return (
    <Form
      method='post'
      action='/add-test'
      className='flex flex-col items-center justify-center my-32'
    >
      <div className='flex h-screen w-screen flex-col items-center justify-center gap-2'>
        <div className='w-2/5 flex flex-row items-end justify-between gap-2'>
          <Input
            name='name'
            radius='sm'
            classNames={{ base: "w-72", label: "font-bold" }}
            label='Name'
            labelPlacement='outside'
            placeholder='Enter your name...'
            variant='faded'
            type='text'
          />
          <div className='flex flex-row items-center gap-2'>
            <Button
              onPress={() => navigate(-1)}
              type='button'
              radius='sm'
              className='font-extrabold bg-default-300 dark:bg-default-500 dark:text-black text-gray-800 '
              color='danger'
              variant='faded'
            >
              Cancel
            </Button>

            <Button
              type='submit'
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
            aria-label='Title Template'
            name='titleTemplate'
            radius='sm'
            classNames={{ base: "w-72" }}
            placeholder='Enter your title template...'
            variant='faded'
            type='text'
          />
        </div>
        <ManifestOption keyOption={""} option={""} valueOrObject={"value"} />
        <div className='w-2/5 flex flex-row items-center justify-between my-1'>
          <p className='font-bold'>Version</p>
          <Input
            aria-label='Version'
            name='version'
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
            aria-label='Select Agent Option'
            name='agent'
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
          <p className='font-bold'>Url</p>
          <Input
            aria-label='Enter Url'
            name='url'
            placeholder='Enter your url...'
            radius='sm'
            classNames={{ base: "w-52" }}
            variant='faded'
            type='text'
          />
        </div>
        <div className='w-2/5 flex flex-row items-center justify-between my-1'>
          <p className='font-bold'>Headers</p>
          <ListboxWrapper>
            <Input
              aria-label='Hidden Input Headers'
              className='hidden'
              name='headers'
              value={selectedValue}
            />
            <Listbox
              disallowEmptySelection
              aria-label='Single Selection Example'
              color='default'
              selectedKeys={selectedKeys}
              selectionMode='single'
              variant='faded'
              onSelectionChange={setSelectedKeys}
            >
              <ListboxItem key='header-1'>Header 1</ListboxItem>
              <ListboxItem key='header-2'>Header 2</ListboxItem>
              <ListboxItem key='header-3'>Header 3</ListboxItem>
              <ListboxItem key='header-4'>Header 4</ListboxItem>
              <ListboxItem key='header-5'>Header 5</ListboxItem>
            </Listbox>
            <div className='w-full flex items-center justify-end border-t-1 mt-2'>
              <Button
                isIconOnly
                radius='full'
                className='font-extrabold mt-1'
                variant='faded'
              >
                <IoAdd />
              </Button>
            </div>
          </ListboxWrapper>
        </div>
        <div className='w-2/5 flex flex-row items-center justify-between my-1'>
          <p className='font-bold'>Debounce</p>
          <Input
            aria-label='Time Debounce Input'
            name='debounce'
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
            aria-label='Select Payload Option'
            name='payload'
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
            aria-label='Select Payload Root Option'
            name='payloadRoot'
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
    </Form>
  );
}
