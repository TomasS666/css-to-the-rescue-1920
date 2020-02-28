<Maybe a table of contents here? 📚>

### Demo : https://tomass666.github.io/css-to-the-rescue-1920/.

## <poster image will come here soon>

# Description
For the project CSS to the rescue I want to explore the most inovative, sometimes rediculous selectors and CSS features. With the selector-first approach I'm gonna try to make something I would have never considered a possibility using pure CSS only.

This might be a bit messy, but the main goal is to learn as much as possible about CSS.

## Contexts
Print-stylesheet (didn't really work out great, but I tried)
Prefers-reduced-motion
Dark Light mode

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

attr()

## Things that really worked out

### Dark-Light
For the dark and light mode I wanted to make something super efficient. I figured after a while that some people would put all their logic in media-queries again.

### Reduced motion

### language direction
Chinese was pretty hard, because that doesn't only involve writing direction. But also the text orientation and other properties.
It's also quite hard because my whole layout and unstructured HTML for the purpose of experimental CSS was hard to order when the writing direction changed.
Because it throws everything around. I imagined it would only effect text and some elements which could contain text. But no, it wrecks your whole page if you simply change the direction. You'd have to fix a lot more logic to be able to implement this well. In the end I used the ```:not``` selector to basically ignore divs which was using a lot for the displaying of an illustration.

#### :not()
Talking about the ```:not()``` selector, I found out that it wants a more simple selection argument. For instance you can't just say: ```css :not(articles divs)``` to "not" select every articles it's divs. As far as I know, that selection wouldn't mean "ignore the articles wherever their children contain divs" because it simply did not work. And so I've read it's made for more simple selectors on MDN.

## What did I learn in a nuttshell?
I learned the broader scope of CSS by learning that CSS can actually react to the users OS settings and browser settings. I didn't know that. That would mean the browser actually has acces to OS configuration which is pretty sick and something I wouldn't expect.

Also that the print stylesheet is quite a complex and standalone thing. It didn't quite do what I initially expected. First of all, my div illustration creation wasn't even visible within my print preview. I had to fix something for that.

I learned that custom properties can be assigned everywhere and are not limited to assigned within the :root selector. I found out the hard way, the late way. I figured it would be impossible and I think I got the whole custom property thing wrong. I start to get it now.


## Wishlist
* Make splash screen with zero state and steps with :target? Or checkboxes to hide them after the check (button { next })