export const formatVietnamese = (dateApi) => {
 
    let convert = new Date(dateApi);

    let day = convert.getDay() === 0 ? 'Chủ nhật' :   `Thứ ` + parseInt(convert.getDay() + 1);
    let month =  convert.getMonth() + 1;
    let year = convert.getFullYear();
    
    

    return day + ', tháng ' + month + ', năm '+ year; 
}