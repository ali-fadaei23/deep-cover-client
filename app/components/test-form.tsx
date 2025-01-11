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
import { useEffect, useMemo, useState } from "react";
import ManifestOption from "~/components/manifest-option";
import { IoStopwatch, IoAdd, IoTrash } from "react-icons/io5";
import { ListboxWrapper } from "~/components/list-box-wrapper";
import { Form, redirect, useNavigate } from "@remix-run/react";
import { createTest } from "~/data";

// const headersList: HeadersMutaion = [{ title: "headers-1" }];

// export type HeadersMutaion = { title: string }[];

// export type Headers = HeadersMutaion &
//   {
//     id: number;
//     createdAt?: string;
//   }[];

export default function TestForm({ test }: any) {
  const headerItems = JSON.parse(test.headersList);
  // console.log(headerItems + "  222222222222222");

  const navigate = useNavigate();
  const [chips, setChips] = useState<string[]>([]);
  const [value, setValue] = useState<Selection>(new Set(["http"]));
  const [value2, setValue2] = useState<Selection>(new Set(["query"]));
  const [value3, setValue3] = useState<Selection>(new Set(["manifest"]));
  const [headers, setHeaders] = useState<string[]>(headerItems);
  const [selectedKeys, setSelectedKeys] = useState<Selection>(
    new Set([test.selectedHeaders])
  );

  useEffect(() => {
    console.log(headerItems + "  222222222222222");
  }, [headerItems, headers]);

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", "),
    [selectedKeys]
  );

  const handleAddHeaders = () => {
    const id = Math.round(Math.random() * 100);
    const newHeaders = [...headers, `headers-${id}`];
    console.log(headerItems);

    setHeaders(newHeaders);
  };

  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center gap-2'>
      <div className='w-2/5 flex flex-row items-end justify-between gap-2'>
        <Input
          defaultValue={test.name}
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
          defaultValue={test.titleTemplate}
          aria-label='Title Template'
          name='titleTemplate'
          radius='sm'
          classNames={{ base: "w-72" }}
          placeholder='Enter your title template...'
          variant='faded'
          type='text'
        />
      </div>
      <ManifestOption
        chips={chips}
        setChips={setChips}
        keyOption={test.keyOption}
        option={test.manifestOption}
        valueOrObject={test.valueOrObject}
      />
      <div className='w-2/5 flex flex-row items-center justify-between my-1'>
        <p className='font-bold'>Version</p>
        <Input
          aria-label='Version'
          name='version'
          defaultValue={test.version}
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
          defaultValue={test.url}
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
            name='selectedHeaders'
            value={selectedValue}
            defaultValue={test.selectedHeaders}
          />
          <Input
            aria-label='Hidden Input Headers'
            className='hidden'
            name='headersList'
            value={JSON.stringify(headers)}
            defaultValue={test.headersList}
          />
          <Listbox
            disallowEmptySelection
            aria-label='Single Selection Example'
            color='default'
            selectedKeys={selectedKeys}
            selectionMode='single'
            variant='faded'
            onSelectionChange={setSelectedKeys}
            defaultSelectedKeys={test.selectedHeaders}
          >
            {headers.map((header: string) => {
              return (
                <ListboxItem className='capitalize' key={header}>
                  {header}
                </ListboxItem>
              );
            })}
          </Listbox>
          <div className='w-full flex flex-row items-center justify-end border-t-1 mt-2'>
            <Button
              onPress={() => handleAddHeaders()}
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
          defaultValue={test.debounce}
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
          defaultSelectedKeys={test.payload}
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
          defaultSelectedKeys={test.payloadRoot}
          variant='faded'
        >
          <SelectItem key={"manifest"}>From Manifest</SelectItem>
        </Select>
      </div>
    </div>
  );
}
