import React from 'react'

export default function AddRoom() {
  return (
    <div id="main-container">
        <fieldset>
            <legend>Room-Details</legend>
            <div id="form-Box">
                <table>
                    <form action="#" method="post" enctype="multipart/form-data">
                        <div id="error2" class="error">
                        </div>
                        <tr>
                            <div id="input-email" class="input-data">
                                <td><input type="email" name="email" id="email" placeholder="Registered Email"
                                value="<?php if(isset($email)) echo $email;?>
                                " disabled/></td>
                            </div>
                        </tr>
                        <tr>
                            <div id="input-type" class="input-data">
                                <td>
                                    <select name="type" id="type">
                                        <option value="Select">Select Type</option>
                                        <option value="SINGLE">Single</option>
                                        <option value="SHARED">Shared</option>
                                        <option value="TRIPLE">Triple</option>
                                        <option value="FAMILY">Family</option>
                                        <option value="FLAT">Flat</option>
                                    </select>
                                </td>
                            </div>
                            <div id="input-price" class="input-data">
                                <td><input type="text" name="price" id="price"placeholder="Price per Month"/></td>
                            </div>
                        </tr>
                        <tr>
                            <div id="input-location" class="input-data">
                                <td><input type="text" name="location" id="location" placeholder="Location"/></td>
                            </div>
                            <div id="input-image" class="input-data">
                                <td><input type="file" name="image" id="image"/></td>
                            </div>
                        </tr>
                        <tr>
                            <div id="input-description" class="input-data">
                                <td colspan="2" align="center"><textarea name="description" id="description" cols="85" rows="10"></textarea></td>
                            </div>
                        </tr>
                        <tr>
                            <td colspan="2" align="center"><button type="submit" name='submit' onclick="return regValidation()">REGISTER</button></td>
                        </tr>
                    </form>
                </table>
            </div>
        </fieldset>
    </div>
  )
}
