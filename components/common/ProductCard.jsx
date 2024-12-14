import { Card, CardHeader, CardFooter,Chip, Tooltip } from "@nextui-org/react";
import { CheckIcon } from "lucide-react";
import Link from "next/link";
import { FaUserGroup } from "react-icons/fa6";
import { GiMoneyStack } from "react-icons/gi";
import { TiTag } from "react-icons/ti";
import { FcApproval } from "react-icons/fc";
import Image from "next/image";


export default function ProductCard({ locale = '/', id = 123, isPress = false, isPremium = true, username = "Ali Hamza", isPro = true, subscriber = 3000, price = 9999, category = 'Entertainment', desc = 'this is the channel for the youtube short videos if your are intrested come to ib' }) {
    return (
        <div className="h-250px md:h-[380px] w-full">
            <Card fullWidth isPressable={isPress} shadow='sm'  className="w-full h-[330px] md:h-[380px] overflow-hidden bg-white/60" radius="sm">
                <Link href={`/${locale}/view/${id}`} className="group">
                    <CardHeader className="absolute z-10 flex-col items-start ">
                        <div className="w-full text-tiny h-full text-white/60 uppercase font-bold flex justify-between">
                            {isPro && <Chip size="sm" variant="shadow" color="primary">pro</Chip>}
                            <Tooltip content="User is verified">
                                {isPremium && <Chip size="sm" variant="shadow" color="warning">Premium</Chip>}
                            </Tooltip>
                        </div>
                    </CardHeader>
                    <Image
                        alt="Card example background"
                        className="hover:scale-105 duration-300 ease-soft-spring z-0 w-full h-full -translate-y-6 object-cover"
                        src="/images/2.webp"
                        sizes="250"
                        width={250}
                        height={250}
                        quality={50}

                    />
                </Link>
                <CardFooter className="absolute bg-hite pt-2 pb-0 px-0  bg-gray-50 backdrop-blur-0 bottom-0 border-t-1 border-zinc-100/50 z-10 flex-col justify-between">
                    <div className="w-full px-2.5 md:px-4 pb-2 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        {/* User  Section */}
                        <div className="flex items-center gap-2 mb-1">
                            {/* User Info */}
                            <span className=" font-semibold text-gray-600 flex justify-start items-center gap-2">
                                <Image
                                    src="/dummy/user.jpeg"
                                    alt="Avatar"
                                    width={30}
                                    height={30}
                                    quality={50}
                                    className="rounded-full"
                                />
                                <p className="text-small">{username}</p>
                            </span>
                            {/* Verified Badge */}
                           <span>
                            <FcApproval size={20}/>
                           </span>
                        </div>

                        {/* Content Section */}
                        <Link href={`/${locale}/view/${id}`}>
                            <div className=" space-y-0.5 md:space-y-1 md:px-0.5 ">
                                {/* Education */}
                                <p className="text-xs  md:text-sm text-start text-primary-900 py-1 text-[14px]">
                                    {desc?.split(' ',9)?.join(' ')} ...
                                </p>
                                <div className="flex flex-col content-start items-start gap-1.5 py-0.5">
                                    <Chip color="primary" startContent={<TiTag size={15} color='blue' />} className="ps-1" variant='dot'>{category}</Chip>
                                    {/* Subscribers */}
                                    <span className="flex text-gray-600 gap-3 w-full">
                                        <span className="font- text-gray-800 flex gap-1"><FaUserGroup size={19} />Subscribers:</span>{subscriber}
                                    </span>
                                    {/* Price */}
                                    <span className="flex text-medium font-semibold text-gray-600 gap-8 w-full ">
                                        ${price}.00
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
