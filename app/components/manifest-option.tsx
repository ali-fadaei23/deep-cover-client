import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Input,
} from "@nextui-org/react";
import BreadCrumbs from "./breadcrumbs";
import { IoAdd, IoTrash } from "react-icons/io5";
import { ManifestInput } from "./manifest-input";
import { useState } from "react";

export type InputComponentManifest = {
  id: number;
  keyOption: string;
  option: string;
  valueOrObject: string;
  chips: string[];
  setChips: () => void;
}[];

// export type InputComponent = InputComponentManifest & {
//   id: number;
// };

export default function ManifestOption({
  id,
  keyOption,
  option,
  valueOrObject,
  chips,
  setChips,
}: any) {
  const [inputComponent, setInputComponent] = useState<InputComponentManifest>([
    { id: 1, keyOption, option, valueOrObject, chips, setChips },
  ]);

  const addInputComponent = () => {
    const id = Math.round(Math.random() * 100);
    setInputComponent([
      ...inputComponent,
      { id, keyOption, option, valueOrObject, chips, setChips },
    ]);
  };

  const deleteInputComponent = (id: number) => {
    if (inputComponent.length > 1) {
      const deletedInput = inputComponent.filter((input) => input.id !== id);
      setInputComponent(deletedInput);
    }
  };

  return (
    <div className='w-2/5 flex flex-col items-center justify-between'>
      <p className='w-full font-extrabold'>Manifests</p>
      <Card radius='sm' className='max-w-full w-full my-3'>
        <CardHeader className='flex gap-3'>
          <div className='flex w-full items-center justify-between'>
            <div className='flex flex-row gap-2'>
              <BreadCrumbs />
            </div>
          </div>
        </CardHeader>
        <Divider className='w-[39vw] m-auto' />
        <CardBody>
          {inputComponent.map((input, i) => {
            console.log(inputComponent);

            return (
              <div
                className='flex flex-row items-center justify-center gap-2 my-1 '
                key={i}
              >
                <ManifestInput
                  chips={input.chips}
                  setChips={input.setChips}
                  keyOption={input.keyOption}
                  option={input.option}
                  valueOrObject={input.valueOrObject}
                />
                <Button
                  onPress={() => deleteInputComponent(input.id)}
                  isIconOnly
                  size='lg'
                  radius='full'
                  className='font-extrabold'
                  variant='faded'
                >
                  <IoTrash />
                </Button>
              </div>
            );
          })}
        </CardBody>
        <CardFooter>
          <div className='w-full flex items-center justify-end'>
            <Button
              onPress={addInputComponent}
              isIconOnly
              radius='full'
              className='font-extrabold'
              variant='faded'
            >
              <IoAdd />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
