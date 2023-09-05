import React, { useState } from "react";
import "./personalInformation.scss";
import Accordion from "../../../components/Accordion";

const PersonalInformation = () => {
  const [personalOpen, setPersonalOpen] = useState(false);

  return (
    <section className="personal_information">
      <div className="title-gp">
        <h3>2. Personal Information</h3>
        <Accordion isOpen={personalOpen} setIsOpen={setPersonalOpen} />
      </div>
      <div
        className={`hide_show_container ${
          personalOpen ? "hidden-box" : "open-box"
        }`}
      >
        <div className="input-container">
          <div className="form-gp-helf">
            <label for="fullName" className="input_title">
              Full Name
            </label>
            <input type="text" name="" id="fullName" />
          </div>
          <div className="form-gp-helf">
            <label for="nrc_number" className="input_title">
              NRC Number
            </label>
            <div className="nrc_data_gp">
              <select name="" id="state_number">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">15</option>
              </select>

              <select name="" id="city_name">
                <option value="">Bahan</option>
                <option value="">Ahlone</option>
                <option value="">Mingalardone</option>
              </select>

              <select name="" id="citizen_type">
                <option value="">M</option>
                <option value="">N</option>
                <option value="">C</option>
              </select>

              <input type="number" name="" id="nrc_number" />
            </div>
          </div>
        </div>
        <div className="input-container">
          <div className="form-gp-helf">
            <label for="date_of_birth" className="input_title">
              Date of Birth
            </label>
            <input type="date" name="" id="date_of_birth" />
          </div>
          <div className="form-gp-helf">
            <label for="nationality" className="input_title">
              Nationality
            </label>
            <input type="text" name="" id="nationality" />
          </div>
        </div>
        <div className="input-container">
          <div className="form-gp-helf">
            <label for="" className="input_title">
              Gender
            </label>
            <div className="radios">
              <div className="radio-gp gender">
                <input type="radio" name="gender" id="male" />
                <label for="male">Male</label>
              </div>
              <div className="radio-gp gender">
                <input type="radio" name="gender" id="felame" />
                <label for="felame">Female</label>
              </div>
              <div className="radio-gp gender">
                <input type="radio" name="gender" id="other" />
                <label for="other">Others</label>
              </div>
            </div>
          </div>
          <div className="form-gp-helf">
            <label for="occupation" className="input_title">
              Occupation
            </label>
            <select name="" id="occupation">
              <option value="">Occupation 1</option>
              <option value="">Occupation 1</option>
              <option value="">Occupation 1</option>
              <option value="">Occupation 1</option>
              <option value="">Occupation 1</option>
            </select>
          </div>
        </div>
        <div className="input-container">
          <div className="form-gp-helf">
            <label for="mobile_ph_num" className="input_title">
              Mobile Phone Number
            </label>
            <input type="tel" name="" id="mobile_ph_num" />
          </div>
          <div className="form-gp-helf">
            <label for="peronal_email" className="input_title">
              Personal Email Address
            </label>
            <input type="email" name="" id="peronal_email" />
          </div>
        </div>

        <div className="input-container">
          <div className="form-gp-helf">
            <label for="father_name" className="input_title">
              Father's Name
            </label>
            <input type="text" name="" id="father_name" />
          </div>
          <div className="form-gp-helf">
            <label for="home_ph_num" className="input_title">
              Home Phone Number
            </label>
            <input type="tel" name="" id="home_ph_num" />
          </div>
        </div>

        <div className="input-container">
          <div className="form-gp">
            <label for="home_address" className="input_title">
              Home Address
            </label>
            <input type="text" name="" id="home_address" />
          </div>
        </div>
        <div className="input-container">
          <div className="form-gp">
            <label for="" className="input_title">
              Marital Status
            </label>
            <div className="radios marital_status">
              <div className="radio-gp">
                <input type="radio" name="marital_status" id="single" />
                <label for="single">Single</label>
              </div>
              <div className="radio-gp">
                <input type="radio" name="marital_status" id="married" />
                <label for="married">Married</label>
              </div>
              <div className="radio-gp">
                <input type="radio" name="marital_status" id="windowed" />
                <label for="windowed">Widowed</label>
              </div>
              <div className="radio-gp">
                <input type="radio" name="marital_status" id="divorced" />
                <label for="divorced">Divorced</label>
              </div>
              <div className="radio-gp">
                <input type="radio" name="marital_status" id="separate" />
                <label for="separate">Separate</label>
              </div>
              <div className="radio-gp">
                <input type="radio" name="marital_status" id="deFacto" />
                <label for="deFacto">De Facto</label>
              </div>
            </div>
          </div>
        </div>

        <div className="input-container">
          <div className="form-gp">
            <label for="" className="input_title">
              Number of Dependents
            </label>
            <div className="radios dependent_number">
              <div className="radio-gp">
                <input type="radio" name="dependent_number" id="one_person" />
                <label for="one_person">1 person</label>
              </div>
              <div className="radio-gp">
                <input type="radio" name="dependent_number" id="two_person" />
                <label for="two_person">2 person</label>
              </div>
              <div className="radio-gp">
                <input type="radio" name="dependent_number" id="three_person" />
                <label for="three_person">3 person</label>
              </div>
              <div className="radio-gp">
                <input type="radio" name="dependent_number" id="four_person" />
                <label for="four_person">4 person</label>
              </div>
              <div className="radio-gp">
                <input
                  type="radio"
                  name="dependent_number"
                  id="five_person_plus"
                />
                <label for="five_person_plus">5 person and above</label>
              </div>
            </div>
          </div>
        </div>

        <div className="input-container">
          <div className="form-gp">
            <label for="" className="input_title">
              Number of Family Members
            </label>
            <div className="radios family_member">
              <div className="radio-gp">
                <input type="radio" name="family_member" id="one_person" />
                <label for="one_person">1 person</label>
              </div>
              <div className="radio-gp">
                <input type="radio" name="family_member" id="two_person" />
                <label for="two_person">2 person</label>
              </div>
              <div className="radio-gp">
                <input type="radio" name="family_member" id="three_person" />
                <label for="three_person">3 person</label>
              </div>
              <div className="radio-gp">
                <input type="radio" name="family_member" id="four_person" />
                <label for="four_person">4 person</label>
              </div>
              <div className="radio-gp">
                <input
                  type="radio"
                  name="family_member"
                  id="five_person_plus"
                />
                <label for="five_person_plus">5 person and above</label>
              </div>
            </div>
          </div>
        </div>

        <div className="input-container">
          <div className="form-gp">
            <label for="" className="input_title">
              Highest Qualification
            </label>
            <div className="radios qualification">
              <div className="radio-gp">
                <input type="radio" name="qualification" id="under_graduate" />
                <label for="under_graduate">Under Graduate</label>
              </div>
              <div className="radio-gp">
                <input type="radio" name="qualification" id="graduate" />
                <label for="graduate">Graduate</label>
              </div>
              <div className="radio-gp">
                <input type="radio" name="qualification" id="post_graduate" />
                <label for="post_graduate">Post Graduate</label>
              </div>
              <div className="input-gp-mini">
                <label for="other_graduate" className="mini_input_title">
                  Others
                </label>
                <input type="text" name="qualification" id="other_graduate" />
              </div>
            </div>
          </div>
        </div>

        <div className="input-container">
          <div className="form-gp">
            <label for="" className="input_title">
              Home Ownership
            </label>
            <div className="radios home_ownership">
              <div className="radio-gp">
                <input type="radio" name="home_ownership" id="owned_property" />
                <label for="owned_property">Owned</label>
              </div>
              <div className="radio-gp">
                <input
                  type="radio"
                  name="home_ownership"
                  id="company_property"
                />
                <label for="company_property">Company's Property</label>
              </div>
              <div className="radio-gp">
                <input
                  type="radio"
                  name="home_ownership"
                  id="livingParent_property"
                />
                <label for="livingParent_property">
                  Living with Parents/Relatives
                </label>
              </div>
              <div className="radio-gp">
                <input
                  type="radio"
                  name="home_ownership"
                  id="mortgaged_property"
                />
                <label for="mortgaged_property">Mortgaged</label>
              </div>
              <div className="radio-gp">
                <input
                  type="radio"
                  name="home_ownership"
                  id="rented_property"
                />
                <label for="rented_property">Rented</label>
              </div>
            </div>
            <div className="input-gp-mini property_gp">
              <label for="other_property" className="mini_input_title">
                Others
              </label>
              <input type="text" name="home_ownership" id="other_graduate" />
            </div>
          </div>
        </div>

        <div className="input-container">
          <div className="form-gp">
            <label for="" className="input_title">
              Years of Stay in Present Home Address
            </label>
            <div className="radios stay_years">
              <div className="radio-gp">
                <input type="radio" name="stay_years" id="1year_stay" />
                <label for="1year_stay">1 year</label>
              </div>
              <div className="radio-gp">
                <input type="radio" name="stay_years" id="1_5years_stay" />
                <label for="1_5years_stay">1 year - 5 years</label>
              </div>
              <div className="radio-gp">
                <input type="radio" name="stay_years" id="5_10years_stay" />
                <label for="5_10years_stay">5 years - 10 years</label>
              </div>
              <div className="radio-gp">
                <input type="radio" name="stay_years" id="10years_above_stay" />
                <label for="10years_above_stay">10 years ></label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalInformation;
