// import { supabase } from "@/lib/supabase/server";

// export default async function LessonDetail({ params }: any) {
//   const courseSlug = params.course;
//   const lessonNumber = Number(params.lesson);

//   const { data: lessons, error } = await supabase()
//     .from("lessons")
//     .select("*")
//     .eq("course_slug", courseSlug)
//     .order("order_number", { ascending: true });

//   // ✅ FIX: if lessons is null
//   if (!lessons || lessons.length === 0) {
//     return <div>No lessons found</div>;
//   }

//   const lesson = lessons.find((l) => l.order_number === lessonNumber);

//   if (!lesson) {
//     return <div>Lesson Not Found</div>;
//   }

//   const nextLesson = lessons.find((l) => l.order_number === lessonNumber + 1);
//   const prevLesson = lessons.find((l) => l.order_number === lessonNumber - 1);

//   return (
//     <div style={{ padding: 30, maxWidth: 800, margin: "0 auto" }}>
//       <h1 style={{ fontSize: 32, fontWeight: "bold", marginBottom: 20 }}>
//         {lesson.title}
//       </h1>

//       <div
//         style={{
//           border: "1px solid #ddd",
//           padding: 20,
//           borderRadius: 10,
//           lineHeight: 1.8,
//           fontSize: 18,
//           background: "#fafafa",
//         }}
//         dangerouslySetInnerHTML={{ __html: lesson.content }}
//       />

//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           marginTop: 40,
//         }}
//       >
//         {prevLesson ? (
//           <a
//             href={`/courses/${courseSlug}/${prevLesson.order_number}`}
//             style={{
//               padding: "10px 20px",
//               background: "black",
//               color: "white",
//               borderRadius: 6,
//             }}
//           >
//             ◀ Previous Lesson
//           </a>
//         ) : (
//           <div></div>
//         )}

//         {nextLesson ? (
//           <a
//             href={`/courses/${courseSlug}/${nextLesson.order_number}`}
//             style={{
//               padding: "10px 20px",
//               background: "#0070f3",
//               color: "white",
//               borderRadius: 6,
//             }}
//           >
//             Next Lesson ▶
//           </a>
//         ) : (
//           <div></div>
//         )}
//       </div>
//     </div>
//   );
// }







import { supabase } from "@/lib/supabase/server";

export default async function CoursePage({ params }: any) {
  const p = await params;
  const courseSlug = p.course;

  const supa = await supabase();

  const { data: lessons } = await supa
    .from("lessons")
    .select("*")
    .eq("course_slug", courseSlug)
    .order("order_number", { ascending: true });

  if (!lessons || lessons.length === 0) {
    return <div style={{ padding: 30 }}>No lessons found</div>;
  }

  return (
    <div style={{ padding: "30px", maxWidth: 800, margin: "0 auto" }}>
      <h1 style={{ fontSize: 32, fontWeight: "bold" }}>
        📘 {courseSlug.replace("-", " ").toUpperCase()}
      </h1>

      <p style={{ fontSize: 18, marginTop: 10 }}>
        ဒီသင်တန်းမှာ စုစုပေါင်း {lessons.length} သင်ခန်းစာရှိပါတယ်။
      </p>

      {/* Start Course Button */}
      <a
        href={`/courses/${courseSlug}/1`}
        style={{
          display: "inline-block",
          marginTop: 20,
          padding: "12px 20px",
          background: "#0070f3",
          color: "white",
          borderRadius: 8,
          fontSize: 18,
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        🚀 Start Course
      </a>

      <hr style={{ margin: "30px 0" }} />

      <h2 style={{ fontSize: 24, marginBottom: 10 }}>📚 Lessons</h2>

      {/* Lesson List */}
      <div style={{ display: "grid", gap: 15 }}>
        {lessons.map((l: any) => (
          <a
            key={l.order_number}
            href={`/courses/${courseSlug}/${l.order_number}`}
            style={{
              padding: 15,
              border: "1px solid #ddd",
              borderRadius: 8,
              textDecoration: "none",
              color: "#333",
              background: "white",
              display: "block",
            }}
          >
            <h3 style={{ margin: 0, fontSize: 20 }}>
              Lesson {l.order_number}: {l.title}
            </h3>
          </a>
        ))}
      </div>
    </div>
  );
}
