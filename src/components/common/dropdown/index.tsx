import { useEffect, useState } from "react";

type TDropdownProps = {
  children: JSX.Element;
  options: TOption[];
};

export type TOption = {
  label: string;
  id: string;
};

const Dropdown = ({ children, options }: TDropdownProps) => {
  const [currentOption, setCurrentOption] = useState<TOption>();

  return (
    <div className="flex items-center relative group">
      <div className="flex gap-1 items-center uppercase text-purple-400 text-xs relative">
        {children}
        <span>{currentOption?.label ?? options[0]?.label ?? ""}</span>
      </div>
      <ul className="w-full flex text-right flex-col gap-1 absolute top-8 invisible group-hover:visible bg-slate-950 px-4 py-1">
        {options.map((option, idx) => (
          <li key={idx}>
            <button className="text-purple-400 uppercase text-xs hover:text-yellow-400 transition-all">
              {option.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
