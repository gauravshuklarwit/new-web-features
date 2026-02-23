import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
    let text = " This is how to generate OG images using ImageResponse constructor in Next.js";

  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        fontSize: 32,
        fontWeight: 600,
      }}
    >
      <svg
        width="75"
        viewBox="0 0 75 65"
        fill="#000"
        style={{ margin: "0 75px" }}
      >
        <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
      </svg>

      <div style={{ marginTop: 40 }}>Practice Project</div>
      <div
        style={{
          fontSize: "1rem",
          fontWeight: 400,
          marginTop: 10,
          display: "flex",
        }}
      >
        {text}
      </div>
    </div>,
  );
}
