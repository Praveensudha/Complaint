var d = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
  [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
  [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
  [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
  [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
  [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
  [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
  [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
];

// permutation table p
var p = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
  [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
  [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
  [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
  [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
  [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
  [7, 0, 4, 6, 9, 1, 3, 2, 5, 8],
];

// inverse table inv
var inv = [0, 4, 3, 2, 1, 5, 6, 7, 8, 9];

// converts string or number to an array and inverts it
function invArray(array) {
  if (Object.prototype.toString.call(array) == "[object Number]") {
    array = String(array);
  }

  if (Object.prototype.toString.call(array) == "[object String]") {
    array = array.split("").map(Number);
  }

  return array.reverse();
}

function validatepwdparam(value, alertarea) {
  var alertarea = alertarea;
  var contentid = $("#" + value);
  var passpattern =
    /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[~!@#$%^&*_]).{6,20})$/;
  var alertarea = alertarea;
  var contentid = $("#" + value);
  var contenttxt = contentid.val();

  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    //   $("#" + alertarea).html("Required field");
    $("#" + alertarea).html(
      "<i class='fa fa-info-circle' aria-hidden='true'></i> Password is Mandatory"
    );
    $("#" + alertarea).addClass("alertMsg");
    return 0;
  } else if (!passpattern.test(contentid.val()) || contenttxt.length < 8) {
    //   $("#" + alertarea).html(" Password Must Contain: - Minimum 8 characters to 12 characters At least one uppercase letter, one lowercase letter, one number and one special character.<br/>");
    //$("#" + alertarea).html("Password Must Contain:<br/>Minimum 6 characters<br/>At least one uppercase letter<br/>At least one lowercase letter<br/>At least one number<br/>At least one special character.<br/>");
    $("#" + alertarea).html(
      "<i class='fa fa-info-circle' aria-hidden='true'></i> Password Must Contain: - Minimum 8 characters to 12 characters At least one uppercase letter, one lowercase letter, one number and one special character."
    );
    $("#" + alertarea).addClass("alertMsg");
    contentid.focus();
    return 0;
  } else {
    $("#" + alertarea).html("");
  }
}

function validatepwdparam1(value, alertarea) {
  var alertarea = alertarea;
  var contentid = $("#" + value);
  var passpattern =
    /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[~!@#$%^&*_]).{6,20})$/;
  var alertarea = alertarea;
  var contentid = $("#" + value);
  var contenttxt = contentid.val();

  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    //   $("#" + alertarea).html("Required field");
    $("#" + alertarea).html("Required field");
    $("#" + alertarea).addClass("alertMsg");
    return 0;
  } else if (!passpattern.test(contentid.val()) || contenttxt.length < 8) {
    //   $("#" + alertarea).html(" Password Must Contain: - Minimum 8 characters to 12 characters At least one uppercase letter, one lowercase letter, one number and one special character.<br/>");
    //$("#" + alertarea).html("Password Must Contain:<br/>Minimum 6 characters<br/>At least one uppercase letter<br/>At least one lowercase letter<br/>At least one number<br/>At least one special character.<br/>");
    $("#" + alertarea).html("");
    $("#" + alertarea).addClass("alertMsg");
    contentid.focus();
    return 0;
  } else {
    $("#" + alertarea).html("");
  }
}

function check_duplicatecheck(val, column, table) {
  var csrftokenname = "csrf_test_name=";
  var csrftokenhash = $(".csrf").val();

  var flag = true;

  $.ajax({
    type: "POST",
    async: false,
    url: baseUrl + "check_duplicatecheck",
    data:
      "&val=" +
      encodeURIComponent(val) +
      "&table=" +
      encodeURIComponent(table) +
      "&column=" +
      encodeURIComponent(column) +
      "&" +
      csrftokenname +
      csrftokenhash,
    success: function (resp) {
      var fdata = resp.split("^");
      $(".csrf").val(fdata[1]);

      if (fdata[0] == true) {
        flag = false;
      }
    },
    error: function (e) {
      alert("Error: " + e.responseText);
      return false;
    },
  });

  return flag;
}

function check_duplicatecheck_edit(val, column, table, id) {
  var csrftokenname = "csrf_test_name=";
  var csrftokenhash = $(".csrf").val();

  var flag = true;

  $.ajax({
    type: "POST",
    async: false,
    url: baseUrl + "check_duplicatecheck_edit",
    data:
      "&val=" +
      encodeURIComponent(val) +
      "&table=" +
      encodeURIComponent(table) +
      "&column=" +
      encodeURIComponent(column) +
      "&id=" +
      encodeURIComponent(id) +
      "&" +
      csrftokenname +
      csrftokenhash,
    success: function (resp) {
      var fdata = resp.split("^");
      $(".csrf").val(fdata[1]);

      if (fdata[0] == true) {
        flag = false;
      }
    },
    error: function (e) {
      alert("Error: " + e.responseText);
      return false;
    },
  });

  return flag;
}

// generates checksum
function generate(array) {
  var c = 0;
  var invertedArray = invArray(array);

  for (var i = 0; i < invertedArray.length; i++) {
    c = d[c][p[(i + 1) % 8][invertedArray[i]]];
  }

  return inv[c];
}

// validates checksum
function validate(array) {
  var c = 0;
  var invertedArray = invArray(array);

  for (var i = 0; i < invertedArray.length; i++) {
    c = d[c][p[i % 8][invertedArray[i]]];
  }

  return c === 0;
}

function validateaadhaar(value, alertarea) {
  // function to validate for text box
  var adhaarpattern = /^\d{12}$/;
  var alertarea = alertarea;
  var contentid = $("#" + value);
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return 0;
  } else if (
    isNaN(contentid.val()) ||
    !validate(contentid.val()) ||
    !adhaarpattern.test(contentid.val())
  ) {
    $("#" + alertarea).html("Enter a valid Aadhaar number");
    return false;
  } else {
    $("#" + alertarea).html("");
  }
}

//// aadhar validation //

function validateaadhaar_enrollment(fileName, alertarea) {
  // function to validate for text box
  var mobpattern = /^[0-9]\d{13}$/;
  var contentid = $("#" + fileName);
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return false;
  } else if (!mobpattern.test(contentid.val())) {
    contentid.focus();
    $("#" + alertarea).html("Enter a valid Aadhaar enrollment number");
    return false;
  } else {
    $("#" + alertarea).html("");
  }
}

//// aadhar validation //
function validatetext1(value, alertarea) {
  // function to validate for text box
  var alertarea = alertarea;
  var contentid = $("#" + value);

  var txt = contentid.val();
  var len = txt.length;
  if (len < 1) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return 0;
  } else {
    if (contentid.val().trim() == "" || contentid.val().trim() == null) {
      contentid.focus();
      $("#" + alertarea).html("Required field");
      return 0;
    } else {
      $("#" + alertarea).html("");
    }
  }
}
function validatetext(value, alertarea) {
  // function to validate for text box
  var alertarea = alertarea;
  var contentid = $("#" + value);

  var txt = contentid.val();
  var len = txt.trim().length;
  if (len < 1) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return 0;
  } else {
    if (contentid.val().trim() == "" || contentid.val().trim() == null) {
      contentid.focus();
      $("#" + alertarea).html("Required field");
      return 0;
    } else {
      $("#" + alertarea).html("");
    }
  }
}

function validate_address(value, alertarea) {
  // function to validate for text box
  var alertarea = alertarea;
  var contentid = $("#" + value);

  var txt = contentid.val();
  var len = txt.trim().length;
  var len1 = txt.length;
  if (len < 1) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return 0;
  } else {
    if (contentid.val().trim() == "" || contentid.val().trim() == null) {
      contentid.focus();
      $("#" + alertarea).html("Required field");
      return 0;
    } else {
      var remain_length = 250 - len1;
      $("#" + alertarea).html(remain_length + " Characters Remaining");
    }
  }
}

function validatetext11(value, alertarea) {
  // function to validate for text box
  var alertarea = alertarea;
  var contentid = $("#" + value);

  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return 0;
  } else {
    $("#" + alertarea).html("");
  }
}

function valid_lat(fileName, alertarea) {
  var mobpattern = /^[+-]?(([1-8]?[0-9])(\.[0-9]{1,6})?|90(\.0{1,6})?)$/;
  var contentid = $("#" + fileName);
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return false;
  } else if (mobpattern.test(contentid.val())) {
    contentid.focus();
    $("#" + alertarea).html("Enter a valid Lat ");
    return false;
  } else {
    $("#" + alertarea).html("");
  }
}

function valid_long(fileName, alertarea) {
  var mobpattern =
    /^[+-]?((([1-9]?[0-9]|1[0-7][0-9])(\.[0-9]{1,6})?)|180(\.0{1,6})?)$/;
  var contentid = $("#" + fileName);
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return false;
  } else if (mobpattern.test(contentid.val())) {
    contentid.focus();
    $("#" + alertarea).html("Enter a valid Long");
    return false;
  } else {
    $("#" + alertarea).html("");
  }
}

function validatetext_minmax(value, alertarea, min_word, word_count) {
  // function to validate for text box
  var alertarea = alertarea;
  var contentid = $("#" + value);
  var len = contentid.val().length;
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return 0;
  } else {
    $("#" + alertarea).html("");
  }
  if (len < min_word) {
    $("#" + alertarea).html(
      "minimum length should be " + min_word + " characters"
    );
    // console.log($("#" + alertarea).html('max length '+maxlen+' characters only!'));
    return 0;
  } else {
    $("#" + alertarea).html("");
  }
  if (len > word_count) {
    $("#" + alertarea).html(
      "maximum length should be " + word_count + " characters"
    );
    // console.log($("#" + alertarea).html('max length '+maxlen+' characters only!'));
    return 0;
  } else {
    $("#" + alertarea).html("");
  }
}

function validatetext_count(value, alertarea, word_count) {
  // function to validate for text box
  var alertarea = alertarea;
  var contentid = $("#" + value);
  var len = contentid.val().length;
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return 0;
  } else {
    $("#" + alertarea).html("");
  }
  if (len > word_count) {
    $("#" + alertarea).html(
      "maximum length should be " + word_count + " characters"
    );
    // console.log($("#" + alertarea).html('max length '+maxlen+' characters only!'));
    return 0;
  } else {
    $("#" + alertarea).html("");
  }
}
function validateurl1(value, alertarea) {
  var alertarea = alertarea;
  var contentid = $("#" + value);
  var content = contentid.val();
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return true;
  } else {
    $("#" + alertarea).html("");
    var p =
      /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    if (content.match(p)) {
      return true; // valid file extension
    } else {
      $("#" + alertarea).html("Please enter valid Website URL");
      return false;
    }
  }
}

function validateurl2(value, alertarea) {
  var alertarea = alertarea;
  var contentid = $("#" + value);
  var content = contentid.val();
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    // contentid.focus();
    // $("#" + alertarea).html("Required field");
    return true;
  } else {
    $("#" + alertarea).html("");
    var p =
      /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    if (content.match(p)) {
      return true; // valid file extension
    } else {
      $("#" + alertarea).html("Please enter valid YouTube URL");
      return false;
    }
  }
}

function validatetextfocus(value, alertarea, focus) {
  // function to validate for text box
  var alertarea = alertarea;
  var contentid = $("#" + value);
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    $("#" + focus).focus();
    $("#" + alertarea).html("Required field");
    return 0;
  } else {
    $("#" + alertarea).html("");
  }
}

