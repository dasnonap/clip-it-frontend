import { useState } from "react";

function TextInput({
  showLabel,
  label,
  id,
  placeholder,
  defaultValue,
  type = "text",
  overwriteClassName = "",
  overwriteInputClassName = "",
  register,
  validation={},
  hasError,
}) {
  return (
    <div
      className={
        overwriteClassName.length > 0
          ? overwriteClassName
          : "flex flex-col space-y-2 align-center "
      }
    >
      {showLabel === true && label.length > 0 ? (
        <label htmlFor={id} className="text-xs">
          {label}
        </label>
      ) : (
        ""
      )}
      
      <input
        type={type}
        id={id}
        placeholder={placeholder ?? ""}
        defaultValue={defaultValue}
        className={
          (
            overwriteInputClassName.length > 0
              ? overwriteInputClassName
              : "text-black border-solid border-2 rounded-md bg-slate-400 ring-2 ring-slate-100 text-white px-4 px-2 h-10 focus:outline-none"
          )
          + ' ' 
          + (
            hasError ? 'border-red-500' : 'border-sky-500'
          )
        }
        {...register(id, validation)}
      />
    </div>
  );
}

export default TextInput;
