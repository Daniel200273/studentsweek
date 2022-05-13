import { useEffect } from 'react';
import { getFullName, getPropic } from 'lib/utils';
import DashboardLayout from 'layouts/Dashboard';

import style from 'styles/pages/dash.module.css';

const DAY_NAMES = [
    'Lunedì',
    'Martedì',
    'Mercoledì',
    'Giovedì',
    'Venerdì',
    'Sabato',
    'Domenica',
];

export default function Dashboard({ session, info, logout }) {
    const getDayName = (i) =>
        DAY_NAMES[(new Date(info.DAY_OF_START).getDay() + i - 1) % 7];

    useEffect(() => {}, [session, info]);

    return info && session ? (
        <main className={style.spacer}>
            <div className={style.wrapper}>
                <button onClick={logout} className={style.logoutButton}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                    </svg>
                </button>
                <h2>
                    <img className={style.propic} src={getPropic(session)} />
                    Hey {getFullName(session)}{' '}
                </h2>
                <p className={style.intro}>{info.INTRO_DESC}</p>
                {Array.from({ length: info.N_OF_DAYS }).map((v, i) => (
                    <>
                        <h3>{getDayName(i)}</h3>
                    </>
                ))}
            </div>
        </main>
    ) : undefined;
}

Dashboard.getLayout = (page) => {
    return <DashboardLayout>{page}</DashboardLayout>;
};
