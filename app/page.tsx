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
    <div style={{ padding: "30px" }}>
      <h1
        style={{
          fontSize: "32px",
          marginBottom: "25px",
          fontWeight: "bold",
          color: "#222",
          textAlign: "center",
        }}
      >
        🎓 My Computer Studio & Training သင်တန်းများ
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px",
        }}
      >
        {courses.map((course) => (
          <a
            key={course.id}
            href={`/courses/${course.id}`}
            className="course-card"
            style={{
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              textDecoration: "none",
              color: "#111",
              background: "white",
              transition: "0.25s",
            }}
          >
            <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>
              {course.title}
            </h2>
            <p style={{ fontSize: "16px", color: "#555" }}>
              {course.description}
            </p>
          </a>
        ))}
      </div>

      <style>{`
        .course-card:hover {
          transform: scale(1.03);
          box-shadow: 0 4px 12px rgba(0,0,0,0.20);
        }
      `}</style>
    </div>
  );
}
