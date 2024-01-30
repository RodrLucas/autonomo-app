"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import ptBrLocale from "@fullcalendar/core/locales/pt-br";
import { useDisclosure } from "@chakra-ui/react";
import { DefaultModal } from "../../components/DefaultModal";
import { DateSelectForm } from "./DateSelectModal";
import { useState } from "react";
import { IDateInfo } from "../types/DateInfo";

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
        initialView="timeGridWeek"
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
