/*
Write a method to sort an array of strings so that all the anagrams are next to
each other

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
*/

function groupAnagrams(strings) {
  const sortedStrings = strings.map(string =>
    string
      .split('')
      .sort((a, b) => a > b)
      .join(''),
  );

  const output = groupString(strings, sortedStrings);
  return output;
}

function groupString(strings, sortedStrings) {
  const grouped = {};
  sortedStrings.map((value, index) => {
    if (grouped[value]) {
      grouped[value].push(index);
    } else grouped[value] = [index];
  });

  const output = Object.values(grouped).map(group =>
    group.map(idx => {
      return strings[idx];
    }),
  );

  return output;
}

// cleaner solution

const groupAnagrams2 = strArr => {
  if (strArr === undefined) {
    return 'where is your anagram?';
  }
  let mapStrArr = strArr.map(string => {
    return {
      original: string,
      sorted: string
        .split('')
        .sort()
        .join(''),
    };
  });

  mapStrArr.sort((a, b) => {
    return a.sorted < b.sorted ? 1 : -1;
  });

  const answer = mapStrArr.map(mapStr => {
    return mapStr.original;
  });

  return answer;
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
console.log(groupAnagrams2(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
