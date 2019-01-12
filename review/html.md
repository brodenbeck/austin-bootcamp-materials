# HTML Review

## Attributes
1. Transform the text below into a link that goes to "https://www.austinkandt.com".
```html
<!DOCTYPE html>
<html>
  <body>
    This is a link
  </body>
</html>
```

2. Specify the alternative text for the image below.
```html
<!DOCTYPE html>
<html>
  <body>
    <img src="avatar.png" />
  </body>
</html>
```

## Headings
1. Add a heading to the paragraph below with the text "Tokyo"
```html
<!DOCTYPE html>
<html>
  <body>
    <p>Tokyo, officially Tokyo Metropolis, one of the 47 prefectures of Japan, has served as the Japanese capital since 1869.</p>
  </body>
</html>
```

2. Add six headings to the document with the text "Hello, world". Start with the most important heading and end with the least important heading.
```html
<!DOCTYPE html>
<html>
  <body>
  </body>
</html>
```

3. Mark up the following
```html
<!DOCTYPE html>
<html>
<body>
    Universal Studios Presents

    Jurassic Park

    About

    On the Island of Isla Nublar, a new park has been built: Jurassic Park is a theme park of cloned dinosaurs!!
  </body>
</html>
```

## Paragraphs
1. Add a paragraph to the document with the text "Hello, world".
```html
<!DOCTYPE html>
<html>
  <body>
  </body>
</html>
```

2. Clean up this document with the proper closing tags.
```html
<!DOCTYPE html>
<html>
  <body>
    <h1>This is a Heading

    <p>This is a paragraph.
    <p>This is a paragraph.
    <p>This is a paragraph.
  </body>
</html>
```

## Formatting
1. Add extra importance to the word "most" in the paragraph below.
```html
<!DOCTYPE html>
<html>
  <body>
    <h1>Tokyo</h1>
    <p>As of 2014, the Greater Tokyo Area ranked as the most populous metropolitan area in the world.</p>
  </body>
</html>
```

2. Emphasize the word "Kantō" in the text below.
```html
<!DOCTYPE html>
<html>
  <body>
    <h1>Tokyo</h1>
    <p>Tokyo forms part of the Kantō region on the southeastern side of Japan's main island, Honshu, and includes the Izu Islands and Ogasawara Islands.</p>
  </body>
</html>
```

3. Highlight the word "Edo" below.
```html
<!DOCTYPE html>
<html>
  <body>
    <h1>Tokyo</h1>
    <p>Tokyo was formerly named Edo when Shōgun Tokugawa Ieyasu made the city as his headquarters in 1603.</p>
  </body>
</html>
```

4. Apply subscript formatting to the number "2" in the text below.
```html
<!DOCTYPE html>
<html>
  <body>
    <p>H2O is the scientific term for water.</p>
  </body>
</html>
```

5. Add a line through the number "1869" in the text below.
```html
<!DOCTYPE html>
<html>
  <body>
    <h1>Tokyo</h1>
    <p>Tokyo Metropolis formed in 1869 1943 from the merger of the former Tokyo Prefecture and the city of Tokyo. </p>
  </body>
</html>
```

## Quotations
1. The text below should be a quoted section. Add the proper HTML element to it, and specify that it is quoted from the following URL: `https://en.wikipedia.org/wiki/Tokyo`
```html
<html>
  <body>
    In November 2007, Michelin released their first guide for fine dining in Tokyo, awarding 191 stars in total, or about twice as many as Tokyo's nearest competitor, Paris.
  </body>
</html>
```

2. The letters "IFC" in the text below are an abbreviation of "International Financial Center." Use an HTML element to provide the specified abbreviation of "IFC."
```html
<html>
  <body>
    <p>Tokyo emerged as a leading IFC in the 1960s and has been described as one of the three "command centers" for the world economy, along with New York City and London.</p>
  </body>
</html>
```

## Comments
1. Remove the comment tags around the `<p>` element.
```html
<html>
  <body>
    <!-- <p>This is a paragraph.</p> -->
  </body>
</html>
```

