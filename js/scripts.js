(function() {
    class LocalDB {
        constructor(newBase) {
          this.newBase = newBase;
        }

        get(name) {
          let data = JSON.parse(window.localStorage.getItem(`${this.newBase}.${name}`));
          console.log(data);
        }

        save(name, data) {
          window.localStorage.setItem(`${this.newBase}.${name}`, JSON.stringify(data));
        }
    }
    if ("localStorage" in window) {
        var DB1 = new LocalDB("DB1");

        var maniek = {
            firstName: "Marian",
            lastName: "Nowak",
            age: 25
        };

        DB1.save("maniek", maniek);
        DB1.get("maniek");
    }
})();
