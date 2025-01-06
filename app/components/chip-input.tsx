import { Chip, Input } from "@nextui-org/react";
import { useState, SetStateAction } from "react";

export default function ChipInput({ chips, setChips, chipColor }: any) {
  const [inputValue, setInputValue] = useState("");
  //   const [suggestions, setSuggestions] = useState(["Person", "User"]);
  //   const [removedSuggestions, setRemovedSuggestions] = useState([]);
  //   const inputRef = useRef();

  const handleInputChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputValue(e.target.value);
  };

  const handleClose = (chipToDelete: any) => {
    setChips(chips.filter((chip: any) => chip !== chipToDelete));
    if (chips.length === 1) {
      setChips("");
    }
    // inputRef.current!.focus();
  };

  const handleInputKeyDown = (e: {
    key: string;
    preventDefault: () => void;
  }) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const newChip = inputValue.trim();
      if (newChip !== "") {
        setChips([...chips, newChip]);
        setInputValue("");
      }
    } else if (e.key === "Backspace" && inputValue === "") {
      const lastChip = chips[chips.length - 1];
      handleClose(lastChip);
    }
  };

  return (
    <div className='relative'>
      <div className='flex flex-wrap gap-2 min-h-10 items-center bg-fieldsBg p-2 rounded'>
        {chips.map((chip: any) => (
          <Chip
            variant='dot'
            key={chip}
            color={chipColor}
            title={chip}
            onClose={() => handleClose}
          />
        ))}

        <Input
          //   baseRef={inputRef}
          type='text'
          value={inputValue}
          onValueChange={() => handleInputChange}
          onKeyDown={handleInputKeyDown}
          className='flex-grow bg-fieldsBg text-sm outline-none'
        />
      </div>
    </div>
  );
}
