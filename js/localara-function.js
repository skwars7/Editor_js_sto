function code1_localarra() {
  $('#code1-label').dblclick(function() {
      var c1 = $('#code1-label').text(); 
      $('#code1-label').css('display','none');
      $('#code1-text').val(c1);
      $('#code1-text').css('display','inline');
      $('#code1-text').focus();
  });
  $('#code1-text').blur(function() {
      var c11 = $('#code1-text').val();
      var chkval = " ";
      if (c11 == $('#code2-label').text() || c11 == null || c11 == undefined || c11 == " " || c11 == "" || /\s/.test(c11)) {
        if (c11 == $('#code2-label').text()){
        alert('you cannot write same name for both code');
        }else if(c11 == null || c11 == undefined || c11 == ""){
          alert('it cannot blank');
        }else if (c11 == " ") {
          alert('it cannot be Space');
        }else if (c11 == / / || /\s/.test(c11)) {
          alert("code name cannot have space");
        }
        $('#code1-label').css('display','inline');
        $('#code1-text').css('display','none');
        return false;
      }
      $('#code1-label').text(c11);
      $('#code1-label').css('display','inline');
      $('#code1-text').css('display','none');
  });
}

function code2_localarra() {
  $('#code2-label').dblclick(function() {
      var c2 = $('#code2-label').text(); 
      $('#code2-label').css('display','none');
      $('#code2-text').val(c2);
      $('#code2-text').css('display','inline');
      $('#code2-text').focus();
  });
  $('#code2-text').blur(function() {
      var c21 = $('#code2-text').val();
      if (c21 == $('#code1-label').text() || c21 == null || c21 == undefined || c21 == " " || c21 == "" || /\s/.test(c21)) {
        if (c21 == $('#code1-label').text()){
        alert('you cannot write same name for both code');
        }else if(c21 == null || c21 == undefined || c21 == ""){
          alert('it cannot blank');
        }else if (c21 == " ") {
          alert('it cannot be Space');
        }else if (c21 == / / || /\s/.test(c21)) {
          alert("code name cannot content a space");
        }
        $('#code2-label').css('display','inline');
        $('#code2-text').css('display','none');
        return false;
      } 
      $('#code2-label').text(c21);
      $('#code2-label').css('display','inline');
      $('#code2-text').css('display','none');
  });
}

function calling_body_editor() {
  var qo = $('#question-body').val();
  c11 = $('#code1-label').text();
  c21 = $('#code2-label').text();
  var conf1 = $('#question-code-1').val();
  var r1 = conf1.replace(/</g, "&lt;");
  var r2 = r1.replace(/>/g, "&gt;");
  var code1 = r2; 
  var conf2 = $('#question-code-2').val();
  var r1 = conf2.replace(/</g, "&lt;");
  var r2 = r1.replace(/>/g, "&gt;");
  var code2 = r2;
  var c1 = '<p>'+c11+'</p>' +'<pre><code>'+ code1 +'</code></pre>';
  var c2 = '<p>'+c21+'</p>' +'<pre><code>'+ code2 +'</code></pre>';
  var c1o = qo.replace('<'+c11+'>', c1);
  var c2o = c1o.replace('<'+c21+'>', c2);
  var cfo = c2o.replace(/\n/g, "<br />");
  var cfo1 = cfo.replace(/<<</g, "<pre><code>");
  var cfo2 = cfo1.replace(/>>>/g, "</pre></code>");
  var bchecks = cfo2.replace(/\<\*/g,"<b>");
  var bchecke = bchecks.replace(/\*\*\>/g,"</b>");
  var italys = bchecke.replace(/\/\//g,"<i>");
  var italye = italys.replace(/\\\\/g,"</i>");
  var links = italye.replace(/\[\[/g,"<a>");
  var linke = links.replace(/\]\]/g,"</a>");
  //var linke = links.replace(/\]\]/g,"</a>");

  var frames = linke.replace(/\<iframe\>/g,"");
  var framee = frames.replace(/\<\/iframe\>/g,"");
  var _frames = framee.replace(/\< iframe\>/g,"");
  var _framee = _frames.replace(/\<\/ iframe\>/g,"");
  var frames_ = _framee.replace(/\<iframe \>/g,"");
  var framee_ = frames_.replace(/\<\/iframe \>/g,"");
  var _frames_ = framee_.replace(/\< iframe \>/g,"");
  var _framee_ = _frames_.replace(/\<\/ iframe \>/g,"");
  var fo = _framee_;
  console.log(fo);
  $('#la-output').html(fo);
}

function body_localarra() {
  $('#question-body').keyup(function(){
    calling_body_editor();
  });
  if (v = 'set') {
    calling_body_editor();
  }
}