export const Item = ({ icon, description }) => {
    return (
        <div className="flex flex-row gap-4">
            <img src={icon} alt="Icon" />
            <p className='text-white text-[11px]'>{description}</p>
        </div>
    )
}