function tworadiobutton(value1, value2, alertarea) {
  // function to validate for text box
  var alertarea = alertarea;

  var radioid1 = document.getElementsByName("usertype");

  // var radioid2 = document.getElementsById(value2);

  if (radioid1[0].checked == false && radioid1[1].checked == false) {
    $("#" + alertarea).html("Required field");
    return 0;
  } else {
    $("#" + alertarea).html("");
  }
}
function validate_gstnumber(value, alertarea) {
  var incorppattern =
    /^([0-9]){2}([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}([0-9]){1}([zZ]){1}([0-9a-zA-Z]){1}?$/;
  var alertarea = alertarea;
  var contentid = $("#" + value);
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return false;
  } else if (!incorppattern.test(contentid.val())) {
    $("#" + alertarea).html("Enter a valid GST number");
    contentid.focus();
    return false;
  } else {
    $("#" + alertarea).html("");
  }
}
function validatenumber(value, alertarea) {
  // function to validate for text box
  var alertarea = alertarea;
  var contentid = $("#" + value);
  if (contentid.val() >= 0) {
    if (contentid.val().trim() == "" || contentid.val().trim() == null) {
      contentid.focus();
      $("#" + alertarea).html("Required field");
      return 0;
    } else if (isNaN(contentid.val())) {
      contentid.focus();
      $("#" + alertarea).html("Enter a valid number");
      return false;
    } else {
      $("#" + alertarea).html("");
    }
  } else {
    contentid.focus();
    $("#" + alertarea).html("Enter a valid number");
    return false;
  }
}

function validatenumber_with_hyphen(value, alertarea) {
  // function to validate for text box
  var incorppattern = /^[0-9]\d{3}-?\d{4}$/;
  var alertarea = alertarea;
  var contentid = $("#" + value);

  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return false;
  } else if (!incorppattern.test(contentid.val())) {
    $("#" + alertarea).html("Enter a valid year");
    contentid.focus();
    return false;
  } else {
    $("#" + alertarea).html("");
  }
}

function validatenumber_notnegative(value, alertarea) {
  // function to validate for text box
  var alertarea = alertarea;
  var contentid = $("#" + value);
  if (contentid.val() >= 0) {
    if (contentid.val().trim() == "" || contentid.val().trim() == null) {
      contentid.focus();
      $("#" + alertarea).html("Required field");
      return 0;
    } else if (isNaN(contentid.val())) {
      contentid.focus();
      $("#" + alertarea).html("Enter a valid number");
      return false;
    } else {
      $("#" + alertarea).html("");
    }
  } else {
    contentid.focus();
    $("#" + alertarea).html("Enter a valid number");
    return false;
  }
}
function validatenumber_notzero(value, alertarea) {
  // function to validate for text box
  var alertarea = alertarea;
  var contentid = $("#" + value);
  if (contentid.val() > 0) {
    if (contentid.val().trim() == "" || contentid.val().trim() == null) {
      contentid.focus();
      $("#" + alertarea).html("Required field");
      return 0;
    } else if (isNaN(contentid.val())) {
      contentid.focus();
      $("#" + alertarea).html("Enter a valid number");
      return false;
    } else {
      $("#" + alertarea).html("");
    }
  } else {
    contentid.focus();
    $("#" + alertarea).html("Enter a valid number");
    return false;
  }
}
function validatenumber_negativeAllow(value, alertarea) {
  // function to validate for text box
  var alertarea = alertarea;
  var contentid = $("#" + value);
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return 0;
  } else if (isNaN(contentid.val())) {
    contentid.focus();
    $("#" + alertarea).html("Enter a valid number");
    return false;
  } else {
    $("#" + alertarea).html("");
  }
}

function validmobile(fileName, alertarea) {
  // function to validate mobile 1 in student registration
  var mobpattern = /^[6789]\d{9}$/;
  var contentid = $("#" + fileName);
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return false;
  } else if (!mobpattern.test(contentid.val())) {
    contentid.focus();
    $("#" + alertarea).html("Enter valid number");
    return false;
  } else {
    $("#" + alertarea).html("");
  }
}

function validudisecode(fileName, alertarea) {
  // function to validate mobile 1 in student registration
  var mobpattern = /^[0-9]\d{10}$/;
  var contentid = $("#" + fileName);
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return false;
  } else if (!mobpattern.test(contentid.val())) {
    contentid.focus();
    $("#" + alertarea).html("Enter valid udise code");
    return false;
  } else {
    $("#" + alertarea).html("");
  }
}

function validatextname_only(value, alertarea) {
  // function to validate for text box
  var alphaExp = /^[a-zA-Z. ]+$/;
  var alertarea = alertarea;
  var contentid = $("#" + value);

  var contentid1 = contentid.val();
  var count = 0;
  if (contentid1.length > 0) {
    for (var i = 0; i < contentid1.length; i++) {
      if (contentid1.charAt(i) == " ") {
        count++;
      }
    }
  }

  var txt = contentid.val();
  var len = txt.trim().length;
  if (len < 1) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return 0;
  } else {
    if (contentid.val().trim() == "" || contentid.val().trim() == null) {
      contentid.focus();
      $("#" + alertarea).html("Required field");
      return 0;
    } else if (!alphaExp.test(contentid.val())) {
      contentid.focus();
      $("#" + alertarea).html("Enter valid name");
      return 0;
    } else if (count > 4) {
      contentid.focus();
      $("#" + alertarea).html("Only four space allowed");
      return 0;
    } else {
      $("#" + alertarea).html("");
    }
  }
}
function validate_textonly(fileName, alertarea) {
  // function to validate mobile 1 in student registration
  var mobpattern = /[a-zA-Z]$/;
  var contentid = $("#" + fileName);
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return false;
  } else if (!mobpattern.test(contentid.val())) {
    contentid.focus();
    $("#" + alertarea).html("Enter valid Name");
    return false;
  } else {
    $("#" + alertarea).html("");
  }
}
function validate_addressfields(fileName, alertarea) {
  // function to validate floor number and plotnumber
  var mobpattern = /^[a-zA-Z0-9\s,'-/]*$/;
  var contentid = $("#" + fileName);
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return false;
  } else if (!mobpattern.test(contentid.val())) {
    contentid.focus();
    $("#" + alertarea).html("Enter valid text");
    return false;
  } else {
    $("#" + alertarea).html("");
  }
}
function validate_textname(fileName, alertarea) {
  // function to validate mobile 1 in student registration
  var mobpattern = /^[a-zA-Z]+( [a-zA-Z]+){0,4}$/;
  var contentid = $("#" + fileName);
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return false;
  } else if (!mobpattern.test(contentid.val())) {
    contentid.focus();
    $("#" + alertarea).html("Enter valid Name");
    return false;
  } else {
    $("#" + alertarea).html("");
  }
}

function validate_insname(fileName, alertarea) {
  // function to validate mobile 1 in student registration
  var mobpattern = /^[a-zA-Z 0-9-.,]*$/;
  var contentid = $("#" + fileName);
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return false;
  } else if (!mobpattern.test(contentid.val())) {
    contentid.focus();
    $("#" + alertarea).html("Enter a valid Name");
    return false;
  } else {
    $("#" + alertarea).html("");
  }
}

function validate_insname_without_an(fileName, alertarea) {
  // function to validate mobile 1 in student registration
  var mobpattern = /^[a-zA-Z 0-9-.,&]*$/;
  var contentid = $("#" + fileName);
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return false;
  } else if (!mobpattern.test(contentid.val())) {
    contentid.focus();
    $("#" + alertarea).html("Enter a valid Name");
    return false;
  } else {
    $("#" + alertarea).html("");
  }
}

function validate_designation(fileName, alertarea) {
  // function to validate mobile 1 in student registration
  var mobpattern = /^[a-zA-Z 0-9-.,/()]*$/;
  var contentid = $("#" + fileName);
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return false;
  } else if (!mobpattern.test(contentid.val())) {
    contentid.focus();
    $("#" + alertarea).html("Enter a valid Designation");
    return false;
  } else {
    $("#" + alertarea).html("");
  }
}

function validate_udisecode(fileName, alertarea) {
  // function to validate mobile 1 in student registration
  var mobpattern = /^[0-9]{11}$/;
  var contentid = $("#" + fileName);
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return false;
  } else if (!mobpattern.test(contentid.val())) {
    contentid.focus();
    $("#" + alertarea).html("Enter valid UDISE Code");
    return false;
  } else {
    $("#" + alertarea).html("");
  }
}

function validate_aischecode(fileName, alertarea) {
  // function to validate mobile 1 in student registration
  var mobpattern = /^[cC][-][0-9]{5}$/;
  var contentid = $("#" + fileName);
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return false;
  } else if (!mobpattern.test(contentid.val())) {
    contentid.focus();
    $("#" + alertarea).html("Enter valid AISHE Code");
    return false;
  } else {
    $("#" + alertarea).html("");
  }
}

function forgotpasswordvalidmobile(fileName, alertarea) {
  // function to validate mobile 1 in student registration
  var mobpattern = /^[6789]\d{9}$/;
  var contentid = $("#" + fileName);
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return false;
  } else if (!mobpattern.test(contentid.val())) {
    contentid.focus();
    $("#" + alertarea).html("Enter Valid email-id / mobile number");
    return false;
  } else {
    $("#" + alertarea).html("");
  }
}

function validemailid(fileName, alertarea) {
  // function to validate emailid in student registration
  var emailreg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  var contentid = $("#" + fileName);
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return false;
  } else if (!emailreg.test(contentid.val())) {
    contentid.focus();
    $("#" + alertarea).html("Enter valid Email id");
    return false;
  } else {
    $("#" + alertarea).html("");
  }
}

function mailidduplicatecheck(value1, value2, alertarea) {
  // function to validate for text box
  var emailreg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  var alertarea = alertarea;
  var contentid1 = $("#" + value1);
  var contentid2 = $("#" + value2);
  if (contentid1.val() == "" || contentid1.val() == null) {
    contentid1.focus();
    $("#" + alertarea).html("Required field");
    return false;
  } else if (!emailreg.test(contentid1.val())) {
    contentid1.focus();
    $("#" + alertarea).html("Enter valid Email id");
    return false;
  } else if (contentid1.val() == contentid2.val()) {
    contentid1.focus();
    $("#" + alertarea).html(
      "Please enter a different mail Id. ID already provided."
    );
    return 0;
  } else {
    $("#" + alertarea).html("");
  }
}

function mobileduplicatecheck(value1, value2, alertarea) {
  // function to validate for text box
  var mobpattern = /^[456789]\d{9}$/;
  var alertarea = alertarea;
  var contentid1 = $("#" + value1);
  var contentid2 = $("#" + value2);

  if (contentid1.val() == "" || contentid1.val() == null) {
    contentid1.focus();
    $("#" + alertarea).html("Required field");
    return false;
  } else if (!mobpattern.test(contentid1.val())) {
    contentid1.focus();
    $("#" + alertarea).html("Enter valid Mobile Number");
    return false;
  } else if (contentid1.val() == contentid2.val()) {
    contentid1.focus();
    $("#" + alertarea).html(
      "Please enter a different Number.Number already provided."
    );
    return 0;
  } else {
    $("#" + alertarea).html("");
  }
}

function validate_fileupload_emptyallowed(fileName, alertarea) {
  var contentid = document.getElementById(fileName);
  var forext = contentid.value;
  var ext = forext.substring(forext.lastIndexOf(".") + 1);
  if (contentid.value == "" || contentid.value == null) {
    return true;
  } else {
    $("#" + alertarea).html("");
    if (
      ext == "jpg" ||
      ext == "png" ||
      ext == "jpeg" ||
      ext == "JPG" ||
      ext == "PNG" ||
      ext == "JPEG"
    ) {
      var size = contentid.files[0].size;
      if (size < 1000000) {
        return true; // valid file extension
      } else {
        $("#" + alertarea).html("Please upload logo less than 1MB");
        return false;
      }
    } else {
      $("#" + alertarea).html("Please Upload .jpg, .png file formats only");
      return false;
    }
  }
}

