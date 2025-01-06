import type { Selection } from "@nextui-org/react";
import { IoStopwatch, IoAdd } from "react-icons/io5";
import {
  Button,
  Input,
  Listbox,
  ListboxItem,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { Form, redirect, useLoaderData, useNavigate } from "@remix-run/react";
import { ListboxWrapper } from "~/components/list-box-wrapper";
import ManifestOption from "~/components/manifest-option";
import { getTest, updateTest } from "~/data";
import { useMemo, useState } from "react";

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  const url = request.url;
  const urlItems = url.split("/");
  const id = Number(urlItems[urlItems.length - 1]);
  const test = await getTest(id);
  if (!test) {
    throw new Response("Not Found", { status: 404 });
  }
  return Response.json({ test });
};

export const action = async ({ params, request }: ActionFunctionArgs) => {
  const url = request.url;
  const urlItems = url.split("/");
  const id = Number(urlItems[urlItems.length - 1]);
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateTest(id, updates);

  return redirect("/");
};

export default function EditTest() {
  const { test } = useLoaderData<typeof loader>();

  const navigate = useNavigate();
  const [value, setValue] = useState<Selection>(new Set([test.agent]));
  const [value2, setValue2] = useState<Selection>(new Set([test.payload]));
  const [value3, setValue3] = useState<Selection>(new Set([test.payloadRoot]));
  const [selectedKeys, setSelectedKeys] = useState<Selection>(
    new Set([test.headers])
  );
  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", "),
    [selectedKeys]
  );

  return (
    <Form
      key={test.id}
      action={`/edit/${test.id}`}
      id='test-form'
      method='post'
      className='flex flex-col items-center justify-center my-32'
    >
      <div className='flex h-screen w-screen flex-col items-center justify-center gap-2'>
        <div className='w-2/5 flex flex-row items-end justify-between gap-2'>
          <Input
            name='name'
            defaultValue={test.name}
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
          keyOption={test.keyOption}
          option={test.manifestOption}
          valueOrObject={test.valueOrObject}
        />
        <div className='w-2/5 flex flex-row items-center justify-between my-1'>
          <p className='font-bold'>Version</p>
          <Input
            defaultValue={test.version}
            aria-label='Version'
            name='version'
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
              name='headers'
              value={selectedValue}
              defaultValue={test.headers}
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
