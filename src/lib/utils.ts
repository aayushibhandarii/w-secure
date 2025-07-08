export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
const products :{
  id:number,
  name:string,
  price:number,
  image:string,
  rating : number,
  description :string
}[] = [
  { id: 1, name: "Sneakers", price: 99.99, image: "https://th.bing.com/th?id=OPAC.5Zl%2bNPcBsa7L8g474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1", rating: 4.5 ,
    description:"These aree super comfortable sneakers"
  },
  { id: 2, name: "Jacket", price: 149.99, image: "https://image.hm.com/assets/hm/55/32/55325dcb5ba478a0a488440588a75310bac70712.jpg?imwidth=1260", rating: 4.8,
    description:"These aree super comfortable sneakers"
  },
  { id: 3, name: "Watch", price: 199.99, image: "https://th.bing.com/th?id=OPAC.zuduL6BV%2fR%2b%2fPQ474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1", rating: 4.2,
    description:"These aree super comfortable sneakers"
   },
  { id: 4, name: "Hat", price: 29.99, image: "https://th.bing.com/th/id/OPAC.91AoyY5eO1YtPw474C474", rating: 4.0,
    description:"These aree super comfortable sneakers"
   },
];
export const categories = [
  { id: 1, name: "Men's", image: "https://via.placeholder.com/200?text=Men's" 
  },
  { id: 2, name: "Women's", image: "https://via.placeholder.com/200?text=Women's" },
  { id: 3, name: "Accessories", image: "https://via.placeholder.com/200?text=Accessories" },
];
export function filterProducts(searchQuery:string){
  return products.filter(product=>{
    return product.name.toLowerCase().includes(searchQuery.toLowerCase()) || product.description.toLowerCase().includes(searchQuery.toLowerCase()) 
  })
}