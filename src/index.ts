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

  addEntry(values: Array<number>) {
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
opCheck.addEntry([1, 2, 3, 4, 5]);
