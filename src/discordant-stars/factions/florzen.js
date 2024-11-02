const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.florzen": "Florzen",
  "faction.full.florzen": "The Florzen Profiteers",
  "planet.delmor": "Delmor",
  "planet.kyd": "Kyd",
  "technology.name.blackmail_programs": "Blackmail Programs",
  "unit.fighter.corsair": "Corsair",
  "unit.fighter.corsair_2": "Corsair 2",
  "unit.flagship.man_o_war": "Man o` War",
  "unit.mech.privateer": "Privateer",
};

const factions = [
  {
    faction: "florzen",
    abilities: ["mercenaries", "data_leak", "black_markets"],
    commodities: 4,
    home: 3217,
    leaders: {
      agents: ["sal_gavda"],
      commanders: ["quaxdol_junitas"],
      heroes: ["banua_gowen"],
    },
    promissoryNotes: ["blackmail_programs"],
    icon: "discordant-stars/faction-icons/florzen.png",
    source: "homebrew.discordant_stars",
    startingTech: ["neural_motivator", "scanlink_drone_network"],
    startingUnits: {
      carrier: 2,
      fighter: 4,
      infantry: 4,
      space_dock: 1,
    },
    techs: ["blackmail_programs"],
    units: ["man_o_war", "corsair", "corsair_2", "privateer"],
    packageId: refPackageId,
  },
];

const factionAbilities = [
  {
    name: "Mercenaries",
    description:
      "At the start of a space combat, you may remove up to 2 fighters you control in a system adjacent to the active system. Then, choose 1 player participating in that combat; that player places the same number of fighters from their reinforcements in the active system.",
    source: "Florzen (DS)",
  },
  {
    name: "Data Leak",
    description:
      "When you would gain a relic, you may draw 1 additional card; choose 1 to gain and return the rest to the relic deck. Then, shuffle the relic deck.",
    source: "Florzen (DS)",
  },
  {
    name: "Black Markets",
    description:
      "When you explore a planet, you may treat that planet as if it had the same trait as another planet you control.",
    source: "Florzen (DS)",
  },
];

const nsidToTemplateId = {
  "sheet.faction:homebrew.discordant_stars/florzen":
    "74D69937471106DF8BAA21AA78B770ED",
  "tile.system:homebrew.discordant_stars/3217":
    "C4C4D351119540A7AEC663965FE2837B",
  "token.command:homebrew.discordant_stars/florzen":
    "7C8EE5D049C2C22A80B92C95BADEBD85",
  "token.control:homebrew.discordant_stars/florzen":
    "2EC2FB8C4CACEDEDAA52C2888492183B",
};

const technologies = [
  {
    localeName: "technology.name.blackmail_programs",
    cardNsid:
      "card.technology.green.florzen:homebrew.discordant_stars/blackmail_programs",
    type: "Green",
    requirements: { Green: 2 },
    source: "homebrew.discordant_stars",
    faction: "florzen",
  },
  {
    localeName: "unit.fighter.corsair_2",
    cardNsid:
      "card.technology.unit_upgrade.florzen:homebrew.discordant_stars/corsair_2",
    type: "unitUpgrade",
    requirements: { Green: 1, Blue: 1 },
    abbrev: " C II",
    faction: "florzen",
    unitPosition: 9,
  },
];

const systems = [
  {
    tile: 3217,
    source: "homebrew.discordant_stars",
    home: true,
    packageId: refPackageId,
    img: "discordant-stars/ui/tiles/tile_3217.png",
    planets: [
      { localeName: "planet.delmor", resources: 2, influence: 1 },
      { localeName: "planet.kyd", resources: 1, influence: 2 },
    ],
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.man_o_war",
    triggerNsid:
      "card.technology.unit_upgrade.florzen:franken.discordant_stars/man_o_war",
    spaceCombat: { dice: 2, hit: 7 },
    capacity: 5,
  },
  {
    unit: "fighter",
    upgradeLevel: 1,
    localeName: "unit.fighter.corsair",
    triggerNsid:
      "card.technology.unit_upgrade.florzen:franken.discordant_stars/corsair",
    antiFighterBarrage: { dice: 1, hit: 9 },
    move: 1,
  },
  {
    unit: "fighter",
    upgradeLevel: 2,
    localeName: "unit.fighter.corsair_2",
    triggerNsid:
      "card.technology.unit_upgrade.florzen:homebrew.discordant_stars/corsair_2",
    antiFighterBarrage: { hit: 8 },
    spaceCombat: { hit: 8 },
    move: 3,
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.privateer",
    triggerNsid: "card.leader.mech.florzen:homebrew.discordant_stars/privateer",
  },
];

const unitModifiers = [];

world.TI4.homebrew.inject({
  localeStrings,
  factions,
  factionAbilities,
  nsidToTemplateId,
  systems,
  technologies,
  unitAttrs,
  unitModifiers,
});
