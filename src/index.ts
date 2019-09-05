import "./style/main.scss";

class Fluid {
  level: number = 0;

  update(prop, val) {
    this[prop] = val;
  }
}

class Fuel extends Fluid {
  remain: number = 0;
  burn: number = 0;
}

class Oil extends Fluid {
  temperature: number = 0;
  pressure: number = 0;
}

class OpsCheckEntry {
  time: Date;
  oil: Oil;
  fuel: Fuel;

  constructor({
    time = new Date(),
    oil = new Oil(),
    fuel = new Fuel()
  }: {
    time: Date;
    oil: Oil;
    fuel: Fuel;
  }) {
    this.time = time;
    this.oil = oil;
    this.fuel = fuel;
  }
}

class OpsCheck {
  entries: Array<OpsCheckEntry> = [];

  addEntry(values: Array<number> = [0, 0, 0, 0, 0]) {
    const objInput = {
      time: new Date(),
      oil: {
        level: values[0],
        pressure: values[1],
        temperature: values[2]
      },
      fuel: {
        remain: values[3],
        level: values[4]
      }
    };

    this.entries.push(new OpsCheckEntry(objInput));
  }
}

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
  <div class="outputForm"></div>
`;

const submitBtn: HTMLElement = document.getElementById("submit");
submitBtn.addEventListener("click", e => opCheck.addEntry());
