export default function calendarBuild(value) {

    //define o primeiro e o ultimo dia de cada cartao do mes
    const startDay = value.clone().startOf("month").startOf("week")
    const endDay = value.clone().endOf("month").endOf("week")

    //define divide o mes em semanas de 7 dias
    const day = startDay.clone().subtract(1, "day")

    const calendatBackup = []

    while (day.isBefore(endDay, "day")) {
        calendatBackup.push(
            Array(7)
                .fill(0)
                .map(() => day.add(1, "day").clone())
        )
    }
    return calendatBackup
}