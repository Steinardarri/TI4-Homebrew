const { world } = require("@tabletop-playground/api");

world.TI4.homebrew.inject({
  nsidToTemplateId: {
    "pdf:homebrew.hive-wars/rulebook": "F7FA49267C5445668EF57C30944CFFF1",
  },
  extraBoxes: [
    {
      name: "Hive Wars",
      nsids: ["pdf:homebrew.hive-wars/rulebook"],
    },
  ],
});

world.TI4.homebrew.resetOnTableDecks();
