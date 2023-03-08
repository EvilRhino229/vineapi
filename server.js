const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000;
const server = app.listen(process.env.PORT || 3000);
const emit = require('events').EventEmitter

const vines =
  [
    "Road work ahead? Aha, I sure hope it does!",
    "It is Wednesday, my dudes! AaaaaaAAAAAAAAAAAAAAA",
    "Yo, Kevin, watch the light, dude! Watch the light! *light shatters*",
    "You're a cute one! Ya like squeaky toys? *sounds of unimaginable violence*",
    "- What are thooooose! </br> - They are my crocs.",
    "Hurricane Katrina? More like hurricane tortilla!",
    "I thought you were American?",
    "Two bros, chillin in a hot tub, five feet apart 'cause they're not gay!",
    "- I spilled lipstick in your Valentino bag. </br> - Walawa- lipstick? In my Valentino white bag?",
    "Everybody get to Del Taco, they've got... Freesha- Fre sh a voca do",
    "Hey, my name is Trey and I have a basketball game tomorrow",
    "Look at all those chickens!",
    "- Yo, what's nine plus ten?<br/>- Twenty-one?",
    "Adam!",
    "Hi, welcome to Chili's!",
    "- Who was your favorite Uber driver? <br/>- Um, I never went to Oovoo Javer.",
    "I smell like beef. I smell like beef. I smell like beef. I smell like beeeeef!",
    "You know what, I'm about to say it. Nobody cares that you broke your elbow."
  ]

  app.use(express())
  
  app.get('/', (req, res) => {
    res.redirect('/Vine')
  })
  
  app.get('/Vine', (req, res) => {
    const randomVine = vines[Math.floor(Math.random() * vines.length)];
    res.send(randomVine)
    console.log(Math.floor(Math.random() * vines.length))
    res.status(200)
  })
  
server
