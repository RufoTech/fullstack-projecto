"use client";

import { useEffect } from "react";
import { STUDENT_MODALS } from "@/data/mezunlar";

type Props = {
  studentId: string | null;
  onClose: () => void;
};

export default function StudentModal({ studentId, onClose }: Props) {
  const student = studentId ? STUDENT_MODALS[studentId] : null;

  useEffect(() => {
    if (!studentId) return;
    const prev = window.scrollY;
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.style.overflowY = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflowY = "";
      window.scrollTo({ top: prev, behavior: "smooth" });
      document.removeEventListener("keydown", onKey);
    };
  }, [studentId, onClose]);

  if (!studentId || !student) return null;

  return (
    <section className="student-detail is-open">
      <div className="student-detail-top text-end">
        <button className="code-btn-black code-close-btn" type="button" onClick={onClose}>
          <img src="/mezunlar/x.svg" alt="close" />
        </button>
      </div>
      <div className="student-detail-box" id={`student-detail-box-${studentId}`}>
        <div className="code-container-modal">
          <div className="student-detail-box-inner">
            <div className="student-detail-box-about">
              <div className="student-detail-box-about-img">
                <img src={student.img} alt="teacher" />
              </div>
              <div className="student-detail-box-about-text w-100">
                <div className="title">
                  <h2 className="code-visby-h2-bold w-50">{student.name}</h2>
                  <h2 className="code-caveat-h6-bold my-3">{student.caveatRole}</h2>
                  {student.job ? (
                    <p className="code-visby-body1-demibold">{student.job}</p>
                  ) : null}
                </div>
                <div className="word">
                  <h3 className="code-caveat-h3-semibold mb-2">{student.says}</h3>
                  <p className="code-visby-body2-medium">{student.quote}</p>
                </div>
              </div>
            </div>
            <div className="student-detail-box-lesson">
              <h5 className="code-visby-h5-bold">
                {student.name.split(" ")[0]} kimi sən də qoşul
              </h5>
              {student.lessons.length > 0 ? (
                <div className="lesson-items gap-2">
                  {student.lessons.map((lesson) => (
                    <div
                      className="lesson-item"
                      key={lesson.href + lesson.title}
                      onClick={() => {
                        window.location.href = lesson.href;
                      }}
                    >
                      <div className="img">
                        <img src={lesson.img} alt="teacher" />
                      </div>
                      <div>
                        <p className="code-visby-body1-demibold mb-1">{lesson.title}</p>
                        <p className="code-visby-subtitle1-medium"></p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
