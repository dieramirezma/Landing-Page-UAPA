import { Navbar } from "./Navbar"
import header_image from "../../assets/images/bg_desktop_header.svg"

export const Header = () => {
    return (
        <section id="header" className="relative bg-cover bg-center bg-no-repeat m-0 mb-10" style={{ backgroundImage: `url(${header_image})`, backgroundSize: 'cover' }}>
            <Navbar style={{ zIndex: '100' }} />
            <div className="flex flex-col items-center h-screen text-white mt-20">
                <div className="text-center lg:w-7/12 w-11/12 ">
                    <h1 className="text-white text-[56px] lg:text-[64px] leading-tight lg:mb-10 ">
                        The best products start with Figma
                    </h1>
                    <div className="lg:text-[26px] text-[33px] lg:px-0 lg:py-0 px-10 py-24">
                        <p className="text-white hidden md:block">Most calendars are designed for teams. Slate is designed for freelancers</p>
                        <p className="text-white md:hidden">Most calendars are designed for teams.</p>
                    </div>
                </div>
                <div className="flex justify-center mt-16">
                    <button className="btnEffect mb-4 text-[20px] lg:px-12 lg:py-2 px-14 py-4 bg-[#2091F9] text-white rounded-full">Try For Free</button>
                </div>
            </div>
        </section>
    )
}