function validate_fileuploaddoc(fileName, alertarea) {
  var contentid = document.getElementById(fileName);
  var forext = contentid.value;
  var ext = forext.substring(forext.lastIndexOf(".") + 1);
  if (contentid.value == "" || contentid.value == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return 0;
  } else {
    $("#" + alertarea).html(""); // ext == ".doc" || ext == ".pdf" || ext == ".rtf" || ext == ".tex" || ext == ".txt" || ext == "wpd" || ext == ".xls"
    if (
      ext == "jpg" ||
      ext == "png" ||
      ext == "jpeg" ||
      ext == "JPG" ||
      ext == "PNG" ||
      ext == "JPEG"
    ) {
      var size = contentid.files[0].size;
      // alert(size);
      if (size < 500000) {
        return true; // valid file extension
      } else {
        $("#" + alertarea).html("Please upload image less than  500KB");
        return false;
      }
    } else {
      $("#" + alertarea).html(
        "Please Upload .jpg, .png, .jpeg file formats only"
      );
      return false;
    }
  }
}

// validation for file uploading of announcement page
function validate_fileuploaddoc_announce(fileName, alertarea) {
  var contentid = document.getElementById(fileName);
  var forext = contentid.value;
  var ext = forext.substring(forext.lastIndexOf(".") + 1);

  if (contentid.value == "" || contentid.value == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return 0;
  } else {
    $("#" + alertarea).html(""); // ext == ".doc" || ext == ".pdf" || ext == ".rtf" || ext == ".tex" || ext == ".txt" || ext == "wpd" || ext == ".xls"
    if (
      ext == "jpg" ||
      ext == "png" ||
      ext == "jpeg" ||
      ext == "JPG" ||
      ext == "PNG" ||
      ext == "JPEG" ||
      ext == "doc" ||
      ext == "docx" ||
      ext == "csv" ||
      ext == "ppt" ||
      ext == "pptx" ||
      ext == "ods" ||
      ext == "odt" ||
      ext == "pdf" ||
      ext == "txt" ||
      ext == "xls" ||
      ext == "xlsx"
    ) {
      var size = contentid.files[0].size;
      // alert(size);
      if (size < 500000) {
        return true; // valid file extension
      } else {
        $("#" + alertarea).html("Please upload image less than  500KB");
        return false;
      }
    } else {
      $("#" + alertarea).html(
        "Please Upload .jpg, .png, .jpeg, .doc, .docx, .csv, .ppt, .pptx, .ods, .odt, .pdf, .txt, .xls, .xlsx file formats only"
      );
      return false;
    }
  }
}
// validation for file uploading of Testimonial page
function validate_fileuploaddoc_testimonial(fileName, alertarea) {
  var contentid = document.getElementById(fileName);
  var forext = contentid.value;
  var ext = forext.substring(forext.lastIndexOf(".") + 1);
  if (contentid.value == "" || contentid.value == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return 0;
  } else {
    $("#" + alertarea).html(""); // ext == ".doc" || ext == ".pdf" || ext == ".rtf" || ext == ".tex" || ext == ".txt" || ext == "wpd" || ext == ".xls"
    if (
      ext == "jpg" ||
      ext == "png" ||
      ext == "jpeg" ||
      ext == "JPG" ||
      ext == "PNG" ||
      ext == "JPEG"
    ) {
      var size = contentid.files[0].size;
      // alert(size);
      if (size < 500000) {
        return true; // valid file extension
      } else {
        $("#" + alertarea).html("Please upload image less than  500KB");
        return false;
      }
    } else {
      $("#" + alertarea).html(
        "Please Upload .jpg, .png, .jpeg file formats only"
      );
      return false;
    }
  }
} // end of script validation on testimonial
function validate_fileuploaddoc_notrequired1(fileName, alertarea) {
  var contentid = document.getElementById(fileName);
  var forext = contentid.value;
  var ext = forext.substring(forext.lastIndexOf(".") + 1);
  if (contentid.value == "" || contentid.value == null) {
    // contentid.focus();
    // $("#" + alertarea).html("Required field");
    return true;
  } else {
    $("#" + alertarea).html(""); // ext == ".doc" || ext == ".pdf" || ext == ".rtf" || ext == ".tex" || ext == ".txt" || ext == "wpd" || ext == ".xls"
    if (
      ext == "pdf" ||
      ext == "PDF" ||
      ext == "jpg" ||
      ext == "png" ||
      ext == "jpeg" ||
      ext == "JPG" ||
      ext == "PNG" ||
      ext == "JPEG"
    ) {
      var size = contentid.files[0].size;
      // alert(size);
      if (size < 5000000) {
        return true; // valid file extension
      } else {
        $("#" + alertarea).html("Please upload image less than  5MB");
        return false;
      }
    } else {
      $("#" + alertarea).html(
        "Please Upload .Pdf .jpg, .png, .jpeg file formats only"
      );
      return false;
    }
  }
} // end of script validation on testimonial

function validate_fileuploaddoc_required(fileName, alertarea) {
  var contentid = document.getElementById(fileName);
  var forext = contentid.value;
  var ext = forext.substring(forext.lastIndexOf(".") + 1);
  if (contentid.value == "" || contentid.value == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return false;
  } else {
    $("#" + alertarea).html(""); // ext == ".doc" || ext == ".pdf" || ext == ".rtf" || ext == ".tex" || ext == ".txt" || ext == "wpd" || ext == ".xls"
    if (
      ext == "pdf" ||
      ext == "PDF" ||
      ext == "jpg" ||
      ext == "png" ||
      ext == "jpeg" ||
      ext == "JPG" ||
      ext == "PNG" ||
      ext == "JPEG"
    ) {
      var size = contentid.files[0].size;
      // alert(size);
      if (size < 5000000) {
        return true; // valid file extension
      } else {
        $("#" + alertarea).html("Please upload image less than  5MB");
        return false;
      }
    } else {
      $("#" + alertarea).html(
        "Please Upload .Pdf .jpg, .png, .jpeg file formats only"
      );
      return false;
    }
  }
} // end of script validation on testimonial
function validpincode(fileName, alertarea) {
  // function to validate mobile 1 in student registration
  var pinpatterm = /^[1-9][0-9]{5}$/;
  var contentid = $("#" + fileName);
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return false;
  } else if (!pinpatterm.test(contentid.val())) {
    contentid.focus();
    $("#" + alertarea).html("Enter valid pincode");
    return false;
  } else {
    $("#" + alertarea).html("");
  }
}

function validpincode_tn(fileName, alertarea) {
  // function to validate mobile 1 in student registration
  var pinpatterm = /^[6][0-9]{5}$/;
  var contentid = $("#" + fileName);
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return false;
  } else if (!pinpatterm.test(contentid.val())) {
    contentid.focus();
    $("#" + alertarea).html("Enter valid pincode");
    return false;
  } else {
    $("#" + alertarea).html("");
  }
}
function validatenumberwithzero(value, alertarea) {
  // function to validate for text box
  var alertarea = alertarea;
  var contentid = $("#" + value);
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return 0;
  } else if (
    isNaN(contentid.val()) ||
    contentid.val() < 0 ||
    contentid.val().indexOf(".") !== -1
  ) {
    //  $("#" + value).val("");
    contentid.focus();
    $("#" + alertarea).html("Enter a valid number");
    return false;
  } else {
    $("#" + alertarea).html("");
  }
}

function validpincode1(fileName, alertarea) {
  // function to validate mobile 1 in student registration
  var pinpatterm = /^[5]\d{5}$/;
  var contentid = $("#" + fileName);
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return true;
  } else if (!pinpatterm.test(contentid.val())) {
    contentid.focus();
    $("#" + alertarea).html("Enter valid pincode");
    return false;
  } else {
    $("#" + alertarea).html("");
  }
}
function validate_landlinenumber(fileName, alertarea) {
  // function to validate mobile 1 in student registration
  var mobpattern = /^[0]{1}[8]{1}\d{9}$/;
  var contentid = $("#" + fileName);
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return false;
  } else if (!mobpattern.test(contentid.val())) {
    contentid.focus();
    $("#" + alertarea).html("Enter valid landline number");
    return false;
  } else {
    $("#" + alertarea).html("");
  }
}

function validate_landlinenumber_nonmand(fileName, alertarea) {
  // function to validate mobile 1 in student registration
  var mobpattern = /^[0]{1}\d{10}$/;
  var contentid = $("#" + fileName);
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    $("#" + alertarea).html("");
  } else if (!mobpattern.test(contentid.val())) {
    contentid.focus();
    $("#" + alertarea).html("Enter valid landline number");
    return false;
  } else {
    $("#" + alertarea).html("");
  }
}

function isValidLatitude(fileName, alertarea) {
  // function to validate mobile 1 in student registration
  var mobpattern = /^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,10}$/;
  var contentid = $("#" + fileName);
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return false;
  } else if (!mobpattern.test(contentid.val())) {
    contentid.focus();
    $("#" + alertarea).html("Enter valid Latitude");
    return false;
  } else {
    $("#" + alertarea).html("");
  }
}
function isValidLongitude(fileName, alertarea) {
  // function to validate mobile 1 in student registration
  var mobpattern = /^-?([1]?[1-7][1-9]|[1]?[1-8][0]|[1-9]?[0-9])\.{1}\d{1,10}$/;
  var contentid = $("#" + fileName);
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return false;
  } else if (!mobpattern.test(contentid.val())) {
    contentid.focus();
    $("#" + alertarea).html("Enter valid Longitude");
    return false;
  } else {
    $("#" + alertarea).html("");
  }
}
function validate_stdcode(fileName, alertarea) {
  // function to validate mobile 1 in student registration
  var mobpattern = /^08[\d-]{1,4}$/;
  var contentid = $("#" + fileName);
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return false;
  } else if (!mobpattern.test(contentid.val())) {
    contentid.focus();
    $("#" + alertarea).html("Enter valid STD code");
    return false;
  } else {
    $("#" + alertarea).html("");
  }
}

function validatextname(value, alertarea) {
  // function to validate for text box
  var alphaExp = /^[a-zA-Z. ]+$/;
  var alertarea = alertarea;
  var contentid = $("#" + value);

  var contentid1 = contentid.val();
  var count = 0;
  if (contentid1.length > 0) {
    for (var i = 0; i < contentid1.length; i++) {
      if (contentid1.charAt(i) == " ") {
        count++;
      }
    }
  }

  var txt = contentid.val();
  var len = txt.trim().length;
  if (len < 1) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return 0;
  } else {
    if (contentid.val().trim() == "" || contentid.val().trim() == null) {
      contentid.focus();
      $("#" + alertarea).html("Required field");
      return 0;
    } else if (!alphaExp.test(contentid.val())) {
      $("#" + alertarea).html("Enter valid name");
      return 0;
    } else if (count > 4) {
      contentid.focus();
      $("#" + alertarea).html("Only four space allowed");
      return 0;
    } else {
      $("#" + alertarea).html("");
    }
  }
}

