import map_screen from '../../assets/images/map-screen.svg'
import icon_gps from '../../assets/images/icon-gps.svg'
import icon_phone from '../../assets/images/icon-phone.svg'
import icon_mail from '../../assets/images/icon-mail.svg'
import icon_twitter from '../../assets/images/icon-twitter-blue.svg'
import icon_facebook from '../../assets/images/icon-facebook-blue.svg'
import icon_linkedin from '../../assets/images/icon-linkedin-blue.svg'
import { Item } from './Item'

const ItemsInformation = [
    {
        icon: icon_gps,
        description: '6386 Spring St undefined Anchorage, Georgia 12473 United States'
    },
    {
        icon: icon_phone,
        description: '(843) 555-0130'
    },
    {
        icon: icon_mail,
        description: 'willie.jennings@example.com'
    },
]

export const Contact = () => {
    return (
        <section id="contact" className='flex flex-col items-center justify-center lg:mx-20 pt-40 px-10'>
            <div className='text-center mb-4'>
                <h1 className="text-bluePrimary font-thin text-[40px]">
                    Contact Us
                </h1>
                <div className='hidden md:block'>
                    <p className='text-graySecondary text-[20px]'>Most calendars are designed for teams.</p>
                    <p className='text-graySecondary text-[20px]'>Slate is designed for freelancers.</p>
                </div>
                <p className='text-graySecondary md:hidden text-[20px]'>Most calendars are designed for teams.</p>
            </div>
            <div className='flex flex-col-reverse md:flex-row lg:mx-18 h-full lg:gap-12 mx-10 pt-14 md:px-0'>
                {/* Form Contact */}
                <div className='w-full lg:w-1/2 pt-10 lg:pt-0 text-[14px]'>
                    <form className='flex flex-col shadow-md text-center rounded gap-8 px-10 py-10'>
                        <h1>Contact Us</h1>
                        <input type="text" placeholder='Your Name' className='placeholder-[#18171D] bg-[#F5F5F5] border-[#E8E8E8] py-3 px-4 rounded-full' />
                        <input type="text" placeholder='Your Email' className='placeholder-[#18171D] bg-[#F5F5F5] border-[#E8E8E8] py-3 px-4 rounded-full' />
                        <input type="text" placeholder='Your Message' className='placeholder-[#18171D] bg-[#F5F5F5] border-[#E8E8E8] pb-32 pt-4 px-4' />
                        <button type='button' className='btnEffect w-1/2 px-1 py-3 bg-[#2091F9] text-white 
                        rounded-full'>Send</button>
                    </form>
                </div>
                {/* Contact Information */}
                <div className='flex flex-col-reverse md:flex-col gap-10 my-6'>
                    {/* Items */}
                    <div className='flex flex-col md:flex-row w-full gap-8'>
                        <Item icon={ItemsInformation[0].icon} description={ItemsInformation[0].description} />
                        <Item icon={ItemsInformation[1].icon} description={ItemsInformation[1].description} />
                        <Item icon={ItemsInformation[2].icon} description={ItemsInformation[2].description} />
                    </div>
                    {/* Map Image Desktop */}
                    <div className='mx-20 hidden md:block'>
                        <img src={map_screen} alt="Map Screen" />
                    </div>
                    {/* Social Icons */}
                    <div className="flex space-x-2 justify-center md:justify-start">
                        <img src={icon_twitter} alt='Twitter Icon' />
                        <img src={icon_facebook} alt='Facebook Icon' />
                        <img src={icon_linkedin} alt='LinkedIn Icon' />
                    </div>
                </div>

            </div>
        </section>
    )
}