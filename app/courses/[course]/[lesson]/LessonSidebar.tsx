"use client";

import { useState } from "react";

export default function LessonSidebar({
  lessons,
  courseSlug,
  lessonNumber,
}: any) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Hamburger */}
      <button
        onClick={() => setOpen(true)}
        style={{
          position: "fixed",
          top: 15,
          left: 15,
          zIndex: 1100,
          padding: "8px 12px",
          background: "#fff",
          borderRadius: 6,
          border: "1px solid #ccc",
          cursor: "pointer",
          display: "block",
        }}
        className="mobile-only"
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: open ? 0 : "-280px",
          height: "100vh",
          width: 260,
          background: "#fafafa",
          borderRight: "1px solid #ddd",
          padding: 20,
          overflowY: "auto",
          transition: "transform 0.3s ease",
          zIndex: 1000,
        }}
      >
        {/* Close button (inside sidebar) */}
        <button
          onClick={() => setOpen(false)}
          style={{
            position: "absolute",
            top: 15,
            right: 15,
            fontSize: 22,
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          className="mobile-only"
        >
          ✕
        </button>

        <h3 style={{ marginTop: 40 }}>Lessons</h3>

        {lessons.map((l: any) => {
          const active = l.order_number === lessonNumber;
          return (
            <a
              key={l.order_number}
              href={`/courses/${courseSlug}/${l.order_number}`}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "10px 12px",
                marginBottom: 8,
                borderRadius: 6,
                background: active ? "#0070f3" : "transparent",
                color: active ? "white" : "#333",
                textDecoration: "none",
                fontWeight: active ? "bold" : "normal",
              }}
            >
              Lesson {l.order_number} – {l.title}
            </a>
          );
        })}
      </div>

      {/* Desktop only CSS */}
      <style>{`
        @media (min-width: 768px) {
          .mobile-only {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
