import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div style={styles.container}>
      <button style={styles.button}>
        <Link style={styles.linkTag} to="/admin/dashboard">
          admin dashboard
        </Link>
      </button>
    </div>
  );
};

export default Home;

const styles: Record<string, React.CSSProperties> = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    background: "#202020",
    padding: "1rem 2rem",
    borderRadius: "8px",
  },
  linkTag: {
    color: "white",
    textTransform: "uppercase",
    textDecoration: "none", 
  },
};