function non_mandvalidatextname(value, alertarea) {
  // function to validate for text box
  var alphaExp = /^[a-zA-Z. ]+$/;
  var alertarea = alertarea;
  var contentid = $("#" + value);

  var contentid1 = contentid.val();
  var count = 0;
  if (contentid1.length > 0) {
    for (var i = 0; i < contentid1.length; i++) {
      if (contentid1.charAt(i) == " ") {
        count++;
      }
    }
  }

  var txt = contentid.val();
  var len = txt.trim().length;
  if (count == 1) {
    $("#" + alertarea).html("Enter valid name");
    return 0;
  } else {
    if (contentid.val().trim() == "" || contentid.val().trim() == null) {
      $("#" + alertarea).html("");
    } else if (!alphaExp.test(contentid.val())) {
      $("#" + alertarea).html("Enter valid name");
      return 0;
    } else if (count > 4) {
      contentid.focus();
      $("#" + alertarea).html("Only four space allowed");
      return 0;
    } else {
      $("#" + alertarea).html("");
    }
  }
}

function validafirstname(value, alertarea) {
  // function to validate for text box
  var alphaExp = /^[a-zA-Z. ]+$/;
  var alertarea = alertarea;
  var contentid = $("#" + value);

  var contentid1 = contentid.val();
  var count = 0;
  if (contentid1.length > 0) {
    for (var i = 0; i < contentid1.length; i++) {
      if (contentid1.charAt(i) == " ") {
        count++;
      }
    }
  }

  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return 0;
  } else if (!alphaExp.test(contentid.val())) {
    $("#" + alertarea).html("Enter valid name");
    return 0;
  }
  // else if(count>1){
  //   contentid.focus();
  //     $("#" + alertarea).html("Only One space allowed");
  //     return 0;
  // }
  else {
    $("#" + alertarea).html("");
  }
}

function validateName_notrequired(value, alertarea) {
  // function to validate for text box
  var alphaExp = /^[a-zA-Z.$!@ ]+$/;
  var alertarea = alertarea;
  var contentid = $("#" + value);

  var contentid1 = contentid.val();
  var count = 0;
  if (contentid1.length > 0) {
    for (var i = 0; i < contentid1.length; i++) {
      if (contentid1.charAt(i) == " ") {
        count++;
      }
    }
  }

  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    // contentid.focus();
    // $("#" + alertarea).html("Required field");
    return true;
  } else if (!alphaExp.test(contentid.val())) {
    $("#" + alertarea).html("Enter valid name");
    return 0;
  }
  // else if(count>1){
  //   contentid.focus();
  //     $("#" + alertarea).html("Only One space allowed");
  //     return 0;
  // }
  else {
    $("#" + alertarea).html("");
  }
}

function validafirstname_notrequired(value, alertarea) {
  // function to validate for text box
  var alphaExp = /^[a-zA-Z. ]+$/;
  var alertarea = alertarea;
  var contentid = $("#" + value);

  var contentid1 = contentid.val();
  var count = 0;
  if (contentid1.length > 0) {
    for (var i = 0; i < contentid1.length; i++) {
      if (contentid1.charAt(i) == " ") {
        count++;
      }
    }
  }

  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return true;
  } else if (!alphaExp.test(contentid.val())) {
    $("#" + alertarea).html("Enter valid name");
    return 0;
  }
  // else if(count>1){
  //   contentid.focus();
  //     $("#" + alertarea).html("Only One space allowed");
  //     return 0;
  // }
  else {
    $("#" + alertarea).html("");
  }
}

function validasurtextname(value, alertarea) {
  // function to validate for text box
  var alphaExp = /^[a-zA-Z. ]+$/;
  var alertarea = alertarea;
  var contentid = $("#" + value);
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return 1;
  } else if (!alphaExp.test(contentid.val())) {
    $("#" + alertarea).html("Enter valid name");
    return 0;
  } else {
    $("#" + alertarea).html("");
  }
}

function validasurtextname_testimonial(value, alertarea) {
  // function to validate for text box
  var alphaExp = /^[a-zA-Z., ]+$/;
  var alertarea = alertarea;
  var contentid = $("#" + value);
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return 1;
  } else if (!alphaExp.test(contentid.val())) {
    $("#" + alertarea).html("Enter valid name");
    return 0;
  } else {
    $("#" + alertarea).html("");
  }
}

function subsectorduplicatecheck(value1, value2, alertarea) {
  // function to validate for text box
  var alertarea = alertarea;
  var contentid1 = $("#" + value1);
  var contentid2 = $("#" + value2);
  if (contentid1.val() == contentid2.val()) {
    contentid1.focus();
    $("#" + alertarea).html(
      "Please enter a different mail Id. ID already provided."
    );

    return 0;
  } else {
    $("#" + alertarea).html("");
  }
}
/* ----------------- password and confirm password comparision ----------------------------------------------*/

function passwordcomparision1(value1, value2, alertarea1, alertarea2) {
  // function to validate for text box
  // alert('pass');
  var alertarea1 = alertarea1;
  var alertarea2 = alertarea2;

  var contentid1 = $("#" + value1);
  var contentid2 = $("#" + value2);

  if (contentid1.val() != "" && contentid2.val() != "") {
    if (contentid1.val() != contentid2.val()) {
      swal(
        "",
        "Password does not match. Please type the same password in Re-enter password field..",
        "warning"
      );
      // $("#" + alertarea).html("Password does not match. Please type the same password in Re-enter password field");
      contentid1.focus();
      return 0;
    }
  }
}
/* ----------------- password and confirm password comparision ----------------------------------------------*/

function validate_fileuploadcsv(fileName, alertarea) {
  var contentid = document.getElementById(fileName);
  var forext = contentid.value;
  var ext = forext.substring(forext.lastIndexOf(".") + 1);
  if (contentid.value == "" || contentid.value == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return 0;
  } else {
    $("#" + alertarea).html("");
    if (ext == "csv" || ext == "CSV") {
      return true; // valid file extension
    } else {
      $("#" + alertarea).html("Please Upload .csv or .CSV file formats only");
      return false;
    }
  }
}

function validatecompanyname(value, alertarea) {
  // function to validate for text box
  var alertarea = alertarea;
  var contentid = $("#" + value);

  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return 0;
  } else {
    var name = contentid.val();
    var regex = /^[a-zA-Z0-9 \&\-]*$/;
    if (regex.test(name)) {
      $("#" + alertarea).html("");
    } else {
      contentid.focus();
      $("#" + alertarea).html("Invalid Name");
      return 0;
    }
  }
}

function validate_fileupload_empty(fileName, alertarea) {
  var contentid = document.getElementById(fileName);
  var forext = contentid.value;
  var ext = forext.substring(forext.lastIndexOf(".") + 1);

  if (contentid.value == "" || contentid.value == null) {
    return true;
  } else {
    $("#" + alertarea).html("");
    if (ext == "jpg" || ext == "png" || ext == "JPG" || ext == "PNG") {
      // var size = contentid.files[0].size;
      // if (size < 200) {
      //     return true; // valid file extension
      // } else {
      //     $("#" + alertarea).html("Please upload image less than 200KB");
      //     return false;
      // }
    } else {
      $("#" + alertarea).html("Please Upload .jpg, .png file formats only");
      return false;
    }
  }
}

function validatepassword(value, alertarea) {
  // function to validate for text box
  var alertarea = alertarea;
  var contentid = $("#" + value);
  // var validpass =  /^(?=(.*[a-zA-Z].*){2,})(?=.*\d.*)(?=.*\W.*)[a-zA-Z0-9\S]{8,15}$/;
  // var validpass = /^[A-Za-z0-9 _.~\-!@#\$%\^&\*\(\)]{8,15}$/;
  var validpass = /^[a-zA-Z0-9\S]{8,12}$/;
  var contentid1 = contentid.val();
  var count = contentid1.length;
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return 0;
  } else if (!validpass.test(contentid1)) {
    contentid.focus();
    // $("#" + alertarea).html("Choose a 8-12 digit password for security purpose. Please ensure your password contains minimum  one alphabet, one numeric value, one special character.");
    $("#" + alertarea).html("Please enter 8-12 character password");
    return 0;
  } else {
    $("#" + alertarea).html("");
  }
}

function validateSimplepassword(value, alertarea) {
  // function to validate for text box
  var alertarea = alertarea;
  var contentid = $("#" + value);
  var validpass =
    /^(?=(.*[a-zA-Z].*){2,})(?=.*\d.*)(?=.*\W.*)[a-zA-Z0-9\S]{8,12}$/;

  var contentid1 = contentid.val();
  var count = contentid1.length;
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return 0;
  } else if (!validpass.test(contentid1)) {
    contentid.focus();
    $("#" + alertarea).html(
      "Choose a 8-12 digit password for security purpose. Please ensure your password contains minimum  one alphabet, one numeric value, one special character."
    );
    return 0;
  } else {
    $("#" + alertarea).html("");
  }
}

function validate_start_date(value, alertarea) {
  var alertarea = alertarea;
  var contentid = $("#" + value);
  autoclose: true;
  // datepicker.closeOnSelect = true;
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return 0;
  } else {
    $("#" + alertarea).html("");
  }
  var get_date = $("#start_date").val();
  var current_date = "";
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  current_date = yyyy + "-" + mm + "-" + dd;
  if (get_date < current_date) {
    $("#" + alertarea).html("Select valid start date");
    return 0;
    // alert("The expiry date is before today's date. Please select a valid expiry date");
    // return false;
  }
}

function validate_start_date_dynamic(value, alertarea, field) {
  var alertarea = alertarea;
  var contentid = $("#" + value);
  autoclose: true;
  // datepicker.closeOnSelect = true;
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return 0;
  } else {
    $("#" + alertarea).html("");
    // return 1;
  }
  var get_date = $("#" + field).val();
  var current_date = "";
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  current_date = yyyy + "-" + mm + "-" + dd;
  if (get_date < current_date) {
    $("#" + alertarea).html("Select valid start date");
    return 0;
    // alert("The expiry date is before today's date. Please select a valid expiry date");
    // return false;
  }
}

function validate_expiry_date(value, alertarea) {
  var alertarea = alertarea;
  var contentid = $("#" + value);
  autoclose: true;
  // datepicker.closeOnSelect = true;
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return 0;
  } else {
    $("#" + alertarea).html("");
  }
  var get_date = $("#expiry_date").val();
  var current_date = "";
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  current_date = yyyy + "-" + mm + "-" + dd;
  if (get_date < current_date) {
    $("#" + alertarea).html("Select valid expiry date");
    return 0;
    // alert("The expiry date is before today's date. Please select a valid expiry date");
    // return false;
  }
}

function validate_start_end_date(value, alertarea, startid, endid) {
  var alertarea = alertarea;
  var contentid = $("#" + value);
  autoclose: true;
  // datepicker.closeOnSelect = true;
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return 0;
  } else {
    $("#" + alertarea).html("");
  }
  var start_date = $("#" + startid).val();
  var end_date = $("#" + endid).val();
  var current_date = "";
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  current_date = yyyy + "-" + mm + "-" + dd;
  if (end_date < start_date) {
    $("#" + alertarea).html("Select valid expiry date");
    return 0;
    // alert("The expiry date is before today's date. Please select a valid expiry date");
    // return false;
  }
}

function validatepasswordlength(value, alertarea) {
  // function to validate for text box
  var alertarea = alertarea;
  var contentid = $("#" + value);

  var contentid1 = contentid.val();
  var count = contentid1.length;
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return 0;
  } else if (count < 8) {
    contentid.focus();
    $("#" + alertarea).html("Please enter 8-12 character password");
    return 0;
  } else if (count > 12) {
    contentid.focus();
    $("#" + alertarea).html("Please enter 8-12 character password");
    return 0;
  } else {
    $("#" + alertarea).html("");
  }
}

//// valid mobile or email validation //

