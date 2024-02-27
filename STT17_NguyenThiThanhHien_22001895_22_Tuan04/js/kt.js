function kiemTraUSER() {
    //var regex = /^[a-z0-9_-]{3,16}$/; // Kiểm tra người dùng
    //var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; //Tối thiểu tám ký tự, ít nhất một chữ cái và một số
    //var regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/; //Tối thiểu tám ký tự, ít nhất một chữ cái, một số và một ký tự đặc biệt
    //var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; //Tối thiểu tám ký tự, ít nhất một chữ cái viết hoa, một chữ cái viết thường và một số
    //var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; //Tối thiểu tám ký tự, ít nhất một chữ cái viết hoa, một chữ cái viết thường, một số và một ký tự đặc biệt
    //var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/; //Tối thiểu tám và tối đa 10 ký tự, ít nhất một chữ cái viết hoa, một chữ cái viết thường, một số và một ký tự đặc biệt
    //var regex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$^&*()_-]).{8,18}$/;
    //var regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; // Kiểm tra email
    //var regex=/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,63})$/;
    //var regex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/; //Kiểm tra địa chỉ IPv4
    //var regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/; //Kiểm tra địa chỉ IPv4
    //var regex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/; //Matching a URL
    //var regex=/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i; //Matching a Hex Value
    //var regex = /^[a-z0-9-]+$/; //Matching a Slug
    //var regex=/^<([a-z\d]+)([^<]+)*(?:>(.*)<\/\1>|\s*\/>)$/; //Matching an HTML Tag
    //var regex = /^([1-2][0-9]|3[0-1]|0?[1-9])([-\.\/ ])(1[0-2]|0?[1-9])(\2)([\d]{4}|[\d]{2})$/; //Dates
    let chuoiKT = document.getElementById('txtChuoi').value;
    let kq = regex.test(chuoiKT);
    if (kq == true) {
        alert("Nhập đúng mẫu");
    } else {
        alert("Nhập sai mẫu");
    }
}