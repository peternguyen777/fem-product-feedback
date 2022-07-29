import React from "react";

function ButtonCategory({
  children,
  setCategorySelect,
  categorySelect,
  setMobMenuOpen,
}) {
  return (
    <div
      className={`group flex h-[30px] w-fit cursor-pointer select-none items-center rounded-[10px]  px-4 transition-colors duration-200  active:bg-blue ${
        categorySelect === children.toLowerCase()
          ? `bg-blue`
          : `bg-bluegray hover:bg-lightblue`
      }`}
      onClick={() => {
        setCategorySelect(children.toLowerCase());
        setMobMenuOpen(false);
      }}
    >
      <p
        className={`body3 select-none ${
          categorySelect === children.toLowerCase()
            ? `text-white`
            : `text-blue group-active:text-white`
        }`}
      >
        {children}
      </p>
    </div>
  );
}

export default ButtonCategory;
