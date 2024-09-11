import React from "react";

export const Application = () => 
{

  return (

      <form>

        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name"></input>
        </div>

         <div>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" name="bio"></textarea>
        </div>
         
        <div>
          <label htmlFor="job-location">Job location</label>
          <select id="job-location" >
          <option value="">select a state</option>
          <option value="cta">karnataka</option>
          <option value="mumbai">mumbai</option>
          <option value="bng">bangalore</option>
          <option value="kerala">kerala</option>
          </select >
        </div>

        <div>
          <label>
            <input type="checkbox" id="terms" />I agree to the terms and
            conditions
          </label>
        </div>
    
        <button>submit</button> 
    
      </form>


  );
};

