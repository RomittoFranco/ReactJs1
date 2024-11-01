const products = [
    // Muebles
    {
      id: '1',
      name: 'Sofá Moderno',
      price: 999.99,
      category: 'muebles',
      image: '/img/Sillon-modular-Moderno-Panama-SILVINA-C.webp',
      description: 'Sofá moderno de 3 plazas'
    },
    {
      id: '2',
      name: 'Mesa de Centro',
      price: 299.99,
      category: 'muebles',
      image: '/img/Mesa de Centro.webp',
      description: 'Mesa de centro de madera natural'
    },
    {
      id: '3',
      name: 'Estantería Modular',
      price: 399.99,
      category: 'muebles',
      image: '/img/Estantería Modular.webp',
      description: 'Estantería modular de 5 niveles'
    },
    {
      id: '4',
      name: 'Silla Ergonómica',
      price: 199.99,
      category: 'muebles',
      image: '/img/Silla Ergonómica.webp',
      description: 'Silla ergonómica para oficina'
    },
  
    // Iluminación
  {
    id: '5',
    name: 'Lámpara de Pie',
    price: 149.99,
    category: 'iluminacion',
    image: '/img/Lámpara de Pie.jpg',
    description: 'Lámpara de pie moderna'
  },
  {
    id: '6',
    name: 'Lámpara de Techo',
    price: 89.99,
    category: 'iluminacion',
    image: '/img/Lámpara de Techo.jpg',
    description: 'Lámpara de techo con diseño industrial'
  },
  {
    id: '7',
    name: 'Aplique de Pared',
    price: 49.99,
    category: 'iluminacion',
    image: '/img/Aplique de Pared.jpg',
    description: 'Aplique de pared con luz ajustable'
  },
  {
    id: '8',
    name: 'Lámpara de Escritorio',
    price: 29.99,
    category: 'iluminacion',
    image: '/img/Lámpara de Escritorio.jpg',
    description: 'Lámpara de escritorio con brazo flexible'
  },

  // Decoración
  {
    id: '9',
    name: 'Jarrón',
    price: 49.99,
    category: 'decoracion',
    image: '/img/Jarrón.jpg',
    description: 'Jarrón decorativo de cerámica'
  },
  {
    id: '10',
    name: 'Espejo Redondo',
    price: 199.99,
    category: 'decoracion',
    image: '/img/Espejo Redondo.webp',
    description: 'Espejo redondo con marco de metal'
  },
  {
    id: '11',
    name: 'Cuadro Abstracto',
    price: 99.99,
    category: 'decoracion',
    image: '/img/Cuadro Abstracto.png',
    description: 'Cuadro abstracto en tonos pastel'
  },
  {
    id: '12',
    name: 'Reloj de Pared',
    price: 59.99,
    category: 'decoracion',
    image: '/img/Reloj de Pared.jpg',
    description: 'Reloj de pared con diseño minimalista'
  }
];
  
  
    
    export const getProducts = (categoryId) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(
            categoryId 
              ? products.filter(product => product.category === categoryId)
              : products
          );
        }, 1000);
      });
    };
    
    export const getProductById = (id) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(products.find(product => product.id === id));
        }, 1000);
      });
    };