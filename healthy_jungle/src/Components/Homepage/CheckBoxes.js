import React from 'react';

const Checkbox = (props) => {
  return(
    <div className="caloriesCheckbox">
    <input className="calories" onChange={props.checkAllApply} type="checkbox" name="calories" checked={props.state.history.under300} id="under300" /> Under 300
    <input className="calories" onChange={props.checkAllApply} type="checkbox" name="calories" checked={props.state.history.f301to399} id="f301to399" /> 301-399
    <input className="calories" onChange={props.checkAllApply} type="checkbox" name="calories" checked={props.state.history.f401to499} id="f401to499" /> 401-499
    <input className="calories" onChange={props.checkAllApply} type="checkbox" name="calories" checked={props.state.history.f501to599} id="f501to599" /> 501-599
    <input className="calories" onChange={props.checkAllApply} type="checkbox" name="calories" checked={props.state.history.over600} id="over600" /> Over 600
diet
    <div classNamdairy-free
    <input className="diet" onChange={props.checkAllApply} type="checkbox" name="diet" checked={props.state.history.keto} id="keto" /> Keto
    <input className="diet" onChange={props.checkAllApply} type="checkbox" name="diet" checked={props.state.history.balanced} id="balanced" /> Balanced
    <input className="diet" onChange={props.checkAllApply} type="checkbox" name="diet" checked={props.state.history.dairyfree} id="dairy-free" /> Dairy-Free
    <input className="diet" onChange={props.checkAllApply} type="checkbox" name="diet" checked={props.state.history.Vegan} id="Vegan" /> Vegan
    <input className="diet" onChange={props.checkAllApply} type="checkbox" name="diet" checked={props.state.history.Vegetarian} id="Vegetarian" /> Vegetarian
    <input className="diet" onChange={props.checkAllApply} type="checkbox" name="diet" checked={props.state.history.lowcarb} id="lowcarb" /> Low Carb
    <input className="diet" onChange={props.checkAllApply} type="checkbox" name="diet" checked={props.state.history.highprotein} id="highprotein" /> High Protein
    <input className="diet" onChange={props.checkAllApply} type="checkbox" name="diet" checked={props.state.history.glutenfree} id="glutenfree" /> Gluten-Free
    <input className="diet" onChange={props.checkAllApply} type="checkbox" name="diet" checked={props.state.history.highfiber} id="highfiber" /> High Fiber
    <input className="diet" onChange={props.checkAllApply} type="checkbox" name="diet" checked={props.state.history.lowsugar} id="lowsugar" /> Low Sugar
    <input className="diet" onChange={props.checkAllApply} type="checkbox" name="diet" checked={props.state.history.lowfat} id="lowfat" /> Low Fat
    </div>
  )
}

export default Checkbox;
