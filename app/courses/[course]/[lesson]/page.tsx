// import { supabase } from "@/lib/supabase/server";

// export default async function LessonPage({ params }: any) {
//   const courseSlug = (await params)?.course;
//   const lessonNumber = parseInt((await params)?.lesson);

//   const { data: lessons } = await supabase()
//     .from("lessons")
//     .select("order_number, title")
//     .eq("course_slug", courseSlug)
//     .order("order_number", { ascending: true });

//   const { data: currentLesson } = await supabase()
//     .from("lessons")
//     .select("*")
//     .eq("course_slug", courseSlug)
//     .eq("order_number", lessonNumber)
//     .single();

//   if (!currentLesson) {
//     return <div>Lesson not found</div>;
//   }

//   // ▶ Next / Previous calculation
//   const prevLesson = lessons?.find((l) => l.order_number === lessonNumber - 1);
//   const nextLesson = lessons?.find((l) => l.order_number === lessonNumber + 1);

//   return (
//     <div style={{ display: "flex", minHeight: "100vh" }}>
//       {/* ---------- Sidebar ---------- */}
      // <div
      //   style={{
      //     width: 280,
      //     borderRight: "1px solid #ddd",
      //     padding: 20,
      //     position: "sticky",
      //     top: 0,
      //     height: "100vh",
      //     overflowY: "auto",
      //     background: "#fafafa",
      //   }}
      // >
      //   <h3 style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}>
      //     Lessons
      //   </h3>

      //   {lessons?.map((l) => {
      //     const active = l.order_number === lessonNumber;
      //     return (
      //       <a
      //         key={l.order_number}
      //         href={`/courses/${courseSlug}/${l.order_number}`}
      //         style={{
      //           display: "block",
      //           padding: "10px 12px",
      //           marginBottom: 8,
      //           borderRadius: 6,
      //           background: active ? "#0070f3" : "transparent",
      //           color: active ? "white" : "#333",
      //           fontWeight: active ? "bold" : "normal",
      //           textDecoration: "none",
      //           fontSize: 15,
      //         }}
      //       >
      //         Lesson {l.order_number} – {l.title}
      //       </a>
      //     );
      //   })}
      // </div>

//       {/* ---------- Content ---------- */}
//       <div style={{ padding: 30, flex: 1 }}>
//         <h1 style={{ fontSize: 32, fontWeight: "bold" }}>
//           {currentLesson.title}
//         </h1>

//         <div
//   style={{ marginTop: 20, fontSize: 18, lineHeight: 1.7 }}
//   dangerouslySetInnerHTML={{
//     __html: currentLesson.content.replace(/\n/g, "<br/>")
//   }}
// />


//         {/* ---------- Next / Previous Buttons ---------- */}
//         <div
//           style={{
//             marginTop: 40,
//             display: "flex",
//             justifyContent: "space-between",
//           }}
//         >
//           {/* Previous Button */}
//           {prevLesson ? (
//             <a
//               href={`/courses/${courseSlug}/${prevLesson.order_number}`}
//               style={{
//                 padding: "12px 20px",
//                 background: "#ddd",
//                 borderRadius: 6,
//                 textDecoration: "none",
//                 color: "#333",
//                 fontWeight: "bold",
//               }}
//             >
//               ⬅ Previous
//             </a>
//           ) : (
//             <div></div>
//           )}

//           {/* Next Button */}
//           {nextLesson ? (
//             <a
//               href={`/courses/${courseSlug}/${nextLesson.order_number}`}
//               style={{
//                 padding: "12px 20px",
//                 background: "#0070f3",
//                 borderRadius: 6,
//                 textDecoration: "none",
//                 color: "white",
//                 fontWeight: "bold",
//               }}
//             >
//               Next ➜
//             </a>
//           ) : (
//             <div></div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }




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

  if (!lessons || lessons.length === 0) {
    return <div>No lessons found</div>;
  }

  const currentLesson = lessons.find(l => l.order_number === lessonNumber);

  if (!currentLesson) {
    return <div>Lesson not found</div>;
  }

  const prevLesson = lessons.find(l => l.order_number === lessonNumber - 1);
  const nextLesson = lessons.find(l => l.order_number === lessonNumber + 1);

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
       {/* ---------- Sidebar ---------- */}
      <div
        style={{
          width: 280,
          borderRight: "1px solid #ddd",
          padding: 20,
          position: "sticky",
          top: 0,
          height: "100vh",
          overflowY: "auto",
          background: "#fafafa",
        }}
      >
        <h3 style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}>
          Lessons
        </h3>

        {lessons?.map((l) => {
          const active = l.order_number === lessonNumber;
          return (
            <a
              key={l.order_number}
              href={`/courses/${courseSlug}/${l.order_number}`}
              style={{
                display: "block",
                padding: "10px 12px",
                marginBottom: 8,
                borderRadius: 6,
                background: active ? "#0070f3" : "transparent",
                color: active ? "white" : "#333",
                fontWeight: active ? "bold" : "normal",
                textDecoration: "none",
                fontSize: 15,
              }}
            >
              Lesson {l.order_number} – {l.title}
            </a>
          );
        })}
      </div>

            {/* ---------- Content ---------- */}
      <div style={{ padding: 30, flex: 1 }}>
        <h1 style={{ fontSize: 32, fontWeight: "bold" }}>
          {currentLesson.title}
        </h1>

        <div
  style={{ marginTop: 20, fontSize: 18, lineHeight: 1.7 }}
  dangerouslySetInnerHTML={{
    __html: currentLesson.content.replace(/\n/g, "<br/>")
  }}
/>


        {/* ---------- Next / Previous Buttons ---------- */}
        <div
          style={{
            marginTop: 40,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* Previous Button */}
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
          ) : (
            <div></div>
          )}

          {/* Next Button */}
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
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}