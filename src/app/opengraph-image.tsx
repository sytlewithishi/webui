import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "StyleWithIshi — Found around the world. Worn only by you.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #FAF5F0 0%, #F5EDE3 60%, #E8DED3 100%)",
          color: "#2C1810",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "24px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#8B4513",
            fontWeight: 600,
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              background: "#C9A227",
              borderRadius: "50%",
            }}
          />
          StyleWithIshi
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: "84px",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#2C1810",
              maxWidth: "900px",
            }}
          >
            Found around the world.
          </div>
          <div
            style={{
              fontSize: "84px",
              fontWeight: 700,
              fontStyle: "italic",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#8B4513",
              maxWidth: "900px",
            }}
          >
            Worn only by you.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "22px",
            color: "#5C4033",
          }}
        >
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <span style={{ color: "#A67B5B" }}>
              Curated by Ishi · Two decades · Globally sourced
            </span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "20px",
              color: "#A67B5B",
              letterSpacing: "0.1em",
            }}
          >
            stylewithishi.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
