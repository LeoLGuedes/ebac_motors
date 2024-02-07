$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay: true
    })
    
    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle()
    })

    $(document).on('click', function(e) {

        const elementoSelecionado = $('header')

        if (!elementoSelecionado.is(e.target) && !elementoSelecionado.has(e.target).length) {
            $('nav').slideUp()
        }
    })


    $('#cell').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            name: {
                required: true
            },
            cell: {
                required: true
            },
            email: {
                required: true,
                email: true 
            },
        },
        messages: {
            name: 'Por favor, insira um nome!',

            cell: 'Insira seu número de celular!',

            email: 'Informe seu email'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`existem ${camposIncorretos} incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#veiculo-interesse')

        const nomeCarro = $(this).parent().find('h3').text()

        $('html').animate({
            scrollTop: destino.offset().top
        },1000)

        destino.val(nomeCarro)
    })
})