import React from 'react';

const Checkbox = (props) => {
  return(
    <form className='form_checkbox'>

    <div className="caloriesCheckbox">
    <input className="calories" onChange={props.allChange} type="radio" name="calories" value="under300" id="under300" /> Under 300
    <input className="calories" onChange={props.allChange} type="radio" name="calories" value="301-399" id="f301to399" /> 301-399
    <input className="calories" onChange={props.allChange} type="radio" name="calories" value="401-499" id="f401to499" /> 401-499
    <input className="calories" onChange={props.allChange} type="radio" name="calories" value="501-599" id="f501to599" /> 501-599
    <input className="calories" onChange={props.allChange} type="radio" name="calories" value="Over 600" id="over600" /> Over 600
    </div>

    <div className="diet">
    <input className="diet" onChange={props.allChange} type="radio" name="diet" value="keto" id="keto" /> Keto
    <input className="diet" onChange={props.allChange} type="radio" name="diet" value="balanced" id="balanced" /> Balanced
    <input className="diet" onChange={props.allChange} type="radio" name="diet" value="dairy-free" id="dairy-free" /> Dairy-Free
    <input className="diet" onChange={props.allChange} type="radio" name="diet" value="Vegan" id="Vegan" /> Vegan
    <input className="diet" onChange={props.allChange} type="radio" name="diet" value="Vegetarian" id="Vegetarian" /> Vegetarian
    <input className="diet" onChange={props.allChange} type="radio" name="diet" value="lowcarb" id="lowcarb" /> Low Carb
    <input className="diet" onChange={props.allChange} type="radio" name="diet" value="highprotein" id="highprotein" /> High Protein
    <input className="diet" onChange={props.allChange} type="radio" name="diet" value="glutenfree" id="glutenfree" /> Gluten-Free
    <input className="diet" onChange={props.allChange} type="radio" name="diet" value="highfiber" id="highfiber" /> High Fiber
    <input className="diet" onChange={props.allChange} type="radio" name="diet" value="lowsugar" id="lowsugar" /> Low Sugar
    <input className="diet" onChange={props.allChange} type="radio" name="diet" value="lowfat" id="lowfat" /> Low Fat
    </div>

    </form>
  )
}

export default Checkbox;
