import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Group A", value: 100 },
  { name: "Gap", value: 2 },  // Gap between colors
  { name: "Group B", value: 35 },
  { name: "Gap", value: 3 }   // Gap between colors
];

const COLORS = ["#75E5C8", "transparent", "#E1E3E2", "transparent"];
const COLOR = ["#9DA6A3", "transparent", "#E1E3E2", "transparent"]; // Use 'transparent' for gap


const RingChart = () => {
  return (
    <PieChart width={350} height={400}>  {/* Increased size */}
      {/* Outer Ring */}
      <Pie
        data={data}
        dataKey="value"
        cx="50%"
        cy="50%"
        innerRadius={130}  // Increased size
        outerRadius={160}  // Increased size
        startAngle={90}
        endAngle={-270}
        cornerRadius={12}  
        paddingAngle={5}   
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index]} />
        ))}
      </Pie>
      
      {/* Inner Ring (Now with Space) */}
      <Pie
        data={data}
        dataKey="value"
        cx="50%"
        cy="50%"
        innerRadius={85}  // Increased size
        outerRadius={110} // Increased size
        startAngle={90}
        endAngle={-270}
        cornerRadius={12}
        paddingAngle={5}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLOR[index]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default RingChart;
