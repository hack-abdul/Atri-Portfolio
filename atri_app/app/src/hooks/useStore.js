import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "First_Block": {
      "callbacks": {}
    },
    "Flex13": {
      "callbacks": {}
    },
    "Butoon_Box": {
      "callbacks": {}
    },
    "Flex8": {
      "callbacks": {}
    },
    "Flex14": {
      "callbacks": {}
    },
    "Flex15": {
      "callbacks": {}
    },
    "NavBar": {
      "callbacks": {}
    },
    "Links": {
      "callbacks": {}
    },
    "Flex6": {
      "callbacks": {}
    },
    "Flex2": {
      "callbacks": {}
    },
    "Flex3": {
      "callbacks": {}
    },
    "Flex7": {
      "callbacks": {}
    },
    "Menu1": {
      "custom": {
        "open": true,
        "iconHeight": 24,
        "iconWidth": 24,
        "alignRight": true
      },
      "callbacks": {}
    },
    "Flex1": {
      "callbacks": {}
    },
    "Flex16": {
      "callbacks": {}
    },
    "Flex18": {
      "callbacks": {}
    },
    "Flex17": {
      "callbacks": {}
    },
    "Flex19": {
      "callbacks": {}
    },
    "Flex39": {
      "callbacks": {}
    },
    "Flex40": {
      "callbacks": {}
    },
    "Flex41": {
      "callbacks": {}
    },
    "Flex44": {
      "callbacks": {}
    },
    "Flex42": {
      "callbacks": {}
    },
    "Flex43": {
      "callbacks": {}
    },
    "Flex47": {
      "callbacks": {}
    },
    "Flex45": {
      "callbacks": {}
    },
    "Flex46": {
      "callbacks": {}
    },
    "Flex36": {
      "callbacks": {}
    },
    "Flex48": {
      "callbacks": {}
    },
    "Flex49": {
      "callbacks": {}
    },
    "Flex50": {
      "callbacks": {}
    },
    "Flex12": {
      "callbacks": {}
    },
    "Div1": {
      "callbacks": {}
    },
    "Flex51": {
      "callbacks": {}
    },
    "Flex52": {
      "callbacks": {}
    },
    "Flex53": {
      "callbacks": {}
    },
    "Div15": {
      "callbacks": {}
    },
    "Div18": {
      "callbacks": {}
    },
    "Flex54": {
      "callbacks": {}
    },
    "Flex55": {
      "callbacks": {}
    },
    "Div76": {
      "callbacks": {}
    },
    "Div19": {
      "callbacks": {}
    },
    "Flex57": {
      "callbacks": {}
    },
    "Flex59": {
      "callbacks": {}
    },
    "Flex62": {
      "callbacks": {}
    },
    "Flex68": {
      "callbacks": {}
    },
    "Flex69": {
      "callbacks": {}
    },
    "Flex71": {
      "callbacks": {}
    },
    "Flex70": {
      "callbacks": {}
    },
    "Flex72": {
      "callbacks": {}
    },
    "Flex73": {
      "callbacks": {}
    },
    "Flex74": {
      "callbacks": {}
    },
    "Flex75": {
      "callbacks": {}
    },
    "Flex58": {
      "callbacks": {}
    },
    "Div23": {
      "callbacks": {}
    },
    "Div22": {
      "callbacks": {}
    },
    "Div20": {
      "callbacks": {}
    },
    "Flex60": {
      "callbacks": {}
    },
    "Div25": {
      "callbacks": {}
    },
    "Flex76": {
      "callbacks": {}
    },
    "Flex77": {
      "callbacks": {}
    },
    "Flex78": {
      "callbacks": {}
    },
    "Flex79": {
      "callbacks": {}
    },
    "Flex85": {
      "callbacks": {}
    },
    "Flex89": {
      "callbacks": {}
    },
    "Flex90": {
      "callbacks": {}
    },
    "Flex92": {
      "callbacks": {}
    },
    "Flex94": {
      "callbacks": {}
    },
    "Flex97": {
      "callbacks": {}
    },
    "Flex98": {
      "callbacks": {}
    },
    "Flex102": {
      "callbacks": {}
    },
    "Flex100": {
      "callbacks": {}
    },
    "Flex101": {
      "callbacks": {}
    },
    "Flex105": {
      "callbacks": {}
    },
    "Flex103": {
      "callbacks": {}
    },
    "Flex104": {
      "callbacks": {}
    },
    "Flex99": {
      "callbacks": {}
    },
    "Flex121": {
      "callbacks": {}
    },
    "Flex119": {
      "callbacks": {}
    },
    "Flex120": {
      "callbacks": {}
    },
    "Flex118": {
      "callbacks": {}
    },
    "Flex114": {
      "callbacks": {}
    },
    "Flex115": {
      "callbacks": {}
    },
    "Flex122": {
      "callbacks": {}
    },
    "Flex126": {
      "callbacks": {}
    },
    "Flex123": {
      "callbacks": {}
    },
    "Flex124": {
      "callbacks": {}
    },
    "Flex125": {
      "callbacks": {}
    },
    "Flex130": {
      "callbacks": {}
    },
    "Flex127": {
      "callbacks": {}
    },
    "Flex128": {
      "callbacks": {}
    },
    "Flex129": {
      "callbacks": {}
    },
    "Flex95": {
      "callbacks": {}
    },
    "Flex116": {
      "callbacks": {}
    },
    "Flex110": {
      "callbacks": {}
    },
    "Flex111": {
      "callbacks": {}
    },
    "Flex117": {
      "callbacks": {}
    },
    "Flex112": {
      "callbacks": {}
    },
    "Flex113": {
      "callbacks": {}
    },
    "Flex137": {
      "callbacks": {}
    },
    "Flex138": {
      "callbacks": {}
    },
    "Flex141": {
      "callbacks": {}
    },
    "Flex140": {
      "callbacks": {}
    },
    "Flex143": {
      "callbacks": {}
    },
    "Flex144": {
      "callbacks": {}
    },
    "Image5": {
      "custom": {
        "alt": "No preview available"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex133": {
      "callbacks": {}
    },
    "Flex134": {
      "callbacks": {}
    },
    "Image_Block": {
      "callbacks": {}
    },
    "First_Block_Text": {
      "custom": {
        "text": "I design products"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox17": {
      "custom": {
        "text": "that delight and"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox18": {
      "custom": {
        "text": "Hi! I’m Jane, a product designer based in Berlin. I create"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox19": {
      "custom": {
        "text": "user-friendly interfaces for fast-growing startups."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox20": {
      "custom": {
        "text": "inspire people."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Download_CV": {
      "custom": {
        "text": "Download CV"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Book_a_Call": {
      "custom": {
        "text": "Book a call"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div27": {
      "callbacks": {}
    },
    "Div28": {
      "callbacks": {}
    },
    "Div31": {
      "callbacks": {}
    },
    "Div10": {
      "callbacks": {}
    },
    "Div12": {
      "callbacks": {}
    },
    "Div13": {
      "callbacks": {}
    },
    "Div14": {
      "callbacks": {}
    },
    "TextBox21": {
      "custom": {
        "text": "Trusted By"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox11": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox13": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox14": {
      "custom": {
        "text": "Portfolio Creator."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox5": {
      "custom": {
        "text": "Project"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox6": {
      "custom": {
        "text": "Services"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox7": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "TextBox8": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox9": {
      "custom": {
        "text": "Book a Call "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox10": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo_only.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1": {
      "custom": {
        "text": "Contact Me"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox2": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox3": {
      "custom": {
        "text": "Talks"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox4": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox22": {
      "custom": {
        "text": "Services"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox23": {
      "custom": {
        "text": "one product at a time."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox24": {
      "custom": {
        "text": "Design that solves problems,"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox48": {
      "custom": {
        "text": "What I can do for you"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div8": {
      "callbacks": {}
    },
    "TextBox49": {
      "custom": {
        "text": "Faster, better products that your"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox50": {
      "custom": {
        "text": "users love. Here's all the services I"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox51": {
      "custom": {
        "text": "provide:"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox52": {
      "custom": {
        "text": ".  Design Strategy"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox53": {
      "custom": {
        "text": ".  Web and Mobile App Design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox54": {
      "custom": {
        "text": ". Front-end Development"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox61": {
      "custom": {
        "text": "Applications I'm fluent in"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div6": {
      "callbacks": {}
    },
    "TextBox55": {
      "custom": {
        "text": ". Figma"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox56": {
      "custom": {
        "text": ".  Webflow"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox57": {
      "custom": {
        "text": ".  Sketch"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox58": {
      "custom": {
        "text": "multilingual."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox59": {
      "custom": {
        "text": "to do the perfect job. Thankfully, I'm"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox60": {
      "custom": {
        "text": "Every designer needs the right tools"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox68": {
      "custom": {
        "text": "What you can expect"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div9": {
      "callbacks": {}
    },
    "TextBox62": {
      "custom": {
        "text": ". Efficient and maintainable"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox63": {
      "custom": {
        "text": ".  Device and user friendly"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox64": {
      "custom": {
        "text": ".  Clean and functional"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox65": {
      "custom": {
        "text": "and usable."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox66": {
      "custom": {
        "text": "than pretty. I make them shippable"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox67": {
      "custom": {
        "text": "I design products that are more"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox69": {
      "custom": {
        "text": "P R O J E C T S"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox70": {
      "custom": {
        "text": "I bring results."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox71": {
      "custom": {
        "text": "My clients are proof."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button3": {
      "custom": {
        "text": "View all projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Frame%20327.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "First_Block_Image": {
      "custom": {
        "alt": "No preview available"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image11": {
      "custom": {
        "alt": "No preview available"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image12": {
      "custom": {
        "alt": "No preview available"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image13": {
      "custom": {
        "alt": "No preview available"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Upload1": {
      "custom": {
        "multiple": false,
        "showFilename": true,
        "text": "Upload",
        "disabled": false
      },
      "callbacks": {
        "onChange": [
          {
            "sendFile": {
              "self": true,
              "props": [
                "io",
                "files"
              ]
            }
          }
        ]
      }
    },
    "Upload2": {
      "custom": {
        "multiple": false,
        "showFilename": true,
        "text": "Upload",
        "disabled": false,
        "multuple": false
      },
      "callbacks": {
        "onChange": [
          {
            "sendFile": {
              "self": true,
              "props": [
                "io",
                "files"
              ]
            }
          }
        ]
      }
    },
    "Upload3": {
      "custom": {
        "multiple": false,
        "showFilename": true,
        "text": "Upload",
        "disabled": false,
        "multuple": true
      },
      "callbacks": {
        "onChange": [
          {
            "sendFile": {
              "self": true,
              "props": [
                "io",
                "files"
              ]
            }
          }
        ]
      }
    },
    "Carousel1": {
      "custom": {
        "items": [
          "first",
          "second",
          "third"
        ],
        "startTile": 2,
        "imageItems": [
          "/app-assets/WhatsApp%20Image%202022-12-05%20at%2021.56.54.jpeg",
          "/app-assets/first_atri_icon.svg",
          "/app-assets/second_atri_icon.svg"
        ],
        "isIndicatorCircle": false,
        "indicatorPosition": "Bottom"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Carousel9": {
      "custom": {
        "items": [
          "first",
          "second",
          "third"
        ],
        "startTile": 2,
        "imageItems": [
          "/app-assets/WhatsApp%20Image%202022-12-05%20at%2021.56.54.jpeg",
          "/app-assets/first_atri_icon.svg",
          "/app-assets/second_atri_icon.svg"
        ],
        "isIndicatorCircle": false,
        "indicatorPosition": "Bottom"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Carousel10": {
      "custom": {
        "items": [
          "first",
          "second",
          "third"
        ],
        "startTile": 2,
        "imageItems": [
          "/app-assets/WhatsApp%20Image%202022-12-05%20at%2021.56.54.jpeg",
          "/app-assets/first_atri_icon.svg",
          "/app-assets/second_atri_icon.svg"
        ],
        "isIndicatorCircle": false,
        "indicatorPosition": "Bottom"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Carousel11": {
      "custom": {
        "items": [
          "first",
          "second",
          "third"
        ],
        "startTile": 2,
        "imageItems": [
          "/app-assets/WhatsApp%20Image%202022-12-05%20at%2021.56.54.jpeg",
          "/app-assets/first_atri_icon.svg",
          "/app-assets/second_atri_icon.svg"
        ],
        "isIndicatorCircle": false,
        "indicatorPosition": "Bottom"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Carousel12": {
      "custom": {
        "items": [
          "first",
          "second",
          "third"
        ],
        "startTile": 2,
        "imageItems": [
          "/app-assets/WhatsApp%20Image%202022-12-05%20at%2021.56.54.jpeg",
          "/app-assets/first_atri_icon.svg",
          "/app-assets/second_atri_icon.svg"
        ],
        "isIndicatorCircle": false,
        "indicatorPosition": "Bottom"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox73": {
      "custom": {
        "text": "something sticky"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image4": {
      "custom": {
        "alt": "No preview available"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image6": {
      "custom": {
        "alt": "No preview available"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image7": {
      "custom": {
        "alt": "No preview available"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button4": {
      "custom": {
        "text": "V"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "experiment_button": {
      "custom": {
        "text": "V"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Cascader1": {
      "custom": {
        "hover": false,
        "rootOptions": [
          "India",
          "USA",
          "France",
          "Canada"
        ],
        "options": [
          {
            "level": 1,
            "parent": "India",
            "children": [
              "Goa",
              "Maharashtra",
              "Delhi"
            ]
          },
          {
            "level": 1,
            "parent": "USA",
            "children": [
              "California",
              "Washington DC",
              "Texas"
            ]
          },
          {
            "level": 1,
            "parent": "France",
            "children": [
              "Corsica",
              "Brittany"
            ]
          },
          {
            "level": 1,
            "parent": "Canada",
            "children": [
              "Ontario",
              "Montreal"
            ]
          },
          {
            "level": 2,
            "parent": "Goa",
            "children": [
              "Mapusa",
              "Panaji",
              "Margao"
            ]
          },
          {
            "level": 2,
            "parent": "California",
            "children": [
              "LA",
              "San Diego",
              "San Francisco"
            ]
          }
        ]
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Dropdown1": {
      "custom": {
        "values": [
          "xvx",
          "hhh",
          "jjj"
        ],
        "selectedValue": "saas",
        "displayedValues": [
          "gfdg",
          "sdgdfg",
          "junior"
        ]
      },
      "callbacks": {}
    },
    "Carousel13": {
      "custom": {
        "items": [
          "Bubble Rebrand",
          "DataDash AI Design",
          "Maize Blog Post Design",
          "CocaCola Branding",
          "ComicCon Portfolio Design"
        ],
        "startTile": 1,
        "imageItems": [
          "/app-assets/amy-shamblen-pJ_DCj9KswI-unsplash.jpg",
          "/app-assets/kimson-doan-HD8KlyWRYYM-unsplash.jpg",
          "/app-assets/alvaro-serrano-hjwKMkehBco-unsplash.jpg",
          "/app-assets/marcin-kempa-UPrF8s2ZTj8-unsplash.jpg",
          "/app-assets/davisuko-5E5N49RWtbA-unsplash.jpg"
        ],
        "isIndicatorCircle": true,
        "indicatorPosition": "Bottom"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div24": {
      "callbacks": {}
    },
    "TextBox75": {
      "custom": {
        "text": "Your Web designer specializes in creating"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox77": {
      "custom": {
        "text": "And Shaping  Modern and flexible,"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox78": {
      "custom": {
        "text": " User-friendly websites."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button6": {
      "custom": {
        "text": "V"
      },
      "callbacks": {
        "onClick": [
          {
            "sendFile": {
              "alias": "Upload1",
              "props": [
                "io",
                "files"
              ]
            }
          },
          {
            "navigate": {
              "type": "external",
              "url": "www.google.com",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox79": {
      "custom": {
        "text": "April 16, 2021  .6mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox80": {
      "custom": {
        "text": "Design tips for designers, that cover"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox81": {
      "custom": {
        "text": "everything you need"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox82": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div26": {
      "callbacks": {}
    },
    "Div30": {
      "callbacks": {}
    },
    "Flex63": {
      "callbacks": {}
    },
    "Div40": {
      "callbacks": {}
    },
    "Div41": {
      "callbacks": {}
    },
    "TextBox99": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox100": {
      "custom": {
        "text": "everything you need"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox101": {
      "custom": {
        "text": "Design tips for designers, that cover"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox102": {
      "custom": {
        "text": "April 16, 2021  .6mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div42": {
      "callbacks": {}
    },
    "Div43": {
      "callbacks": {}
    },
    "TextBox103": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox104": {
      "custom": {
        "text": "everything you need"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox105": {
      "custom": {
        "text": "Design tips for designers, that cover"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox106": {
      "custom": {
        "text": "April 16, 2021  .6mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div46": {
      "callbacks": {}
    },
    "Div47": {
      "callbacks": {}
    },
    "TextBox111": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox112": {
      "custom": {
        "text": "everything you need"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox113": {
      "custom": {
        "text": "Design tips for designers, that cover"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox114": {
      "custom": {
        "text": "April 16, 2021  .6mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div44": {
      "callbacks": {}
    },
    "Div45": {
      "callbacks": {}
    },
    "TextBox107": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox108": {
      "custom": {
        "text": "everything you need"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox109": {
      "custom": {
        "text": "Design tips for designers, that cover"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox110": {
      "custom": {
        "text": "April 16, 2021  .6mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div48": {
      "callbacks": {}
    },
    "Div49": {
      "callbacks": {}
    },
    "TextBox115": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox116": {
      "custom": {
        "text": "clients"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox117": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox118": {
      "custom": {
        "text": "April 16, 2021  .5 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox135": {
      "custom": {
        "text": "How to build rapport with your web design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div50": {
      "callbacks": {}
    },
    "Div51": {
      "callbacks": {}
    },
    "TextBox119": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox120": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox121": {
      "custom": {
        "text": "Top 6 free website mockup tools 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox122": {
      "custom": {
        "text": "April 16, 2021  .5 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div52": {
      "callbacks": {}
    },
    "Div53": {
      "callbacks": {}
    },
    "TextBox123": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox124": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox125": {
      "custom": {
        "text": "Logo design trends to avoid in 2021"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox126": {
      "custom": {
        "text": "April 16, 2021      .7 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div54": {
      "callbacks": {}
    },
    "Div55": {
      "callbacks": {}
    },
    "TextBox127": {
      "custom": {
        "text": "Read the article"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox128": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox129": {
      "custom": {
        "text": "22 best UI design tools"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox130": {
      "custom": {
        "text": "April 16, 2021  .7 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div21": {
      "callbacks": {}
    },
    "Flex61": {
      "callbacks": {}
    },
    "TextBox131": {
      "custom": {
        "text": "View all"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox132": {
      "custom": {
        "text": "Latest Blogs"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox133": {
      "custom": {
        "text": "B L O G S"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div58": {
      "callbacks": {}
    },
    "Div59": {
      "callbacks": {}
    },
    "TextBox136": {
      "custom": {
        "text": "Product Designer"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox137": {
      "custom": {
        "text": "That's me!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox138": {
      "custom": {
        "text": " Over the past 12 years, I've worked with a diverse range of"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox139": {
      "custom": {
        "text": "clients, from startups to Fortune 500 companies. I love"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox140": {
      "custom": {
        "text": "crafting interfaces that delight users and help businesses."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex80": {
      "callbacks": {}
    },
    "Flex84": {
      "callbacks": {}
    },
    "Div70": {
      "callbacks": {}
    },
    "Flex87": {
      "callbacks": {}
    },
    "Flex88": {
      "callbacks": {}
    },
    "Flex91": {
      "callbacks": {}
    },
    "TextBox141": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox142": {
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox143": {
      "custom": {
        "text": "MSc (Human Computer Interaction"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox144": {
      "custom": {
        "text": ". 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div60": {
      "callbacks": {}
    },
    "Div62": {
      "callbacks": {}
    },
    "TextBox146": {
      "custom": {
        "text": ". 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox147": {
      "custom": {
        "text": "UX Training Bootcamp"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox148": {
      "custom": {
        "text": "MIT Summer School"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div63": {
      "callbacks": {}
    },
    "TextBox149": {
      "custom": {
        "text": ". 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox150": {
      "custom": {
        "text": "BSc in Software Engineering"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox151": {
      "custom": {
        "text": "California University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div61": {
      "callbacks": {}
    },
    "TextBox145": {
      "custom": {
        "text": "Education"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox166": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox165": {
      "custom": {
        "text": "Work Experience"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div69": {
      "callbacks": {}
    },
    "Div68": {
      "callbacks": {}
    },
    "TextBox162": {
      "custom": {
        "text": ". 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox163": {
      "custom": {
        "text": "Senior Designer"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox164": {
      "custom": {
        "text": "SpaceFleet"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div71": {
      "callbacks": {}
    },
    "Div72": {
      "callbacks": {}
    },
    "TextBox167": {
      "custom": {
        "text": "MusicMash"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox168": {
      "custom": {
        "text": "Senior Designer"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox169": {
      "custom": {
        "text": ". 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div73": {
      "callbacks": {}
    },
    "Div74": {
      "callbacks": {}
    },
    "TextBox170": {
      "custom": {
        "text": "Kingdom"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox171": {
      "custom": {
        "text": "Senior Designer"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox172": {
      "custom": {
        "text": ". 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div75": {
      "callbacks": {}
    },
    "Flex96": {
      "callbacks": {}
    },
    "TextBox156": {
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox157": {
      "custom": {
        "text": "MSc (Human Computer Interaction"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox158": {
      "custom": {
        "text": ". 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div66": {
      "callbacks": {}
    },
    "TextBox159": {
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox160": {
      "custom": {
        "text": "MSc (Human Computer Interaction"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox161": {
      "custom": {
        "text": ". 2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div67": {
      "callbacks": {}
    },
    "Carousel14": {
      "custom": {
        "items": [],
        "startTile": 0,
        "imageItems": [
          "/app-assets/kimson-doan-HD8KlyWRYYM-unsplash.jpg"
        ],
        "isIndicatorCircle": false,
        "indicatorPosition": "Bottom"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Modal1": {
      "custom": {
        "modalSize": "50%",
        "okButtonColor": "#fff",
        "okButtonBgColor": "#1890ff",
        "okButtonBorderColor": "#1890ff",
        "cancelButtonColor": "#000",
        "cancelButtonBgColor": "#fff",
        "cancelButtonBorderColor": "#d9d9d9",
        "open": true,
        "body": "Type something here!",
        "title": "Some Title"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Testimonial2": {
      "custom": {
        "startTile": "",
        "intervalTime": 6,
        "testimonials": [
          {
            "name": "John Frankin",
            "designation": "Founder, Double Bunch",
            "review": "Jade helped us build a software so intuitive that it didn't need a walkthrough. He solved complex problems with brilliant design.",
            "profile_pic": "/app-assets/testimonial.png"
          },
          {
            "name": "Jennifer Musk",
            "designation": "Project Manager@ Microsoft",
            "review": "This is unbelievable. After using Testimonial Generator my business skyrocketed!",
            "profile_pic": "/app-assets/testimonial2.png"
          }
        ]
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox173": {
      "custom": {
        "text": "F A Q"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox174": {
      "custom": {
        "text": "Frequently asked questions"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Accordion1": {
      "custom": {
        "title": [
          "one"
        ],
        "description": [
          "sdgagsgs"
        ],
        "open": []
      },
      "callbacks": {}
    },
    "Accordion2": {
      "custom": {
        "title": [],
        "description": [],
        "open": []
      },
      "callbacks": {}
    },
    "Accordion3": {
      "custom": {
        "title": [],
        "description": [],
        "open": []
      },
      "callbacks": {}
    },
    "Accordion4": {
      "custom": {
        "title": [],
        "description": [],
        "open": []
      },
      "callbacks": {}
    }
  }
}};

useStore.setState(desktopModeProps);

export default useStore;
