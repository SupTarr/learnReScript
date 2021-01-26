// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';


function bookFormatToString(format) {
  switch (format) {
    case /* Hardcover */0 :
        return "Hardcover";
    case /* Paperback */1 :
        return "Paperback";
    case /* KindleEdition */2 :
        return "Kindle Edition";
    
  }
}

function isElectronic(format) {
  return format >= 2;
}

function nextMoveBy(current) {
  switch (current) {
    case /* PlayerA */0 :
        return /* PlayerB */1;
    case /* PlayerB */1 :
        return /* PlayerC */2;
    case /* PlayerC */2 :
        return /* PlayerA */0;
    
  }
}

var secondMove = nextMoveBy(/* PlayerA */0);

var thirdMove = nextMoveBy(secondMove);

function displayName(user) {
  if (typeof user === "number") {
    return "Anonymous";
  }
  switch (user.TAG | 0) {
    case /* Guest */0 :
        return "Guest#" + String(user._0);
    case /* LoggedInUser */1 :
    case /* Moderator */2 :
        break;
    
  }
  return user._1 + ", " + String(user._0) + " points";
}

var anonymous = displayName(/* Anonymous */0);

var guest42 = displayName({
      TAG: /* Guest */0,
      _0: 42
    });

var milner1934 = displayName({
      TAG: /* LoggedInUser */1,
      _0: 2010,
      _1: "Robin Milner"
    });

var grace1906 = displayName({
      TAG: /* Moderator */2,
      _0: 1992,
      _1: "Grace Hopper"
    });

function formInputToHTML(x) {
  if (typeof x === "number") {
    return "<input type=\"submit\" />";
  }
  switch (x.TAG | 0) {
    case /* Text */0 :
        return "<input type=\"text\" name=\"" + x._0 + "\" />";
    case /* Number */1 :
        return "<input type=\"number\" name=\"" + x._0 + "\" min=\"" + String(x._1) + " max=\"" + String(x._2) + "\"/>";
    case /* Email */2 :
        return "<input type=\"email\" name=\"" + x._0 + "\" />";
    
  }
}

var nameInput = formInputToHTML({
      TAG: /* Text */0,
      _0: "name"
    });

var ageInput = formInputToHTML({
      TAG: /* Number */1,
      _0: "age",
      _1: 18,
      _2: 25
    });

var emailInput = formInputToHTML({
      TAG: /* Email */2,
      _0: "email"
    });

var name = "age-limit";

var ageLimit = [
  name,
  18,
  25
];

var label = "price-range";

var budget2 = [
  label,
  400,
  2500
];

function toNumberFormHTML(input) {
  return "<input type=\"number\" name=\"" + input[0] + "\" min=\"" + String(input[1]) + "\" max=\"" + String(input[2]) + "\"";
}

function toNumberFormHTML2(param) {
  return "<input type=\"number\" name=\"" + param[0] + "\" min=\"" + String(param[1]) + "\" max=\"" + String(param[2]) + "\"";
}

var atom = {
  name: "Atom",
  url: "https://atom.io",
  repositories: 255,
  people: 56
};

var node = {
  name: "Node.js",
  url: "https://nodejs.org",
  repositories: 182,
  people: 375
};

var rails = {
  name: "Ruby on Rails",
  url: "https://rubyonrails.org",
  repositories: 99,
  people: 66
};

function projectLink(param) {
  return "<a href=\"" + param.url + "\">" + param.name + "</a>";
}

projectLink(atom);

projectLink(node);

projectLink(rails);

var codersAtWork = {
  title: "Coders at Work",
  tagline: "Reflections on the Craft of Programming",
  format: /* Paperback */1,
  availableInStock: 10
};

function bookHTML(book) {
  var count = String(book.availableInStock);
  return "<div>\n    <h2>" + book.title + ": " + book.tagline + "</h2>\n    <p>" + count + " new " + bookFormatToString(book.format) + " avialable in stock</p>\n  </div>";
}

bookHTML(codersAtWork);

function drawRectangle(_rectangle) {
  
}

function drawLine(_line) {
  
}

function drawText(_text) {
  
}

function drawShape(shape) {
  switch (shape.TAG | 0) {
    case /* Rectangle */0 :
    case /* Line */1 :
    case /* Text */2 :
        return ;
    
  }
}

var bookFormat2 = "Kindle Edition";

var firstMove = /* PlayerA */0;

var submit = "<input type=\"submit\" />";

var min = 18;

var max = 25;

var budget = [
  "price-range",
  500,
  1500
];

var ratingFilter = [
  "rating-3-and-above",
  3,
  5
];

var low = 500;

var high = 1500;

var block1 = {
  TAG: /* Rectangle */0,
  _0: {
    x: 100,
    y: 100,
    width: 50,
    height: 50
  }
};

var block2 = {
  TAG: /* Rectangle */0,
  _0: {
    x: 200,
    y: 100,
    width: 50,
    height: 50
  }
};

var block1ToBlock2 = {
  TAG: /* Line */1,
  _0: {
    x: 150,
    y: 125,
    length: 50
  }
};

var textLabel = {
  TAG: /* Text */2,
  _0: {
    text: "Connect",
    fontSize: /* Medium */1,
    fontFamily: /* Monospace */2
  }
};

exports.bookFormatToString = bookFormatToString;
exports.bookFormat2 = bookFormat2;
exports.isElectronic = isElectronic;
exports.nextMoveBy = nextMoveBy;
exports.firstMove = firstMove;
exports.secondMove = secondMove;
exports.thirdMove = thirdMove;
exports.displayName = displayName;
exports.anonymous = anonymous;
exports.guest42 = guest42;
exports.milner1934 = milner1934;
exports.grace1906 = grace1906;
exports.formInputToHTML = formInputToHTML;
exports.nameInput = nameInput;
exports.ageInput = ageInput;
exports.emailInput = emailInput;
exports.submit = submit;
exports.name = name;
exports.min = min;
exports.max = max;
exports.ageLimit = ageLimit;
exports.budget = budget;
exports.ratingFilter = ratingFilter;
exports.label = label;
exports.low = low;
exports.high = high;
exports.budget2 = budget2;
exports.toNumberFormHTML = toNumberFormHTML;
exports.toNumberFormHTML2 = toNumberFormHTML2;
exports.atom = atom;
exports.node = node;
exports.rails = rails;
exports.projectLink = projectLink;
exports.codersAtWork = codersAtWork;
exports.bookHTML = bookHTML;
exports.drawRectangle = drawRectangle;
exports.drawLine = drawLine;
exports.drawText = drawText;
exports.block1 = block1;
exports.block2 = block2;
exports.block1ToBlock2 = block1ToBlock2;
exports.textLabel = textLabel;
exports.drawShape = drawShape;
/*  Not a pure module */
