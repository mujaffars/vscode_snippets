{
	"printr": {
		"prefix": "ptr",
			"body": [
				"echo '<pre>';",
				"print_r( );",
				"echo '</pre>';",
				"exit;"
			],
				"description": "printr"
	}
}

{
	"printr": {
		"prefix": "ajax",
			"body": [
				"let formData = $('#contactForm').serialize();",
				"$.ajax({",
				"url: base_url + 'ftp',",
				"method: 'POST',",
				"data: formData,",
				"beforeSend: function () {",
				"$('input').removeClass('is-invalid');",
				"},",
				"success: function (resp) {",
				"if (resp.success) {",
				"toastr.success(resp.msg);",
				"clearFtpAddForm();",
				"} else {",
				"toastr.error(resp.msg);",
				"}",

				"}, error: function (xhr, status, error) {",
				"let data = JSON.parse(xhr.responseText);",

				"if ('errors' in data) {",
				"$.each(data.errors, function (key, err) {",
				"let html = '<span class=invalid-feedback error role=alert><strong>' + err + '</strong></span>';",
				"$('#frmAddFtpConnection #' + key + ', #frmAddFtpConnection select[name=' + key + ']').addClass('is-invalid');",
				"$('#frmAddFtpConnection #' + key + ', #frmAddFtpConnection select[name=' + key + ']').parent().append(html);",
				"error = 1;",
				"});",
				"} else {",
				"toastr.error(data.message);",
				"}",
				"}",
				"})"
			],
				"description": "ajax"
	}
}

{
	"printr": {
		"prefix": "cl",
			"body": [
				"console.log()"
			],
				"description": "cl"
	}
}