function validemailidormobile(fileName, alertarea) {
  // function to validate emailid in student registration
  var emailreg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  var contentid = $("#" + fileName);

  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return false;
  } else if (!emailreg.test(contentid.val())) {
    contentid.focus();
    $("#" + alertarea).html("Enter Valid email-id / mobile number");

    var mobpattern = /^[456789]\d{9}$/;
    if (!mobpattern.test(contentid.val())) {
      contentid.focus();
      $("#" + alertarea).html("Enter Valid email-id / mobile number");
      return false;
    } else {
      $("#" + alertarea).html("");
    }
  } else {
    $("#" + alertarea).html("");
  }
}

/// non mand mail mobile //

function non_mandvalidmobile(fileName, alertarea) {
  // function to validate mobile 1 in student registration
  var mobpattern = /^[6789]\d{9}$/;
  var contentid = $("#" + fileName);
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    $("#" + alertarea).html("");
  } else if (!mobpattern.test(contentid.val())) {
    contentid.focus();
    $("#" + alertarea).html("Enter valid number");
    return false;
  } else {
    $("#" + alertarea).html("");
  }
}

function non_mandvalidemailid(fileName, alertarea) {
  // function to validate emailid in student registration
  var emailreg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  var contentid = $("#" + fileName);
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    $("#" + alertarea).html("");
  } else if (!emailreg.test(contentid.val())) {
    contentid.focus();
    $("#" + alertarea).html("Enter valid Email id");
    return false;
  } else {
    $("#" + alertarea).html("");
  }
}

function mandvalidemailid(fileName, alertarea) {
  // function to validate emailid in student registration
  var emailreg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  var contentid = $("#" + fileName);
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return false;
  } else if (!emailreg.test(contentid.val())) {
    contentid.focus();
    $("#" + alertarea).html("Enter valid Email id");
    return false;
  } else {
    $("#" + alertarea).html("");
  }
}

function validatenumbernotzero(value, alertarea) {
  var alertarea = alertarea;
  var contentid = $("#" + value);
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return 0;
  } else if (isNaN(contentid.val())) {
    contentid.focus();
    $("#" + alertarea).html("Enter a valid number");
    return false;
  } else {
    if (contentid.val() == "0" || contentid.val() < 1) {
      contentid.focus();
      $("#" + alertarea).html("Enter number greater than zero");
      return false;
    }
    if (Math.sign(contentid.val()) != 1) {
      contentid.focus();
      $("#" + alertarea).html("Enter a positive number");
      return false;
    }
  }
}

function validatenumbernotzero_length(value, alertarea) {
  var alertarea = alertarea;
  var contentid = $("#" + value);
  var txt = contentid.val();
  var len = txt.trim().length;
  if (len > 4) {
    contentid.focus();
    $("#" + alertarea).html("Minimum Length should be 3");
    return 0;
  } else {
    if (contentid.val().trim() == "" || contentid.val().trim() == null) {
      contentid.focus();
      $("#" + alertarea).html("Required field");
      return 0;
    } else if (isNaN(contentid.val())) {
      contentid.focus();
      $("#" + alertarea).html("Enter a valid number");
      return false;
    } else {
      if (contentid.val() == "0" || contentid.val() < 1) {
        contentid.focus();
        $("#" + alertarea).html("Enter number greater than zero");
        return false;
      }
      if (Math.sign(contentid.val()) != 1) {
        contentid.focus();
        $("#" + alertarea).html("Enter a positive number");
        return false;
      }
    }
  }
}

function validatepan(value, alertarea) {
  // function to validate for text box
  var panpattern = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
  var alertarea = alertarea;
  var contentid = $("#" + value);
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return 0;
  } else if (!panpattern.test(contentid.val())) {
    $("#" + alertarea).html("Enter a valid PAN number");
    contentid.focus();
    return false;
  } else {
    $("#" + alertarea).html("");
  }
}

///// Validate Student Image

function validate_fileuploadimage(fileName, alertarea) {
  var contentid = document.getElementById(fileName);

  // alert(contentid);
  var forext = contentid.value;
  var ext = forext.substring(forext.lastIndexOf(".") + 1);
  if (contentid.value == "" || contentid.value == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return 0;
  } else {
    $("#" + alertarea).html(""); // ext == ".doc" || ext == ".pdf" || ext == ".rtf" || ext == ".tex" || ext == ".txt" || ext == "wpd" || ext == ".xls"
    if (
      ext == "jpg" ||
      ext == "png" ||
      ext == "jpeg" ||
      ext == "JPG" ||
      ext == "PNG" ||
      ext == "JPEG"
    ) {
      var size = contentid.files[0].size;
      // alert(size);
      if (size < 1000000) {
        return true; // valid file extension
      } else {
        $("#" + alertarea).html("Please upload image less than  1 MB");
        $("#" + fileName).val("");
        return false;
      }
    } else {
      $("#" + alertarea).html(
        "Please Upload .jpg, .png, .jpeg file formats only"
      );
      $("#" + fileName).val("");
      return false;
    }
  }
}

///// Validate File doc //

function validate_fileuploadimage_pdf(fileName, alertarea) {
  var contentid = document.getElementById(fileName);

  // alert(contentid);
  var forext = contentid.value;
  var ext = forext.substring(forext.lastIndexOf(".") + 1);
  if (contentid.value == "" || contentid.value == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return false;
  } else {
    $("#" + alertarea).html(""); // ext == ".doc" || ext == ".pdf" || ext == ".rtf" || ext == ".tex" || ext == ".txt" || ext == "wpd" || ext == ".xls"
    if (ext == "pdf" || ext == "PDF") {
      var size = contentid.files[0].size;
      // alert(size);
      if (size < 10000000) {
        return true; // valid file extension
      } else {
        $("#" + alertarea).html("Please upload PDF less than  10MB");
        // $("#" + fileName).val("");
        return false;
      }
    } else {
      $("#" + alertarea).html("Please Upload .pdf file formats only");
      $("#" + fileName).val("");
      return false;
    }
  }
}

function validate_date(value, alertarea) {
  var alertarea = alertarea;
  var contentid = $("#" + value);
  autoclose: true;
  // datepicker.closeOnSelect = true;
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return 0;
  } else {
    $("#" + alertarea).html("");
  }
  var get_date = contentid.val();
  var current_date = "";
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  current_date = yyyy + "-" + mm + "-" + dd;
  if (get_date > current_date) {
    $("#" + alertarea).html("Select valid date");
    return 0;
    // alert("The expiry date is before today's date. Please select a valid expiry date");
    // return false;
  }
}

///// Valid alpha numeric validation //

function validalphanumeric(fileName, alertarea) {
  // function to validate mobile 1 in student registration
  var alphanumeric = /^[0-9a-zA-Z]+$/;
  var contentid = $("#" + fileName);
  var txt = contentid.val();
  var len = txt.trim().length;
  if (len < 1) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return 0;
  } else {
    if (contentid.val().trim() == "" || contentid.val().trim() == null) {
      contentid.focus();
      $("#" + alertarea).html("Required field");
      return false;
    } else if (!alphanumeric.test(contentid.val())) {
      contentid.focus();
      $("#" + alertarea).html("Enter valid text");
      return false;
    } else {
      $("#" + alertarea).html("");
    }
  }
}

function validalphanumeric_userid(fileName, alertarea) {
  // function to validate mobile 1 in student registration
  var alphanumeric = /^[0-9a-zA-Z]+$/;
  var contentid = $("#" + fileName);
  var txt = contentid.val();
  var len = txt.trim().length;
  if (len < 1) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return 0;
  } else {
    if (contentid.val().trim() == "" || contentid.val().trim() == null) {
      contentid.focus();
      $("#" + alertarea).html("Required field");
      return false;
    } else if (!alphanumeric.test(contentid.val())) {
      contentid.focus();
      $("#" + alertarea).html("Enter valid user Id");
      return false;
    } else {
      $("#" + alertarea).html("");
    }
  }
}

function validalphanumeric_userid_login(fileName, alertarea) {
  // function to validate mobile 1 in student registration
  var alphanumeric = /^[0-9a-zA-Z]+$/;
  var contentid = $("#" + fileName);
  var txt = contentid.val();
  var len = txt.trim().length;
  if (len < 1) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    return 0;
  } else {
    if (contentid.val().trim() == "" || contentid.val().trim() == null) {
      contentid.focus();
      $("#" + alertarea).html("Required field");
      return false;
    } else if (!alphanumeric.test(contentid.val())) {
      contentid.focus();
      $("#" + alertarea).html("Enter valid user Id");
      return false;
    } else {
      $("#" + alertarea).html("");
    }
  }
}

/// Common date function min max check in onlbur //

function common_onblurdateval(min, max, id, check_al) {
  // alert(min);
  // alert(max);
  // alert(id);
  // alert(check_al);

  var check_val = $("#" + id).val();

  // alert(check_val);

  if (min > check_val) {
    $("#" + check_al).html("Enter correct date");
    $("#" + id).val("");
    return false;
  } else if (check_val > max) {
    $("#" + check_al).html("Enter correct date");
    $("#" + id).val("");
    return false;
  } else {
    $("#" + check_al).html("");
    return false;
  }
}

// function validate_fileimageext(fileName,alertarea)
// {

//     var contentid = document.getElementById(fileName);

//     var forext = contentid.value;

//       var ext = forext.substring(forext.lastIndexOf('.') + 1);
//       var ext1 = forext.split('.');
//       //alert(ext1.length);
//      var MAX_SIZE=1000000;
//         if(contentid.value == "" || contentid.value == null)
//          {    contentid.focus();
//             $("#"+alertarea).html("Required field");
//             return 0;
//          }
//         else
//           {
//             $("#"+alertarea).html("");
//         if(ext1.length >= 3) {
//           $("#"+fileName).val("");
//           $("#"+alertarea).html("Please Upload proper image only");
//            return false;
//            contentid.focus();
//         }else{
//             if(ext == "jpg" || ext == "JPG" || ext == "jpeg" || ext == "JPEG" || ext == "png" || ext == "PNG" )
//               {
//                   var size = contentid.files[0].size;
//                   if(size > MAX_SIZE){
//                     // alert(size);
//                       alert("Maximum file size exceeds 1 MB");
//                        $("#"+fileName).val("");
//                        $("#"+alertarea).html("Please upload files less than 1 MB!");
//                         contentid.focus();
//                       return;
//                   }else{
//                   return true;
//                   } // valid file extension
//               }
//               else
//               {      $("#"+fileName).val("");
//                   $("#"+alertarea).html("Please Upload .jpg,.jpeg,.png files only");
//                    contentid.focus();
//                   return false;
//               }
//       }
//     }
// }

function hasDuplicates(arr) {
  return new Set(arr).size !== arr.length;
}

function validatenumber1(value, alertarea) {
  // function to validate for text box
  var alertarea = alertarea;
  var contentid = $("#" + value);
  if (contentid.val() >= 0) {
    if (contentid.val().trim() == "" || contentid.val().trim() == null) {
      // contentid.focus();
      // $("#" + alertarea).html("Required field");
      // return 0;
    } else if (isNaN(contentid.val())) {
      contentid.focus();
      $("#" + alertarea).html("Numeric value only allowed");
      return false;
    } else {
      $("#" + alertarea).html("");
    }
  } else {
    contentid.focus();
    $("#" + alertarea).html("Numeric value only allowed");
    return false;
  }
}

function validate_percentage(value, alertarea) {
  // function to validate percentage for text box
  var alertarea = alertarea;
  var contentid = $("#" + value);
  var field_id = $("#" + value).val();
  var x = parseFloat(field_id);
  if (contentid.val() >= 0) {
    if (contentid.val().trim() == "" || contentid.val().trim() == null) {
      contentid.focus();
      $("#" + alertarea).html("Required field");
      return 0;
    } else if (isNaN(contentid.val())) {
      contentid.focus();
      $("#" + alertarea).html("Numeric value only allowed");
      return false;
    } else if (isNaN(x) || x < 0 || x > 100) {
      $("#" + alertarea).html("Enter Valid Percentage");
      return false;
    } else {
      $("#" + alertarea).html("");
    }
  } else {
    contentid.focus();
    $("#" + alertarea).html("Numeric value only allowed");
    return false;
  }
}

