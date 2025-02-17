import React from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Line, Dot } from "recharts";
import { Box, Typography } from "@mui/material";


const data = [
    { name: "Jan", value: 100 },
    { name: "Feb", value: 200 },
    { name: "Mar", value: 50 },
    { name: "Apr", value: 250 },
    { name: "May", value: 150 },
    { name: "Jun", value: 300 },
    { name: "Jul", value: 150 },
    { name: "Aug", value: 300 }
  ];

const CustomDot = (props) => {
  const { cx, cy } = props;
  return <circle cx={cx} cy={cy} r={5} fill="black" stroke="cyan" strokeWidth={2} />;
};

const GradientGraph = () => {
  return (
    <Box sx={{ width: "100%", height: 300, mx: "auto", mt: 4, bgcolor: "white", borderRadius: 2 }}>
      

      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 10 }}>
          <defs>
            <linearGradient id="colorFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="Light Cyan" stopOpacity={0.5} />
              <stop offset="100%" stopColor="Cyan" stopOpacity={0.3} />
            </linearGradient>
          </defs>

          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          
          {/* Area Chart with Gradient Fill */}
          <Area 
            type="monotone" 
            dataKey="value" 
            stroke="cyan" 
            fill="url(#colorFill)" 
            strokeWidth={2} 
          />

          {/* Line for border effect */}
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="cyan" 
            strokeWidth={2} 
            dot={<CustomDot />} // Black dots with cyan border
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default GradientGraph;
