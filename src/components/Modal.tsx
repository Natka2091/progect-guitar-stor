import type { ReactNode } from "react";
import { FiX } from "react-icons/fi";
import { twMerge } from 'tailwind-merge';


type Props = {
  onClose: () => void;
  children: ReactNode;
  className?: string;
};

export function Modal({onClose, children, className = "" }: Props) {
  return (
    <div
      className={twMerge("relative bg-white shadow-lg", className)}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-3 top-3 text-gray-400 hover:text-gray-700"
      >
        <FiX size={16} />
      </button>

      {children}
    </div>
  );
}