var input = document.getElementById("search-input");

var SJS = SimpleJekyllSearch({
  searchInput: input,
  resultsContainer: document.getElementById('results-container'),
  searchResultTemplate: '<h3><a href="{url}">{title}</a></h3><span>{date}</span>, on: <span>{tags}</span>',
  json: '../search.json'
})

function fill_input(name){
  input.value = name;
  input.focus();
  SJS.search(name);
}
