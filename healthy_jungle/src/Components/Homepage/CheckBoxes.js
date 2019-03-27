import React from 'react';

const Checkbox = (props) => {
  return(
    <form onSubmit={}>
    <div className="caloriesCheckbox">
    <input className="calories" onChange={props.checkAllApply} type="checkbox" name="calories" checked={props.state.calories.under300} id="under300" /> Under 300
    <input className="calories" onChange={props.checkAllApply} type="checkbox" name="calories" checked={props.state.calories.f301to399} id="f301to399" /> 301-399
    <input className="calories" onChange={props.checkAllApply} type="checkbox" name="calories" checked={props.state.calories.f401to499} id="f401to499" /> 401-499
    <input className="calories" onChange={props.checkAllApply} type="checkbox" name="calories" checked={props.state.calories.f501to599} id="f501to599" /> 501-599
    <input className="calories" onChange={props.checkAllApply} type="checkbox" name="calories" checked={props.state.calories.over600} id="over600" /> Over 600
    </div>
    <div className="diet">
    <input className="diet" onChange={props.checkAllApply} type="checkbox" name="diet" checked={props.state.diet.keto} id="keto" /> Keto
    <input className="diet" onChange={props.checkAllApply} type="checkbox" name="diet" checked={props.state.diet.balanced} id="balanced" /> Balanced
    <input className="diet" onChange={props.checkAllApply} type="checkbox" name="diet" checked={props.state.diet.dairyfree} id="dairy-free" /> Dairy-Free
    <input className="diet" onChange={props.checkAllApply} type="checkbox" name="diet" checked={props.state.diet.Vegan} id="Vegan" /> Vegan
    <input className="diet" onChange={props.checkAllApply} type="checkbox" name="diet" checked={props.state.diet.Vegetarian} id="Vegetarian" /> Vegetarian
    <input className="diet" onChange={props.checkAllApply} type="checkbox" name="diet" checked={props.state.diet.lowcarb} id="lowcarb" /> Low Carb
    <input className="diet" onChange={props.checkAllApply} type="checkbox" name="diet" checked={props.state.diet.highprotein} id="highprotein" /> High Protein
    <input className="diet" onChange={props.checkAllApply} type="checkbox" name="diet" checked={props.state.diet.glutenfree} id="glutenfree" /> Gluten-Free
    <input className="diet" onChange={props.checkAllApply} type="checkbox" name="diet" checked={props.state.diet.highfiber} id="highfiber" /> High Fiber
    <input className="diet" onChange={props.checkAllApply} type="checkbox" name="diet" checked={props.state.diet.lowsugar} id="lowsugar" /> Low Sugar
    <input className="diet" onChange={props.checkAllApply} type="checkbox" name="diet" checked={props.state.diet.lowfat} id="lowfat" /> Low Fat
    </div>
    </form>
  )
}

export default Checkbox;
