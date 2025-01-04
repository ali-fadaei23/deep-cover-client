import { ActionFunctionArgs, redirect } from "@remix-run/node";
import { deleteTest } from "~/data";

export const action = async ({ params, request }: ActionFunctionArgs) => {
  const url = request.url;
  const urlItems = url.split("/");
  const id = Number(urlItems[urlItems.length - 1]);

  await deleteTest(id);

  return redirect("/");
};
