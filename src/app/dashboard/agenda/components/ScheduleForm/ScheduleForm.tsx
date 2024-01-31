"use client";

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import InputSchedule from "./InputSchedule";

const scheduleFormSchema = Yup.object().shape({
  scheduleDate: Yup.date()
    .required("Por favor, insira a data de agendamento")
    .typeError("Por favor, insira uma data válida"),
  client: Yup.string().required(),
});

export function ScheduleForm() {
  const {
    register,
    handleSubmit,
    formState: { errors: schemaErrors },
  } = useForm({
    mode: "onChange",
    // resolver: yupResolver(scheduleFormSchema),
  });

  const handleScheduleForm = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleScheduleForm)}>
        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-6/12">
            <InputSchedule label="Data" type="date" />
          </div>
          <div className="w-full px-4 lg:w-6/12">
            <InputSchedule label="Horário de início" type="time" />
          </div>
          <div className="w-full px-4 lg:w-6/12">
            <InputSchedule
              label="Prestador de serviço"
              type="text"
              placeholder="Informe o nome do Prestador de serviço"
            />
          </div>
          <div className="w-full px-4 lg:w-6/12">
            <InputSchedule
              label="Cliente"
              type="text"
              placeholder="Informe o nome do cliente"
            />
          </div>
          <div className="w-full px-4 lg:w-6/12">
            <InputSchedule
              label="Serviços"
              type="text"
              placeholder="Informe o tipo de serviço"
            />
          </div>
          <div className="w-full px-4 lg:w-4/12">
            <InputSchedule
              label="Preço"
              type="number"
              placeholder="Preço do serviço"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
