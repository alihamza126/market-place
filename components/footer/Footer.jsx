import { Mail, Phone } from 'lucide-react'
import Link from 'next/link';
import React from 'react'
import { FaFacebookF, FaYoutube, FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa6";

const Footer = ({ locale }) => {
    return (
        <footer className="rounded-t-xl tracking-wide bg-[#27282b] py-12 px-14">
            <div className="grid max-md-grid-cols-1 lg:grid-cols-2 gap-20">
                <div>
                    <h4 className="text-gray-100 font-bold text-lg">About Us</h4>
                    <p className="text-sm mt-6 text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida,
                        mi eu pulvinar cursus, sem elit interdum mauris dipiscing elit. Aenean gravida,
                        mi eu pulvinar cursus... <a href='javascript:void(0)' className="text-sm font-semibold text-[#007bff]">Read
                            more</a></p>

                    <ul className="grid sm:grid-cols-2 mt-12 gap-2">
                        <li className="flex items-center max-sm:mb-8">
                            <div className="bg-[#343538] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <Phone size={20} color='white' />
                            </div>
                            <a href="javascript:void(0)" className="text-gray-100 text-sm ml-4">
                                <small className="block">Tel</small>
                                <strong>180-548-2588</strong>
                            </a>
                        </li>
                        <li className="flex items-center">
                            <div className="bg-[#343538] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <Mail size={20} color='white' />
                            </div>
                            <a href="javascript:void(0)" className="text-gray-100 text-sm ml-4">
                                <small className="block">Mail</small>
                                <strong>info@example.com</strong>
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-gray-100 font-bold text-lg">Newsletter</h4>
                    <p className="text-sm mt-6 text-gray-300">Subscribe to our newsletter and stay up to date with the latest news,
                        updates, and exclusive offers. Get valuable insights. Join our community today!</p>

                    <div className="bg-[#343538] flex px-2 py-1 rounded-full mt-12">
                        <input type='email' placeholder='Enter your email'
                            className="w-full outline-none text-gray-300 text-sm bg-transparent pl-4" />
                        <button type='button'
                            className="bg-gray-100 hover:bg-white transition-all text-gray-600 font-semibold text-sm rounded-full px-5 py-2 ml-4">Submit</button>
                    </div>

                    <ul className="flex items-center justify-end mt-8 space-x-4">
                        <li className="bg-[#343538] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <FaFacebookF color='white' />
                        </li>
                        <li className="bg-[#343538] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <FaLinkedin color='white' />
                        </li>
                        <li className="bg-[#343538] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <FaYoutube color='white' />
                        </li>
                        <li className="bg-[#343538] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <FaInstagram color='white' />
                        </li>
                    </ul>
                </div>
            </div>

            <div className="lg:flex lg:item-center mt-12">
                <ul className="flex flex-wrap gap-4">
                    <li>
                        <Link href={`/${locale}/terms`} className='text-gray-300 hover:text-gray-100 text-sm'>Terms of Service</Link>
                    </li>
                    <li>
                        <Link href={`/${locale}/privacy-policy`} className='text-gray-300 hover:text-gray-100 text-sm'>Privacy Policy</Link>
                    </li>
                </ul>

                <p className='text-sm text-gray-300 lg:ml-auto max-lg:mt-6'>© AliDEV. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer