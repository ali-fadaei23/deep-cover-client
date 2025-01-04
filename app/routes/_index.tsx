import { LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
import BreadCrumbs from "~/components/breadcrumbs";
import Manifests from "~/components/manifests";
import { getTests } from "~/data";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Deep COVER" },
    { name: "description", content: "Welcome to DeepC!" },
  ];
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const tests = await getTests();
  if (!tests) {
    throw new Response("Not Found", { status: 404 });
  }

  return Response.json({ tests });
};

export default function Index() {
  const { tests } = useLoaderData<typeof loader>();

  return (
    <div className='flex h-screen w-screen flex-col items-center gap-2'>
      <div className='flex w-full flex-col items-start'>
        <BreadCrumbs />
      </div>
      <div className='w-2/3 h-full flex items-center'>
        <Manifests tests={tests} />
      </div>
    </div>
  );
}
