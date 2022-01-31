const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Midnight City Season 01";
const description = "Season 01 of Midnight City NFT Badges";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 2000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.midnightcitynft.com",
  creators: [
    {
      address: "0x03dBDA14Ad96554B2da6A906702C2dEf34034971",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 5,
    layersOrder: [
      { name: "01_BACKGROUND" },
      { name: "02_TYPE_BLUDGARD",  
        options: {
          hasFrames: false,
          blend: MODE.hardLight,
          displayName: "Character Type", 
        },  
      },
      { name: "03_CHARACTER_BLUDGARD",
        options: {
          hasFrames: true,
          displayName: "Character Skin", 
        },
      },
      { name: "04_MOUTH_BLUDGARD", 
        options: {
          hasFrames: true,
          displayName: "Mouth", 
        },  
      },
      { name: "05_MARKINGS" },
      { name: "06_EYES" },
      { name: "07_All_Ears_Nose" },
      { name: "08_ACCESSORIES" },
      { name: "09_HAIR"},
      { name: "10_CLOTHING"},
      { name: "11_All_Grain",
        options: {
          blend: MODE.softlight,
          opacity: 0.35,
        } 
      },
      { name: "12_All_HardContrast",
        options: {
          blend: MODE.overlay,
          opacity: 0.2,
        }
      },
    ],
  },
  {
    growEditionSizeTo: 10,
    layersOrder: [
      { name: "01_BACKGROUND" },
      { name: "02_TYPE_HUMAN",  
        options: {
          hasFrames: false,
          blend: MODE.hardLight,
          displayName: "Character Type", 
        },  
      },
      { name: "03_CHARACTER_HUMAN",
        options: {
          hasFrames: true,
          displayName: "Character Skin", 
        },
      },
      { name: "04_MOUTH_HUMAN", 
        options: {
          hasFrames: true,
          displayName: "Mouth", 
        },  
      },
      { name: "05_MARKINGS" },
      { name: "06_EYES" },
      { name: "07_All_Ears_Nose" },
      { name: "08_ACCESSORIES" },
      { name: "09_HAIR"},
      { name: "10_CLOTHING"},
      { name: "11_All_Grain",
        options: {
          blend: MODE.softlight,
          opacity: 0.35,
        } 
      },
      { name: "12_All_HardContrast",
        options: {
          blend: MODE.overlay,
          opacity: 0.2,
        }
      },
    ],
  },
  {
    growEditionSizeTo: 15,
    layersOrder: [
      { name: "01_BACKGROUND" },
      { name: "02_TYPE_SOLKIN",  
        options: {
          hasFrames: false,
          blend: MODE.hardLight,
          displayName: "Character Type", 
        },  
      },
      { name: "03_CHARACTER_SOLKIN",
        options: {
          hasFrames: true,
          displayName: "Character Skin", 
        },
      },
      { name: "04_MOUTH_SOLKIN", 
        options: {
          hasFrames: true,
          displayName: "Mouth", 
        },  
      },
      { name: "05_MARKINGS" },
      { name: "06_EYES" },
      { name: "07_All_Ears_Nose" },
      { name: "08_ACCESSORIES" },
      { name: "09_HAIR"},
      { name: "10_CLOTHING"},
      { name: "11_All_Grain",
        options: {
          blend: MODE.softlight,
          opacity: 0.35,
        } 
      },
      { name: "12_All_HardContrast",
        options: {
          blend: MODE.overlay,
          opacity: 0.2,
        }
      },
    ],
  }
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 1500,
  height: 1500,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "100%",
  static: false,
  default: "#ffffff",
};

const extraMetadata = {};
{}

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
