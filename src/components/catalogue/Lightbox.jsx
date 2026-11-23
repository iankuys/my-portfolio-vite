import { useEffect, useRef } from "react";
export default function Lightbox({ project, index, setIndex, onClose }) {
  const dialog = useRef(null);
  const opener = useRef(null);
  const figure = project.figures[index];
  useEffect(() => {
    if (!opener.current) opener.current = document.activeElement;
    const overflow = document.body.style.overflow;
    const node = dialog.current;
    node.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      node.close();
      document.body.style.overflow = overflow;
      opener.current?.focus?.({ preventScroll: true });
    };
  }, []);
  return (
    <dialog
      className="lightbox"
      ref={dialog}
      aria-label={`${project.title} image viewer`}
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onKeyDown={(e) => {
        if (e.key === "Tab") {
          const controls = Array.from(
            dialog.current.querySelectorAll("button:not(:disabled)"),
          );
          const first = controls[0];
          const last = controls[controls.length - 1];
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
        if (e.key === "ArrowRight") {
          e.preventDefault();
          setIndex(Math.min(index + 1, project.figures.length - 1));
        }
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          setIndex(Math.max(0, index - 1));
        }
      }}
    >
      <div className="lightbox__header">
        <span className="mono">
          {project.id} · {project.title}
        </span>
        <button autoFocus className="text-button" onClick={onClose}>
          Close
        </button>
      </div>
      <figure className="lightbox__figure">
        <img src={figure.src} alt={figure.alt} />
        <figcaption>{figure.caption}</figcaption>
      </figure>
      <div className="lightbox__footer">
        <button
          className="text-button"
          disabled={index === 0}
          onClick={() => setIndex(index - 1)}
        >
          Previous
        </button>
        <span className="mono" aria-live="polite">
          {index + 1} / {project.figures.length}
        </span>
        <button
          className="text-button"
          disabled={index === project.figures.length - 1}
          onClick={() => setIndex(index + 1)}
        >
          Next
        </button>
      </div>
    </dialog>
  );
}
