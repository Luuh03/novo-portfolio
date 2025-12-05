import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ open, onClose, children }: ModalProps) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    if (open) {
      document.addEventListener("keydown", handleEsc);
      return () => document.removeEventListener("keydown", handleEsc);
    }

  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      ref={overlayRef}
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
        e.stopPropagation();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center 
        bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div
        ref={contentRef}
        role="dialog"
        aria-modal="true"
        className="bg-(--card-background) rounded-2xl shadow-xl max-w-lg w-full p-6 animate-scaleIn">
        {children}
      </div>
    </div>,
    document.body
  )
}

export default Modal