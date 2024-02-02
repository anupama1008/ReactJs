import React from 'react'
import "../CSS/Registration.css";
export default function AddRoom() {
  return (
    <div id="main-container">
      <fieldset>
        <legend>Room-Details</legend>
        <div id="form-Box">
          <form action="/">
            <table>
              <tbody>
                <tr>
                  <td>
                    <div id="input-email" className="input-data">
                      <input type="email" name="email" id="email" placeholder="Registered Email" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div id="input-type" className="input-data">
                      <select name="type" id="type">
                        <option value="Select">Select Type</option>
                        <option value="SINGLE">Single</option>
                        <option value="SHARED">Shared</option>
                        <option value="TRIPLE">Triple</option>
                        <option value="FAMILY">Family</option>
                        <option value="FLAT">Flat</option>
                      </select>
                    </div>
                  </td>
                  <td>
                    <div id="input-price" className="input-data">
                      <input type="text" name="price" id="price" placeholder="Price per Month" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div id="input-location" className="input-data">
                      <input type="text" name="location" id="location" placeholder="Location" />
                    </div>
                  </td>
                  <td>
                    <div id="input-image" className="input-data">
                      <input type="file" name="image" id="image" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} align="center">
                    <div id="input-description" className="input-data">
                      <textarea name="description" id="description" cols="85" rows="10"></textarea>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} align="center">
                    <button type="submit" name='submit' onClick>REGISTER</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </fieldset>
    </div>
  );
}
