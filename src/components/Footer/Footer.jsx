import icon_gps from '../../assets/images/icon-gps-white.svg'
import icon_phone from '../../assets/images/icon-phone-white.svg'
import icon_twitter from '../../assets/images/icon-twitter.svg'
import icon_facebook from '../../assets/images/icon-facebook.svg'
import icon_linkedin from '../../assets/images/icon-linkedin.svg'
import { Item } from './Item'
import { List } from './List'

const FooterInformation = [
    {
        title: 'Pages',
        items: ['Home', 'Product', 'Pricing', 'About', 'Contact']
    },
    {
        title: 'Tomothy',
        items: ['Eleanor Edwards', 'Ted Robertson', 'Annette Russell', 'Jennie Mckinney', 'Gloria Richards']
    },
    {
        title: 'Jane Black',
        items: ['Philip Jones', 'Product', 'Colleen Russell', 'Marvin Hawkins', 'Bruce Simmmons']
    }
]

export const Footer = () => {
    return (
        <section id="footer" className="flex flex-col items-center justify-center bg-[#252B42] text-white mt-20 lg:py-32 py-20">
            <div className='flex flex-col lg:flex-row lg:gap-28 lg:mx-60 text-center lg:text-left '>
                {/* Items */}
                <div className='flex flex-col lg:flex-row gap-16'>
                    <List title={FooterInformation[0].title} items={FooterInformation[0].items} />
                    <List title={FooterInformation[1].title} items={FooterInformation[1].items} />
                    <List title={FooterInformation[2].title} items={FooterInformation[2].items} />
                </div>
                {/* Contact Information */}
                <div className='flex flex-col gap-4 top-0'>
                    <Item icon={icon_gps} description={'7480 Mockingbird Hill undefined'} />
                    <Item icon={icon_phone} description={'(239) 555-0108'} />
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