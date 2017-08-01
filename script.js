$(document).ready(function() {
    $('#contact_form').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            first_name: {
                validators: {
                    stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Por favor, informe o seu nome'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Por favor, informe o seu e-mail'
                    },
                    emailAddress: {
                        message: 'E-mail inválido'
                    }
                }
            },
            subject: {
                validators: {
                    notEmpty: {
                        message: 'Por favor, Informe o assunto da mensagem'
                    }
                }
            },
            comment: {
                validators: {
                    notEmpty: {
                        message: 'Por favor, escreva algo na mensagem'
                    }
                }
            }
        }
    })
    .on('submit', function(e) {
        if(e.preventDefault()){
            $('#submitBtn').attr('data-target', 'a');
        }else{
            $('#submitBtn').attr('data-target', '#myModal');
        }
    });

    $('#resetBtn').on('click', function() {
        $('#contact_form').bootstrapValidator('resetForm');
    });
});