function validate_grade(value, alertarea) {
  // function to validate grade for text box
  var alertarea = alertarea;
  var contentid = $("#" + value);
  var field_id = $("#" + value).val();
  var x = parseFloat(field_id);
  if (contentid.val() >= 0) {
    if (contentid.val().trim() == "" || contentid.val().trim() == null) {
      contentid.focus();
      $("#" + alertarea).html("Required field");
      return 0;
    } else if (isNaN(contentid.val())) {
      contentid.focus();
      $("#" + alertarea).html("Numeric value only allowed");
      return false;
    } else if (isNaN(x) || x < 0 || x > 10) {
      $("#" + alertarea).html("Enter Valid Grade/CGPA");
      return false;
    } else {
      $("#" + alertarea).html("");
    }
  } else {
    contentid.focus();
    $("#" + alertarea).html("Numeric value only allowed");
    return false;
  }
}

function validatetext_style(value, alertarea, fieldname) {
  // function to validate for text box with Style
  // alert(value);
  var alertarea = alertarea;
  var contentid = $("#" + value);

  var txt = contentid.val();
  //  alert(txt);
  var len = txt.trim().length;
  if (len < 1) {
    contentid.focus();
    $("#" + alertarea).html(
      "<i class='fa fa-info-circle' aria-hidden='true'></i> " +
        fieldname +
        " is Mandatory"
    );
    $("#" + alertarea).addClass("alertMsg");
    return 0;
  } else {
    if (contentid.val().trim() == "" || contentid.val().trim() == null) {
      contentid.focus();
      $("#" + alertarea).html(
        "<i class='fa fa-info-circle' aria-hidden='true'></i> " +
          fieldname +
          " is Mandatory"
      );
      $("#" + alertarea).addClass("alertMsg");
      return 0;
    } else {
      $("#" + alertarea).html("");
      return true;
    }
  }
}
function validatetext1_style(value, alertarea, fieldname) {
  // function to validate for text box
  var alertarea = alertarea;
  var contentid = $("#" + value);

  var txt = contentid.val();
  var len = txt.length;
  if (len < 1) {
    contentid.focus();
    $("#" + alertarea).html(
      "<i class='fa fa-info-circle' aria-hidden='true'></i> " +
        fieldname +
        " is Mandatory"
    );
    $("#" + alertarea).addClass("alertMsg");
    return 0;
  } else {
    if (contentid.val().trim() == "" || contentid.val().trim() == null) {
      contentid.focus();
      $("#" + alertarea).html(
        "<i class='fa fa-info-circle' aria-hidden='true'></i> " +
          fieldname +
          " is Mandatory"
      );
      $("#" + alertarea).addClass("alertMsg");
      return 0;
    } else {
      $("#" + alertarea).html("");
      return true;
    }
  }
}
function validate_textonly_style(fileName, alertarea, fieldname) {
  // function to validate mobile 1 in student registration
  var mobpattern = /^[a-zA-Z. ]+$/;
  // var mobpattern = /[a-zA-Z]$/;
  var contentid = $("#" + fileName);
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html(
      "<i class='fa fa-info-circle' aria-hidden='true'></i> " +
        fieldname +
        " is Mandatory"
    );
    $("#" + alertarea).addClass("alertMsg");
    return false;
  } else if (!mobpattern.test(contentid.val())) {
    contentid.focus();
    $("#" + alertarea).html("Enter Valid Name");
    $("#" + alertarea).addClass("alertMsg");
    return false;
  } else {
    $("#" + alertarea).html("");
    return true;
  }
}

function validmobile_style(fileName, alertarea, fieldname) {
  // function to validate mobile 1 in student registration
  var mobpattern = /^[6789]\d{9}$/;
  var contentid = $("#" + fileName);
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html(
      "<i class='fa fa-info-circle' aria-hidden='true'></i> " +
        fieldname +
        " is Mandatory"
    );
    $("#" + alertarea).addClass("alertMsg");
    // $("#"+alertarea).css({"margin-top": "-20px","font-size":"10px","font-weight": "bold","float":"left"});
    return false;
  } else if (!mobpattern.test(contentid.val())) {
    contentid.focus();
    $("#" + alertarea).html(
      "<i class='fa fa-info-circle' aria-hidden='true'></i> Enter Valid Mobile Number"
    );
    $("#" + alertarea).addClass("alertMsg");
    // $("#"+alertarea).css({"margin-top": "-20px","font-size":"10px","font-weight": "bold","float":"left"});
    return false;
  } else {
    $("#" + alertarea).html("");
    return true;
  }
}
function validate_gstnumber_style(value, alertarea, fieldname) {
  var incorppattern =
    /^([0-9]){2}([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}([0-9]){1}([zZ]){1}([0-9a-zA-Z]){1}?$/;
  var alertarea = alertarea;
  var contentid = $("#" + value);
  // if (contentid.val() == "" || contentid.val() == null) {
  //   contentid.focus();
  //   $("#" + alertarea).html("<i class='fa fa-info-circle' aria-hidden='true'></i> "+fieldname+" is Mandatory");
  //   $("#"+alertarea).addClass('alertMsg');
  //   return false;
  // }
  // else
  if (!incorppattern.test(contentid.val())) {
    $("#" + alertarea).html(
      "<i class='fa fa-info-circle' aria-hidden='true'></i> Enter a valid GST number"
    );
    $("#" + alertarea).addClass("alertMsg");
    contentid.focus();
    return false;
  } else {
    $("#" + alertarea).html("");
    return true;
  }
}
function validate_url_style(value, alertarea, fieldname) {
  var gstpattern =
    /(https?:\/\/(?:www\.&(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,})/gi;
  var alertarea = alertarea;
  var contentid = $("#" + value);
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html(
      "<i class='fa fa-info-circle' aria-hidden='true'></i> " +
        fieldname +
        " is Mandatory"
    );
    $("#" + alertarea).addClass("alertMsg");
    return 0;
  } else if (!gstpattern.test(contentid.val())) {
    $("#" + alertarea).html(
      "<i class='fa fa-info-circle' aria-hidden='true'></i> Enter a valid URL"
    );
    $("#" + alertarea).addClass("alertMsg");
    return false;
  } else {
    $("#" + alertarea).html("");
    return true;
  }
}

function validpincode_style(fileName, alertarea, fieldname) {
  // function to validate mobile 1 in student registration
  var pinpatterm = /^[1-9][0-9]{5}$/;
  var contentid = $("#" + fileName);
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html(
      "<i class='fa fa-info-circle' aria-hidden='true'></i> " +
        fieldname +
        " is Mandatory"
    );
    $("#" + alertarea).addClass("alertMsg");
    return false;
  } else if (!pinpatterm.test(contentid.val())) {
    contentid.focus();
    $("#" + alertarea).html(
      "<i class='fa fa-info-circle' aria-hidden='true'></i> Enter valid pincode"
    );
    $("#" + alertarea).addClass("alertMsg");
    return false;
  } else {
    $("#" + alertarea).html("");
    return true;
  }
}

function validemailid_style(fileName, alertarea, fieldname) {
  // function to validate emailid in student registration
  var emailreg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  var contentid = $("#" + fileName);
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html(
      "<i class='fa fa-info-circle' aria-hidden='true'></i> " +
        fieldname +
        " is Mandatory"
    );
    $("#" + alertarea).addClass("alertMsg");
    return false;
  } else if (!emailreg.test(contentid.val())) {
    contentid.focus();
    //$("#" + alertarea).html("Enter valid Email id");
    $("#" + alertarea).html(
      "<i class='fa fa-info-circle' aria-hidden='true'></i> Enter Valid Email id"
    );
    $("#" + alertarea).addClass("alertMsg");
    return false;
  } else {
    $("#" + alertarea).html("");
    return true;
  }
}
function validemailid_style_non_mandatory(fileName, alertarea, fieldname) {
  // function to validate emailid in student registration
  var emailreg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  var contentid = $("#" + fileName);
  if (!emailreg.test(contentid.val())) {
    contentid.focus();
    //$("#" + alertarea).html("Enter valid Email id");
    $("#" + alertarea).html(
      "<i class='fa fa-info-circle' aria-hidden='true'></i> Enter Valid Email id"
    );
    $("#" + alertarea).addClass("alertMsg");
    return false;
  } else {
    $("#" + alertarea).html("");
    return true;
  }
}

function validatenumber_style(value, alertarea, fieldname) {
  // function to validate for text box
  var alertarea = alertarea;
  var contentid = $("#" + value);
  if (contentid.val() >= 0) {
    if (contentid.val().trim() == "" || contentid.val().trim() == null) {
      contentid.focus();
      $("#" + alertarea).html(
        "<i class='fa fa-info-circle' aria-hidden='true'></i> " +
          fieldname +
          " is Mandatory"
      );
      $("#" + alertarea).addClass("alertMsg");
      return 0;
    } else if (isNaN(contentid.val())) {
      contentid.focus();
      $("#" + alertarea).html(
        "<i class='fa fa-info-circle' aria-hidden='true'></i> Enter a valid number"
      );
      $("#" + alertarea).addClass("alertMsg");
      return false;
    } else {
      $("#" + alertarea).html("");
      return true;
    }
  } else {
    contentid.focus();
    $("#" + alertarea).html(
      "<i class='fa fa-info-circle' aria-hidden='true'></i> Enter a valid number"
    );
    $("#" + alertarea).addClass("alertMsg");
    return false;
  }
}

function validemailid_style_skip(fileName, alertarea, fieldname) {
  // function to validate emailid in student registration
  var emailreg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  var emailblockReg =
    /^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)([\w-]+\.)+[\w-]{2,4})?$/;
  var contentid = $("#" + fileName);
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html(
      "<i class='fa fa-info-circle' aria-hidden='true'></i> " +
        fieldname +
        " is Mandatory"
    );
    $("#" + alertarea).addClass("alertMsg");
    return false;
  } else if (!emailreg.test(contentid.val())) {
    contentid.focus();
    //$("#" + alertarea).html("Enter valid Email id");
    $("#" + alertarea).html(
      "<i class='fa fa-info-circle' aria-hidden='true'></i> Enter Valid Email id"
    );
    $("#" + alertarea).addClass("alertMsg");
    return false;
  } else if (!emailblockReg.test(contentid.val())) {
    contentid.focus();
    //$("#" + alertarea).html("Enter valid Email id");
    $("#" + alertarea).html(
      "<i class='fa fa-info-circle' aria-hidden='true'></i> Enter your Business Mail ID"
    );
    $("#" + alertarea).addClass("alertMsg");
    return false;
  } else {
    $("#" + alertarea).html("");
    return true;
  }
}

function validatenumberwithzero_style(value, alertarea, fieldname) {
  // function to validate for text box
  var alertarea = alertarea;
  var contentid = $("#" + value);
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html(
      "<i class='fa fa-info-circle' aria-hidden='true'></i> " +
        fieldname +
        " is Mandatory"
    );
    $("#" + alertarea).addClass("alertMsg");
    return 0;
  } else if (
    isNaN(contentid.val()) ||
    contentid.val() < 1 ||
    contentid.val().indexOf(".") !== -1
  ) {
    //  $("#" + value).val("");
    contentid.focus();
    $("#" + alertarea).html(
      "<i class='fa fa-info-circle' aria-hidden='true'></i> Enter a valid number"
    );
    $("#" + alertarea).addClass("alertMsg");
    return false;
  } else {
    $("#" + alertarea).html("");
    return true;
  }
}

