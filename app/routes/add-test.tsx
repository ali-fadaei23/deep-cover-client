import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { Form, redirect } from "@remix-run/react";
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
