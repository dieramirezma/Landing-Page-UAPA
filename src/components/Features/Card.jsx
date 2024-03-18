export const Card = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col items-center text-center gap-6 ">
            <img src={icon} alt="Icon" />
            <h3 className='text-bluePrimary'>{title}</h3>
            <p className='text-bluePrimary'>{description}</p>
        </div>
    )
}