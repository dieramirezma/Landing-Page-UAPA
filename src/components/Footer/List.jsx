import { Link } from 'react-router-dom';

export const List = ({ title, items }) => {
    return (
        <div>
            <h1 className="pb-5 text-[14px]">{title}</h1>
            <ul>
                {items.map((item, index) => (
                    <li key={index} className="links mb-3 text-[11px]">
                        <Link to="#">{item}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}