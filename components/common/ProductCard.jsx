import { Card, CardHeader, CardFooter, Image, Chip, Tooltip } from "@nextui-org/react";
import { CheckIcon } from "lucide-react";
import Link from "next/link";
import { FaUserGroup } from "react-icons/fa6";
import { GiMoneyStack } from "react-icons/gi";
import { TiTag } from "react-icons/ti";

export default function ProductCard({ locale = '/', id = 123, isPress = false, isPremium = true, username = "Ali Hamza", isPro = true, subscriber = 3000, price = 9999, category = 'Entertainment', desc = 'this is the channel for the youtube short videos if your are intrested come to ib' }) {
    return (
        <div className="h-250px md:h-[380px] w-full">
            <Card fullWidth isPressable={isPress} shadow='sm' className="w-full h-[330px] md:h-[380px] overflow-hidden" radius="sm">
                <Link href={`/${locale}/view/${id}`}>
                    <CardHeader className="absolute z-10 flex-col items-start ">
                        <div className="w-full text-tiny h-full text-white/60 uppercase font-bold flex justify-between">
                            {isPro && <Chip size="sm" variant="shadow" color="primary">pro</Chip>}
                            <Tooltip content="User is verified">
                                {isPremium && <Chip size="sm" variant="shadow" color="warning">Premium</Chip>}
                            </Tooltip>
                        </div>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card example background"
                        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                        src="/images/2.webp"
                        sizes="250"

                    />
                </Link>
                <CardFooter className="absolute bg-hite pt-2 pb-0 px-0 bg-white bottom-0 border-t-1 border-zinc-100/50 z-10 flex-col justify-between">
                    <div className="w-full px-1 md:px-4 pb-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        {/* Header Section */}
                        <div className="flex items-center justify-between mb-1">
                            {/* User Info */}
                            <span className=" font-semibold text-gray-600 flex justify-start items-center gap-1">
                                <Image
                                    src="/images/3.jpg"
                                    alt="Avatar"
                                    width={30}
                                    height={30}
                                    className="rounded-full"
                                />
                                <p className="text-xs">{username}</p>
                            </span>
                            {/* Verified Badge */}
                            <Chip color="success" size="sm" startContent={<CheckIcon size={18} />} variant="flat">
                                Verified
                            </Chip>
                        </div>

                        {/* Content Section */}
                        <Link href={`/${locale}/view/${id}`}>
                            <div className=" space-y-0.5 md:space-y-1 px-1 md:px-0.5 ">
                                {/* Education */}
                                <p className="text-xs  md:text-sm text-start text-black/50 py-1 text-[14px]">
                                    {desc?.split(' ', 11)?.join(' ')} ...
                                </p>
                                <div className="flex flex-col gap-1 md:gap-1 py-0.5">
                                    <Chip color="primary" startContent={<TiTag size={13} color="orange" />} className="ps-1" variant='dot'>{category}</Chip>
                                    {/* Subscribers */}
                                    <span className="flex text-sm text-gray-600 gap-5 w-full">
                                        <span className="font-semibold text-gray-800 flex gap-1"><FaUserGroup />Subscribers:</span>{subscriber}
                                    </span>
                                    {/* Price */}
                                    <span className="flex text-sm text-gray-600 gap-8 w-full ">
                                        <span className="font-semibold  text-gray-800 flex gap-1 items-center"><GiMoneyStack size={18} /> Price:</span> ${price}
                                    </span>
                                </div>
                            </div>
                        </Link>

                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}
