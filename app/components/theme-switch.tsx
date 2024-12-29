"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useSwitch, VisuallyHidden, SwitchProps } from "@nextui-org/react";
import { IoSunny, IoMoon } from "react-icons/io5";

export default function ThemeSwitch(props: SwitchProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch(props);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className='flex flex-row gap-2'>
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            class: [
              "w-8 h-8",
              "flex items-center justify-center",
              "rounded-lg bg-default-100 hover:bg-default-200",
            ],
          })}
        >
          {isSelected ? (
            <IoSunny onClick={() => setTheme("light")} />
          ) : (
            <IoMoon onClick={() => setTheme("dark")} />
          )}
        </div>
      </Component>
    </div>
  );
}
