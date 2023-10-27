function slugify(title) {
  const titleCased = title.toLowerCase();
  const titleArray = titleCased.split(" ");
  const slug = titleArray.join("-");
  return slug;
}

console.log(slugify('Arrays for begginers'));
console.log(slugify('English for developer'));
console.log(slugify('Ten secrets of JavaScript'));
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS'));
