export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--navy)",
      color: "var(--white)",
      fontFamily: "Inter, sans-serif",
      textAlign: "center",
      padding: "2rem"
    }}>
      <div>
        <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🔒</div>
        <p style={{ color: "var(--grey-mid)", fontSize: "0.95rem" }}>
          Please scan a member QR code to continue.
        </p>
      </div>
    </main>
  );
}
