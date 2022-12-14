// https://en.wikipedia.org/wiki/List_of_rowing_clubs

const clubs = [
  {
    name: "Agecroft Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/18/Agecroft_Rowing_Club_Rowing_Blade.svg",
    wikiUrl: "https://en.wikipedia.org/wiki/Agecroft_Rowing_Club",
    description:
      "White and dark blue split by a red stripe in line with loom (shaft)",
  },
  {
    name: "Auriol Kensington (Hammersmith)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/bf/Auriol_Kensington_Blade.svg",
    wikiUrl: "https://en.wikipedia.org/wiki/Auriol_Kensington_Rowing_Club",
    description:
      "Green (and lilac; BR handbook says pink). Lilac toward the tip with an oblique divide.",
  },
  {
    name: "Avon County Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/ce/Avon_County_Rowing_Club_Rowing_Blade.svg",
    wikiUrl: "https://en.wikipedia.org/wiki/Avon_County_Rowing_Club",
    description: "Black with broad amber tips",
  },
  {
    name: "Barnes Bridge Ladies Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/19/Barnes_Bridge_Ladies_Rowing_Club.svg",
    wikiUrl: "https://en.wikipedia.org/wiki/Barnes_Bridge_Ladies_Rowing_Club",
    description: "Mid-blue with white tips",
  },
  {
    name: "Bedford Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/95/Bedford_RC_Blade.svg",
    wikiUrl: "https://en.wikipedia.org/wiki/Bedford_Rowing_Club",
    description: "Maroon with two, end white & blue stripes around one maroon",
  },
  {
    name: "Berwick Amateur Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/df/Berwick_Amateur_Rowing_Club_Rowing_Blade.svg",
    wikiUrl:
      "https://en.wikipedia.org/w/index.php?title=Berwick_Amateur_Rowing_Club&action=edit&redlink=1",
    description: "Royal blue with double white chevrons",
  },
  {
    name: "Bradford Amateur Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/06/Bradford_Amateur_Rowing_Club_Rowing_Blade.svg",
    wikiUrl: "https://en.wikipedia.org/wiki/Bradford_Amateur_Rowing_Club",
    description: "Dark blue with three white parallelograms towards tips",
  },
  {
    name: "Bristol Ariel Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/70/Bristol_Ariel_Rowing_Club_Rowing_Blade.svg",
    wikiUrl: "https://en.wikipedia.org/wiki/Bristol_Ariel_Rowing_Club",
    description:
      "White & Oxford Blue Berkeley cross (per BR handbook: Maltese cross))",
  },
  {
    name: "Burway Rowing Club (Laleham)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/73/Burway_Rowing_Club_Rowing_Blade.svg",
    wikiUrl: "https://en.wikipedia.org/wiki/Burway_Rowing_Club",
    description:
      "Dark blue with a gold stripe (narrow, diagonally; sometimes two chevrons)",
  },
  {
    name: "Cambois Rowing Club (Ashington)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/5d/Cambois_Rowing_Club_Rowing_Blade.svg",
    wikiUrl: "https://en.wikipedia.org/wiki/Cambois_Rowing_Club",
    description: "Dark green (per BR handbook: green) with white-triangle tips",
  },
  {
    name: "Chester-le-Street Amateur Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/68/Chester_Le_Street_Amateur_Rowing_Club_Rowing_Blade.svg",
    wikiUrl:
      "https://en.wikipedia.org/wiki/Chester-le-Street_Amateur_Rowing_Club",
    description: "Royal blue with oblique white stripe and red tips",
  },
  {
    name: "City of Cambridge Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/bc/City_of_Cambridge_Rowing_Club_Blade.svg",
    wikiUrl: "https://en.wikipedia.org/wiki/City_of_Cambridge_Rowing_Club",
    description:
      "Navy blue with two gold & claret stripes mirrored around a navy blue stripe (all crossways)",
  },
  {
    name: "Cantabrigian Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/49/Cantabrigian_Rowing_Club_Rowing_Blade.svg",
    wikiUrl: "https://en.wikipedia.org/wiki/Cantabrigian_Rowing_Club",
    description: "Dark blue with silver stripe",
  },
  {
    name: "City of Oxford Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/76/City_of_Oxford_Rowing_Club_Rowing_Blade.svg",
    wikiUrl: "https://en.wikipedia.org/wiki/City_of_Oxford_Rowing_Club",
    description:
      "Oxford blue with diagonal white stripe and a red tip (or red and white bar)",
  },
  {
    name: "Clydesdale Amateur Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/ee/Clydesdale_Amateur_Rowing_Club_Rowing_Blade.svg",
    wikiUrl: "https://en.wikipedia.org/wiki/Clydesdale_Amateur_Rowing_Club",
    description: "Dark blue with long white cross",
  },
  {
    name: "Dart Totnes Amateur Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/94/Rowing_Blade_Black.svg",
    wikiUrl: "https://en.wikipedia.org/wiki/Dart_Totnes_Amateur_Rowing_Club",
    description: "Black",
  },
  {
    name: "Durham Amateur Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/b9/Durham_Amateur_Rowing_Club_Rowing_Blade.svg",
    wikiUrl: "https://en.wikipedia.org/wiki/Durham_Amateur_Rowing_Club",
    description: "Dark blue with gold stripe",
  },
  {
    name: "Eton Excelsior Rowing Club (Dorney Lake)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/b9/Eton_Excelsior_RC_Rowing_Blade.svg",
    wikiUrl: "https://en.wikipedia.org/wiki/Eton_Excelsior_Rowing_Club",
    description: "Dark blue, thin amber stripe",
  },
  {
    name: "Evesham Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/20/Evesham_RC_Rowing_Blade.svg",
    wikiUrl: "https://en.wikipedia.org/wiki/Evesham_Rowing_Club",
    description: "Dark blue with white tip (thin)",
  },
  {
    name: "Elizabethan Boat Club (Westminster School alumni)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/81/Westminster_School_Boat_Club_Rowing_Blade.svg",
    wikiUrl: "https://en.wikipedia.org/wiki/Westminster_School_Boat_Club",
    description: "Pink (sometimes blue triangle tips)",
  },
  {
    name: "Glasgow Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/bc/Glasgow_Rowing_Club_Rowing_Blade.svg",
    wikiUrl: "https://en.wikipedia.org/wiki/Glasgow_Rowing_Club",
    description: "Red uppers, yellow bases and black triangular tips",
  },
  {
    name: "Globe Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/0d/Globe_RC_blade.svg",
    wikiUrl: "https://en.wikipedia.org/wiki/Globe_Rowing_Club",
    description:
      "Dark blue & broad white diagonal stripe, often slightly curved, to upper tip",
  },
  {
    name: "Gloucester Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/b2/Gloucester_Rowing_Club_Rowing_Blade.svg",
    wikiUrl: "https://en.wikipedia.org/wiki/Gloucester_Rowing_Club",
    description: "Black with red and white stripe (red: thicker yet thin)",
  },
  {
    name: "Grosvenor Rowing Club (Chester)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/01/Grosvenor_Rowing_Club_Blade.svg",
    wikiUrl: "https://en.wikipedia.org/wiki/Grosvenor_Rowing_Club",
    description: "Dark blue with orange stripes (two, thin)",
  },
  {
    name: "Guildford Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/09/Guildford_Rowing_Club_Rowing_Blade.svg",
    wikiUrl:
      "https://en.wikipedia.org/w/index.php?title=Guildford_Rowing_Club&action=edit&redlink=1",
    description: "Green, two gold bars",
  },
  {
    name: "Henley Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/40/Navy_shaded_rowing_blade.gif",
    wikiUrl: "https://en.wikipedia.org/wiki/Henley_Rowing_Club",
    description: "Dark blue with white collar, sometimes just dark blue",
  },
  {
    name: "Hexham Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/0f/Hexham_Rowing_Club_Rowing_Blade.svg",
    wikiUrl:
      "https://en.wikipedia.org/w/index.php?title=Hexham_Rowing_Club&action=edit&redlink=1",
    description:
      "Old gold, royal blue saltaire and (brown per BR Handbook, sometimes red) tips",
  },
  {
    name: "HSBC Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c2/HSBC_Rowing_Club_Rowing_Blade.svg",
    wikiUrl: "https://en.wikipedia.org/wiki/HSBC_Rowing_Club",
    description:
      "Mid-blue base, small red and white stripes above. Sometimes white as base.",
  },
  {
    name: "Kingston Grammar School Veterans Boat Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/8b/Kingston_Grammar_School_Vetrans_Boat_Club_Rowing_Blade.svg",
    wikiUrl: "https://en.wikipedia.org/wiki/Kingston_Grammar_School",
    description:
      "Royal red with a thick white stripe incorporating a thin red 'v' as upright when squared",
  },
  {
    name: "Kingston Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/92/Kingston_Rowing_Club_Blade.svg",
    wikiUrl: "https://en.wikipedia.org/wiki/Kingston_Rowing_Club",
    description: "Carmine red. Per BR handbook: scarlet.",
  },
  {
    name: "Leander Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/55/Leander_Club_Rowing_Blade.svg",
    wikiUrl: "https://en.wikipedia.org/wiki/Leander_Club",
    description: "Cerise",
  },
  {
    name: "Leeds Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/79/Leeds_Rowing_Club_Rowing_Blade.svg",
    wikiUrl: "https://en.wikipedia.org/wiki/Leeds_Rowing_Club",
    description: "Navy blue with light blue tip",
  },
  {
    name: "Leicester Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/36/Rowing_Blade_White.svg",
    wikiUrl: "https://en.wikipedia.org/wiki/Leicester_Rowing_Club",
    description: "White (black and white per BR handbook)",
  },
  {
    name: "Lincoln Rowing Center",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/19/Lincoln_Rowing_Center_Rowing_Blade.svg",
    wikiUrl:
      "https://en.wikipedia.org/w/index.php?title=Lincoln_Rowing_Center&action=edit&redlink=1",
    description: "White with two red stripes (thin)",
  },
  {
    name: "London Otters Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/ac/Rowing_Blade_of_London_Otters_Rowing_Club.png",
    wikiUrl: "https://en.wikipedia.org/wiki/London_Otters_Rowing_Club",
    description: "Navy blue, bronze chevron and white tips",
  },
  {
    name: "London Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/86/London_Rowing_Club_Rowing_Blade.svg",
    wikiUrl: "https://en.wikipedia.org/wiki/London_Rowing_Club",
    description: "White & two navy blue bars: twice-interrupted (white)",
  },
  {
    name: "Maidenhead Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Maidenhead_Rowing_Club_Rowing_Blade.png",
    wikiUrl: "https://en.wikipedia.org/wiki/Maidenhead_Rowing_Club",
    description:
      "Dark (Brunswick) green with same star ('five rays') in white circle",
  },
  {
    name: "Marlow Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/e9/Marlow_Rowing_Club_rowing_blade.gif",
    wikiUrl: "https://en.wikipedia.org/wiki/Marlow_Rowing_Club",
    description:
      "Maroon (BR Handbook says cardinal red) & white-edged base and tips",
  },
  {
    name: "Medway Towns Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/3/36/Rowing_Blade_White.svg",
    wikiUrl:
      "https://en.wikipedia.org/w/index.php?title=Medway_Towns_Rowing_Club&action=edit&redlink=1",
    description: "White; or red with amber stripe & white motif",
  },
  {
    name: "Molesey Boat Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/9/94/Rowing_Blade_Black.svg",
    wikiUrl: "https://en.wikipedia.org/wiki/Molesey_Boat_Club",
    description: "Black",
  },
  {
    name: "Navy Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/40/Navy_shaded_rowing_blade.gif",
    description: "Navy",
  },
  {
    name: "Paignton Amateur Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Paignton_Amateur_Rowing_Club_Blade.svg",
    description:
      "Gold with blue 'dips' (small triangle at base of tips) or per Handbook: old gold",
  },
  {
    name: "Putney Town Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/66/Putney_Town_Rowing_Club_Rowing_Blade.svg",
    wikiUrl: "https://en.wikipedia.org/wiki/Putney_Town_Rowing_Club",
    description: "Dark blue with a white bar",
  },
  {
    name: "Reading Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/f/f0/Reading_Rowing_Club_rowing_blade.gif",
    wikiUrl: "https://en.wikipedia.org/wiki/Reading_Rowing_Club",
    description:
      "White with three mid-shade (but per BR Handbook: dark) blue diagonals, mid-stripe is thicker",
  },
  {
    name: "Runcorn Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c6/Runcorn_Rowing_Club_Blade.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/Runcorn_Rowing_Club",
    description: "Roy alblue with two white bars",
  },
  {
    name: "Sons of the Thames",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/b0/Sons_of_the_Thames_Rowing_Blade.svg",
    wikiUrl: "https://en.wikipedia.org/wiki/Sons_of_the_Thames",
    description:
      'White with two mid-blue bars that cross-over (chain style) ("crossbars")',
  },
  {
    name: "St Andrew Boat Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/6/67/Sabc_blade.png",
    wikiUrl: "https://en.wikipedia.org/wiki/St_Andrew_Boat_Club",
    description: "White with a blue Saltire cross",
  },
  {
    name: "St Neots Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/d7/St_Neots_Rowing_Club_Rowing_Blade.svg",
    wikiUrl: "https://en.wikipedia.org/wiki/St_Neots_Rowing_Club",
    description:
      "Light blue with thick, dark blue bar (per Handbook: just bar)",
  },
  {
    name: "Staines Boat Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/06/Staines_Boat_Club_Rowing_Blade.svg",
    wikiUrl: "https://en.wikipedia.org/wiki/Staines_Boat_Club",
    description: "Dark green",
  },
  {
    name: "Talkin Tarn Amateur Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/86/Talkin_Tarn_Amateur_Rowing_Club_Rowing_Blade.svg",
    wikiUrl:
      "https://en.wikipedia.org/w/index.php?title=Talkin_Tarn_Amateur_Rowing_Club&action=edit&redlink=1",
    description: "Maroon uppers, gold bases",
  },
  {
    name: "Tees Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/27/Tees_Rowing_Club_Rowing_Blades.svg",
    wikiUrl: "https://en.wikipedia.org/wiki/Tees_Rowing_Club",
    description:
      "Sky blue with an oblique split for a maroon tip, or per Handbook: white with those colours as stripe",
  },
  {
    name: "Thames Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/e/e1/Thames_Rowing_Club_Rowing_Blade.svg",
    wikiUrl: "https://en.wikipedia.org/wiki/Thames_Rowing_Club",
    description:
      "Black and 2 offset, repeating bursts of red, white and black as bars: white:\nthinned to half the others' size",
  },
  {
    name: "Thames Tradesmen's Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c8/TTRC_blade.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/Thames_Tradesmen%27s_Rowing_Club",
    description: "Claret uppers, white middles, (dark) green bases",
  },
  {
    name: 'Tideway Scullers School ("Tideway Scullers")',
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/0/07/Tideway_Scullers_School_Rowing_Blade.svg",
    wikiUrl: "https://en.wikipedia.org/wiki/Tideway_Scullers_School",
    description: "Centre-split obliquely: red with true yellow tips",
  },
  {
    name: "Trent Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/cd/Trent_Rowing_Club_Rowing_Blade.svg",
    wikiUrl: "https://en.wikipedia.org/wiki/Trent_Rowing_Club",
    description: "Light blue with a white triangle",
  },
  {
    name: "Twickenham Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/7e/Twickenham_Rowing_Club_Rowing_Blade.svg",
    wikiUrl: "https://en.wikipedia.org/wiki/Twickenham_Rowing_Club",
    description: "Magenta amid (quite dark) blue",
  },
  {
    name: "Two Lions Boat Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/b/bc/Two_Lions_BC_rowing_blade.png",
    wikiUrl:
      "https://en.wikipedia.org/w/index.php?title=Two_Lions_Boat_Club&action=edit&redlink=1",
    description: "Black with gold two-headed upright lion",
  },
  {
    name: "Tyne Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/11/Tyne_Rowing_Club_Rowing_Blade.svg",
    wikiUrl: "https://en.wikipedia.org/wiki/Tyne_Rowing_Club",
    description: "Black with two thin white stripes",
  },
  {
    name: "Vesta Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/8/8f/Vesta_Rowing_Blade.svg",
    wikiUrl: "https://en.wikipedia.org/wiki/Vesta_Rowing_Club",
    description: "Crimson, black stripe",
  },
  {
    name: "Walbrook Rowing Club (Teddington)",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Walbrook_Rowing_Club_Rowing_Blade.svg",
    wikiUrl: "https://en.wikipedia.org/wiki/Walbrook_Rowing_Club",
    description:
      "Black, yellow and mid-green (diagonally split in three bands, listed from the top and loom)",
  },
  {
    name: "Wallingford Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/5c/Wallingford_Rowing_Blade.svg",
    wikiUrl: "https://en.wikipedia.org/wiki/Wallingford_Rowing_Club",
    description:
      "Maroon and cyan (diagonally split, maroon to tip and top) (BR handbook: scarlet and light blue)",
  },
  {
    name: "Walton Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Walton_Rowing_Club_Rowing_Blade.svg",
    wikiUrl: "https://en.wikipedia.org/wiki/Walton_Rowing_Club",
    description: "Dark blue, light blue and maroon (three bands)",
  },
  {
    name: "Warrington Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/76/Warrington_%28and_Surrey_Uni%29_Rowing_Blade.svg",
    wikiUrl: "https://en.wikipedia.org/wiki/Warrington_Rowing_Club",
    description: "White, primrose yellow and royal blue (three bands)",
  },
  {
    name: "Weybridge Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/d/dc/Weybridge_Rowing_Blade.svg",
    wikiUrl: "https://en.wikipedia.org/wiki/Weybridge_Rowing_Club",
    description: "Light blue, two dark blue chevrons (outward-pointing)",
  },
  {
    name: "Weybridge Ladies Amateur Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/10/Weybridge_Ladies_ARC_rowing_blade.gif",
    wikiUrl:
      "https://en.wikipedia.org/wiki/Weybridge_Ladies_Amateur_Rowing_Club",
    description: "Dark blue, light blue and scarlet (three bands)",
  },
  {
    name: "Worcester Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/79/Worcester_Rowing_Club_Rowing_Blade.svg",
    wikiUrl: "https://en.wikipedia.org/wiki/Worcester_Rowing_Club",
    description: "White, one vermillion (BR handbook: red) and two black bars",
  },
  {
    name: "York City Rowing Club",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/1/19/York_City_Rowing_Club_Rowing_Blade.svg",
    wikiUrl: "https://en.wikipedia.org/wiki/York_City_Rowing_Club",
    description: "White, three thin stripes of purple, black and bright gold",
  },
];