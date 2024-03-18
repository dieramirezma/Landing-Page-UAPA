export const Item = ({ icon, description }) => {
    return (
        <div className="flex flex-row md:flex-col lg:items-center lg:text-center md:text-left gap-6 ">
            <img src={icon} alt="Icon" />
            <p className='text-bluePrimary text-[14px]'>{description}</p>
        </div>
    )
}