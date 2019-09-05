import "./style/main.scss";

import { OpsCheck } from "./ObsCheck";

let opCheck = new OpsCheck();

const app: HTMLElement = document.getElementById("app");
app.innerHTML = `<h1>Digital White Board</h1>
  <div class="formInputs">
    <ul>
      <li>
        Oil
        <ul>
          <li><div>Level: </div><input type="text" value="" /></li>
          <li><div>Temp: </div><input type="text" value="" /></li>
          <li><div>Pres: </div><input type="text" value="" /></li>
        </ul>
      </li>
      <li>
        Fuel
        <ul>
          <li><div>Rem: </div><input type="text" value="" /></li>
          <li><div>Level: </div><input type="text" value="" /></li>
        </ul>
      </li>
    </ul>
    <input id="submit" type="submit" />
  </div>
  <div id="outputForm" class="outputForm"></div>
`;

const submitBtn: HTMLElement = document.getElementById("submit");
submitBtn.addEventListener("click", e => opCheck.addEntry());
