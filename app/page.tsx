export default function Home() {
  const courses = [
    {
      id: "01_computer-basics",
      title: "Computer Basics",
      description: "အခြေခံ ကွန်ပျူတာ သင်တန်း",
    },
    {
      id: "02_excel",
      title: "Microsoft Excel",
      description: "Excel ကို အခြေခံကနေ အလုပ်တွင်အသုံးချနိုင်အောင်",
    },
    {
      id: "03_word",
      title: "Microsoft Word",
      description: "စာရွက်စာတမ်း ပြုလုပ်နည်း အပြည့်အစုံ",
    },
    {
      id: "04_powerpoint",
      title: "Microsoft PowerPoint",
      description: "Presentation ပြုလုပ်နည်း",
    },
    {
      id: "05_photoshop",
      title: "Adobe Photoshop",
      description: "Basic Photoshop Design",
    },
  ];

  return (
    <main style={{ padding: "40px" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        🎓 My Computer Studio Training သင်တန်းများ
      </h1>

      <div style={{ display: "grid", gap: "20px" }}>
        {courses.map((course) => (
          <a
            key={course.id}
            href={`/courses/${course.id}`}
            style={{
              padding: "20px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              textDecoration: "none",
              color: "#000",
            }}
          >
            <h2>{course.title}</h2>
            <p>{course.description}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
