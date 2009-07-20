
// Set List Title
function setListTitle(title) {
	$("#header h1").html(title);
	window.location = "#" + title
	return;
}

// Clear to create a new list
function clearToCreateNewList(){
	window.location = "#"
	$("#header h1").html("Create your new list");
	$("#create").show();
	$("#list").hide();
	$("#items ul").html("");
	$("#list_name").focus();	
}

function getListTitle(){
	$("#header h1").html();
}

function getHash(){
	location.hash
}

$(window).load(function () {	
	
	$("#create_a_new").click(function(){
		clearToCreateNewList();
	})
	
	$("#list_name").focus();		

	$("#items ul").sortable({ handle: '.content' });

	$("#create").submit(function(){
		if ($("#list_name").val() == "") {return false;}
		setListTitle($("#list_name").val()) ;			
		$("#create").hide();
		$("#list").show();
		$("#item").focus();	
		// alert("You Are editing" + location.hash)
		return false;
	});	

	$("#add").submit(function(){
		item = $("#item").val()
		if (item != "") {
			$("#items ul").append("<li><span class=\"check\">[&nbsp;&nbsp;&nbsp;&nbsp;]</span>&nbsp;&nbsp;<span class=\"content\">" + item + "</span>&nbsp;&nbsp;<span class=\"destroy\" >x</span></li>")
			$("#items .destroy").click(function(e){
				$(this).parent().remove();
			})			
			$("#items .check").click(function(e){
				$(this).html("[ V ]")
				$(this).addClass("done")
			})		
			$("#item").val("")
			$("#item").focus();	
		} else {
			alert ("Cannot insert a blank value!")
		}
		return false;
	});
});