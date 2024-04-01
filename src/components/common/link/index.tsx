import { FaBackward } from "react-icons/fa";

type TLinkProps = {
  label: string;
  path: string;
};

const Link = ({ label, path }: TLinkProps) => {
  return (
    <a
      href={path}
      className="flex gap-1 py-2 text-purple-400 items-center uppercase font-semibold text-xs
      hover:text-purple-500 transition-all"
    >
      <FaBackward />
      <span>{label}</span>
    </a>
  );
};

export default Link;
