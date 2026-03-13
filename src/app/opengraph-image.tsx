import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Fuji Tyres - Premium Tyres and Rims in Lagos, Nigeria";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          position: "relative",
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.02) 20px, rgba(255,255,255,0.02) 40px)",
          }}
        />

        {/* Red accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "#e11d48",
          }}
        />

        {/* Logo area */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              background: "#e11d48",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "32px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            F
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
            <span
              style={{
                fontSize: "48px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              FUJI
            </span>
            <span
              style={{
                fontSize: "48px",
                fontWeight: "300",
                color: "#e11d48",
              }}
            >
              TYRES
            </span>
          </div>
        </div>

        {/* Tagline */}
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            margin: "0 0 16px 0",
          }}
        >
          Premium Tyres & Rims in Lagos, Nigeria
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#999",
            textAlign: "center",
            margin: "0 0 40px 0",
            maxWidth: "800px",
          }}
        >
          50+ Top Brands | Free Expert Consultation | Competitive Prices
        </p>

        {/* Features row */}
        <div
          style={{
            display: "flex",
            gap: "40px",
            alignItems: "center",
          }}
        >
          {["Tyre Sales", "Tyre Rims", "Consultation", "Inspection"].map(
            (service) => (
              <div
                key={service}
                style={{
                  background: "rgba(225, 29, 72, 0.1)",
                  border: "1px solid rgba(225, 29, 72, 0.3)",
                  borderRadius: "12px",
                  padding: "12px 24px",
                  color: "#e11d48",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                {service}
              </div>
            )
          )}
        </div>

        {/* Bottom info */}
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            display: "flex",
            gap: "30px",
            color: "#666",
            fontSize: "16px",
          }}
        >
          <span>fujityres.com.ng</span>
          <span>+234 913 169 2993</span>
          <span>Trade Fair, Lagos | Lagos Island</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
