import Content from "./Content";
import HeaderNav from "./HeaderNav";
import SideArea from "./SideArea";

const MasterLayout = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3 p-5 side-area">
          <SideArea />
        </div>
        <div className="col-9">
          <div className="d-flex flex-column">
              <HeaderNav />
            <div className="p-5">
              <Content />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { MasterLayout };
