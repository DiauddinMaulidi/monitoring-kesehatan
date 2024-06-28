import GaugeComponent from "react-gauge-component";

function Gauge({ value, ...props }) {
  const config = {
    value,
    type: "radial",
    arc: {
      colorArray: ["#00ffae", "#0008ff"],
      padding: 0.02,
      subArcs: [{ limit: 35 }, { limit: 60 }, { limit: 70 }, {}, {}, {}, {}],
    },
    pointer: { elastic: true, animationDelay: 0 },
  };

  return (
    <div className="w-56">
      <GaugeComponent {...config} />
    </div>
  );
}

export default Gauge;
