function IconButtonBox({ title, fun, type, bgcolor, src }) {
  const bgColorClass = bgcolor ? `bg-[${bgcolor}]` : "bg-[#7a5cfa]";

  return (
    <button
      className={`p-2 rounded-full  ${bgColorClass}`}
      type={type}
      onClick={type === "button" ? fun : null}
    >
      <img className="w-3" src={src} />
    </button>
  );
}

export default IconButtonBox;
