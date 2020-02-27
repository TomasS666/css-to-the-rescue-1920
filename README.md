<Maybe a table of contents here? 📚>

### Demo : https://tomass666.github.io/css-to-the-rescue-1920/.

## <poster image will come here soon>

# Description
For the project CSS to the rescue I want to explore the most inovative, sometimes rediculous selectors and CSS features. With the selector-first approach I'm gonna try to make something I would have never considered a possibility using pure CSS only.

This might be a bit messy, but the main goal is to learn as much as possible about CSS.

## How to install

## Contexts
Print-stylesheet
Prefers-reduced-motion

## Challenges / restrictions
Make it responsive without mediaqueries.
Design responding to language.

## Concept
My concept resolves around a bar. A simple nearby local pub / bar. But this time the user plays the bartender or friend that drunks you up until the point of no return. With a selection of drinks you can alternate the alcohol premilage.

## Expirements
### Selectors
```css :nth-of-type()``` example: ```:nth-of-type(odd, even, n)```
```:lang()```
```:not()```
```[attribute selector]```
```:checked```
```:root```
```::selection```


### Pseudo selectors
```::before```
```::after```

### States
```:hover```
```:lang```

### @media
```print```
~portrait, landscape~
```prefers-reduced-motion: reduce```

### Properties
```rotate3d()```
```perspective()```
```page-break-after```
```cursor```
```direction```
```writing-mode```
```grid-auto-columns```
```filter```
```animation```
```content```
```transform-origin```
```page-break-after```
```-webkit-print-color-adjust:```
```text-shadow```
```animation-direction```

## Interesting "values"
```perspective()```
```vertical-rl```
```var(--black-mode, var(--brown)```
```forwards```


## Expirements that didn't work out (but were usefull in the learning proces)
### CSS Counters
CSS counters. I tried to hack them and use them as actual counters. The next idea was to try to save them and use them elsewhere as a state if that was somehow possible.
I managed to do that in the following way:

First I'd declare a counter on the ::after pseudo selector

```css
div article::after{
  content: "Alc. "counter(alcohol-level)"%"; 
  ......
```

Then I wanted to increment the counter. Manually, I tried almost every way. But I spend too much time on it in the end.
I tried to fix 

### attr() function

## Things that really worked out
### Dark-Light 
### language direction
Chinese was pretty hard, because that doesn't only involve

## What did I learn in a nuttshell?
I learned the broader scope of CSS by learning that CSS can actually react to the users OS settings and browser settings.
Also that the print stylesheet is quite a complex and standalone thing. It didn't quite do what I initially expected.

I learned that custom properties can be assigned everywhere and are not limited to


## Features


## Wishlist
* Make splash screen with zero state and steps with :target? Or checkboxes to hide them after the check (button { next })

## References

## License










<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- Add a nice image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- What external data source is featured in your project and what are its properties 🌠 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->




