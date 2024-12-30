import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import { Link } from "@remix-run/react";
import { IoPlay, IoTrash, IoPencil, IoEye } from "react-icons/io5";

export default function ManifestItem() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion variant='splitted'>
      <AccordionItem
        className='rounded-md'
        classNames={{
          startContent: "w-[95%]",
          trigger: "cursor-pointer",
        }}
        startContent={
          <div>
            <div className='w-full flex items-center justify-between flex-row gap-2'>
              <p className='font-semibold'>User 1</p>
              <div className='flex items-center justify-end flex-row gap-2 -mr-5'>
                <Button className='min-w-fit flex items-center justify-center rounded-lg bg-default-100 hover:bg-default-200'>
                  <IoPencil className='w-4 h-4' />
                </Button>
                <Button className='min-w-fit flex items-center justify-center rounded-lg bg-default-100 hover:bg-default-200'>
                  <IoTrash className='w-4 h-4' />
                </Button>
                <Link to={`/new`}>
                  <Button className='min-w-fit flex items-center justify-center rounded-lg bg-default-100 hover:bg-default-200'>
                    <IoPlay className='w-4 h-4' />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        }
        key='1'
        aria-label='User 1'
      >
        <div>
          <div className='flex flex-row items-center justify-between'>
            <p className='font-bold'>Title Template</p>
            <div className='flex flex-row gap-5'>
              <span className='font-semibold'>---</span>
              <div className='flex w-8 h-8 items-center justify-center rounded-lg bg-default-100 hover:bg-default-200'>
                <IoEye className='w-6 h-6' />
              </div>
            </div>
          </div>
          <div className='flex flex-row items-center justify-between'>
            <p className='font-bold'>Version</p>
            <div className='flex flex-row'>
              <span className='font-semibold'>1</span>
            </div>
          </div>
          <div className='flex flex-row items-center justify-between'>
            <p className='font-bold'>Agent</p>
            <div className='flex flex-row'>
              <span className='font-semibold'>Http</span>
            </div>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  );
}
