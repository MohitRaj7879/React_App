import { useNavigate } from "react-router-dom";
import { ReactComponent as Mysvg } from "../images/404.svg";
export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Mysvg style={{ height: "50%", width: "50%" }} />
        <p style={{ fontSize: "2rem", fontWeight: "400" }}>Page Not Found</p>
        <button
          style={{
            padding: " 0.7rem 2rem",
            borderRadius: "20px",
            border: "none",
            backgroundColor: "rgb(0, 124, 165)",
            color: "white",
            fontSize: "1rem",
          }}
          onClick={() => navigate(-1)}
        >
          {" "}
          Go Back
        </button>
      </div>
    </>
  );
}
