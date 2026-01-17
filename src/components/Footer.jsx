import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import reviewsData from "../data/reviewsData";
import { MdOutlinePayment } from "react-icons/md";
import { FaTags } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <div className="bg-gray-900 py-16">
                <h1 className="text-center text-3xl ">Our Advantages</h1>
                <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-10 px-6 text-gray-300 mt-40">
                    <div className="flex items-center gap-4">
                        <TbTruckDelivery className="text-red-500 text-4xl" />
                        <div>
                            <p className="font-semibold text-white">Express Delivery</p>
                            <p className="text-sm">Ships in 24 Hours</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <FaShieldAlt className="text-red-500 text-4xl" />
                        <div>
                            <p className="font-semibold text-white">Brand Warranty</p>
                            <p className="text-sm">100% Original products</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <FaTags className="text-red-500 text-4xl" />
                        <div>
                            <p className="font-semibold text-white">Exciting Deals</p>
                            <p className="text-sm">On all prepaid orders</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <MdOutlinePayment className="text-red-500 text-4xl" />
                        <div>
                            <p className="font-semibold text-white">Secure Payments</p>
                            <p className="text-sm">SSL / Secure certificate</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* ================= FOOTER SECTION ================= */}
            <footer className="bg-black text-gray-400">
                <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 lg:grid-cols-4">
                    <div>
                        <h2 className="text-xl font-semibold text-white mb-4">Tech-Shop</h2>
                        <p className="text-sm mb-4">
                            Subscribe to our Email alerts to receive early discount offers
                            and new products info
                        </p>
                        <input
                            type="text"
                            placeholder="Email Address*"
                            className="w-full px-4 py-2 bg-black border border-gray-600 rounded-md mb-3 text-sm"
                        />
                        <button className="bg-red-700 hover:bg-red-600 text-white px-6 py-2 rounded-md text-sm">
                            Subscribe
                        </button>
                    </div>
                    <div>
                        <p className="font-semibold text-white mb-5">Help</p>
                        <div className="flex flex-col space-y-3 text-sm">
                            <p className="hover:text-white cursor-pointer">FAQs</p>
                            <p className="hover:text-white cursor-pointer">Track Order</p>
                            <p className="hover:text-white cursor-pointer">Cancel Order</p>
                            <p className="hover:text-white cursor-pointer">Return Order</p>
                            <p className="hover:text-white cursor-pointer">Warranty Info</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold text-white mb-5">Policies</p>
                        <div className="flex flex-col space-y-3 text-sm">
                            <p className="hover:text-white cursor-pointer">Return Policy</p>
                            <p className="hover:text-white cursor-pointer">Security</p>
                            <p className="hover:text-white cursor-pointer">Privacy Policy</p>
                            <p className="hover:text-white cursor-pointer">Terms & Conditions</p>
                            <p className="hover:text-white cursor-pointer">Sitemap</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold text-white mb-5">Company</p>
                        <div className="flex flex-col space-y-3 text-sm">
                            <p className="hover:text-white cursor-pointer">About Us</p>
                            <p className="hover:text-white cursor-pointer">Contact Us</p>
                            <p className="hover:text-white cursor-pointer">Service Centres</p>
                            <p className="hover:text-white cursor-pointer">Careers</p>
                            <p className="hover:text-white cursor-pointer">Affiliates</p>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700">
                    <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm">
                            © 2026 Tech-Shop. All Rights Reserved.
                        </p>
                        <div className="flex gap-4">
                            <FaFacebookF className="w-9 h-9 p-2 border border-gray-600 rounded-full hover:bg-red-600 hover:border-red-600 cursor-pointer" />
                            <FaTwitter className="w-9 h-9 p-2 border border-gray-600 rounded-full hover:bg-red-600 hover:border-red-600 cursor-pointer" />
                            <FaInstagram className="w-9 h-9 p-2 border border-gray-600 rounded-full hover:bg-red-600 hover:border-red-600 cursor-pointer" />
                            <FaLinkedinIn className="w-9 h-9 p-2 border border-gray-600 rounded-full hover:bg-red-600 hover:border-red-600 cursor-pointer" />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}