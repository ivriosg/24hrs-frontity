const settings = {
  name: "24hrs",
  state: {
    frontity: {
      url: "https://24-horas.mx",
      title: "24 Horas",
      description: "El Diario Sin Límites",
    },
  },
  packages: [
    {
      "name": "24hrs-theme",
      "state": {
        "theme": {
          "menu": [
            [
              // The link to your home page
              "Home",
              "/"
            ],
            [
              // A link to a page
              "Mundo",
              "/category/mundo/"
            ],
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "https://24-horas.mx/wp-json",
          params: {
            per_page: 10,
          },
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
