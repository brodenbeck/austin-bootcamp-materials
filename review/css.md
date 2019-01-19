# CSS Review

## CSS Syntax
1. Change the color of all `<p>` elements to `red`.

2. Change the color of the element with `id="para1"` to `red`.

3. Change the color of all elements with the class "colortext" to `red`.

4. Change the color of all `<p>` and `<h1>` elements to red by grouping the selectors.

## Style Sheets
5. Add an external style sheet to a file in the same directory called `main.css`.
```html
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
  </body>
</html>
```

6. Set the background color for `<h1>` elements to `lightblue`.

7. Set the background image of the page to:
```
data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='72' viewBox='0 0 36 72'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2388803b' fill-opacity='0.4'%3E%3Cpath d='M2 6h12L8 18 2 6zm18 36h12l-6 12-6-12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E
```

8. Set a 4 pixel-wide dotted border to all paragraph elements.

9. Set the border color for all paragraph elements to `red`.

10. Change the three border properties so that they only show the border on the top side.
```css
p {
  border-style: dotted;
  border-width: 4px;
  border-color: red;
}
```

11. In one line of CSS, set the border for all paragraph elements to 10 pixels wide, solid, and `green`.

12. Set the left margin of `<h1>` to 20 pixels.

13. Set all margins for `<h1>` to 25 pixels.

14. Set the top and bottom margins for `<h1>` to 50 pixels and the left and right margins to 25 pixels in one line of CSS.

15. Use the margin property to center align the `<h1>` element.
```css
h1 {
  width: 300px;
}
```

16. Set the top padding of all paragraph elements to 30 pixels.

17. Set all paddings for all paragraphs to 50 pixels.

18. Set the top and bottom paddings for all paragraph elements to 25 pixels and the left and right paddings to 50 pixels in one line of CSS.

19. Set the height of `<h1>` elements to 100 pixels.

20. Set the width of `<h1>` elements to 50%.

21. Set the width of the `<div>` to 200 pixels. Set the padding of the `<div>` to 25 pixels. Set the border of the `<div>` to 25 pixels with a solid `navy` border. Set the margin of the `<div>` to 25 pixels. Make sure the width of the entire box from border to border is accounted for in the 200 pixel width.

22. Set the text color for the page to `red` and the text color for the `<h1>` elements to `blue`.

23. Center align the `<h1>` element.

24. Remove the underline from all links.

25. Style the text in the `<h1>` elements to uppercase letters and the text in the paragraph elements to capitalized letters.

26. Set the font family for the page to "Courier New" and the font family for `<h1>` elements to "Verdana".

27. Show paragraph elements as italic text.

28. Set the font size for the page to 20 pixels and the font size for `<h1>` elements to 3 ems.

29. Show paragraph elements as bold text.

30. Set the color for links to `green`.

31. Set the color for unvisited links to `red` and the color for visited links to `blue`.

32. Remove underlines for visited and unvisited links, and specify underlines for the hover and active link states.

33. Set the list style for unordered lists to `square` and the list style for ordered lists to `upper-roman`.

34. Remove the bullets/markers from the list items.

35. Hide the `<h1>` elements.

36. Display all list items as inline elements.

37. Display all `<strong>` elements as block-level.

38. Position all `<h1>` elements as relative to a previous element 50 pixels from the top and left.

39. Position the image to be behind the text.

```html
<body>
  <p>A paragraph of text</p>
  <img src="logo.svg" alt="Logo" />
</body>
```

```css
img,
p {
  position: absolute;
  top: 0;
  left: 0;
}
```

40. Position the footer to stick to the bottom of the viewport regardless of the user's scroll position.
