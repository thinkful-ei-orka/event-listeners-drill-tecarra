'use strict'

function fizzBuzz() {
    console.log('working');
    $('#number-chooser').submit(function(event) {
        event.preventDefault()
        $('.js-results').empty();
        const workingNum = $(event.currentTarget).find('#number-choice').val();
        console.log(workingNum)
    const fizz = '<div class="fizz-buzz-item fizz"><span>\'fizz\'</span></div>'
    const buzz = '<div class="fizz-buzz-item buzz"><span>\'buzz\'</span></div>'
    const fizzy = '<div class="fizz-buzz-item fizzbuzz"><span>\'fizzbuzz\'</span>'
    const none = '<div class="fizz-buzz-item"><span></span></div>'
    
        for (let i = 1; i <= workingNum; i++){
            $('js.results').append(none)
            if (i % 3 !== 0 && i % 5 !== 0) {
                $(".js-results").append(`<div class="fizz-buzz-item"><span>${i}</span></div>`);
            }
            else if (i % 3 === 0 && i % 5 === 0) {
                $('.js-results').append(fizzy)
            }
            else if (i % 3 === 0) {
                $('.js-results').append(fizz)
            }
            else if (i % 5 === 0) {
                $('.js-results').append(buzz)
            }
        }
    })
    }
    
    
    $(fizzBuzz)
