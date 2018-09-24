export function createTimestamp() {
    let date = new Date();  // 現在日時を生成
    let year = date.getFullYear(); // 西暦を取得
    let month = date.getMonth() + 1;  // 月を取得（返り値は実際の月-1なので、+1する）
    let day = date.getDate(); // 日を取得
    let hour  = ( date.getHours()   < 10 ) ? '0' + date.getHours()   : date.getHours();
    let min   = ( date.getMinutes() < 10 ) ? '0' + date.getMinutes() : date.getMinutes();
    let sec   = ( date.getSeconds() < 10 ) ? '0' + date.getSeconds() : date.getSeconds();
    return year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec;
};
