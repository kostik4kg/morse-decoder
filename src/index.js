const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': ' ',
};

function decode(expr) {
    let str = [];
    for(let i = 0; i< expr.length;i+=10){
        str.push(expr.slice(i, i+10));
    }
    let str3=[];
    for(let j = 0; j<str.length;j++){
        let str2 = [];
        for(let t = 0; t<str[j].length; t+=2){
            str2.push(str[j].slice(t, t + 2))
        }
        str3.push(str2);
    }
    let str3_trans = str3.map(item => item.map(item => item.replace(/10/g, '.').replace(/11/g, '-')))
    let str4 = str3_trans.map(item => item.filter(item=>item==='00'? false:true).join(''));
    let str5 = str4.map(item => MORSE_TABLE[item] );
    // console.log(str3_trans);
    // console.log(str4);
    // console.log(str5.join(''));
    return str5.join('')
}

module.exports = {
    decode
}