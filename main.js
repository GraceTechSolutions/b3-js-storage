// let user_boj = {
//     user_name: 'Jay',
//     roll_no: 20,
//     class: 8
// }

// let user_boj_string = JSON.stringify(user_boj)

// localStorage.setItem('user', user_boj_string)

// user_obj_str = localStorage.getItem('user')
// console.log(user_obj_str);
// user_obj = JSON.parse(user_obj_str)

let cookie = () => {
    return document.cookie
}

let setItem = (name, value, validity) => {
    let d = new Date()
    d.setDate(d.getDate() + validity)
    let expire = 'expires=' + d.toUTCString()
    document.cookie = name + '=' + value + '; ' + expire
}


let deleteItem = (name) => {
    // time = 1000*60*60
    let value = '';
    document.cookie = name + '=' + value + '; max-age=0'
    return true
}

let getItem = (name) => {
    let cookieString =  document.cookie
    let cookieArr = cookieString.split('; ')
    let finalValue = null
    for ( let i = 0; i < cookieArr.length; i++ ){
        let key, val;
        keyValue = cookieArr[i].split('=')
        key = keyValue[0]
        val = keyValue[1]
        if (name == key){
            finalValue = val
        }
    }
    return finalValue
}
