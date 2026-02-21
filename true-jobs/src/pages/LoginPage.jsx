import React from "react";

function LoginPage() {
    return (
        <div className="min-h-screen flex">

            {/* LEFT SIDE */}
            <div className="w-1/2 bg-gray-50 flex flex-col justify-center px-20">

                <div className="mb-10">
                    <h1 className="text-6xl font-bold">
                        <span className="text-purple-700">True</span>{" "}
                        <span className="text-green-600">Jobs</span>
                    </h1>
                </div>

                <p className="text-gray-600 text-lg mb-4">
                    Explore Opportunities with a Trusted Network.
                </p>

                <p className="text-gray-600 text-lg mb-8">
                    Find Jobs Across Industries – All In One Place.
                </p>

                <div className="border-t-2 border-purple-500 w-40 mb-4"></div>

                <p className="text-purple-700 font-medium text-lg pb-4">
                    True Jobs. True Growth. Every Dream, Within Reach.
                </p>
                <div className="border-t-2 border-purple-500 w-40" ></div>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-1/2 bg-gradient-to-b from-purple-700 to-purple-900 flex flex-col justify-center items-center text-white">

                <div className="w-96">

                    <h2 className="text-2xl font-semibold mb-6 text-center">
                        Login/Register
                    </h2>

                    <p className="text-sm mb-6 text-center text-purple-200">
                        OTP (One Time Password) will be sent to this number
                    </p>

                    <div className="flex gap-2 mb-4">
                        <select className="bg-purple-600 border border-purple-400 px-3 py-2 rounded-md text-white">
                            <option>+91</option>
                        </select>

                        <input
                            type="text"
                            placeholder="Enter your number"
                            className="flex-1 px-4 py-2 rounded-md text-black focus:outline-none"
                        />
                    </div>

                    <button className="w-full bg-white text-purple-700 py-2 rounded-md font-medium hover:bg-gray-200 transition">
                        Continue
                    </button>

                    <p className="text-xs mt-6 text-center text-purple-300">
                        By clicking Continue, you agree to True Jobs Terms & Conditions and Privacy Policy.
                    </p>

                </div>
            </div>

        </div>
    );
}

export default LoginPage;