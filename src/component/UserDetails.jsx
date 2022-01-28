import React from 'react'
import Header from './Header'
export default function UserDetails() {
    return (
     
         



            <div className="container">
                <div className="row">
                <Header/>
                </div>
    <div className="row " >
    <div className="col-xs-12 col-md-12">
      <form className="form-horizontal" role="form">

        <h2 className="text-center" >Address</h2>

        <div className="form-group">
          <label htmlFor="inputFullName" className="col-sm-2 control-label">Full Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputFullName" name="full-name" placeholder="Full Name"/>
          </div>
        </div>

        <div className="form-group">
          <p className="col-sm-offset-2 col-sm-10 help-block">Street address, P.O. box, company name, c/o</p>
          <label htmlFor="inputAddressLine1" className="col-sm-2 control-label">Address Line 1</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputAddressLine1" name="address-line1" placeholder="Address Line 1"/>
          </div>
        </div>

        <div className="form-group">
          <p className="col-sm-offset-2 col-sm-10 help-block">Apartment, suite , unit, building, floor, etc.</p>
          <label htmlFor="inputAddressLine2" className="col-sm-2 control-label">Address Line 2</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputAddressLine2" name="address-line2" placeholder="Address Line 2"/>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="inputCityTown" className="col-sm-2 control-label">City / Town</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputCityTown" name="city-town" placeholder="City / Town"/>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="inputStateProvinceRegion" className="col-sm-2 control-label">State / Province / Region</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputStateProvinceRegion" className="state-province-region" placeholder="State / Province / Region"/>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="inputZipPostalCode" className="col-sm-2 control-label">Zip / Postal Code</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputZipPostalCode" name="zip-postal-code" placeholder="Zip / Postal Code"/>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="selectCountry" className="col-sm-2 control-label">Country</label>
          <div className="col-sm-10">
            <select className="form-control" id="selectCountry" 
            defaultValue={"India"} name="country">
              <option >(please select a country)</option>
              <option value="AF">India</option>
              <option value="AL">Pakistan</option>
              <option value="DZ">Nepal</option>
              <option value="AS">Bangladesh</option>
              <option value="AD">UK</option>
         
             

            </select>
          </div>
        </div>
      </form>

    </div>
    </div>
    <div className="row mt-1">
        <div className="col-12" style={{display:'flex',justifyContent:'right'}}> 
       
      <button type="button" className="btn btn-warning  text-dark" style={{width:'220px',borderRadius:'20px',
      fontWeight: 'bold' 
    
    
    }}>Next</button>

      </div>
    </div>

        </div>




















    
    )
}
