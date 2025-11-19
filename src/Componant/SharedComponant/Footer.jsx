import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { MdPhone } from "react-icons/md";

export default function Footer() {
    return (
        <footer className="bg-white text-gray-700 border-t border-gray-200 mt-10">
            <div className="border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo + Description */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                            ANI<span className="cp">SUR</span>
                        </h2>
                        <p className="mt-3 text-sm">
                            Grabit is the biggest market of grocery products.<br />
                            Get your daily needs from our store.
                        </p>

                        <div className="flex gap-2 mt-4">
                            <img src="https://maraviyainfotech.com/wrapbootstrap/grabit-html/grabit-html/assets/img/app/android.png" alt="Google Play" className="w-28" />
                            <img src="https://maraviyainfotech.com/wrapbootstrap/grabit-html/grabit-html/assets/img/app/apple.png" alt="App Store" className="w-28" />
                        </div>
                    </div>

                    {/* Category */}
                    <div>
                        <h3 className="font-semibold mb-5">Category</h3>
                        <ul className="space-y-4 text-sm">
                            <li>Dairy & Milk</li>
                            <li>Snack & Spice</li>
                            <li>Fast Food</li>
                            <li>Juice & Drinks</li>
                            <li>Bakery</li>
                            <li>Seafood</li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-semibold mb-5">Company</h3>
                        <ul className="space-y-4 text-sm">
                            <li>About us</li>
                            <li>Delivery</li>
                            <li>Legal Notice</li>
                            <li>Terms & conditions</li>
                            <li>Secure payment</li>
                            <li>Contact us</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-semibold mb-6">Contact</h3>
                        <ul className="space-y-5 text-sm">
                            <li className="flex items-start gap-2">
                                <FaMapMarkerAlt className="text-green-600 mt-1" />
                                2548 Broaddus Maple Court, Madisonville KY 4783, USA
                            </li>
                            <li className="flex items-center gap-2">
                                <MdPhone className="text-green-600" /> +00 9876543210
                            </li>
                            <li className="flex items-center gap-2">
                                <FaEnvelope className="text-green-600" /> example@email.com
                            </li>
                        </ul>

                        <div className="flex gap-3 mt-4 text-gray-600 text-lg">
                            <FaFacebookF className="hover:text-green-600 cursor-pointer" />
                            <FaTwitter className="hover:text-green-600 cursor-pointer" />
                            <FaLinkedinIn className="hover:text-green-600 cursor-pointer" />
                            <FaInstagram className="hover:text-green-600 cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="bg-gray-100">
                <div className=" py-4 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center px-6 max-w-7xl mx-auto">
                    <p>Copyright © Grabit all rights reserved. Powered by Grabit.</p>
                    <div className="flex gap-3 mt-2 md:mt-0">
                        <img src="https://maraviyainfotech.com/wrapbootstrap/grabit-html/grabit-html/assets/img/hero-bg/payment.png" alt="Visa" className="h-10" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
