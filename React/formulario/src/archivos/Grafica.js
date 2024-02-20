import React from "react";
import { PieChart, ResponsiveContainer, Tooltip, Pie, Cell } from "recharts";
function Grafica(props) {

    const datos = [
        { nombre: "Fototipo 1", porcentaje: props.datos[0] },
        { nombre: "Fototipo 2", porcentaje: props.datos[1] },
        { nombre: "Fototipo 3", porcentaje: props.datos[2] },
        { nombre: "Fototipo 4", porcentaje: props.datos[3] },
        { nombre: "Fototipo 5", porcentaje: props.datos[4] },
        { nombre: "Fototipo 6", porcentaje: props.datos[5] }
    ]
    const COLORS = ["#ded8ce", " #d3bcac", " #dfa485", "#a07565", "#764733", "#443229"]

        return (
            <div style={{ width: '100%', height: 500 }}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie data={datos} dataKey="porcentaje" innerRadius={60} outerRadius={85} fill="#82ca9d">
                            {datos.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        );
    
}
export default Grafica