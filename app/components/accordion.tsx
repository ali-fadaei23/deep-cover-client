import { Accordion, AccordionItem, Button, Form } from "@nextui-org/react";
import { ActionFunctionArgs } from "@remix-run/node";
import { Link, redirect } from "@remix-run/react";
import { IoPlay, IoTrash, IoPencil, IoEye } from "react-icons/io5";
import { deleteTest } from "~/data";

export default function ManifestItem({
  id,
  name,
  titleTemplate,
  version,
  agent,
  onDelete,
}: any) {
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
              <div className='flex flex-row items-center gap-1'>
                <span className='font-semibold'>{id.toString()}</span>
                <p className='font-semibold'>{name}</p>
              </div>
              <div className='flex items-center justify-end flex-row gap-2 -mr-5'>
                <Button className='min-w-fit flex items-center justify-center rounded-lg bg-default-100 hover:bg-default-200'>
                  <IoPencil className='w-4 h-4' />
                </Button>

                <Form
                  action='destroy'
                  method='post'
                  onSubmit={(event) => {
                    const response = confirm(
                      "Please confirm you want to delete this record."
                    );
                    if (!response) {
                      event.preventDefault();
                    }
                  }}
                >
                  <Button
                    value={id}
                    name='deletedTest'
                    type='submit'
                    className='min-w-fit flex items-center justify-center rounded-lg bg-default-100 hover:bg-default-200'
                  >
                    <IoTrash className='w-4 h-4' />
                  </Button>
                </Form>

                {/* <Button
                  onPress={onDelete}
                  className='min-w-fit flex items-center justify-center rounded-lg bg-default-100 hover:bg-default-200'
                >
                  <IoTrash className='w-4 h-4' />
                </Button> */}

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
              <span className='font-semibold'>{titleTemplate}</span>
              <div className='flex w-8 h-8 items-center justify-center rounded-lg bg-default-100 hover:bg-default-200'>
                <IoEye className='w-6 h-6' />
              </div>
            </div>
          </div>
          <div className='flex flex-row items-center justify-between'>
            <p className='font-bold'>Version</p>
            <div className='flex flex-row'>
              <span className='font-semibold'>{version}</span>
            </div>
          </div>
          <div className='flex flex-row items-center justify-between'>
            <p className='font-bold'>Agent</p>
            <div className='flex flex-row'>
              <span className='font-semibold'>{agent}</span>
            </div>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  );
}
