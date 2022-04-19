const Scroll = ({ className, children }) => {
  return (
    <div
      className={className}
      style={{
        overflowX: "hidden",
        overflowY: "scroll",
        borderTop: "2px solid black",
        // height: "75vh",
      }}
    >
      {children}
    </div>
  );
};
export default Scroll;
