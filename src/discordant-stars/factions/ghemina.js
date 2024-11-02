const { world, refPackageId } = require("@tabletop-playground/api");

const localeStrings = {
  "faction.abbr.ghemina": "Ghemina",
  "faction.full.ghemina": "The Ghemina Raiders",
  "planet.drah": "Drah",
  "planet.trykk": "Trykk",
  "technology.name.war_song_implants": "War Song Implants",
  "unit.carrier.combat_transport": "Combat Transporter",
  "unit.carrier.combat_transport_2": "Combat Transporter 2",
  "unit.flagship.the_lady": "The Lady",
  "unit.flagship.the_lord": "The Lord",
  "unit.mech.jotun": "Jotun",
};

const factions = [
  {
    faction: "ghemina",
    abilities: ["the_lady_and_the_lord", "rule_of_two"],
    commodities: 2,
    home: 3205,
    leaders: {
      agents: ["skarvald_torvar"],
      commanders: ["jarl_vel_jarl_jotrun"],
      heroes: ["korela_the_lady", "kantrus_the_lord"],
    },
    promissoryNotes: ["raid_leaders"],
    icon: "discordant-stars/faction-icons/ghemina.png",
    source: "homebrew.discordant_stars",
    startingTech: ["psychoarchaelogy, dark_energy_tap"],
    startingUnits: {
      carrier: 2,
      destroyer: 1,
      fighter: 3,
      infantry: 3,
      space_dock: 2,
    },
    techs: ["war_song_implants"],
    units: [
      "the_lady",
      "the_lord",
      "combat_transport",
      "combat_transport_2",
      "jotun",
    ],
    unpackExtra: [
      {
        tokenNsid: "token.unit:homebrew.discordant_stars.lord_flagship/ghemina",
      },
      {
        tokenNsid: "card.unit:homebrew.discordant_stars.lord_flagship/ghemina",
      },
    ],
    packageId: refPackageId,
  },
];

const factionAbilities = [
  {
    name: "The Lady and The Lord",
    description:
      "During setup, place the Lord flagship token in your reinforcements and place the additional Ghemina Hero next to your faction sheet. The Lord flagship token is a second flagship unit with the abilities and attributes listed on the Lord flagship card. You have 2 Heroes.",
    source: "Ghemina (DS)",
  },
  {
    name: "Rule of Two",
    description:
      "During a round of combat in a system that contains exactly 2 of your non-fighter ships, if those ships have the same unit type, apply +2 to the result of each of those unit’s combat rolls.",
    source: "Ghemina (DS)",
  },
];

const factionUndraftable = [
  {
    name: "Ghemina extra flagship",
    nsid: "token.unit:homebrew.discordant_stars.lord_flagship/ghemina",
    count: 1,
    triggerAbility: "The Lady and The Lord",
  },
  {
    name: "Ghemina extra flagship",
    nsid: "card.unit:homebrew.discordant_stars.lord_flagship/ghemina",
    count: 1,
    triggerAbility: "The Lady and The Lord",
  },
];

const nsidToTemplateId = {
  "sheet.faction:homebrew.discordant_stars/ghemina":
    "582DBB14444770F489C3179BF345AF60",
  "tile.system:homebrew.discordant_stars/3205":
    "47C8E5F3D2A0498E9DBC3FC7EF80E824",
  "token.command:homebrew.discordant_stars/ghemina":
    "C79F084E4FE255E002FA248C38C21F46",
  "token.control:homebrew.discordant_stars/ghemina":
    "E0A73FCA45BCAF392ADBA096187B5A2C",
  "token.unit:homebrew.discordant_stars.lord_flagship/ghemina":
    "A5E718004224A776862A9EA185C29F55",
  "card.unit:homebrew.discordant_stars.lord_flagship/ghemina":
    "66B8E2EC495A4572DC2413AF355F3FE4",
};

const technologies = [
  {
    localeName: "technology.name.war_song_implants",
    cardNsid:
      "card.technology.green.ghemina:homebrew.discordant_stars/war_song_implants",
    type: "Green",
    requirements: { Green: 2 },
    source: "homebrew.discordant_stars",
    faction: "ghemina",
  },
  {
    localeName: "unit.carrier.combat_transport_2",
    cardNsid:
      "card.technology.unit_upgrade.ghemina:homebrew.discordant_stars/combat_transport_2",
    type: "unitUpgrade",
    requirements: { Blue: 2 },
    abbrev: " CT II",
    faction: "ghemina",
    unitPosition: 8,
  },
];

const systems = [
  {
    tile: 3205,
    source: "homebrew.discordant_stars",
    home: true,
    packageId: refPackageId,
    img: "discordant-stars/ui/tiles/tile_3205.png",
    planets: [
      { localeName: "planet.drah", resources: 1, influence: 2 },
      { localeName: "planet.trykk", resources: 2, influence: 1 },
    ],
  },
];

const unitAttrs = [
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.the_lord",
    triggerNsid:
      "card.technology.unit_upgrade.ghemina:franken.discordant_stars/the_lord",
    spaceCombat: { dice: 2, hit: 7 },
    capacity: 6,
    cost: 6,
  },
  {
    unit: "flagship",
    upgradeLevel: 1,
    localeName: "unit.flagship.the_lady",
    triggerNsid:
      "card.technology.unit_upgrade.ghemina:franken.discordant_stars/the_lady",
    spaceCombat: { dice: 2, hit: 7 },
    capacity: 7,
    move: 2,
    cost: 6,
  },
  {
    unit: "carrier",
    upgradeLevel: 1,
    localeName: "unit.carrier.combat_transport",
    triggerNsid:
      "card.technology.unit_upgrade.ghemina:franken.discordant_stars/combat_transport",
    move: 2,
  },
  {
    unit: "carrier",
    upgradeLevel: 2,
    localeName: "unit.carrier.combat_transport_2",
    triggerNsid:
      "card.technology.unit_upgrade.ghemina:homebrew.discordant_stars/combat_transport_2",
    antiFighterBarrage: { dice: 2, hit: 6 },
  },
  {
    unit: "mech",
    upgradeLevel: 1,
    localeName: "unit.mech.jotun",
    triggerNsid: "card.leader.mech.ghemina:homebrew.discordant_stars/jotun",
  },
];

const unitModifiers = [
  {
    isCombat: true,
    localeName: "unit_modifier.name.rule_of_two",
    localeDescription: "unit_modifier.desc.rule_of_two",
    owner: "self",
    priority: "adjust",
    triggerFactionAbility: "rule_of_two",
    filter: (auxData) => {
      return auxData.rollType === "spaceCombat";
    },
    applyAll: (unitAttrsSet, auxData) => {
      const nonFighters = auxData.plastic.filter((plastic) => {
        const unitType = plastic.unit;
        const isShip = unitAttrsSet.get(plastic.unit).raw.ship;
        return unitType !== "fighter" && isShip;
      });

      const unitType = nonFighters[0].unit;

      if (!(nonFighters.length === 2 && unitType === nonFighters[1].unit)) {
        return; // not two non-fighter units of the same unit type
      }

      unitAttrsSet.get(unitType).raw.spaceCombat.hit -= 2;
    },
  },
];

//TODO: combat: add 2x Bombardment to the promissory note

world.TI4.homebrew.inject({
  localeStrings,
  factions,
  factionAbilities,
  factionUndraftable,
  nsidToTemplateId,
  systems,
  technologies,
  unitAttrs,
  unitModifiers,
});
