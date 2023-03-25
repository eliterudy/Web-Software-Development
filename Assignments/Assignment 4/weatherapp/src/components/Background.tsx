import GradientCircle from "./GradientCircle";

const Background = ({ children }: any) => {
  return (
    <div className="w-100 h-100 position-relative d-flex">
      <div
        className=" position-relative m-0"
        style={{ position: "relative", width: "100%", height: "100%" }}
      >
        <GradientCircle
          className={"gradient-circle-1"}
          radius={230}
          linearGradientDegree={90}
          linearGradientColor1={"rgba(38,208,206,1)"}
          linearGradientColor2={"rgba(26,41,128,1)"}
          linearGradientStart={0}
          linearGradientEnd={100}
        />
        <GradientCircle
          className={"gradient-circle-2"}
          radius={130}
          linearGradientDegree={90}
          linearGradientColor1={"#FF4E50"}
          linearGradientColor2={"#F9D423"}
          linearGradientStart={0}
          linearGradientEnd={100}
        />

        <GradientCircle
          className={"gradient-circle-3"}
          radius={60}
          linearGradientDegree={90}
          linearGradientColor1={"rgba(252,103,103,1)"}
          linearGradientColor2={"rgba(236,0,140,1)"}
          linearGradientStart={0}
          linearGradientEnd={100}
        />
      </div>
      <div className="w-100 h-100 position-absolute top-0 d-flex flex-1 ">
        {children}
      </div>
    </div>
  );
};

export default Background;
