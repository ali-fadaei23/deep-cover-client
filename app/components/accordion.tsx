import { Accordion, AccordionItem } from "@nextui-org/react";
import { IoPlay, IoTrash, IoPencil } from "react-icons/io5";

export default function ManifestItem() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion variant='splitted'>
      <AccordionItem
        classNames={{
          startContent: "w-[95%]",
        }}
        startContent={
          <div className='w-full flex items-center justify-between flex-row gap-2'>
            <p>User 1</p>

            <div className='flex items-center justify-end flex-row gap-2 -mr-5'>
              <div className='w-8 h-8 flex items-center justify-center rounded-lg bg-default-100 hover:bg-default-200'>
                <IoPencil />
              </div>
              <div className='w-8 h-8 flex items-center justify-center rounded-lg bg-default-100 hover:bg-default-200'>
                <IoTrash />
              </div>
              <div className='w-8 h-8 flex items-center justify-center rounded-lg bg-default-100 hover:bg-default-200'>
                <IoPlay />
              </div>
            </div>
          </div>
        }
        key='1'
        aria-label='User 1'
      >
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
}
