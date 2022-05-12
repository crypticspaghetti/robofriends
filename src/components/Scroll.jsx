const Scroll = ({ className, children }) => (
  <div
    className={className}
    style={{
      overflowX: "hidden",
      overflowY: "scroll",
      borderTop: "2px solid black",
    }}
  >
    {children}
  </div>
);

export default Scroll;
