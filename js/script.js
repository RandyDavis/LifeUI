var dimension = 15;
var chanceOfLiveCell = 0.5;
var table;
var cells;

$(function() {
  table = $('#main');
  initializeGame();
});

function initializeGame() {
  var trHtml = [];
  for (var y = 0; y < dimension; y++) {
    trHtml.push('<tr>');
    for (var x = 0; x < dimension; x++) {
      trHtml.push('<td>&nbsp;</td>');
    }
    trHtml.push('</tr>');
  }
  trHtml = trHtml.join('');
  table.append($(trHtml));
}