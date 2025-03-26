const WorkInProgress = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🚧 Work in Progress 🚧</h2>
      <p style={styles.text}>This feature is currently under development. Stay tuned!</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center" as const,
    padding: "50px",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  text: {
    fontSize: "18px",
    color: "#555",
  },
};

export default WorkInProgress;
