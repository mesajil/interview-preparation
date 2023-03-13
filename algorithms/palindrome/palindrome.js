
function palindrome (str) {
    /*
        Have the function Palindrome(str) take the str parameter being passed and return the string true if the parameter is a palindrome    
        Examples
            Input: "never odd or even"
            Output: true
    */
    noSpaces = str.toLowerCase().split('').map(x => x == ' '?'':x).join('')
    reversed = noSpaces.split('').reverse().join('')
    return noSpaces ==  reversed
}