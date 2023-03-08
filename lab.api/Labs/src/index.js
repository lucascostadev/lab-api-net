$(function () {

    //handle
    //$("#CPF").change(function () {
    //    var cpf = $(this).val();
    //    alert(cpf);
    //});

});

var mudancaCpf = function (input) {
    var cpf = $(input).val();

    //fetch("https://localhost:44353/ConsultaCpf/?cpf=" + cpf)
    //    .then(response => response.json())
    //    .then(function (response) {

    //        if (response == true) {
    //            $("#submit").prop("disabled", false);
    //        } else {
    //            $("#submit").prop("disabled", true);
    //        }
    //    });


    //$.get("https://localhost:44353/ConsultaCpf/?cpf=" + cpf, function (response) {
    //    console.log(response);
    //});

    $.post("https://localhost:44353/ConsultaCpf", JSON.stringify({
        valor: 500,
        descricao: "teste"
    })).done(function (response) {

    });
};