export function convertDisplayNumber(num_string) {
    console.log(num_string);
    let num = toPlainValue(num_string);
    console.log(num);
    let int_num = String(num).split(".")[0];
    let float_num = String(num).split(".")[1];

    if (num <= 0) {
        return "";
    }

    if (int_num) {
        if (int_num.length > 1) {
            // console.log(parseFloat(num.toFixed(3)).toString().replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,'));
            return parseFloat(parseFloat(num).toFixed(3)).toString().replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
        } else {
            if (float_num) {
                if (float_num.length > 5) {
                    let num_fixed = parseFloat(parseFloat(num).toFixed(6));
                    if (String(num_fixed).split(".")[1]) {
                        return int_num.replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,') + "." + String(num_fixed).split(".")[1];
                    }
                }
                console.log(int_num.replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,') + "." + float_num);
                return int_num.replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,') + "." + float_num;
            }
        }
    }
    return "";
};

export function toPlainValue(rawVal) {
    var splitVal = rawVal.toString().split('e');

    if(splitVal.length === 1) return splitVal[0];

    var period = splitVal[0].indexOf('.');

    if (0 < period ) splitVal[1] -= period ;

    return new Number(rawVal).toFixed(Math.abs(splitVal[1]));
};
