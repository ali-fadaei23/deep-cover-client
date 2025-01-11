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
import { IoStopwatch, IoAdd, IoTrash } from "react-icons/io5";
import { ListboxWrapper } from "~/components/list-box-wrapper";
import { Form, redirect, useNavigate } from "@remix-run/react";
import { createTest } from "~/data";
import TestForm from "~/components/test-form";

export const meta: MetaFunction = () => {
  return [
    { title: "Deep COVER | New User" },
    { name: "description", content: "Welcome to New User Page" },
  ];
};

export const action = async ({ params, request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  console.log(updates);

  await createTest(updates);
  return redirect("/");
};

export default function AddTest() {
  return (
    <Form
      method='post'
      action='/add-test'
      className='flex flex-col items-center justify-center my-32'
    >
      <TestForm
        test={{
          name: "",
          titleTemplate: "",
          keyOption: "",
          chipsKeys: "[]",
          manifestOption: "",
          valueOrObject: "value",
          version: "1",
          agent: "http",
          url: "",
          selectedHeaders: "headers-1",
          headersList: '["headers-1"]',
          debounce: "",
          payload: "query",
          payloadRoot: "manifest",
        }}
      />
    </Form>
  );
}
