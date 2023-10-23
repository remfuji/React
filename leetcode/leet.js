
let s = 'abcaaac'
let substring = ' '
function  lengthOfLongestSubstring(s) {
   
   for(let i = 0; i < s.length; i++)
   {
      for(let j = 0; j < substring.length; j++)
      {
        if(s[i] !== substring[j])
        {
            substring += s[i]
        }
      }
   }
 return substring
};

console.log(lengthOfLongestSubstring(s))