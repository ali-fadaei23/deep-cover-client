import type { Selection } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Chip, Input, Select, SelectItem } from "@nextui-org/react";
import { IoAddCircle, IoArrowUpCircle } from "react-icons/io5";

export function ManifestInput({
  keyOption,
  option,
  valueOrObject,
  chips,
  setChips,
}: any) {
  const [value, setValue] = useState<Selection>(new Set([valueOrObject]));
  const [value1, setValue1] = useState("");

  useEffect(() => {
    setChips([]);
  }, [setChips, value]);

  const handleClose = (chipToRemove: string) => {
    setChips(chips.filter((chip: string) => chip !== chipToRemove));
    if (chips.length === 1) {
      setChips([]);
    }
  };

  const handleInputKeyDown = (e: {
    key: string;
    preventDefault: () => void;
  }) => {
    const newChip = value1.trim();
    if (e.key === "Enter") {
      e.preventDefault();
      if (
        newChip !== "" &&
        !chips.includes(newChip) &&
        Array.from(value).includes("value")
      ) {
        setChips([...chips, newChip]);
        setValue1("");
      }
    } else if (e.key === "Backspace" && value1 === "") {
      const lastChip = chips[chips.length - 1];
      handleClose(lastChip);
    }
  };

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex flex-row items-center'>
        <Input
          size='lg'
          defaultValue={keyOption}
          name='keyOption'
          aria-label='Key Input'
          radius='none'
          className='rounded-s-sm'
          classNames={{ base: "w-56", inputWrapper: "rounded-l-lg" }}
          variant='faded'
          placeholder='key 1'
          type='text'
        />{" "}
        <div className='flex flex-row items-start justify-center'>
          <Input
            placeholder='Set option...'
            startContent={
              <div className={`flex flex-row max-w-96 py-2 overflow-x-scroll`}>
                <Input
                  className='hidden'
                  name='chipsKeys'
                  value={JSON.stringify(chips)}
                />
                {chips.map((chip: any) => {
                  return (
                    <Chip
                      key={chip}
                      color={"default"}
                      variant='faded'
                      onClose={() => handleClose(chip)}
                    >
                      {chip}
                    </Chip>
                  );
                })}
              </div>
            }
            value={value1}
            onValueChange={setValue1}
            onKeyDown={handleInputKeyDown}
            defaultValue={option}
            name='manifestOption'
            aria-label='Text Input Manifest Option'
            radius='none'
            size='lg'
            className='flex flex-col'
            classNames={{
              base: "w-80",
              input: "overflow-x-scroll",
            }}
            variant='faded'
            type='text'
            endContent={
              <div>
                {Array.from(value).includes("value") ? (
                  <IoAddCircle className='w-6 h-6 cursor-pointer' />
                ) : (
                  <IoArrowUpCircle className='w-6 h-6 cursor-pointer' />
                )}
              </div>
            }
          />{" "}
        </div>
        <Select
          size='lg'
          name='valueOrObject'
          aria-label='Text Input Manifest Option'
          classNames={{ base: "w-36", trigger: "rounded-r-lg" }}
          radius='none'
          className='max-w-xs'
          selectedKeys={value}
          onSelectionChange={setValue}
          defaultSelectedKeys={valueOrObject}
          variant='faded'
        >
          <SelectItem key={"value"}>Value</SelectItem>
          <SelectItem key={"object"}>Object</SelectItem>
        </Select>
      </div>
    </div>
  );
}
