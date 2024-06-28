import GaugeComponent from "react-gauge-component";

function Gauge({ value, ...props }) {
  const config = {
    value,
    type: "semicircle",
    arc: {
      colorArray: ["#FF2121", "#00FF15"],
      padding: 0.02,
      subArcs: [{ limit: 40 }, { limit: 60 }, { limit: 70 }, {}, {}, {}, {}],
    },
    pointer: { type: "blob", animationDelay: 0 },
  };

  return (
    <div className="w-56">
      <GaugeComponent {...config} />
    </div>
  );
}

export default Gauge;
