const products = [
    {
      id: "1",
      name: "Alfajores",
      price: 12,
      image:
        "./BOCADITOS/i1.jpg",
  
      description:
        "Alfajores rellenos de manjar",
    },
    {
      id: "2",
      name: "Carnita",
      price: 20,
      image:
        "./BOCADITOS/bolita-carne.jpg",
  
      description:
        "Hecha con la mejor vainilla traida de japon :3",
    },
    {
      id: "3",
      name: "Chocolate y Manjar",
      price: 20,
      image:
        "./PASTEL/chocolate-manjar.png",
      description:
        "Deliciosa torta de chocolate rellena con el mejor manjar hecho con la leche de la  mismmisima vaca LOLA",
    },
    {
      id: "4",
      name: "Mousse Chocolate",
      price: 12,
      image:
        "./PASTEL/mousse-choco.jpg",
  
      description:
        "Torta hecha con el Mickey Mousse",
    },
    {
      id: "5",
      name: "Torta de Cafe",
      price: 35,
      image:
        "./PASTEL/torta-cafe-moka.jpg",
      description:
        "Torta a base del cafe,  Procedente de Indonesia, el Kopi Luwak ",
    },
    {
      id: "6",
      name: "ChocoFresa",
      price: 42,
      image:
        "./PASTEL/torta-chocofresa.jpg",
  
      description:
        "Torta hecha a base de las mejores fresas cosechada en la granja de  Rosita Fresita ★",
    },
    {
      id: "7",
      name: "Coco Manjar",
      price: 23,
      image:
        "./PASTEL/torta-coco-manjar.jpg",
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    },
    {
      id: "8",
      name: "Happy Tu yu",
      price: 59,
      image:
        "./PASTEL/torta-cumple.jpg",
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    },
    {
      id: "9",
      name: "Humeda Vainilla",
      price: 20,
      image:
        "./PASTEL/torta-humeda-vainilla.jpg",
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    },
    {
      id: "10",
      name: "TOrta Manzanas",
      price: 18,
      image:
        "./PASTEL/torta-manzana.jpg",
  
      description:
        "tora hecha con la mismisima manzana de blanca nieves",
    },
    {
      id: "11",
      name: "Marmoleada",
      price: 21,
      image:
        "./PASTEL/Torta-marmoleada.jpg",
  
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    },
    {
      id: "12",
      name: "Mil Hoja",
      price: 21,
      image:
        "./PASTEL/torta-mil-hojas.jpg",
  
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    },
    {
      id: "13",
      name: "Mojada Chocolate",
      price: 25,
      image:
        "./PASTEL/torta-mojada-chocolate.jpg",
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    },
    {
      id: "14",
      name: "Torta Naranja",
      price: 30,
      image:
        "./PASTEL/torta-naranja.jpg",
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    },
    {
      id: "15",
      name: "Selva Negra",
      price: 50,
      image:
        "./PASTEL/torta-selva-negra.jpg",
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    },
    {
      id: "16",
      name: "Torta Zanahoria",
      price: 129,
      image:
        "./PASTEL/torta-zanahoria.jpg",
      description:
        "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    },
    
  ];
  export default products;
