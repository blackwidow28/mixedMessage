
 const begin = ["You are beautiful ", "You are amazing ", "You are wonderful ", "You are marvellous ", "You are courageous ", "You are wise ", "You are compassionate ", "You are good enough ", "You are magnificent ", "You are a miracle "];

 const begin2 = "just as you are. ";

 const mid1 = ["Please believe that. ", "Please believe this. ", "It's true. ", "Never doubt this. ", "Noone can take that away from you. ", "This perspective is at the heart of Buddhist teachings. ", "Doubting this is slander of the mystic law. ", "Don't let anyone tell you different. ", "Believe it and everything will be OK. ", "This is the only thought you need to have about yourself. "];
 

 const mid2 = "Chant Nam-myoho-renge-kyo morning and evening, and ";

 const end1 = ["all your dreams will come true.", "you'll become happier than you've ever been.", "you will overcome all the obstacles in your life.", "you will solve all of your problems.", "Eventually you will get everything you want.", "all your desires will be fulfilled. ", "the best thing for your happiness will happen.", "you will become indestructibly happy.", "travel along the path that is right for you and become happy.", "it will change your life for the better."];

 const mixedMessage = () => {
    const index = Math.floor(Math.random()*10);
    const indexMid = Math.floor(Math.random()*10);
    const indexEnd = Math.floor(Math.random()*10);
    return begin[index] + begin2 + mid1[indexMid] + mid2 + end1[indexEnd]
 };
 //console.log(mixedMessage())
