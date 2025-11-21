export default function CertificateVerifyPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "70vh",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: 36, fontWeight: "bold", marginBottom: 20 }}>
        Certificate Verification
      </h1>

      <p style={{ fontSize: 18, marginBottom: 30, color: "#555" }}>
        Enter your certificate ID to verify
      </p>

      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          flexWrap: "wrap",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <input
          type="text"
          placeholder="Certificate ID"
          style={{
            flex: 1,
            padding: "12px 16px",
            borderRadius: 6,
            border: "1px solid #ccc",
            fontSize: 16,
          }}
        />
        <button
          style={{
            padding: "12px 20px",
            borderRadius: 6,
            border: "none",
            background: "#0070f3",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Verify
        </button>
      </div>

      <div
        style={{
          marginTop: 30,
          padding: 20,
          borderRadius: 6,
          background: "#f5f5f5",
          minWidth: "300px",
          maxWidth: "400px",
        }}
      >
        {/* Verification result will appear here */}
      </div>
    </div>
  );
}
