import features_screen from '../../assets/images/features-screen.svg'
import features_screen_mobile from '../../assets/images/features-screen-mobile.svg'
import icon_circle_rect from '../../assets/images/icon-circle-rect.svg'
import icon_pencil from '../../assets/images/icon-pencil.svg'
import icon_brush from '../../assets/images/icon-brush.svg'
import { Card } from './Card'


const CardsInformation = [
    {
        icon: icon_circle_rect,
        title: 'OpenType features Variable fonts',
        description: 'Slate helps you see how many more days you need to work to reach your financial goal.'
    },
    {
        icon: icon_pencil,
        title: 'Design with real data',
        description: 'Slate helps you see how many more days you need to work to reach your financial goal.'
    },
    {
        icon: icon_brush,
        title: 'Fastest way to take action',
        description: 'Slate helps you see how many more days you need to work to reach your financial goal.'
    },
]

export const Features = () => {
    return (
        <section id="features" className='flex flex-col items-center justify-center pt-10'>
            <div className='text-center mb-4'>
                <h1 className="text-bluePrimary font-thin text-[40px]">
                    Features
                </h1>
                <div className='hidden md:block'>
                    <p className='text-graySecondary text-[20px]'>Most calendars are designed for teams.</p>
                    <p className='text-graySecondary text-[20px]'>Slate is designed for freelancers.</p>
                </div>
                <p className='text-graySecondary md:hidden text-[20px]'>Most calendars are designed for teams.</p>
            </div>
            {/* Video Image Mobile */}
            <div className='md:hidden'>
                <img src={features_screen_mobile} alt="Video Screen" />
            </div>
            {/* Cards */}
            <div className='flex flex-col md:flex-row w-7/12 gap-12 mt-16 mb-16 items-center justify-center'>
                <Card icon={CardsInformation[0].icon} title={CardsInformation[0].title} description={CardsInformation[0].description} />
                <Card icon={CardsInformation[1].icon} title={CardsInformation[1].title} description={CardsInformation[1].description} />
                <Card icon={CardsInformation[2].icon} title={CardsInformation[2].title} description={CardsInformation[2].description} />
            </div>
            {/* Video Image Desktop */}
            <div className='mx-20 hidden md:block'>
                <img src={features_screen} alt="Video Screen" />
            </div>
        </section>
    )
}