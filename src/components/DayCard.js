import { useEffect, useState } from "react"
import { Days } from "./CalendarStyled"
import moment from 'moment'

export function DayCard(props) {
    const [state, setState] = useState("");
    const diaAtual = moment().format("DD/MM/YYYY")
    const day = props.day._d;

    useEffect(() => {
        const currentMonth = new Date(props.month + ",01," + props.year)

        if (diaAtual == props.day.format("DD/MM/YYYY")) {
            setState("selected")
        }

        if (day.getMonth() !== currentMonth.getMonth()) {
            setState("nonPertenceMonth");
            return;
        }
    })
    
    return <Days className={props.key} state={state}>{props.day.format("DD").toString()}</Days>
}