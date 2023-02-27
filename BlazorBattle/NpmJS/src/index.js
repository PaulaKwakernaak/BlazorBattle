import KioskBoard from 'kioskboard';

// Initialize KioskBoard (default/all options)

KioskBoard.init({

    /*!
    * Required
    * An Array of Objects has to be defined for the custom keys. Hint: Each object creates a row element (HTML) on the keyboard.
    * e.g. [{"key":"value"}, {"key":"value"}] => [{"0":"A","1":"B","2":"C"}, {"0":"D","1":"E","2":"F"}]
    */
    keysArrayOfObjects: null,

    /*!
    * Required only if "keysArrayOfObjects" is "null".
    * The path of the "kioskboard-keys-${langugage}.json" file must be set to the "keysJsonUrl" option. (XMLHttpRequest to get the keys from JSON file.)
    * e.g. '/Content/Plugins/KioskBoard/dist/kioskboard-keys-english.json'
    */
    keysJsonUrl: null,

    /*
    * Optional: An Array of Strings can be set to override the built-in special characters.
    * e.g. ["#", "€", "%", "+", "-", "*"]
    */
    keysSpecialCharsArrayOfStrings: null,

    /*
    * Optional: An Array of Numbers can be set to override the built-in numpad keys. (From 0 to 9, in any order.)
    * e.g. [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    */
    keysNumpadArrayOfNumbers: null,

    // Optional: (Other Options)

    // Language Code (ISO 639-1) for custom keys (for language support) => e.g. "de" || "en" || "fr" || "hu" || "tr" etc...
    language: 'en',

    // The theme of keyboard => "light" || "dark" || "flat" || "material" || "oldschool"
    theme: 'dark',

    // Scrolls the document to the top or bottom(by the placement option) of the input/textarea element. Prevented when "false"
    autoScroll: true,

    // Uppercase or lowercase to start. Uppercased when "true"
    capsLockActive: true,

    /*
    * Allow or prevent real/physical keyboard usage. Prevented when "false"
    * In addition, the "allowMobileKeyboard" option must be "true" as well, if the real/physical keyboard has wanted to be used.
    */
    allowRealKeyboard: false,

    // Allow or prevent mobile keyboard usage. Prevented when "false"
    allowMobileKeyboard: false,

    // CSS animations for opening or closing the keyboard
    cssAnimations: true,

    // CSS animations duration as millisecond
    cssAnimationsDuration: 360,

    // CSS animations style for opening or closing the keyboard => "slide" || "fade"
    cssAnimationsStyle: 'slide',

    // Enable or Disable Spacebar functionality on the keyboard. The Spacebar will be passive when "false"
    keysAllowSpacebar: true,

    // Text of the space key (Spacebar). Without text => " "
    keysSpacebarText: 'Space',

    // Font family of the keys
    keysFontFamily: 'sans-serif',

    // Font size of the keys
    keysFontSize: '22px',

    // Font weight of the keys
    keysFontWeight: 'normal',

    // Size of the icon keys
    keysIconSize: '25px',

    // Text of the Enter key (Enter/Return). Without text => " "
    keysEnterText: 'Enter',

    // The callback function of the Enter key. This function will be called when the enter key has been clicked.
    keysEnterCallback: test(),

    // The Enter key can close and remove the keyboard. Prevented when "false"
    keysEnterCanClose: true,

});

// Select the input or the textarea element(s) to run the KioskBoard

KioskBoard.run('.js-virtual-keyboard');



//var KeyCodes(){
//backspace	,8
//tab,	9
//enter,	13
//shift,	16
//ctrl,	17
//alt	,18
// pause,	19
//caps lock,	20
//escape,	27
//page up,	33
//Space,	32
//page down,	34
//end	35
//home	36
//arrow left	37
//arrow up	38
//arrow right	39
//arrow down	40
//print screen	44
//insert	45
//    delete 46
//    0	48
//    1	49
//    2	50
//    3	51
//    4	52
//    5	53
//    6	54
//    7	55
//    8	56
//    9	57
//a	65
//b	66
//c	67
//d	68
//e	69
//f	70
//g	71
//h	72
//i	73
//j	74
//k	75
//l	76
//m	77
//n	78
//o	79
//p	80
//q	81
//r	82
//s	83
//t	84
//u	85
//v	86
//w	87
//x	88
//y	89
//z	90
//left window key	91
//right window key	92
//select key	93
//numpad 0	96
//numpad 1	97
//numpad 2	98
//numpad 3	99
//numpad 4	100
//numpad 5	101
//numpad 6	102
//numpad 7	103
//numpad 8	104
//numpad 9	105
//multiply	106
//add	107
//subtract	109
//decimal point	110
//divide	111
//f1	112
//f2	113
//f3	114
//f4	115
//f5	116
//f6	117
//f7	118
//f8	119
//f9	120
//f10	121
//f11	122
//f12	123
//num lock	144
//scroll lock	145
//My Computer(multimedia keyboard)	182
//My Calculator(multimedia keyboard)	183
//    semi - colon	186
//equal sign	187
//comma	188
//dash	189
//period	190
//forward slash	191
//open bracket	219
//back slash	220
//close braket	221
//single quote	222
//}