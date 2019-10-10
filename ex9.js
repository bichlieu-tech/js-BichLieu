const numbers = [1, 3, 5, 3, 2, 3];
// n la tung phan tu cua mang
// tạo ra một mảng mới với các phần tử được sinh ra từ kết quả của hàm xử lý các
// phần tử của mảng củ.
const num1s = numbers.map((n) => {
    return n * 2;
});
// tạo ra một mảng mới với các phần tử thỏa mãn điều kiện của hàm filter()
const num2s = numbers.filter(n => n === 3);
//khai bao ham k biet co bao nhieu tham so
const locSanPham = (...dssanpham) => {
    return dssanpham.filter(n => n === 1);
};

console.log(locSanPham(1, 2, 3, 4, 5));

console.log(locSanPham(3, 4, 6, 2, 5, 6, 1));

console.log(numbers);

console.log(num1s);

console.log(num2s);