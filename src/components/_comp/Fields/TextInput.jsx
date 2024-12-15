function TextInput({
  showLabel,
  label,
  id,
  placeholder,
  defaultValue,
  type = "text",
  overwriteClassName = "",
  overwriteInputClassName = "",
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
          overwriteInputClassName.length > 0
            ? overwriteInputClassName
            : "text-black border-3 border-black rounded-md bg-slate-400 ring-2 ring-slate-100 text-white px-4 px-2 h-10"
        }
      />
    </div>
  );
}

export default TextInput;