2. Add comment tags around the "Do not display this text in the browser" text.
```html
<!DOCTYPE html>
<html>
  <body>
    <p>This is a paragraph.</p>
    Do not display this text in the browser
    <p>This is another paragraph</p>
  </body>
</html>
```

## Links
1. Change the link below to be a local, or relative, link.
```html
<!DOCTYPE html>
<html>
  <body>
    <a href="https://austinkandt.com/logos">Logo Design</a>
  </body>
</html>
```

2. Change the link below to open in a new window.
```html
<!DOCTYPE html>
<html>
  <body>
    <a href="https://github.com/akandt">GitHub Profile</a>
  </body>
</html>
```

3. Add a link to the image below, and make it go to `https://github.com/akandt` in a new window when you click on it.
```html
<!DOCTYPE html>
<html>
  <body>
    <img src="images/icon__github.svg" />
  </body>
</html>
```

## Lists
1. Add a list item with the text "Tea" to the unordered list.
```html
<!DOCTYPE html>
<html>
  <body>
    <h1>Shopping List</h1>
    <ul>
    </ul>
  </body>
</html>
```

2. Change the list below to an ordered list.
```html
<!DOCTYPE html>
<html>
  <body>
    <h1>Shopping List</h1>
    <ul>
      <li>Tea</li>
      <li>Milk</li>
      <li>Flour</li>
    </ul>
  </body>
</html>
```

## Classes
1. Add the "navigation--main" class to the `<nav>` element.
```html
<!DOCTYPE html>
<html>
  <body>
    <nav>
      <ul>
        <li>Brand Identity</li>
        <li>Illustrations</li>
        <li>Logo Design</li>
        <li>Contact</li>
      </ul>
    </nav>
  </body>
</html>
```

2. Add the "navigation__item" and "u-text-center" classes to each list item.
```html
<!DOCTYPE html>
<html>
  <body>
    <nav>
      <ul>
        <li>Brand Identity</li>
        <li>Illustrations</li>
        <li>Logo Design</li>
        <li>Contact</li>
      </ul>
    </nav>
  </body>
</html>
```

## HTML5
1. Modify the below page to utilize HTML5 semantic markup.
```html
<!DOCTYPE html>
<html>
  <body>
    <h1>My blog about my life</h1>
    <div>
      <h2>Menu</h2>
      <ul>
        <li>
          <a href="/today">Today</a>
        </li>
        <li>
          <a href="/yesterday">Yesterday</a>
        </li>
        <li>
          <a href="/last-week">Last week</a>
        </li>
        <li>
          <a href="/archives">Archives</a>
        </li>
      </ul>
    </div>
    <div>
      <div>
        <h2>Meeting with supervisor</h2>
        <p>14 Dec 2018</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt id dolorem excepturi, sed deleniti asperiores officiis. Placeat delectus similique labore reiciendis, maxime quas eius consectetur reprehenderit tempora molestias vero!</p>
      </div>
    </div>
    <div>
      <h2>New car</h2>
      <p>12 Dec 2018</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt id dolorem excepturi, sed deleniti asperiores officiis. Placeat delectus similique labore reiciendis, maxime quas eius consectetur reprehenderit tempora molestias vero!</p>
    </div>
    <div>
      <h2>Visit my parents</h2>
      <p>10 Dec 2018</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt id dolorem excepturi, sed deleniti asperiores officiis. Placeat delectus similique labore reiciendis, maxime quas eius consectetur reprehenderit tempora molestias vero!</p>
    </div>
    <div>
      <h2>Meeting with supervisor</h2>
      <p>14 Dec 2018</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt id dolorem excepturi, sed deleniti asperiores officiis. Placeat delectus similique labore reiciendis, maxime quas eius consectetur reprehenderit tempora molestias vero!</p>
    </div>
    <div>
      <p>&copy; 2018 House of Kandt, LLC</p>
    </div>
  </body>
</html>
```

_Some exercises taken and modified from [w3schools](https://www.w3schools.com/html/exercise.asp)._
