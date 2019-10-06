//cach thuong 

function hello(name){
    console.log(name);
}

//cach viet khac
const hello1  = function(name){
    console.log(name + ' den tu hello');
}
 //cach viet js es6
 const hello2 = (name) =>{
     console.log(name + ' den tu tuong lai');
 }
 // co duy nhat mot gia tri tra ve
 const tinhBinhPhuong = so => so * so;
 console.log(tinhBinhPhuong(2));

hello('hoang nam');
hello1('hoang nu');
hello2('hoang BD');