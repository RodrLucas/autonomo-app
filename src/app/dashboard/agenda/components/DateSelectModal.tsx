import { IDateInfo } from "../types/DateInfo";
import { ScheduleForm } from "./ScheduleForm/ScheduleForm";

interface IDateSelectFormProps {
  dateInfo: IDateInfo | undefined;

}

export function DateSelectForm({ dateInfo }: IDateSelectFormProps) {
  console.log('dateInfo DateSelectForm', dateInfo)
  return (
    <div>
      <ScheduleForm />
    </div>
  );
}
