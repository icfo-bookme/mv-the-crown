'use client';

import { useEffect, useState } from 'react';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });

export default function Schedules({ schedules }) {
    const [activeMonth, setActiveMonth] = useState('');

    useEffect(() => {
        if (schedules && Object.keys(schedules).length > 0) {
            setActiveMonth(Object.keys(schedules)[0]);
        }
    }, [schedules]);

    // Fallback UI for empty or undefined schedules
    if (!schedules || Object.keys(schedules).length === 0) {
        return (
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Upcoming Schedules</h2>
                <p className="text-gray-500">No upcoming schedules available.</p>
            </div>
        );
    }

    // Format date for display
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    // Format time for display (12-hour format)
    const formatTime = (timeString) => {
        const [hours, minutes] = timeString.substring(0, 5).split(':');
        const h = parseInt(hours);
        const ampm = h >= 12 ? 'PM' : 'AM';
        const formattedHours = h % 12 || 12;
        return `${formattedHours}:${minutes} ${ampm}`;
    };

    // Calculate duration between departure and return
    const calculateDuration = (departDate, departTime, returnDate, returnTime) => {
        const depart = new Date(`${departDate}T${departTime}`);
        const returnDt = new Date(`${returnDate}T${returnTime}`);
        const diffMs = returnDt - depart;

        if (diffMs < 0) return 'Invalid schedule';

        const hours = Math.floor(diffMs / (1000 * 60 * 60));
        const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

        return `${hours}h ${minutes}m`;
    };

    return (
        <div>
            <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-3xl text-center font-bold text-gray-950">Upcoming Schedule Of <span className="text-red-600">MV The Crown</span></h2>
                <h2 className="text-3xl text-center mt-2 font-semibold text-gray-700">Khulna-Saint Martin-Khulna</h2>
                <p className="text-center text-base font-semibold text-red-600">“Schedule may change with tidal state’’</p>
            </div>

            <div className={`bg-white ${roboto.className} rounded-lg shadow-md overflow-hidden max-w-5xl mx-auto my-8`}>
                {/* Month Tabs */}
                <div className="border-b border-gray-200">
                    <nav className="flex items-center justify-center overflow-x-auto gap-3 -mb-px">
                        {Object.keys(schedules).map((month) => (
                            <button
                                key={month}
                                className={`py-4 bg-blue-100 mt-2 px-6 text-sm  whitespace-nowrap border-b-2 transition-colors ${activeMonth === month
                                        ? 'border-blue-500 text-blue-950 font-bold text-base'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}
                                onClick={() => setActiveMonth(month)}
                            >
                                {month}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Schedule Table */}
                <div className="p-6">
                    {Object.entries(schedules).map(([month, monthSchedules]) => (
                        <div
                            key={month}
                            className={`${activeMonth === month ? 'block' : 'hidden'}`}
                        >
                            <div className="overflow-x-auto">
                                <table className="min-w-full border-separate border-spacing-x-[10px] divide-y divide-gray-200">
                                    <thead>
                                        <tr className="bg-gray-50">
                                            <th className="px-6 py-3 bg-[#0f5974] text-center text-base font-medium text-white uppercase tracking-wider">
                                                Departure
                                            </th>
                                            <th className="px-6 py-3 bg-[#0f5974] text-center text-base font-medium text-white uppercase tracking-wider">
                                                Time
                                            </th>
                                            <th className="px-6 py-3 bg-[#0f5974] text-center text-base font-medium text-white uppercase tracking-wider">
                                                Return
                                            </th>
                                            <th className="px-6 py-3 bg-[#0f5974] text-center text-base font-medium text-white uppercase tracking-wider">
                                                Time
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {monthSchedules.map((schedule) => {
                                            const duration = calculateDuration(
                                                schedule.depart_date,
                                                schedule.depart_time,
                                                schedule.return_date,
                                                schedule.return_time
                                            );

                                            return (
                                                <tr key={schedule.id} className="hover:bg-gray-50">
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm font-medium text-gray-900">
                                                            {formatDate(schedule.depart_date)}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">
                                                            {formatTime(schedule.depart_time)}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">
                                                            {formatDate(schedule.return_date)}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">
                                                            {formatTime(schedule.return_time)}
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
