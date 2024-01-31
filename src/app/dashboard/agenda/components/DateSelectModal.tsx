import { IDateInfo } from "../types/DateInfo";
import { ScheduleForm } from "./ScheduleForm/ScheduleForm";

export function DateSelectForm({ dateInfo }: { dateInfo: IDateInfo | undefined }) {
  console.log('dateInfo DateSelectForm', dateInfo)
  return (
    <div>
      <ScheduleForm />
    </div>
  );
}
