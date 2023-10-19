import { useState } from "react";
import { Alcohol } from "./Modal";
import { flanoidsMode } from "./Utility";

interface TableProps {
    groupedArray: Map<string | number, Alcohol[]> | never [];
    propertyName: string;
}


function FlavanoidsCalculation(props:TableProps){
    const {propertyName, groupedArray} = props;
    let mean: number;
    let median: number;
    let mode: number;
    
    return(
        <div>
            <table style={{border : "1px solid" , width: "70%" ,marginLeft:"13%",marginTop:"100px" }}>
                <tbody>
                    <th style={{border : "1px solid"}}>Mesure</th>
                    {
                        [...groupedArray.entries()].map(([key, value]) => {
                            return <th style={{border : "1px solid"}} key={key}>{`Class${key}`}</th>
                        })
                    }
                </tbody>
                <tbody>
                    <th style={{border : "1px solid"}}>{`${propertyName} Mean`}</th>
                    {
                        [...groupedArray.entries()].map(([key, value]) => {
                            mean = value.reduce((total, next) => total + next.flavanoids, 0) / value.length;
                            return <td style={{border : "1px solid"}} key={key}>{mean.toFixed(3)}</td>
                        })
                    }
                </tbody>
                <tbody>
                    <th style={{border : "1px solid"}}>{`${propertyName} Median`}</th>
                    {
                        [...groupedArray.entries()].map(([key, value]) => {
                           // Sorting values, preventing original array
                            // from being mutated.
                            value = [...value].sort((a, b) => a.flavanoids - b.flavanoids);

                            const half = Math.floor(value.length / 2);

                            median = value.length % 2
                                ? value[half].flavanoids
                                : (value[half - 1].flavanoids + value[half].flavanoids) / 2;
                            return <td style={{border : "1px solid"}} key={key}>{median.toFixed(3)}</td>
                        })
                    }
                 </tbody>
                 <tbody>
                    <th style={{border : "1px solid"}}>{`${propertyName} Mode`}</th>
                    {
                        [...groupedArray.entries()].map(([key, values]) => {
                            return <td style={{border : "1px solid"}} key={key}>{flanoidsMode(values).toFixed(3)}</td>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}
export default FlavanoidsCalculation