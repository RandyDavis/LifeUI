var dimension = 15;
var chanceOfLiveCell = 0.5;
var table;
var cells;

$(function() {
  table = $('#main');
  initializeGame();
  cells = table.find('td');
  placeRandomCells();
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

function placeRandomCells() {
  for (var y = 0; y < dimension; y++) {
    for (var x = 0; x < dimension; x++) {
      var cell = getCell(x, y);
      if(Math.random() > chanceOfLiveCell) cell.addClass('alive');
      else { cell.removeClass('alive');}
    }
  }
}

function getCell(x, y) {
  if (x >= dimension) { x = 0; }
  if (y >= dimension) { y = 0; }
  if (x < 0) { x = dimension - 1; }
  if (y < 0) { y = dimension - 1; }
  return $(cells[y * dimension + x]);
}