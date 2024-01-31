import { HTMLInputTypeAttribute } from "react";

export default function InputSchedule({
  label,
  type,
  placeholder,
}: {
  label: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
}) {
  return (
    <div className="relative mb-3 w-full">
      <label className="text-blueGray-600 mb-2 block text-xs font-bold uppercase">
        {label}
      </label>
      <input
        // {...register("")}
        placeholder={placeholder ?? ""}
        type={type}
        className="text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear"
      />
    </div>
  );
}
