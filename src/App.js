import React from "react";
import { useReactToPrint } from 'react-to-print'

import {Header, Footer, Avatar, Title, Descr, PrintButton} from "./components";

const App = () => {
  const componentRef = React.useRef()
  const handlePrintClick = useReactToPrint({
    content: () => componentRef.current,
  })

  return (
    <div className="ui-wrapper">
      <Header onClick={handlePrintClick}/>
      <Title size='1' left='167px'>Конструктор резюме</Title>
      <div className="ui-content-wrapper" ref={componentRef}>
        <section className="ui-section">
          <div className="ui-container">
            <section>
              <Title size='2'>Заполните основную информацию</Title>
              <Avatar/>
              <Descr >Фамилия</Descr>
              <Descr >Имя</Descr>
              <Descr >Отчество</Descr>
              <Descr >Желаемая должность</Descr>
              <Descr >Желаемая зарплата</Descr>
            </section>
            <section>
              <Title size='2'>Контактные данные</Title>
              <Descr >Телефон</Descr>
              <Descr >Электронная почта / tg</Descr>
              <Descr >Github</Descr>
            </section>
            <PrintButton onClick={handlePrintClick}/>
          </div>
        </section>
      </div>
      <Footer />
    </div>)
  };

export default App;