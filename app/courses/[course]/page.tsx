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

  const p = await params;          // ✅ FIX
  const courseSlug = p.course;     // correct
  const supa = await supabase();   // supabase client

  const { data: lessons } = await supa
    .from("lessons")
    .select("*")
    .eq("course_slug", courseSlug)
    .order("order_number", { ascending: true });

  if (!lessons || lessons.length === 0) {
    return <div>No lessons found</div>;
  }

  return (
    <div style={{ padding: 30 }}>
      <h1 style={{ fontSize: 28, fontWeight: "bold" }}>
        Lessons for {courseSlug}
      </h1>

      <ul style={{ marginTop: 20 }}>
        {lessons.map((l: any) => (
          <li key={l.id} style={{ marginBottom: 10 }}>
            <a
              href={`/courses/${courseSlug}/${l.order_number}`}
              style={{ color: "blue", textDecoration: "underline" }}
            >
              Lesson {l.order_number} – {l.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
