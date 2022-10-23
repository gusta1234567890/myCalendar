import { useState } from "react"
import moment from 'moment'
import { MonthCard } from "../components/MonthCard"
import "../styles/geral.scss";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useForm } from 'react-hook-form'

export function Calendar() {
  const [dataAtual, setDataAtual] = useState(moment().format("YYYY"));
  const [mesAtual, setMesAtual] = useState(moment().format("MM"));
  const [ativadades, setAtividades] = [{}]
  const { register, handleSubmit, formState: { erros } } = useForm()
  const [isModalVisible, setIsModalVisible] = useState(false)

  const clickMaisCalandario = () => {
    if (mesAtual == 12) {
      setDataAtual(parseInt(dataAtual) + 1)
      setMesAtual(1)
    }
    else {
      setMesAtual(parseInt(mesAtual) + 1)
    }
  }

  const clickMenosCalandario = () => {
    if (mesAtual == 1) {
      setDataAtual(dataAtual - 1)
      setMesAtual(12)
    }
    else {
      setMesAtual(mesAtual - 1)
    }
  }

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const Modal = ({ onConfirm = () => { }, onClose = () => { }, children }) => {

    const clickOutside = (click) => {
      if (click.target.id == "modal") onClose()
    }

    return (
      <div id="modal" className="modal" onClick={clickOutside}>
        <div className="modal-conteiner">
          <button className="close" onClick={onClose} />
          <div className="modal-content">
            {children}
            <form>
              <div className="form-inicio">
                <label for="titulo">titulo</label>
                <input type="text" id="titulo" />
                <label for="data">data</label>
                <input type="date" id="data" />
              </div>
              <div>
              <label for="start">descrição</label>
              <textarea name="" id="" cols="10" rows="5" className="descricao"></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div id="calendar-page">
        <div className="header-page">
          <IconButton size="medium">
            <RemoveIcon className="icon" />
          </IconButton>

          {dataAtual}

          <IconButton size="medium" onClick={() => setIsModalVisible(true)}>
            <AddIcon className="icon" />
          </IconButton>
        </div>
        <div id="content">
          <div id="month-card">
            {/*Header que vai conter o cabeçalho do calendario*/}
            <div className="header">
              <div>
                <IconButton size="small" onClick={() => clickMenosCalandario()}>
                  <KeyboardArrowLeftIcon className="icon" />
                </IconButton>

              </div>
              <div>
                {month[mesAtual - 1]}
              </div>
              <div>
                <IconButton size="small" onClick={() => clickMaisCalandario()}>
                  <KeyboardArrowRightIcon className="icon" />
                </IconButton>

              </div>
            </div>
            <MonthCard
              key={month[mesAtual - 1]}
              month={month[mesAtual - 1]}
              currentMonth={mesAtual}
              currentYear={dataAtual}
              test={isModalVisible} />
          </div>
          {isModalVisible ? <Modal onClose={() => setIsModalVisible(false)} ><h1>TESTE</h1></Modal> : null}
        </div>
      </div>
    </div>
  )
}