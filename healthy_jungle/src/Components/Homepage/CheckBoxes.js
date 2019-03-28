import React from 'react';

const Checkbox = (props) => {
  return(
    <form onSubmit={props.onSumbit} className='form_options'>

    <div className="caloriesCheckbox">
      <input className="calories" onChange={props.allChange} type="radio" name="calories" value="under300" id="under300" /> Under 300
      <br/>
      <input className="calories" onChange={props.allChange} type="radio" name="calories" value="301-399" id="f301to399" /> 301-399
      <br/>
      <input className="calories" onChange={props.allChange} type="radio" name="calories" value="401-499" id="f401to499" /> 401-499
      <br/>
      <input className="calories" onChange={props.allChange} type="radio" name="calories" value="501-599" id="f501to599" /> 501-599
      <br/>
      <input className="calories" onChange={props.allChange} type="radio" name="calories" value="Over 600" id="over600" /> Over 600
    </div>

    <div className="diet">
      <input className="diet" onChange={props.allChange} type="radio" name="diet" value="keto" id="keto" /> Keto
      <br/>
      <input className="diet" onChange={props.allChange} type="radio" name="diet" value="balanced" id="balanced" /> Balanced
      <br/>
      <input className="diet" onChange={props.allChange} type="radio" name="diet" value="dairy-free" id="dairy-free" /> Dairy-Free
      <br/>
      <input className="diet" onChange={props.allChange} type="radio" name="diet" value="Vegan" id="Vegan" /> Vegan
      <br/>
      <input className="diet" onChange={props.allChange} type="radio" name="diet" value="Vegetarian" id="Vegetarian" /> Vegetarian
      <br/>
      <input className="diet" onChange={props.allChange} type="radio" name="diet" value="low-carb" id="lowcarb" /> Low Carb
      <br/>
      <input className="diet" onChange={props.allChange} type="radio" name="diet" value="high-protein" id="highprotein" /> High Protein
      <br/>
      <input className="diet" onChange={props.allChange} type="radio" name="diet" value="gluten-free" id="glutenfree" /> Gluten-Free
      <br/>
      <input className="diet" onChange={props.allChange} type="radio" name="diet" value="high-fiber" id="highfiber" /> High Fiber
      <br/>
      <input className="diet" onChange={props.allChange} type="radio" name="diet" value="low-sugar" id="lowsugar" /> Low Sugar
      <br/>
      <input className="diet" onChange={props.allChange} type="radio" name="diet" value="low-fat" id="lowfat" /> Low Fat
      <br/>
      <input className="diet" onChange={props.allChange} type="radio" name="diet" value="lowcarb" id="lowcarb" /> Low Carb
      <br/>
      <input className="diet" onChange={props.allChange} type="radio" name="diet" value="highprotein" id="highprotein" /> High Protein
      <br/>
      <input className="diet" onChange={props.allChange} type="radio" name="diet" value="glutenfree" id="glutenfree" /> Gluten-Free
      <br/>
      <input className="diet" onChange={props.allChange} type="radio" name="diet" value="highfiber" id="highfiber" /> High Fiber
      <br/>
      <input className="diet" onChange={props.allChange} type="radio" name="diet" value="lowsugar" id="lowsugar" /> Low Sugar
      <br/>
      <input className="diet" onChange={props.allChange} type="radio" name="diet" value="lowfat" id="lowfat" /> Low Fat
    </div>

    <button className='bttn_find'>{props.buttonText}</button>
    </form>
  )
};

export default Checkbox;
