"use client";

import { useRouter } from "next/navigation";
import LessonSidebar from "./LessonSidebar";

interface LessonClientProps {
  lessons: { order_number: number; title: string }[];
  courseSlug: string;
  lessonNumber: number;
}

export default function LessonClient({
  lessons,
  courseSlug,
  lessonNumber,
}: LessonClientProps) {
  const router = useRouter();
  const currentIndex = lessons.findIndex((l) => l.order_number === lessonNumber);

  const prevLesson = lessons[currentIndex - 1];
  const nextLesson = lessons[currentIndex + 1];

  const goToLesson = (lessonNumber: number) => {
    router.push(`/courses/${courseSlug}/${lessonNumber}`);
  };

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <LessonSidebar lessons={lessons} courseSlug={courseSlug} lessonNumber={lessonNumber} />

      {/* Main content */}
      <div style={{ flex: 1, padding: "20px 40px", maxWidth: 800, margin: "0 auto" }}>
        <h1>Lesson {lessonNumber}</h1>
        <p>Lesson content goes here...</p>

        {/* Navigation buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 40,
          }}
        >
          <button
            onClick={() => prevLesson && goToLesson(prevLesson.order_number)}
            disabled={!prevLesson}
            style={{
              opacity: prevLesson ? 1 : 0.5,
              padding: "8px 16px",
              borderRadius: 6,
              border: "1px solid #0070f3",
              background: prevLesson ? "#0070f3" : "#ccc",
              color: "white",
              cursor: prevLesson ? "pointer" : "not-allowed",
            }}
          >
            ← Previous
          </button>

          <button
            onClick={() => nextLesson && goToLesson(nextLesson.order_number)}
            disabled={!nextLesson}
            style={{
              opacity: nextLesson ? 1 : 0.5,
              padding: "8px 16px",
              borderRadius: 6,
              border: "1px solid #0070f3",
              background: nextLesson ? "#0070f3" : "#ccc",
              color: "white",
              cursor: nextLesson ? "pointer" : "not-allowed",
            }}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
