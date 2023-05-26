interface DrinkType {
    name: string;
    ingredients: string[];
    how: string;
    variants: string[]
}

const DrinkList: DrinkType[] = [
    {
        name: "Whiskey sour 🍋",
        ingredients: ["2oz bourbon", "1oz sitron", "1oz sukkerlake", "1oz eggehvite"],
        how: "Ha alt i en shaker og shake hardt i 10-15 sekunder. Fyll shakeren halvfull med is og shake i 5-10 sekunder til. Dobbelstrain i et 'Old fashioned' glass.",
        variants: ["Gin sour (gin)", "Amaretto sour (50/50 bourbon og disaronno)"]  
    },
    {
        name: "Moscow mule 🇷🇺",
        ingredients: ["2oz vodka", "1oz ingefærsirup", "Soda water", "En halv lime", "En kvist mynte til garnityr"],
        how: "Ha alle ingrediensene i et glass med is. Skjære lime i 4 biter og squeeze oppi. Fyll opp med soda (ca. 10oz) og rør til drinken er avkjølt. Serveres helst i ikonisk kobberkrus",
        variants: ["Italian mule (Disaronno)", "Kentucky mule (bourbon)", "London mule (gin)"]  
    },
    {
        name: "Mojito 🍃",
        ingredients: ["2oz rom", "2ts brunt sukker", "8-10 mynteblader", "En halv lime", "Soda"],
        how: "Ha brunt sukker og mynte i shakeren. Skjær limen i fire og squeeze over og legg limebåtene i shakeren etterpå. Tilsett rom og is og shake til det er avkjølt. Strain over i et highball glass og med is og topp opp med soda.",
        variants: ["Raspberry - tilsett 1oz bringebærsirup", "Ingefær - tilsett 1oz ingefærsirup", "Passion - tilsett en hel pasjonsfrukt før shake"]  
    },
    {
        name: "Cover club 🍒",
        ingredients: ["2oz gin", "3/4oz bringebærsirup", "3/4oz sitronsaft", "1 oz eggehvite"],
        how: "Ha alle ingrediensene i en shaker. Shake hardt i 10-15 sekunder. Tilsett is og shake til det er avkjølt. Dobbelstrain over i et coupe-glass.",
        variants: [""]  
    },
    {
        name: "French gimlet 🇫🇷",
        ingredients: ["2oz gin", "1.5oz St. Germain", ".5oz limesaft"],
        how: "Ha alle ingrediensene i en shaker. Shake hardt i 10-15 sekunder. Strain i et coupe-glass og pynt med lime. ",
        variants: ["Vanlig gimlet - 2.5oz gin, .5oz limesaft, .5oz simple syrup. Shake hardt i 10-15 sekunder. Strain i et coupe-glass og pynt med lime. "]  
    },
    {
        name: "Espresso martini ☕️",
        ingredients: ["1oz vodka", "1oz kahlua", "1oz espresso"],
        how: "Fyll shakeren halvfull med is. Tilsett ingrediensene og shake hardt i 10-15 sekunder. Dobbelstrain i et coupe-glass. Ha tre kaffebønner som garnityr.",
        variants: ["Creme Espresso martini - tilsett kremlikør"]  
    },
    {
        name: "Daquiri 🍸",
        ingredients: ["5 cl rom", "En halv lime", "1oz sukkerlake", "Limeskive til garnityr"],
        how: "Ha ingrediensene i en shaker med is. Shake til det er avkjølt og strain over i et coupe-glass. Ha en limeskive som garnityr",
        variants: ["Hemingway daquiri - bytt ut halvparten av limen med grapefruit"]  
    },
    {
        name: "Gin fizz 🌊",
        ingredients: ["2oz gin", "3/4oz sukkerlake", "3/4oz sitron", "Soda water", "Sitronskive til garnityr"],
        how: "Ha ingrediensene i en shaker med is. Shake til det er avkjølt og strain over i et highball glass med is.",
        variants: ["'<hva som helst> gin fizz' - Tilsett hva som helst"]
    },
    {
        name: "Camp Hortini light 🏝",
        ingredients: ["1.5oz vaniljevodka", "1.5oz pasjonsfruktpuré", "1/2oz sitron", "1/2oz sukkerlake", "1/2oz eggehvite"],
        how: "Ha ingrediensene i en shaker. Shake først uten is i 10-15 sekunder, deretter med is til det er avkjølt. Dobbelstrain og server i et coupe-glass uten is. Pynt med en halv pasjonsfrukt",
        variants: ["Dobbel - mer vodka, mer pasjonsfruktpuré"]
    }
]

export default DrinkList;
