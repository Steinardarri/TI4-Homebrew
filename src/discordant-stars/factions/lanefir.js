const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.lanefir": "Lanefir",
  "faction.full.lanefir": "The Lanefir Remnants",
  "planet.aysisrest": "aysisrest",
  "planet.solitude": "solitude",
  "technology.name.spark_thrusters": "Spark Thrusters",
  "technology.name.ats_armaments": "ATS Armaments",
  "unit.flagship.memory_of_dusk": "Memory of Dusk",
  "unit.mech.troubadour": "Troubadour",
};

const factions = [
  {
    faction: "lanefir",
    abilities: ["a_new_edifice", "iconoclasm", "war_stories"],
    commodities: 2,
    home: 3230,
    leaders: {
      agents: ["vassa_hagi"],
      commanders: ["master_halbert"],
      heroes: ["the_venerable"],
    },
    promissoryNotes: ["spoils_of_war"],
    icon: "discordant-stars/faction-icons/lanefir.png",
    source: "homebrew.discordant_stars",
    startingTechChoice: "lanefir",
    startingTechChoices: [
      "dark_energy_tap",
      "scanlink_drone_network",
      "ai_development_algorithm",
    ],
    startingTech: [],
    startingUnits: {
      carrier: 2,
      destroyer: 1,
      fighter: 2,
      infantry: 3,
      pds: 1,
      space_dock: 1,
    },
    techs: ["spark_thrusters", "ats_armaments"],
    units: ["memory_of_dusk", "troubadour"],
    packageId: refPackageId,
  },
];

const factionAbilities = [
  {
    name: "A New Edifice",
    description:
      "You may not use technology specialties. When you would gain a relic, instead purge it and explore up to 3 planets you control.",
    source: "Lanefir (DS)",
  },
  {
    name: "Iconoclasm",
    description:
      "When researching a non-unit upgrade technology, you may purge 1 of your relic fragments to ignore 1 prerequisite on the technology you are researching.",
    source: "Lanefir (DS)",
  },
  {
    name: "War Stories",
    description:
      "Once per action, after you win a combat, explore 1 planet you control, or if the active system does not contain any planets, the frontier exploration deck in the active system.",
    source: "Lanefir (DS)",
  },
];

const nsidToTemplateId = {
  "sheet.faction:homebrew.discordant_stars/lanefir":
    "1173091643F3A07342E0FD8BF5FE5798",
  "tile.system:homebrew.discordant_stars/3230":
    "94978F83444748D6DD0277B463A7CB54",
  "token.command:homebrew.discordant_stars/lanefir":
    "4828C1B443199FEF1D3CA9A4EDC5FC85",
  "token.control:homebrew.discordant_stars/lanefir":
    "8C63A7014316A787AD01ECA715770D70",
};

const technologies = [
  {
    localeName: "technology.name.spark_thrusters",
    cardNsid:
      "card.technology.blue.lanefir:homebrew.discordant_stars/spark_thrusters",
    type: "Blue",
    requirements: { Blue: 2 },
    source: "homebrew.discordant_stars",
    faction: "lanefir",
  },
  {
    localeName: "technology.name.ats_armaments",
    cardNsid:
      "card.technology.red.lanefir:homebrew.discordant_stars/ats_armaments",
    type: "Red",
    requirements: { Red: 2 },
    source: "homebrew.discordant_stars",
    faction: "lanefir",
  },
];

const systems = [
  {
    tile: 3230,
    source: "homebrew.discordant_stars",
    home: true,
    packageId: refPackageId,
    img: "discordant-stars/ui/tiles/tile_3230.png",
    planets: [
      { localeName: "planet.aysisrest", resources: 4, influence: 3 },
      { localeName: "planet.solitude", resources: 0, influence: 1 },
    ],
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.memory_of_dusk",
    triggerNsid:
      "card.technology.unit_upgrade.lanefir:franken.discordant_stars/memory_of_dusk",
    spaceCombat: { dice: 2, hit: 7 },
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.troubadour",
    triggerNsid:
      "card.leader.mech.lanefir:homebrew.discordant_stars/troubadour",
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
