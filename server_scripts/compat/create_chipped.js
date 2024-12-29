const chippedTarget = [
  "acacia_door",
  "acacia_leaves",
  "acacia_log",
  "acacia_planks",
  "acacia_trapdoor",
  "amethyst_block",
  "ancient_debris",
  "andesite",
  "bamboo_door",
  "bamboo_planks",
  "bamboo_trapdoor",
  "barrel",
  "basalt",
  "birch_door",
  "birch_leaves",
  "birch_log",
  "birch_planks",
  "birch_trapdoor",
  "black_carpet",
  "black_concrete",
  "black_glazed_terracotta",
  "black_stained_glass",
  "black_stained_glass_pane",
  "black_terracotta",
  "black_wool",
  "blackstone",
  "blue_carpet",
  "blue_concrete",
  "blue_glazed_terracotta",
  "blue_ice",
  "blue_stained_glass",
  "blue_stained_glass_pane",
  "blue_terracotta",
  "blue_wool",
  "bone_block",
  "bookshelf",
  "borderless_bricks",
  "bricks",
  "brown_carpet",
  "brown_concrete",
  "brown_glazed_terracotta",
  "brown_mushroom",
  "brown_mushroom_block",
  "brown_stained_glass",
  "brown_stained_glass_pane",
  "brown_terracotta",
  "brown_wool",
  "calcite",
  "carved_pumpkin",
  "cherry_door",
  "cherry_log",
  "cherry_planks",
  "cherry_trapdoor",
  "clay",
  "coal_block",
  "cobblestone",
  "cobweb",
  "crimson_door",
  "crimson_fungus",
  "crimson_planks",
  "crimson_roots",
  "crimson_stem",
  "crimson_trapdoor",
  "crying_obsidian",
  "cyan_carpet",
  "cyan_concrete",
  "cyan_glazed_terracotta",
  "cyan_stained_glass",
  "cyan_stained_glass_pane",
  "cyan_terracotta",
  "cyan_wool",
  "dark_oak_door",
  "dark_oak_leaves",
  "dark_oak_log",
  "dark_oak_planks",
  "dark_oak_trapdoor",
  "dark_prismarine",
  "deepslate",
  "diamond_block",
  "diorite",
  "dirt",
  "dried_kelp_block",
  "dripstone_block",
  "emerald_block",
  "end_stone",
  "gilded_blackstone",
  "glass",
  "glass_pane",
  "glowstone",
  "gold_block",
  "granite",
  "gravel",
  "gray_carpet",
  "gray_concrete",
  "gray_glazed_terracotta",
  "gray_stained_glass",
  "gray_stained_glass_pane",
  "gray_terracotta",
  "gray_wool",
  "green_carpet",
  "green_concrete",
  "green_glazed_terracotta",
  "green_stained_glass",
  "green_stained_glass_pane",
  "green_terracotta",
  "green_wool",
  "hay_block",
  "ice",
  "iron_bars",
  "iron_block",
  "jack_o_lantern",
  "jungle_door",
  "jungle_leaves",
  "jungle_log",
  "jungle_planks",
  "jungle_trapdoor",
  "ladder",
  "lantern",
  "lapis_block",
  "light_blue_carpet",
  "light_blue_concrete",
  "light_blue_glazed_terracotta",
  "light_blue_stained_glass",
  "light_blue_stained_glass_pane",
  "light_blue_terracotta",
  "light_blue_wool",
  "light_gray_carpet",
  "light_gray_concrete",
  "light_gray_glazed_terracotta",
  "light_gray_stained_glass",
  "light_gray_stained_glass_pane",
  "light_gray_terracotta",
  "light_gray_wool",
  "lily_pad",
  "lime_carpet",
  "lime_concrete",
  "lime_glazed_terracotta",
  "lime_stained_glass",
  "lime_stained_glass_pane",
  "lime_terracotta",
  "lime_wool",
  "lodestone",
  "magenta_carpet",
  "magenta_concrete",
  "magenta_glazed_terracotta",
  "magenta_stained_glass",
  "magenta_stained_glass_pane",
  "magenta_terracotta",
  "magenta_wool",
  "magma_block",
  "mangrove_door",
  "mangrove_log",
  "mangrove_planks",
  "mangrove_roots",
  "mangrove_trapdoor",
  "melon",
  "moss_block",
  "mossy_cobblestone",
  "mossy_stone_bricks",
  "mud",
  "mud_bricks",
  "mushroom_stem",
  "nether_bricks",
  "nether_sprouts",
  "nether_wart_block",
  "netherite_block",
  "netherrack",
  "oak_door",
  "oak_leaves",
  "oak_log",
  "oak_planks",
  "oak_trapdoor",
  "obsidian",
  "ochre_froglight",
  "orange_carpet",
  "orange_concrete",
  "orange_glazed_terracotta",
  "orange_stained_glass",
  "orange_stained_glass_pane",
  "orange_terracotta",
  "orange_wool",
  "packed_ice",
  "packed_mud",
  "pearlescent_froglight",
  "pink_carpet",
  "pink_concrete",
  "pink_glazed_terracotta",
  "pink_stained_glass",
  "pink_stained_glass_pane",
  "pink_terracotta",
  "pink_wool",
  "pointed_dripstone",
  "prismarine",
  "pumpkin",
  "purple_carpet",
  "purple_concrete",
  "purple_glazed_terracotta",
  "purple_stained_glass",
  "purple_stained_glass_pane",
  "purple_terracotta",
  "purple_wool",
  "purpur_block",
  "quartz_block",
  "raw_copper_block",
  "raw_gold_block",
  "raw_iron_block",
  "red_carpet",
  "red_concrete",
  "red_glazed_terracotta",
  "red_mushroom",
  "red_mushroom_block",
  "red_nether_bricks",
  "red_sandstone",
  "red_stained_glass",
  "red_stained_glass_pane",
  "red_terracotta",
  "red_wool",
  "redstone_block",
  "redstone_lamp",
  "redstone_torch",
  "sand",
  "sandstone",
  "sea_lantern",
  "shroomlight",
  "smooth_stone",
  "snow_block",
  "soul_lantern",
  "soul_sand",
  "special_lantern",
  "special_soul_lantern",
  "sponge",
  "spruce_door",
  "spruce_leaves",
  "spruce_log",
  "spruce_planks",
  "spruce_trapdoor",
  "stone",
  "stripped_acacia_log",
  "stripped_birch_log",
  "stripped_cherry_log",
  "stripped_crimson_stem",
  "stripped_dark_oak_log",
  "stripped_jungle_log",
  "stripped_mangrove_log",
  "stripped_oak_log",
  "stripped_spruce_log",
  "stripped_warped_stem",
  "terracotta",
  "torch",
  "tuff",
  "verdant_froglight",
  "vine",
  "warped_door",
  "warped_fungus",
  "warped_planks",
  "warped_roots",
  "warped_stem",
  "warped_trapdoor",
  "warped_wart_block",
  "waxed_copper_block",
  "waxed_exposed_copper_block",
  "waxed_oxidized_copper",
  "waxed_weathered_copper",
  "white_carpet",
  "white_concrete",
  "white_glazed_terracotta",
  "white_stained_glass",
  "white_stained_glass_pane",
  "white_terracotta",
  "white_wool",
  "yellow_carpet",
  "yellow_concrete",
  "yellow_glazed_terracotta",
  "yellow_stained_glass",
  "yellow_stained_glass_pane",
  "yellow_terracotta",
  "yellow_wool",
]

ServerEvents.recipes((event) => {
  chippedTarget.forEach(chippedTargetItem => {
    const chippedItems = Ingredient.of(`#chipped:${chippedTargetItem}`).itemIds;
    chippedItems.forEach(e => {
      event.custom({
        type: "create:cutting",
        ingredients: { tag: `chipped:${chippedTargetItem}` },
        results: { item: e, count: 1 }
      })
    })
  })
})