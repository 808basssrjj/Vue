const vm = new Vue({
  el: "#app",
  data: {
    books: [
      {
        id: 1,
        name: "aa",
        date: "2006-9",
        price: 100,
        count: 1,
      },
      {
        id: 2,
        name: "cc",
        date: "2006-9",
        price: 85,

        count: 1,
      },
      {
        id: 3,
        name: "bb",
        date: "2006-9",
        price: 98,
        count: 1,
      },
      {
        id: 4,
        name: "dd",
        date: "2006-9",
        price: 128,
        count: 1,
      },
    ],
  },
  methods: {
    decrement(index) {
      this.books[index].count--;
    },
    increment(index) {
      this.books[index].count++;
    },
    remove(index) {
      this.books.splice(index, 1);
    },
  },
  computed: {
    totalPrice() {
      let totalPrice = 0;

      // for (let i = 0; i < this.books.length; i++) {
      //   totalPrice += this.books[i].count * this.books[i].price;
      //   // console.log(this.books[i]);
      // }

      for (let item of this.books) {
        totalPrice += item.price * item.count
      }

      return totalPrice;
    },


    
  },
  //过滤器
  filters: {
    showPrice(price) {
      return "¥" + price.toFixed(2);
    },
  },
});
