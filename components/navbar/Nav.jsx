"use client"

import React from "react";
import Link from "next/link";

import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Button,
    Dropdown,
    DropdownTrigger,
    Avatar,
    DropdownMenu,
    DropdownItem,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FaAccessibleIcon } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import { FaTiktok, FaTelegram, FaTwitter, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { useTranslations } from "next-intl";

export const AcmeLogo = () => {
    return (
        <Image src={'https://eazyviral.com/wp-content/uploads/2020/11/cropped-logo.png.webp'}
            width={180}
            height={180}
            alt="ACME Logo"

        />
    );
};


export function SocialMediaDropdown({ isClass = true, isFullWidth = false, variant = 'light', color = 'none' }) {
    return (
        <Dropdown>
            <NavbarItem>
                <DropdownTrigger>
                    <Button
                        fullWidth={isFullWidth}
                        disableRipple
                        className={isClass ? "font-semibosld text-tblack text-medium p-0 bg-transparent data-[hover=true]:bg-transparent" : "font-bold"}
                        endContent={<IoChevronDown />}
                        radius="md"
                        variant={variant}
                        color={color}

                    >
                        Buy Channel
                    </Button>
                </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
                aria-label="Social Media Platforms"
                className="w-[340px]"
                itemClasses={{
                    base: "gap-4",
                }}
            >
                {/* TikTok */}
                <DropdownItem
                    key="tiktok"
                    description="Buy TikTok accounts easily."
                    startContent={<FaTiktok size={16} className="text-gray-800" />}
                >
                    TikTok
                </DropdownItem>

                {/* Facebook */}
                <DropdownItem
                    key="facebook"
                    description="Get popular Facebook pages."
                    startContent={<FaFacebook size={16} className="text-blue-700" />}
                >
                    Facebook
                </DropdownItem>

                {/* YouTube */}
                <DropdownItem
                    key="youtube"
                    description="Buy YouTube channels with high views."
                    startContent={<FaYoutube size={16} className="text-red-500" />}
                >
                    YouTube
                </DropdownItem>

                {/* Instagram */}
                <DropdownItem
                    key="instagram"
                    description="Acquire Instagram accounts easily."
                    startContent={<FaInstagram size={16} className="text-pink-500" />}
                >
                    Instagram
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}



export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const pathname = usePathname()
    const locale = pathname.split('/')[1];
    const isActiveNav = pathname.split('/')[2];
    const t=useTranslations('navbar')

    const menuItems = [
        t('home'),
        t('contact'),
        t('about'),
        t('privacyPolicy'),
    ];

    return (
        <Navbar
            classNames={{
                item: [
                    "flex",
                    "relative",
                    "h-full",
                    "items-center",
                    "data-[active=true]:after:content-['']",
                    "data-[active=true]:after:absolute",
                    "data-[active=true]:after:bottom-0",
                    "data-[active=true]:after:left-0",
                    "data-[active=true]:after:right-0",
                    "data-[active=true]:after:h-[3px]",
                    "data-[active=true]:after:shadow",
                    "data-[active=true]:after:rounded-[2px]",
                    "data-[active=true]:after:bg-primary",
                ],
            }}

            onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll className="shadow">
            {/* //logo  */}
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Link href={'/'}> <AcmeLogo /></Link>
                </NavbarBrand>
            </NavbarContent>

            {/* //navlink Desktop */}
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem isActive={isActiveNav == undefined ? true : false}>
                    <Link className="font-semibolsd  text-tblack" href={`/`}>
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem isActive={isActiveNav === 'contact'}>
                    <Link className="font-semibsold text-tblack" href={`/${locale}/contact`}>
                        Contact us
                    </Link>
                </NavbarItem>
                {/* //by channel */}
                <SocialMediaDropdown />

                <NavbarItem className="ms-5 gap-2">
                    {/* <Button as={Link} className="mr-2" color="primary" href="#" variant="bordered" radius="sm">
                        Login
                    </Button>
                    <Button as={Link} color="primary" href="#" variant="solid" radius="sm">
                        Sign Up
                    </Button> */}
                    <Button
                        className="ms-2 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                        radius="sm"
                    >
                        Start Selling
                    </Button>

                </NavbarItem>
            </NavbarContent>



            {/* mobile nav  */}
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem className="font-bold py-0.5 text-primary hover:underline underline-offset-2 duration-100" key={`${item}-${index}`}>
                        <Button
                            className="w-full font-bold capitalize"
                            // color={
                            //     index !== menuItems.length - 1 ? "primary" : "danger"
                            // }
                            // variant={
                            //     index !== menuItems.length - 1 ? "flat" : "shadow"
                            // }
                            variant="faded"
                            color="primary"
                            href="#"
                            size="md"
                        >
                            {item}
                        </Button>
                    </NavbarMenuItem>
                ))}
                <NavbarMenuItem className="w-full font-bold capitalize rounded-md text-center text-medium">
                    <SocialMediaDropdown isClass={false} isFullWidth={true} variant="solid" color="primary" />
                </NavbarMenuItem>
            </NavbarMenu>


            {/* //Avatar start here */}
            <Dropdown placement="bottom-end">
                <DropdownTrigger>
                    <Avatar
                        isBordered
                        as="button"
                        className="transition-transform"
                        color="secondary"
                        name="Jason Hughes"
                        size="sm"
                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                    <DropdownItem key="profile" className="h-14 gap-2">
                        <p className="font-semibold">Signed in as</p>
                        <p className="font-semibold">zoey@example.com</p>
                    </DropdownItem>
                    <DropdownItem key="settings">My Settings</DropdownItem>
                    <DropdownItem key="team_settings">Team Settings</DropdownItem>
                    <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                    <DropdownItem key="logout" color="danger">
                        Log Out
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>

        </Navbar>
    );
}

