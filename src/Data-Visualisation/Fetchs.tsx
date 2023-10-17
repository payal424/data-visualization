import { useEffect, useState } from "react";
import data from "../Wine-Data.json";

import { Alcohol } from "./Modal";
import {  groupBy2 } from "./Utility";
import FlavanoidsCalculation from "./FlavanoidsCalculation";
import GammaCalculation from "./GammaCalculation"
//Gamma = (Ash * Hue) / Magnesium.

function Fetchs(){
    let arr: Alcohol[] = [];
    const [alcoholArray,setAlcoholArray] = useState<Alcohol[]>()
    useEffect(()=>{
        data.map((i)=> {
            var gamma = (i.Alcohol * i.Hue)/i.Magnesium
        arr.push({class : i.Alcohol, flavanoids: Number(i.Flavanoids) , gamma :  gamma });
        })
        setAlcoholArray(arr);
    },[])

    
    const grouped: Map<string | number, Alcohol[]> | never [] = !!alcoholArray? groupBy2(alcoholArray, x => x.class) : [];
    return(<div>
        <FlavanoidsCalculation  groupedArray={grouped} propertyName="Flavoriods" ></FlavanoidsCalculation>
        <GammaCalculation groupedArray={grouped} propertyName="Gamma" ></GammaCalculation>
        
    </div>);
}
export default Fetchs;