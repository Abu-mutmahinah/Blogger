import NavBar from "./Components/NavBar/NavBar";

const Layout = () => {
  const [helloStatue, setHelloStatue] = useState("hello");
  return (
    <div>
      {" "}
      <NavBar helloStatue={helloStatue} setHelloStatue={setHelloStatue} />
    </div>
  );
};

export default Layout;
