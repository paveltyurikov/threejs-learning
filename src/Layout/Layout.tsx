const LAYOUT_SX = {
  height: "calc(100% - 24px)",
};
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div style={LAYOUT_SX}>{children}</div>;
};

export default Layout;
