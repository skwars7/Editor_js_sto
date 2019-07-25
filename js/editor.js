$(document).ready(function() {
  code1_localarra();
  code2_localarra();
  body_localarra();
  $('#question-code-1').keyup(function(){
    body_localarra(v='set');
  });
  $('#question-code-2').keyup(function(){
    body_localarra(v='set');
  });
  $('#boldtrigger').click(function () {
    var a = $('#question-body').get_selection();
    substring = "<*";
    alert(a.text.indexOf(substring) !== -1);
    if (a.text.indexOf(substring) !== -1) {
      var rstr = a.text.replace(/[^a-zA-Z ]/g, "");
      $('#question-body').replace_selection(rstr);
    }else{
      $('#question-body').replace_selection(a=' <* '+a.text+' **> ');
      $('#question-body').focus(a.text);
    }
    body_localarra(v='set');
  });
  $('#italictrigger').click(function () {
    var a = $('#question-body').get_selection();
    substring = "//";
    alert(a.text.indexOf(substring) !== -1);
    if (a.text.indexOf(substring) !== -1) {
      var rstr = a.text.replace(/[^a-zA-Z ]/g, "");
      $('#question-body').replace_selection(rstr);
    }else{
      $('#question-body').replace_selection(a=' // '+a.text+' \\\\ ');
      $('#question-body').focus(a.text);
    }
    body_localarra(v='set');
  });
  $('#codetrigger').click(function () {
    var a = $('#question-body').get_selection();
    substring = "<<<";
    alert(a.text.indexOf(substring) !== -1);
    if (a.text.indexOf(substring) !== -1) {
      var rstr = a.text.replace(/[^a-zA-Z ]/g, "");
      $('#question-body').replace_selection(rstr);
    }else{
      $('#question-body').replace_selection(a=' <<< '+a.text+' >>> ');
    }
    body_localarra(v='set');
  });
  $('#linktrigger').click(function () {
    var a = $('#question-body').get_selection();
    substring = "[[";
    alert(a.text.indexOf(substring) !== -1);
    if (a.text.indexOf(substring) !== -1) {
      var rstr = a.text.replace(/[^a-zA-Z ]/g, "");
      $('#question-body').replace_selection(rstr);
    }else{
      $('#question-body').replace_selection(a=' [[ '+a.text+' ]] ');
    }
    body_localarra(v='set');
  });
  $('#bulletintrigger').click(function () {
    var a = $('#question-body').get_selection();
    substring = "● ";
    alert(a.text.indexOf(substring) !== -1);
    if (a.text.indexOf(substring) !== -1) {
      var rstr = a.text.replace(/[^a-zA-Z ]/g, "");
      $('#question-body').replace_selection(rstr);
    }else{
      $('#question-body').replace_selection(a=' ● '+a.text);
    }
    body_localarra(v='set');
  });

  // $('#tag-text').keypress(function(e){
  //   alert('its work');
  //   if(e.which == 32){
  //     alert('its work');
  //     str = $('#tag-text').val();
  //     String[] splited = str.split("\\s+");
  //   } 
  // });
  $('#bulletintrigger').click(function (e) {
  });
});