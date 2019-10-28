const Config = {
    domain: 'https://shrouded-temple-66693.herokuapp.com',
    NavbarItems: [
        {id: 1, name: 'Bitcoin', symbol: 'BTC', selected: true},
        {id: 2, name: 'Etherium', symbol: 'ETH', selected: false},
        {id: 3, name: 'Safex', symbol: 'SFT', selected: false},
        {id: 4, name: 'Blue', symbol: 'BLU', selected: false}
    ],
    graphSampleData: [
        {
          "id": "japan",
          "color": "hsl(1, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 26
            },
            {
              "x": "helicopter",
              "y": 201
            },
            {
              "x": "boat",
              "y": 55
            }
          ]
        }
      ]
}

export default Config;