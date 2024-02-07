"use client";

import { useDisclosure } from "@chakra-ui/react";
import ptBrLocale from "@fullcalendar/core/locales/pt-br";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useState } from "react";
import { DefaultModal } from "../../components/DefaultModal";
import { IDateInfo } from "../types/DateInfo";
import { DateSelectForm } from "./DateSelectModal";

export function MyCalendar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedInfoDate, setSelectedInfoDate] = useState<IDateInfo>();
  const handleEventClick = (clickInfo: any) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  };

  const handleDateSelect = (selectInfo: IDateInfo) => {
    setSelectedInfoDate(selectInfo);
    onOpen();
  };

  return (
    <div id="calendar" className="min-h-screen">
      <FullCalendar
        locale={ptBrLocale}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        eventClick={handleEventClick}
        dateClick={handleDateSelect}
        height={1000}
        dayHeaderFormat={{ weekday: "short", day: "numeric", month: 'short' }}
      />
      <DefaultModal
        isOpen={isOpen}
        onClose={onClose}
        title="Criando Atendimento"
      >
        <DateSelectForm dateInfo={selectedInfoDate} />
      </DefaultModal>
    </div>
  );
}
