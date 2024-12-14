"use client"
import { Button, Input, Slider, Tooltip } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { FaYoutube, FaFacebook, FaTiktok, FaInfoCircle, FaSearch, FaInstagram } from "react-icons/fa";
import { Select, SelectItem, Chip } from "@nextui-org/react";
import { motion } from "framer-motion";
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { BsCheckAll } from "react-icons/bs";



const Header = ({ locale }) => {
    const [selected, setSelected] = useState("YouTube"); // Store the selected platform
    const [selectType, setSelectedType] = useState(""); // Store the selected platform
    const [selectedCategory, setSelectedCategory] = useState([])
    const [data, setData] = useState({
        name: '',
        status: '',
        subscriber: [0, 1000],
        price: [0, 1000],
        income: [0, 1000],
        selectedMedia: "",
        selectType: "",
        selectedCategory: [],
    })
    useEffect(() => {
        setData((prev) => ({
            ...prev, // Retain existing state
            selectedMedia: selected, // Update `selectedMedia`
            selectType: selectType, // Update `selectType`
            selectedCategory: selectedCategory, // Update `selectedCategory`
        }));
    }, [selected, selectType, selectedCategory]);



    const isSelected = (platform) => selected === platform;
    const isSelectedType = (type) => selectType === type;
    const options = [
        { key: 0, label: "Cars & Bikes" },
        { key: 1, label: "Luxury & Motivation" },
        { key: 2, label: "Pets & Animals" },
        { key: 3, label: "Games" },
        { key: 4, label: "Movies & Music" },
        { key: 5, label: "Fashion & Style" },
        { key: 6, label: "Educational & QA" },
        { key: 7, label: "Food" },
        { key: 8, label: "Nature" },
        { key: 9, label: "Fitness & Sports" },
        { key: 10, label: "Travel" },
        { key: 11, label: "Beautiful girls" },
        { key: 12, label: "Humor" },
        { key: 13, label: "Models & Celebrities" },
        { key: 14, label: "Reviews & How to" },
        { key: 15, label: "Youtube shorts & Facebook reels" },
        { key: 16, label: "Crypto & NFT" }
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev, // Spread previous state
            [name]: value, // Dynamically update the field based on `name`
        }));
        console.log(name, value)
    };


    return (
        <div className='w-full overflow-hidden isolate relative h-full md:h-[91vh] bg-blend-saturatio bg-dbackground p-1 flex flex-col md:flex-row bg-no-repeat bg-cover]'>
            <div className='h-full w-full md:w-2/5 p-5 mt-4 flex flex-col justify-center items-center'>
                <span className="text-5xl px-10 font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-pink-500">
                    Connect, Buy, Sell
                </span>


                {/* <SocialMediaAnimation /> */}
                <motion.span
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        duration: 1,
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                    }}
                >
                    <Image src='/images/2.webp' className=' animate-appearance-in mix-blend-multiply h-full w-full aspect-auto' alt='hero' width={500} height={500} />
                </motion.span>
            </div>
            <div
                className='relative z-20 h-full w-full md:w-3/5  flex justify-center items-center'>
                <div className='h-full w-full px-1 md:px-14 py-14 flex justify-center items-center  rounded'>
                    <form action="" className='w-max p-3 py-6 md:p-6 rounded-lg shadow flex flex-col gap-5 bg-black/5 backdrop-blur-0 justify-center'>
                        <div className="flex flex-wrap gap-3">
                            {/* All Button */}
                            <Button
                                className={`${isSelected("all")
                                    ? "bg-gradient-to-tr from-blue-400 to-blue-600 text-white shadow-lg"
                                    : "bg-gray-200 text-gray-800  border-primary border-2"
                                    }`}
                                radius="md"
                                size='sm'
                                aria-label='all'
                                endContent={<BsCheckAll size={18} />}
                                onClick={() => setSelected("all")}
                            >
                                All
                            </Button>
                            {/* YouTube Button */}
                            <Button
                                className={`${isSelected("YouTube")
                                    ? "bg-gradient-to-tr from-red-500 to-red-700 text-white shadow-lg"
                                    : "bg-gray-200 text-gray-800  border-primary border-2"
                                    }`}
                                radius="md"
                                size='sm'
                                aria-label='youtube'
                                endContent={<FaYoutube />}
                                onClick={() => setSelected("YouTube")}
                            >
                                YouTube
                            </Button>

                            {/* Facebook Button */}
                            <Button
                                className={`${isSelected("Facebook")
                                    ? "bg-gradient-to-tr from-blue-500 to-blue-700 text-white shadow-lg"
                                    : "bg-gray-200 text-gray-800  border-primary border-2"
                                    }`}
                                radius="md"
                                size='sm'
                                aria-label='facebook'
                                endContent={<FaFacebook />}
                                onClick={() => setSelected("Facebook")}
                            >
                                Facebook
                            </Button>
                            <Button
                                className={`${isSelected("Instagram")
                                    ? "bg-gradient-to-tr from-pink-500 to-orange-400 text-white shadow-lg"
                                    : " bg-gray-200 text-gray-800 border-primary border-2"
                                    }`}
                                radius="md"
                                size="sm"
                                aria-label="instagram"
                                endContent={<FaInstagram />}
                                onClick={() => setSelected("Instagram")}
                            >
                                Instagram
                            </Button>




                            {/* TikTok Button */}
                            <Button
                                className={`${isSelected("TikTok")
                                    ? "bg-gradient-to-tr  from-black to-gray-800 text-white shadow-lg"
                                    : "bg-gray-200 text-gray-800  border-primary border-2"
                                    }`}
                                radius="md"
                                size='sm'
                                aria-label='tiktok'
                                endContent={<FaTiktok />}
                                onClick={() => setSelected("TikTok")}
                            >
                                TikTok
                            </Button>
                        </div>

                        {/* select subject  */}
                        <div className='flex flex-col gap-2'>
                            <Input name="name" value={data.name} onChange={handleChange} aria-label='search-name' className={{
                                base: "py-3",
                            }} placeholder="Search by name" />

                            <Select
                                classNames={{
                                    base: "max-full",
                                    trigger: "min-h-12 py-2",
                                }}
                                isMultiline={true}
                                items={options}

                                aria-label='search-subject'
                                placeholder="Select subjects"
                                onSelectionChange={(keys) => {
                                    const selectedOptions = Array.from(keys).map((key) => {
                                        const res = options.find((option) => option.key == key);
                                        if (res.label) {
                                            return res.label;
                                        }
                                    }
                                    );

                                    setSelectedCategory(selectedOptions)
                                }}
                                renderValue={(items) => {
                                    return (
                                        <div className="flex flex-wrap gap-2">
                                            {items.map((item) => (
                                                <Chip key={item.key}>{item.data.label}</Chip>
                                            ))}
                                        </div>
                                    );
                                }}
                                selectionMode="multiple"
                            >
                                {(user) => (
                                    <SelectItem key={user.key} textValue={user.label}>
                                        <div className="flex gap-2 items-center">
                                            <div className="flex flex-col">
                                                <span className="text-small">{user.label}</span>
                                            </div>
                                        </div>
                                    </SelectItem>
                                )}
                            </Select>

                        </div>

                        {/* verify listning */}
                        <div className="flex flex-wrap gap-4">
                            <Button
                                className={`${isSelectedType("verifiedListing")
                                    ? "bg-gradient-to-tr from-purple-500 to-purple-700 text-white shadow-lg"
                                    : "bg-gray-200 text-gray-800 border-primary border-2"
                                    }`}
                                radius="md"
                                aria-label='verified-listing'
                                onClick={() => setSelectedType((prev) => ("verifiedListing"))}
                            >
                                Verified Listing
                            </Button>

                            {/* Verified Identity Button */}
                            <Button
                                className={`${isSelectedType("verifiedIdentity")
                                    ? "bg-gradient-to-tr from-purple-500 to-purple-700 text-white shadow-lg"
                                    : "bg-gray-200 text-gray-800 border-primary border-2"
                                    }`}
                                radius="md"
                                aria-label='verified-identity'
                                onClick={() => setSelectedType("verifiedIdentity")}
                            >
                                Verified Identity
                            </Button>

                            {/* Monetize Available Button */}
                            <Button
                                className={`${isSelectedType("monetizeAvailable")
                                    ? "bg-gradient-to-tr from-purple-500 to-purple-700 text-white shadow-lg"
                                    : "bg-gray-200 text-gray-800 border-primary border-2"
                                    }`}
                                radius="md"
                                aria-label='monetize-available'
                                onClick={() => setSelectedType("monetizeAvailable")}
                            >
                                Monetize Available
                            </Button>
                        </div>


                        {/* Ranges */}
                        <div className='flex flex-wrap gap-3 mt-1 px-3'>
                            <Slider
                                classNames={{
                                    base: "max-w-md gap-3",
                                    track: "bg-white dark:bg-gray-800",
                                    filler: "bg-gradient-to-r from-blue-400 to-blue-700 dark:from-pink-600 dark:to-cyan-800",
                                }}
                                defaultValue={[0, 10000]}
                                formatOptions={{ style: "decimal" }}
                                label="Subscriber Range"
                                maxValue={99999}
                                renderLabel={({ children, ...props }) => (
                                    <label {...props} className="text-medium flex gap-2 items-center">
                                        {children}
                                        <Tooltip
                                            className="w-[200px] px-1.5 text-tiny text-default-600 rounded-small"
                                            content="The subscriber range you want to search for."
                                            placement="right"
                                        >
                                            <span className="transition-opacity opacity-80 hover:opacity-100">
                                                <FaInfoCircle />
                                            </span>
                                        </Tooltip>
                                    </label>
                                )}
                                renderThumb={({ index, ...props }) => (
                                    <div
                                        {...props}
                                        className="group p-1 top-1/2 bg-background border-small border-default-200 dark:border-default-400/50 shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
                                    >
                                        <span
                                            className={cn(
                                                "transition-transform bg-gradient-to-br shadow-small rounded-full w-4 h-4 block group-data-[dragging=true]:scale-80",
                                                index === 0
                                                    ? "from-pink-200 to-blue-400 dark:from-pink-400 dark:to-pink-600" // first thumb
                                                    : "from-cyan-200 to-cyan-600 dark:from-cyan-600 dark:to-cyan-800", // second thumb
                                            )}
                                        />
                                    </div>
                                )}
                                size="md"
                                step={1}
                                onChangeEnd={(val) => {
                                    setData((prev) => ({
                                        ...prev, // Spread previous state
                                        ['subscriber']: val, // Dynamically update the field based on `name`
                                    }));
                                }}

                            />

                            {/* price ranger */}
                            <Slider
                                classNames={{
                                    base: "max-w-md gap-3",
                                    track: "bg-white dark:bg-gray-800",
                                    filler: "bg-gradient-to-r from-blue-400 to-blue-700 dark:from-pink-600 dark:to-cyan-800",
                                }}
                                defaultValue={[0, 500]}
                                formatOptions={{ style: "currency", currency: "USD" }}
                                label="Price Range"
                                maxValue={10000}
                                renderLabel={({ children, ...props }) => (
                                    <label {...props} className="text-medium flex gap-2 items-center">
                                        {children}
                                        <Tooltip
                                            className="w-[200px] px-1.5 text-tiny text-default-600 rounded-small"
                                            content="The price range you want to search for."
                                            placement="right"
                                        >
                                            <span className="transition-opacity opacity-80 hover:opacity-100">
                                                <FaInfoCircle />
                                            </span>
                                        </Tooltip>
                                    </label>
                                )}
                                renderThumb={({ index, ...props }) => (
                                    <div
                                        {...props}
                                        className="group p-1 top-1/2 bg-background border-small border-default-200 dark:border-default-400/50 shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
                                    >
                                        <span
                                            className={cn(
                                                "transition-transform bg-gradient-to-br shadow-small rounded-full w-4 h-4 block group-data-[dragging=true]:scale-80",
                                                index === 0
                                                    ? "from-pink-200 to-blue-400 dark:from-pink-400 dark:to-pink-600" // first thumb
                                                    : "from-cyan-200 to-cyan-600 dark:from-cyan-600 dark:to-cyan-800", // second thumb
                                            )}
                                        />
                                    </div>
                                )}
                                onChangeEnd={(val) => {
                                    setData((prev) => ({
                                        ...prev, // Spread previous state
                                        ['price']: val, // Dynamically update the field based on `name`
                                    }));
                                }}
                                size="md"
                                step={1}
                            />
                            {/* Income range */}
                            <Slider
                                classNames={{
                                    base: "max-w-md gap-3",
                                    track: "bg-white dark:bg-gray-800",
                                    filler: "bg-gradient-to-r from-blue-400 to-blue-700 dark:from-pink-600 dark:to-cyan-800",
                                }}
                                defaultValue={[10, 1000]}
                                formatOptions={{ style: "currency", currency: "USD" }}
                                label="Income Range"
                                maxValue={10000}
                                renderLabel={({ children, ...props }) => (
                                    <label {...props} className="text-medium flex gap-2 items-center">
                                        {children}
                                        <Tooltip
                                            className="w-[200px] px-1.5 text-tiny text-default-600 rounded-small"
                                            content="The income range you want to search for."
                                            placement="right"
                                        >
                                            <span className="transition-opacity opacity-80 hover:opacity-100">
                                                <FaInfoCircle />
                                            </span>
                                        </Tooltip>
                                    </label>
                                )}
                                renderThumb={({ index, ...props }) => (
                                    <div
                                        {...props}
                                        className="group p-1 top-1/2 bg-background border-small border-default-200 dark:border-default-400/50 shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"
                                    >
                                        <span
                                            className={cn(
                                                "transition-transform bg-gradient-to-br shadow-small rounded-full w-4 h-4 block group-data-[dragging=true]:scale-80",
                                                index === 0
                                                    ? "from-pink-200 to-blue-400 dark:from-pink-400 dark:to-pink-600" // first thumb
                                                    : "from-cyan-200 to-cyan-600 dark:from-cyan-600 dark:to-cyan-800", // second thumb
                                            )}
                                        />
                                    </div>
                                )}
                                size="md"
                                step={1}
                                onChangeEnd={(val) => {
                                    setData((prev) => ({
                                        ...prev, // Spread previous state
                                        ['income']: val, // Dynamically update the field based on `name`
                                    }));
                                }}
                            />
                        </div>
                        <div className='px-3 mt-2'>
                            <Link
                                href={{
                                    pathname: `/${locale}/category/${selected.toLowerCase()}`,
                                    query: { data: JSON.stringify(data) },
                                }}
                            >
                                <Button color="primary" className=' pointer-events-none' variant="solid" fullWidth isLosading endContent={<FaSearch />}>
                                    Search
                                </Button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>

            <div className=" overflow-hidden absolute left-1/5 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
                <div className="aspect-[1155/678] w-[70.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
            </div>
        </div>
    );
};

export default Header;
