import { supabase } from "@/lib/supabase/server";

export default async function CoursePage({ params }: any) {
  const courseSlug = (await params)?.course;

  // Fetch all lessons for this course
  const { data: lessons, error } = await supabase()
    .from("lessons")
    .select("*")
    .eq("course_slug", courseSlug)
    .order("order_number", { ascending: true });

  if (!lessons || lessons.length === 0) {
    return <div>No lessons found for this course</div>;
  }

  return (
    <div style={{ padding: 30 }}>
      <h1 style={{ fontSize: 30, fontWeight: "bold" }}>
        Lessons for {courseSlug}
      </h1>

      <ul style={{ marginTop: 20, paddingLeft: 0 }}>
        {lessons.map((lesson) => (
          <li key={lesson.id} style={{ marginBottom: 15, listStyle: "none" }}>
            <a
              href={`/courses/${courseSlug}/${lesson.order_number}`}
              style={{ fontSize: 20, color: "blue" }}
            >
              Lesson {lesson.order_number} – {lesson.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
