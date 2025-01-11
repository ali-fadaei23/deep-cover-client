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
import AddTest from "./add-test";
import TestForm from "~/components/test-form";

export const action = async ({ params, request }: ActionFunctionArgs) => {
  const url = request.url;
  const urlItems = url.split("/");
  const id = Number(urlItems[urlItems.length - 1]);
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateTest(id, updates);

  return redirect("/");
};

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

export default function EditTest() {
  const { test } = useLoaderData<typeof loader>();

  // const navigate = useNavigate();
  // const [chips, setChips] = useState<string[]>([]);
  // const [value, setValue] = useState<Selection>(new Set([test.agent]));
  // const [value2, setValue2] = useState<Selection>(new Set([test.payload]));
  // const [value3, setValue3] = useState<Selection>(new Set([test.payloadRoot]));
  // const [selectedKeys, setSelectedKeys] = useState<Selection>(
  //   new Set([test.headers])
  // );
  // const selectedValue = useMemo(
  //   () => Array.from(selectedKeys).join(", "),
  //   [selectedKeys]
  // );

  // console.log(JSON.parse(test));

  return (
    <Form
      key={test.id}
      action={`/edit/${test.id}`}
      id='test-form'
      method='post'
      className='flex flex-col items-center justify-center my-32'
    >
      <TestForm test={test} />
    </Form>
  );
}
