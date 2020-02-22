/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Race
	Effect:		This script adds a player race, called "Fairy"
				This race is a concept from CaptainDeathCap
	Code by:	GoldenRound
	Date:		2020-02-22 (sheet v12.999)
*/

/* This concept is based on a pdf, you find this pdf at https://homebrewery.naturalcrit.com/share/S1-b5GskQ
*/

var iFileName = "WingedFairy.js";
RequiredSheetVersion(12.999);

RaceList["fairy"] = {
	regExpSearch : /^(?=.*fairy).*$/i,
	name : "Fairy",
	sortname : "Fairy",
	source : ["HB", 0],
	plural : "Fairies",
	size : 5,
	speed : {
		walk: { spd: 10, enc: 5 },
		fly: { spd: "30", enc: 0 },
		swim: { spd: "fixed 0", enc: "fixed 0" },
	},
	languageProfs: ["Elvish", "Sylvan"],
	savetxt: { // Optional; this attribute defines entries to add to the field for "Saving Throw Advantages / Disadvantages"

		text: ["Magic can't put me to sleep"], // Optional; this is an array of strings, and each of those strings is added to the field exactly as presented here

		adv_vs: ["charmed"] // Optional; this is an array of things that the character has advantage on saves against. This is put in the field after the text "Adv. on saves vs. ", so in this example it would result in "Adv. on saves vs. traps and charmed"
	},

	skills: ["Stealth"],
	age : "Mature at about the same rate as humans, but live a life of eternal youth after reaching adulthood",
	height : " stand around 1 foot tall",
	weight : " Have tiny, feeble bodies that weight 10 lbs or less",
	heightMetric : " stand about 30 cms tall",
	weightMetric: " have thin, feeble bodies that weigh about 4.5 kilos",
	improvements: "Fairy: +1 Dexterity;", //required; the text that is displayed when listing all the ability score improvements
	scores : [0, 1, 0, 0, 0, 0],
	trait: "Ability Score (+1 Dexterity)\n   Flight: When flying, your speed is 30ft and you can max out at a height of 30ft above the ground.\n   Drowning: Fairies are unable to swim, and will drown unless assisted, they also can not fly when their wings are wet.\n    Fairy Dust: When flying, you give off a trail of dust, this gives you disadvantage on stealth checks. This dust can be collected and used on creatures to give an advantage on Charisma(Persuasion) checks.\n   Fey Ancestry: You have advantage against charms and can't magically be put to sleep.\n   Now you see me-: Your tiny body allows you to be nimble and small, gives proficiency in the stealth skill.\n   Feeble: You have disadvantage on all strength checks.",
};