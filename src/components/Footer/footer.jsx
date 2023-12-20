import "./footer.css"

export default function Footer() {
    return (
        <div className="flex flex-col items-center footer bg-black h-[6rem] lg:flex-row lg:h-[5rem]">
            <p className="mt-4 mb-2 text-[#a4a4a4] text-xs lg:hidden">©2023, URBAN THREADS. ALL RIGHTS RESERVED.</p>
            <div className="flex justify-evenly w-full">
                <p className="text-[#a4a4a4] text-xs hidden lg:inline-block">©2023, URBAN THREADS. ALL RIGHTS RESERVED.</p>
                <p className="text-[#a4a4a4] text-xs">.REFUND</p>
                <p className="text-[#a4a4a4] text-xs">.PRIVACY POLICY</p>
                <p className="text-[#a4a4a4] text-xs">.TERMS OF SERVICE</p>
            </div>
        </div>
    )
}

// lg:w-[30rem] lg:ml-2