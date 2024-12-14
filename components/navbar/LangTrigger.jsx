"use client";

import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";
import { English, Hindi, Korean } from "../icons/Icons";
import { RiGlobalLine } from "react-icons/ri";

export default function LangTrigger() {
  const router = useRouter();
  const pathname = usePathname();

  // Extract the language segment (if present) from the URL
  const currentLocale = pathname.split("/")[1]; // Get the first part after "/"
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([currentLocale.toUpperCase() || "ENG"])); // Default to "ENG" if no locale

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replace(/_/g, ""),
    [selectedKeys]
  );

  const handleLanguageChange = (languageKey) => {
    const newLocale = languageKey.toLowerCase(); // Convert key to lowercase
    setSelectedKeys(new Set([languageKey])); // Update the dropdown state

    // Replace the current locale in the pathname
    const newPathname = pathname.startsWith(`/${currentLocale}`)
      ? pathname.replace(`/${currentLocale}`, `/${newLocale}`) // Replace existing locale
      : `/${newLocale}${pathname}`; // Add locale if not present

    router.push(newPathname);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button className="capitalize" color='primary' isIconOnly aria-label="language" >
         <RiGlobalLine size={20}/>
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        disallowEmptySelection
        aria-label="Change Language"
        selectedKeys={selectedKeys}
        selectionMode="single"
        variant="flat"
        onSelectionChange={(key) => handleLanguageChange(key.anchorKey)}
      >
        <DropdownItem startContent={"🇺🇸"}  key="en">ENG</DropdownItem>
        <DropdownItem startContent={"🇮🇳"} key="hi">HI</DropdownItem>
        <DropdownItem startContent={"🇰🇷"} key="Ko">KO</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
