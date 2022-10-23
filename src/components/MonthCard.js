import { useEffect, useState } from "react"
import moment from 'moment'
import { DayCard } from "./DayCard";
import calendarBuild from "./CalendarBuild";

export function MonthCard(props) {
    moment.updateLocale("pt", {
        months: [
            "Janeiro",
            "Fevereiro",
            "Março",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
            "Setembro",
            "Outubro",
            "Novembro",
            "Dezembro",
        ],
    });

    const [value, setValue] = useState
        (
            moment().locale("pt").month(props.month).year(props.currentYear)
        )

    const [calendar, setCalendar] = useState([])
    const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"]
    //define o primeiro e o ultimo dia do cartao do mes e monta cada semana do 
    //cartao mes


    useEffect(() => {
        setValue(value.year(props.currentYear))
        setCalendar(calendarBuild(value))
    }, [value, props.currentYear])

    return <div>
        {/*div que vai conter os dias do calendario*/}
        <div className="week-days">{weekDays.map(value => (
            <div className="week-day">{value}</div>
        ))}</div>
        {
            calendar.map((week) => (
                <div className="week" key={week}>
                    {week.map(day => (
                        <DayCard
                            key={day._d.getTime() + props.month}
                            day={day}
                            month={props.month}
                            week={week}
                            year={props.currentYear}
                            teste={props.teste} />
                    ))}
                </div>
            ))
        }
        {
        }
    </div>
}