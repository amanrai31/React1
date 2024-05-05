### index.js 
This root is taken from index.html as id="root" and stored in root, now we render App in this root. That is why react is single page application (SPA).


### react-script
Who is injecting JS in index.html? -The react-script (lineNo-11 in package.json) secretly inject JS
But in 01vitereact it is manually injected in index.html

(app.jsx is same as app.js) OR (app.tsx == app.ts)
But Note :- If you are making a component make the extension jsx OR tsx - Good practice