function validatextname_style(value, alertarea, fieldname) {
  // function to validate for text box
  var alphaExp = /^[a-zA-Z. ]+$/;
  var alertarea = alertarea;
  var contentid = $("#" + value);

  var contentid1 = contentid.val();
  var count = 0;
  if (contentid1.length > 0) {
    for (var i = 0; i < contentid1.length; i++) {
      if (contentid1.charAt(i) == " ") {
        count++;
      }
    }
  }

  var txt = contentid.val();
  var len = txt.trim().length;
  if (len < 1) {
    contentid.focus();
    $("#" + alertarea).html(
      "<i class='fa fa-info-circle' aria-hidden='true'></i> " +
        fieldname +
        " is Mandatory"
    );
    $("#" + alertarea).addClass("alertMsg");
    return 0;
  } else {
    if (contentid.val().trim() == "" || contentid.val().trim() == null) {
      contentid.focus();
      $("#" + alertarea).html(
        "<i class='fa fa-info-circle' aria-hidden='true'></i> " +
          fieldname +
          " is Mandatory"
      );
      $("#" + alertarea).addClass("alertMsg");
      return 0;
    } else if (!alphaExp.test(contentid.val())) {
      $("#" + alertarea).html(
        "<i class='fa fa-info-circle' aria-hidden='true'></i>  Enter valid name"
      );
      $("#" + alertarea).addClass("alertMsg");
      return 0;
    } else if (count > 4) {
      contentid.focus();
      $("#" + alertarea).html(
        "<i class='fa fa-info-circle' aria-hidden='true'></i> Only four space allowed"
      );
      $("#" + alertarea).addClass("alertMsg");
      return 0;
    } else {
      $("#" + alertarea).html("");
      return true;
    }
  }
}

function validatecompanyname_style(value, alertarea, fieldname) {
  // function to validate for text box
  var alertarea = alertarea;
  var contentid = $("#" + value);

  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html(
      "<i class='fa fa-info-circle' aria-hidden='true'></i> " +
        fieldname +
        " is Mandatory"
    );
    $("#" + alertarea).addClass("alertMsg");
    return 0;
  } else {
    var name = contentid.val();
    var regex = /^[a-zA-Z0-9&-@.,() ]*$/;
    if (regex.test(name)) {
      $("#" + alertarea).html("");
    } else {
      contentid.focus();
      $("#" + alertarea).html(
        "<i class='fa fa-info-circle' aria-hidden='true'></i>  Enter valid Company Name"
      );
      $("#" + alertarea).addClass("alertMsg");
      return 0;
    }
  }
}

function validateuniversity_style(value, alertarea, fieldname) {
  // function to validate for text box
  var alertarea = alertarea;
  var contentid = $("#" + value);

  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html(
      "<i class='fa fa-info-circle' aria-hidden='true'></i> " +
        fieldname +
        " is Mandatory"
    );
    $("#" + alertarea).addClass("alertMsg");
    return 0;
  } else {
    var name = contentid.val();
    var regex = /^[a-zA-Z0-9&-@.,() ]*$/;
    if (regex.test(name)) {
      $("#" + alertarea).html("");
    } else {
      contentid.focus();
      $("#" + alertarea).html(
        "<i class='fa fa-info-circle' aria-hidden='true'></i>  Enter valid University Name"
      );
      $("#" + alertarea).addClass("alertMsg");
      return 0;
    }
  }
}

function validatecompanyname_style(value, alertarea, fieldname) {
  // function to validate for text box
  var alertarea = alertarea;
  var contentid = $("#" + value);

  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html(
      "<i class='fa fa-info-circle' aria-hidden='true'></i> " +
        fieldname +
        " is Mandatory"
    );
    $("#" + alertarea).addClass("alertMsg");
    return 0;
  } else {
    var name = contentid.val();
    var regex = /^[a-zA-Z0-9&-@.,() ]*$/;
    if (regex.test(name)) {
      $("#" + alertarea).html("");
    } else {
      contentid.focus();
      $("#" + alertarea).html(
        "<i class='fa fa-info-circle' aria-hidden='true'></i>  Enter valid Company Name"
      );
      $("#" + alertarea).addClass("alertMsg");
      return 0;
    }
  }
}

function validatecompanyname_nostyle(value, alertarea) {
  // function to validate for text box
  var alertarea = alertarea;
  var contentid = $("#" + value);

  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html("Required field");
    $("#" + alertarea).addClass("alertMsg");
    return 0;
  } else {
    var name = contentid.val();
    var regex = /^[a-zA-Z0-9&-@.,() ]*$/;
    if (regex.test(name)) {
      $("#" + alertarea).html("");
    } else {
      contentid.focus();
      $("#" + alertarea).html("Enter valid Company Name");
      $("#" + alertarea).addClass("alertMsg");
      return 0;
    }
  }
}

function validateslugname_style(value, alertarea, fieldname) {
  // function to validate for text box
  var alertarea = alertarea;
  var contentid = $("#" + value);

  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html(
      "<i class='fa fa-info-circle' aria-hidden='true'></i> " +
        fieldname +
        " is Mandatory"
    );
    $("#" + alertarea).addClass("alertMsg");
    return 0;
  } else {
    var name = contentid.val();
    var regex = /^[a-zA-Z0-9_]*$/;
    if (regex.test(name)) {
      $("#" + alertarea).html("");
    } else {
      contentid.focus();
      $("#" + alertarea).html(
        "<i class='fa fa-info-circle' aria-hidden='true'></i>  Enter valid Slug Name"
      );
      $("#" + alertarea).addClass("alertMsg");
      return 0;
    }
  }
}
function validatecompanyname_style1(value, alertarea, fieldname) {
  // function to validate for text box
  var alertarea = alertarea;
  var contentid = $("#" + value);

  var name = contentid.val();
  var regex = /^[a-zA-Z0-9&-@.,() ]*$/;
  if (regex.test(name)) {
    $("#" + alertarea).html("");
  } else {
    contentid.focus();
    $("#" + alertarea).html(
      "<i class='fa fa-info-circle' aria-hidden='true'></i>  Enter valid Company Name"
    );
    $("#" + alertarea).addClass("alertMsg");
    return 0;
  }
}

function validatepwdparam_alfa_numeric(value, alertarea) {
  var alertarea = alertarea;
  var contentid = $("#" + value);
  var passpattern = /^((?=.*\d)(?=.*[a-z]).{8,20})$/;
  var alertarea = alertarea;
  var contentid = $("#" + value);
  var contenttxt = contentid.val();

  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    //   $("#" + alertarea).html("Required field");
    $("#" + alertarea).html("Password is Mandatory");
    $("#" + alertarea).addClass("alertMsg");
    return 0;
  } else if (!passpattern.test(contentid.val()) || contenttxt.length < 8) {
    //   $("#" + alertarea).html(" Password Must Contain: - Minimum 8 characters to 12 characters At least one uppercase letter, one lowercase letter, one number and one special character.<br/>");
    //$("#" + alertarea).html("Password Must Contain:<br/>Minimum 6 characters<br/>At least one uppercase letter<br/>At least one lowercase letter<br/>At least one number<br/>At least one special character.<br/>");
    //   $("#"+alertarea).html("Your password should contain 8-12 characters having alphanumerics as mandatory.");
    $("#" + alertarea).html(
      "Your password should be a combination of characters and numbers with the given size(8-12 characters)"
    );

    $("#" + alertarea).addClass("alertMsg");
    contentid.focus();
    return 0;
  } else {
    $("#" + alertarea).html("");
    return true;
  }
}

function validatetext_count_style(value, alertarea, word_count, fieldname) {
  // function to validate for text box
  var alertarea = alertarea;
  var contentid = $("#" + value);
  var len = contentid.val().length;
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html(
      "<i class='fa fa-info-circle' aria-hidden='true'></i> " +
        fieldname +
        " is Mandatory"
    );
    $("#" + alertarea).addClass("alertMsg");
    return 0;
  } else {
    $("#" + alertarea).html("");
  }
  if (len > word_count) {
    $("#" + alertarea).html(
      "Maximum Length Should Be " + word_count + " Characters"
    );
    $("#" + alertarea).addClass("alertMsg");
    // console.log($("#" + alertarea).html('max length '+maxlen+' characters only!'));
    return 0;
  } else {
    $("#" + alertarea).html("");
  }
}

