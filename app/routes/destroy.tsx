import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { deleteTest, getTests } from "~/data";

export const action = async ({ params, request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const test = Object.fromEntries(formData);
  const id = Number(test.deletedTest);
  await deleteTest(id);

  return redirect("/");
};
