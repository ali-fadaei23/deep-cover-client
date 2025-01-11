import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { Form, redirect, useLoaderData } from "@remix-run/react";
import { getTest, updateTest } from "~/data";
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