function validatetext_spcl_char_style(value, alertarea, fieldname) {
  // function to validate for text box with Style
  // alert(value);
  var alertarea = alertarea;
  var contentid = $("#" + value);

  var txt = contentid.val();
  //  alert(txt);
  var len = txt.trim().length;
  if (len < 1) {
    contentid.focus();
    $("#" + alertarea).html(
      "<i class='fa fa-info-circle' aria-hidden='true'></i> " +
        fieldname +
        " is Mandatory"
    );
    $("#" + alertarea).addClass("alertMsg");
    return 0;
  } else {
    if (contentid.val().trim() == "" || contentid.val().trim() == null) {
      contentid.focus();
      $("#" + alertarea).html(
        "<i class='fa fa-info-circle' aria-hidden='true'></i> " +
          fieldname +
          " is Mandatory"
      );
      $("#" + alertarea).addClass("alertMsg");
      return 0;
    } else {
      //special characters
      var format = /[!#$%^*£+¬_+\=\[\]{};:"\\|<>\?]+/; //!@#$%^&*£+¬_+\=\[\]{};':"\\|<>\/?
      //check match with input value
      if (format.test(txt)) {
        $("#" + alertarea).html(
          "<i class='fa fa-info-circle' aria-hidden='true'></i>  special characters not allowed"
        );
        $("#" + alertarea).addClass("alertMsg");
        return 0;
      } else {
        var format_one = /[0-9]+/;
        //check match with input value
        if (format_one.test(txt)) {
          $("#" + alertarea).html(
            "<i class='fa fa-info-circle' aria-hidden='true'></i>   Numeric value not allowed"
          );
          $("#" + alertarea).addClass("alertMsg");
          return false;
        } else {
          $("#" + alertarea).html("");
          return true;
        }
      }
    }
  }
}

function validatetext_all_spcl_char_style(value, alertarea, fieldname) {
  // function to validate for text box with Style
  // alert(value);
  var alertarea = alertarea;
  var contentid = $("#" + value);

  var txt = contentid.val();
  //  alert(txt);
  var len = txt.trim().length;
  if (len < 1) {
    contentid.focus();
    $("#" + alertarea).html(
      "<i class='fa fa-info-circle' aria-hidden='true'></i> " +
        fieldname +
        " is Mandatory"
    );
    $("#" + alertarea).addClass("alertMsg");
    return 0;
  } else {
    if (contentid.val().trim() == "" || contentid.val().trim() == null) {
      contentid.focus();
      $("#" + alertarea).html(
        "<i class='fa fa-info-circle' aria-hidden='true'></i> " +
          fieldname +
          " is Mandatory"
      );
      $("#" + alertarea).addClass("alertMsg");
      return 0;
    } else {
      //special characters
      var format = /[!@#$%^&*£+¬_+\=\[\]{};':"\\|<>\/?]+/; //!@#$%^&*£+¬_+\=\[\]{};':"\\|<>\/?
      //check match with input value
      if (format.test(txt)) {
        $("#" + alertarea).html(
          "<i class='fa fa-info-circle' aria-hidden='true'></i>  special characters not allowed"
        );
        $("#" + alertarea).addClass("alertMsg");
        return 0;
      } else {
        $("#" + alertarea).html("");
        return true;
      }
    }
  }
}

function validatetext_all_spcl_char_style_decimal(value, alertarea, fieldname) {
  // function to validate for text box with Style
  // alert(value);
  var alertarea = alertarea;
  var contentid = $("#" + value);

  var txt = contentid.val();
  //  alert(txt);
  var len = txt.trim().length;
  if (len < 1) {
    contentid.focus();
    $("#" + alertarea).html(
      "<i class='fa fa-info-circle' aria-hidden='true'></i> " +
        fieldname +
        " is Mandatory"
    );
    $("#" + alertarea).addClass("alertMsg");
    return 0;
  } else {
    if (contentid.val().trim() == "" || contentid.val().trim() == null) {
      contentid.focus();
      $("#" + alertarea).html(
        "<i class='fa fa-info-circle' aria-hidden='true'></i> " +
          fieldname +
          " is Mandatory"
      );
      $("#" + alertarea).addClass("alertMsg");
      return 0;
    } else {
      //special characters
      var format = /[!@#$%^&*£+¬_+\=\[\]{};'.:"\\|<>\/?]+/; //!@#$%^&*£+¬_+\=\[\]{};':"\\|<>\/?
      //check match with input value
      if (format.test(txt)) {
        $("#" + alertarea).html(
          "<i class='fa fa-info-circle' aria-hidden='true'></i>  special characters not allowed"
        );
        $("#" + alertarea).addClass("alertMsg");
        return 0;
      } else {
        $("#" + alertarea).html("");
        return true;
      }
    }
  }
}

function validatextname_profile_style(value, alertarea, fieldname) {
  // function to validate for text box accept only slash(\)
  var alphaExp = /^[a-zA-Z./() ]+$/;
  var alertarea = alertarea;
  var contentid = $("#" + value);

  var contentid1 = contentid.val();
  var count = 0;
  if (contentid1.length > 0) {
    for (var i = 0; i < contentid1.length; i++) {
      if (contentid1.charAt(i) == " ") {
        count++;
      }
    }
  }

  var txt = contentid.val();
  var len = txt.trim().length;
  if (len < 1) {
    contentid.focus();
    $("#" + alertarea).html(
      "<i class='fa fa-info-circle' aria-hidden='true'></i> " +
        fieldname +
        " is Mandatory"
    );
    $("#" + alertarea).addClass("alertMsg");
    return 0;
  } else {
    if (contentid.val().trim() == "" || contentid.val().trim() == null) {
      contentid.focus();
      $("#" + alertarea).html(
        "<i class='fa fa-info-circle' aria-hidden='true'></i> " +
          fieldname +
          " is Mandatory"
      );
      $("#" + alertarea).addClass("alertMsg");
      return 0;
    } else if (!alphaExp.test(contentid.val())) {
      $("#" + alertarea).html(
        "<i class='fa fa-info-circle' aria-hidden='true'></i>  Enter valid name"
      );
      $("#" + alertarea).addClass("alertMsg");
      return 0;
    } else if (count > 4) {
      contentid.focus();
      $("#" + alertarea).html(
        "<i class='fa fa-info-circle' aria-hidden='true'></i> Only four space allowed"
      );
      $("#" + alertarea).addClass("alertMsg");
      return 0;
    } else {
      $("#" + alertarea).html("");
      return true;
    }
  }
}

function validate_description_special_not_required(field_id, alertarea) {
  var field_id = $("#" + field_id).val();
  //var format = /[0-9]+/;
  var format_sp = /[!#$%^*£+¬_+\=\[\]{};\\|<>\?]+/;

  if (format_sp.test(field_id)) {
    $("#" + alertarea).addClass("alertMsg");
    $("#" + alertarea).html("special characters not allowed");
    $("#" + alertarea).css("margin-top", "0px");

    return false;
  } else {
    $("#" + alertarea).html("");
    return true;
  }
}

function validate_fileupload_style(fileName, alertarea, fieldname) {
  var contentid = document.getElementById(fileName);
  var forext = contentid.value;
  var ext = forext.substring(forext.lastIndexOf(".") + 1);
  if (contentid.value == "" || contentid.value == null) {
    contentid.focus();
    $("#" + alertarea).html(
      "<i class='fa fa-info-circle' aria-hidden='true'></i> " +
        fieldname +
        " is Mandatory"
    );
    $("#" + alertarea).addClass("alertMsg");
    return 0;
  } else {
    $("#" + alertarea).html(""); // ext == ".doc" || ext == ".pdf" || ext == ".rtf" || ext == ".tex" || ext == ".txt" || ext == "wpd" || ext == ".xls"
    if (
      ext == "jpg" ||
      ext == "png" ||
      ext == "jpeg" ||
      ext == "JPG" ||
      ext == "PNG" ||
      ext == "JPEG"
    ) {
      var size = contentid.files[0].size;
      // alert(size);
      if (size < 5000000) {
        return true; // valid file extension
      } else {
        $("#" + alertarea).html(
          "<i class='fa fa-info-circle' aria-hidden='true'></i> Please upload image less than 5 MB"
        );
        $("#" + alertarea).addClass("alertMsg");
        return false;
      }
    } else {
      $("#" + alertarea).html(
        "<i class='fa fa-info-circle' aria-hidden='true'></i> Please Upload .jpg, .png, .jpeg file formats only"
      );
      $("#" + alertarea).addClass("alertMsg");
      return false;
    }
  }
}

function validate_fileupload_video_style(fileName, alertarea, fieldname) {
  var contentid = document.getElementById(fileName);
  var forext = contentid.value;
  var ext = forext.substring(forext.lastIndexOf(".") + 1);
  if (contentid.value == "" || contentid.value == null) {
    contentid.focus();
    $("#" + alertarea).html(
      "<i class='fa fa-info-circle' aria-hidden='true'></i> " +
        fieldname +
        " is Mandatory"
    );
    $("#" + alertarea).addClass("alertMsg");
    return 0;
  } else {
    $("#" + alertarea).html(""); // ext == ".doc" || ext == ".pdf" || ext == ".rtf" || ext == ".tex" || ext == ".txt" || ext == "wpd" || ext == ".xls"
    if (ext == "MP4" || ext == "mp4") {
      var size = contentid.files[0].size;
      // alert(size);
      if (size < 5000000) {
        return true; // valid file extension
      } else {
        $("#" + alertarea).html(
          "<i class='fa fa-info-circle' aria-hidden='true'></i> Please upload image less than 5 MB"
        );
        $("#" + alertarea).addClass("alertMsg");
        return false;
      }
    } else {
      $("#" + alertarea).html(
        "<i class='fa fa-info-circle' aria-hidden='true'></i> Please Upload .mp4 file formats only"
      );
      $("#" + alertarea).addClass("alertMsg");
      return false;
    }
  }
}

function validate_fileupload_video_not_req_style(
  fileName,
  alertarea,
  fieldname
) {
  var contentid = document.getElementById(fileName);
  var forext = contentid.value;
  var ext = forext.substring(forext.lastIndexOf(".") + 1);
  if (contentid.value == "" || contentid.value == null) {
    // contentid.focus();
    // $("#" + alertarea).html("<i class='fa fa-info-circle' aria-hidden='true'></i> " + fieldname + " is Mandatory");
    // $("#" + alertarea).addClass('alertMsg');
    // return 0;
  } else {
    $("#" + alertarea).html(""); // ext == ".doc" || ext == ".pdf" || ext == ".rtf" || ext == ".tex" || ext == ".txt" || ext == "wpd" || ext == ".xls"
    if (ext == "MP4" || ext == "mp4") {
      var size = contentid.files[0].size;
      // alert(size);
      if (size < 5000000) {
        return true; // valid file extension
      } else {
        $("#" + alertarea).html(
          "<i class='fa fa-info-circle' aria-hidden='true'></i> Please upload image less than 5 MB"
        );
        $("#" + alertarea).addClass("alertMsg");
        return false;
      }
    } else {
      $("#" + alertarea).html(
        "<i class='fa fa-info-circle' aria-hidden='true'></i> Please Upload .mp4 file formats only"
      );
      $("#" + alertarea).addClass("alertMsg");
      return false;
    }
  }
}

function validateurl2_style(value, alertarea, fieldname) {
  var alertarea = alertarea;
  var contentid = $("#" + value);
  var content = contentid.val();
  if (contentid.val().trim() == "" || contentid.val().trim() == null) {
    contentid.focus();
    $("#" + alertarea).html(
      "<i class='fa fa-info-circle' aria-hidden='true'></i> " +
        fieldname +
        " is Mandatory"
    );
    $("#" + alertarea).addClass("alertMsg");
    return false;
  } else {
    $("#" + alertarea).html("");
    var p =
      /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    if (content.match(p)) {
      return true; // valid file extension
    } else {
      $("#" + alertarea).html("Please enter valid YouTube URL");
      return false;
    }
  }
}

function radiobutton_validation(value, alertarea) {
  // function to validate for text box
  var alertarea = alertarea;

  var radioid1 = document.getElementsByName(value);

  // var radioid2 = document.getElementsById(value2);

  if (radioid1[0].checked == false && radioid1[1].checked == false) {
    $("#" + alertarea).html("Required field");
    return 0;
  } else {
    $("#" + alertarea).html("");
  }
}

/*
Login Validation
*/

$(document).ready(function () {
  $("#name").keyup(function () {
    return validatextname_only("name", "name_alert");
  });

  $("#email").keyup(function () {
    return validemailid("email", "email_alert");
  });

  $("#mobile").keyup(function () {
    return validmobile("mobile", "mobile_alert");
  });

  $("#dob").keyup(function () {
    return validatetext("dob", "dob_alert");
  });

  $("#state").change(function () {
    return validatetext("state", "state_alert");
  });

  $("#city").change(function () {
    return validatetext("city", "city_alert");
  });

  $("#gender").change(function () {
    return radiobutton_validation("gender", "gender_alert");
  });

  $("#password").keyup(function () {
    return validatepassword("password", "password_alert");
  });

  $("#confirm_password").keyup(function () {
    return validatepassword("confirm_password", "confirm_password_alert");
  });

  $("#subject").keyup(function () {
    return validatetext("subject", "subject_alert");
  });

  $("#message").keyup(function () {
    return validatetext("message", "message_alert");
  });

  $("#image").keyup(function () {
    return validate_fileuploadimage("image", "file_alert");
  });

  $("#add_button").keyup(function () {
    var image = validate_fileuploadimage("image", "file_alert");
    var message = validatetext("message", "message_alert");
    var subject = validatetext("subject", "subject_alert");
    var confirm_password = validatepassword(
      "confirm_password",
      "confirm_password_alert"
    );
    var password = validatepassword("password", "password_alert");
    var option = getElementsByName("gender");

    if (!(option[0].checked || option[1].checked)) {
      $("#gender_alert").html("Please Select Your Gender");
      var gender = 0;
    } else {
      $("#gender_alert").html("");
      var gender = 1;
    }

    var city = validatetext("city", "city_alert");
    var state = validatetext("state", "state_alert");
    var dob = validatetext("dob", "dob_alert");
    var mobile = validmobile("mobile", "mobile_alert");
    var email = validemailid("email", "email_alert");
    var name = validatextname_only("name", "name_alert");

    if (
      name == 0 ||
      email == 0 ||
      mobile == 0 ||
      dob == 0 ||
      state == 0 ||
      city == 0 ||
      gender == 0 ||
      password == 0 ||
      confirm_password == 0 ||
      subject == 0 ||
      message == 0 ||
      image == 0
    ) {
      return false;
    } else {
      document.getElementById("myForm_signup").submit();
    }
  });
});
