class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    getPerimeter() {
      return 2 * (this.width + this.height);
    }
  
    getArea() {
      return this.width * this.height;
    }
}

  const rect1 = new Rectangle(5, 3);
  console.log(rect1.getPerimeter()); // Output: 16
  console.log(rect1.getArea()); // Output: 15
  
  const rect2 = new Rectangle(10, 4);
  console.log(rect2.getPerimeter()); // Output: 28
  console.log(rect2.getArea()); // Output: 40  