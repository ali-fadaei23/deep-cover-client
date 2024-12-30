"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { IoSunny, IoMoon } from "react-icons/io5";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className='flex flex-row gap-2'>
      <Button
        isIconOnly
        variant='faded'
        className={`${theme === "light" ? "hidden" : "relative"}`}
        onPress={() => setTheme("light")}
      >
        <IoSunny />
      </Button>

      <Button
        isIconOnly
        className={`text-white bg-gray-900 ${
          theme === "dark" ? "hidden" : "relative"
        }`}
        onPress={() => setTheme("dark")}
        variant='faded'
      >
        <IoMoon />
      </Button>

      {/* 
      <Button
        isIconOnly
        variant='faded'
       
      
      >
     
      </Button> */}
    </div>
  );
}
