"use client"

import { useEffect, useState } from "react";
import CountUp from 'react-countup';

type TimeInIndustry = {
    years: number;
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export default function TimeOfService() {

    const [timeInIndustry, setTimeInIndustry] = useState<TimeInIndustry>();

    useEffect(() => {
        fetch("/api/cv")
            .then(res => res.json())
            .then(data => setTimeInIndustry(data.timeInIndustry));
    }, []);

    if(!timeInIndustry) return null;

    return (
        <div className="flex flex-col gap-2">
            <div className="text-3xl">

                I have been in the industry for{' '}<CountUp className="font-extrabold text-green-600" end={timeInIndustry.years} duration={2.5} /> years{' '}
                <div className="text-orange-600 text-xs">
                    {timeInIndustry.years} years,{' '}
                    {timeInIndustry.months} months,{' '}
                    {timeInIndustry.days} days,{' '}
                    {timeInIndustry.hours} hours,{' '}
                    {timeInIndustry.minutes} minutes, and{' '}
                    {timeInIndustry.seconds} seconds.{' '}

                    <span className="text-gray-600">to be exact</span>
                </div>
            </div>
        </div>
    )

}