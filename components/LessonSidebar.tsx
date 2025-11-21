import LessonSidebar from "@/components/LessonSidebar";
import { supabase } from "@/lib/supabase/server";

export default async function LessonPage({ params }: any) {
  const { course: courseSlug, lesson } = await params;
  const lessonNumber = Number(lesson);

  const sb = await supabase();

  const { data: lessons } = await sb
    .from("lessons")
    .select("*")
    .eq("course_slug", courseSlug)
    .order("order_number");

  if (!lessons) return <div>Error loading lesson data</div>;

  const currentLesson = lessons.find((l: any) => l.order_number === lessonNumber);
  const prevLesson = lessons.find((l: any) => l.order_number === lessonNumber - 1);
  const nextLesson = lessons.find((l: any) => l.order_number === lessonNumber + 1);

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      {/* Sidebar */}
      <LessonSidebar
        lessons={lessons}
        courseSlug={courseSlug}
        lessonNumber={lessonNumber}
      />

      {/* Lesson Content */}
      <div style={{ padding: 20, flex: 1 }}>
        <h1 style={{ fontSize: 26, fontWeight: "bold" }}>{currentLesson.title}</h1>

        <div
          style={{ marginTop: 20, fontSize: 18, lineHeight: 1.7 }}
          dangerouslySetInnerHTML={{
            __html: currentLesson.content.replace(/\n/g, "<br/>"),
          }}
        />

        {/* Navigation Buttons */}
        <div style={{ marginTop: 40, display: "flex", justifyContent: "space-between" }}>
          {prevLesson ? (
            <a
              href={`/courses/${courseSlug}/${prevLesson.order_number}`}
              style={{
                padding: "12px 20px",
                background: "#ddd",
                borderRadius: 6,
                textDecoration: "none",
                color: "#333",
                fontWeight: "bold",
              }}
            >
              ⬅ Previous
            </a>
          ) : <div></div>}

          {nextLesson ? (
            <a
              href={`/courses/${courseSlug}/${nextLesson.order_number}`}
              style={{
                padding: "12px 20px",
                background: "#0070f3",
                borderRadius: 6,
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Next ➜
            </a>
          ) : <div></div>}
        </div>
      </div>
    </div>
  );
}
