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
        level: values[0] || 0,
        temperature: values[1] || 0,
        pressure: values[2] || 0
      },
      fuel: {
        remain: values[3] || 0,
        level: values[4] || 0
      }
    };

    this.entries.push(new OpsCheckEntry(objInput));
    this.displayEntries();
  }

  displayEntries() {
    const disp: HTMLElement = document.getElementById("outputForm");
    disp.innerHTML = "";
    const table: HTMLElement = document.createElement("table");
    disp.appendChild(table);

    this.entries.forEach(entry => {
      const row: HTMLElement = document.createElement("tr");
      table.appendChild(row);

      row.innerHTML = `<td>${entry.oil.level}</td>
        <td>${entry.oil.temperature}</td>
        <td>${entry.oil.pressure}</td>
        <td>${entry.fuel.remain}</td>
        <td>${entry.fuel.level}</td>`;
    });
  }
}

export { OpsCheck };
