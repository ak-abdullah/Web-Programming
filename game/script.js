$(function() {
    const gameContainer = $('.container')
    const userResult = $('.user_result img')
    const cpuResult = $('.cpu_result img')
    const result = $('.result')
    const optionImages = $('.option_image')

    optionImages.each((index, image) => {
    $(image).on('click', function(e) {
        $(image).addClass('active')
    $(userResult).attr('src', 'rock.png')
    $(cpuResult).attr('src', 'rock.png')
    $(result).text("Wait....")
    optionImages.each((index2, image2) => {
        index !== index2 && $(image2).removeClass('active')
      })

      $(gameContainer).addClass('start')
      let time = setTimeout(function() {
          
          
        $(gameContainer).removeClass('start')
      let imageSrc = $(e.target).find('img').attr('src');
      userResult.attr('src', imageSrc) 

      let randomNumber = Math.floor(Math.random() * 3)
      let cpuImages = ['rock.png', 'scissors.png', 'paper.png']
      cpuResult.attr('src', cpuImages[randomNumber])
      let cpuValue = ['R', 'S', 'P'][randomNumber]
      let userValue = ['R', 'S', 'P'][index]
      let outcomes = {
        RR: "Draw",
        RP: 'You Lose!!',
        RS: "You Win!!",
        PP: "Draw",
        PR: 'You Win!!',
        PS: 'You Lose!!',
        SS: 'Draw',
        SR: 'You Lose!!',
        SP: 'You Win!!'                    
    }


      let outComeValue = outcomes[userValue + cpuValue]
      console.log(userValue + cpuValue)
      result.text(userValue === cpuValue ? "Math Draw" : `${outComeValue}`);
      }, 2500)
    })
  })
})