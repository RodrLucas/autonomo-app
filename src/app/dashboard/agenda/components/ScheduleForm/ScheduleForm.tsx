"use client";

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const scheduleFormSchema = Yup.object().shape({
  scheduleDate: Yup.date()
    .required("Por favor, insira a data de agendamento")
    .typeError("Por favor, insira uma data válida"),
  client: Yup.string().required()
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
            <div className="relative mb-3 w-full">
              <label
                className="text-blueGray-600 mb-2 block text-xs font-bold uppercase"
                htmlFor="grid-password"
              >
                Data
              </label>
              <input
                // {...register("")}
                type="date"
                className="text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="relative mb-3 w-full">
              <label
                className="text-blueGray-600 mb-2 block text-xs font-bold uppercase"
                htmlFor="grid-password"
              >
                Horário de início
              </label>
              <input
                // {...register("")}
                type="time"
                className="text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-11/12">
            <div className="relative mb-3 w-full">
              <label
                className="text-blueGray-600 mb-2 block text-xs font-bold uppercase"
                htmlFor="grid-password"
              >
                Prestador de serviço
              </label>
              <input
                // {...register("")}
                placeholder="Prestador de serviço"
                type="text"
                className="text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-11/12">
            <div className="relative mb-3 w-full">
              <label
                className="text-blueGray-600 mb-2 block text-xs font-bold uppercase"
                htmlFor="grid-password"
              >
                Cliente
              </label>
              <input
                // {...register("")}
                placeholder="Cliente"
                type="text"
                className="text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
