import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Deep COVER | new" },
    { name: "description", content: "Welcome to new page" },
  ];
};

export default function New() {
  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center gap-2'>
      <p className='font-extrabold text-8xl'>Coming soon....👋😊</p>
    </div>
  );
}
