"use client";
import classNames from "classnames";
import {useParams} from "next/navigation";

export const EnterpriseCovenants = ["essbio", "embotelladora-andina"] as const;
export type EnterpriseCovenant = typeof EnterpriseCovenants[number];

export default function Sidebar() {
    const params = useParams();

    const covenants: {id: EnterpriseCovenant; title: string}[] = [
        {id: 'essbio', title: 'Essbio'},
        {id: 'embotelladora-andina', title: 'Embotelladora Andina'},
    ]

    return (
        <ul className={'space-y-1'}>
            {covenants.map(covenant => (
                <CovenantLi
                    key={covenant.id}
                    id={covenant.id}
                    title={covenant.title}
                    active={params.id === covenant.id}
                />
            ))}
        </ul>
    )
}

function CovenantLi(props: {id: string; title: string; active: boolean}) {
    return (
        <li className={classNames(
            'hover:bg-gray-200',
            props.active && 'bg-gray-200'
        )}>
            <a
                href={`/dashboard/${props.id}`}
                className={'block py-2 px-4 !text-black !no-underline'}
            >
                {props.title}
            </a>
        </li>
    )
}