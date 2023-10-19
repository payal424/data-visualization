import { useState } from "react";
import { Alcohol } from "./Modal";
import { gammaMode } from "./Utility";

interface TableProps {
    groupedArray: Map<string | number, Alcohol[]> | never [];
    propertyName: string;
}


function GammaCalculation(props:TableProps){
    const {propertyName, groupedArray} = props;
    let mean: number;
    let median: number;
    let mode: number;
    
    return(
        <div>
            <table  style={{border : "1px solid" , width: "70%" ,marginLeft:"13%",marginTop:"100px" }}>
                <tbody>
                    <th  style={{border : "1px solid"}}>Mesure</th>
                    {
                        [...groupedArray.entries()].map(([key, value]) => {
                            return <th  style={{border : "1px solid"}} key={key}>{`Class${key}`}</th>
                        })
                    }
                </tbody>
                <tbody>
                    <th  style={{border : "1px solid"}}>{`${propertyName} Mean`}</th>
                    {
                        [...groupedArray.entries()].map(([key, value]) => {
                            mean = value.reduce((total, next) => total + next.gamma, 0) / value.length;
                            return <td  style={{border : "1px solid"}} key={key}>{mean.toFixed(3)}</td>
                        })
                    }
                </tbody>
                <tbody>
                    <th  style={{border : "1px solid"}}>{`${propertyName} Median`}</th>
                    {
                        [...groupedArray.entries()].map(([key, value]) => {
                            value = [...value].sort((a, b) => a.gamma - b.gamma);

                            const half = Math.floor(value.length / 2);

                            median = value.length % 2
                                ? value[half].gamma
                                : (value[half - 1].gamma + value[half].gamma) / 2;
                            return <td  style={{border : "1px solid"}} key={key}>{median.toFixed(3)}</td>
                        })
                    }
                 </tbody>
                 <tbody>
                    <th style={{border : "1px solid"}}>{`${propertyName} Mode`}</th>
                    {
                        [...groupedArray.entries()].map(([key, values]) => {
                            return <td  style={{border : "1px solid"}} key={key}>{gammaMode(values).toFixed(3)}</td>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}
export default GammaCalculation