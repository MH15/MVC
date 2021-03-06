# rotary
a zero-dependency, all JavaScript MVC system for the browser, inspired by Swing and modern Javascript.

look at glitch.com for hosting demos


## Order of Attack
- Complete the basic DOM manipulation library, including the elements
- Create a way to add HTML code that may not fit into the DOMElement classes
- Routing library can switch between multiple DOM elements
- Event library


## DOMElement Class Structure
- Element
  - DOMElement
    - Control(tag) - elements for user interaction can be focused
      - Button(text)
      - Input(tag)
        - TextInput(placeholder, type)
        - TextArea(placeholder, content)
      - Link(content, href)
    - Layout(...nodes)
      - GridLayout(rows, cols, ...nodes)
      - HorizontalLayout(...nodes)
        - VerticalLayout(...nodes)
          - List(...nodes)
  - HTMLElement - To be defined later

## Routing
- Rotor
  - view = View - set the current view
  - route(path) - change to view to one associated with the provided path, useful for links and anchors



## Elements of good UI Engineering
- Consistency: 
- Responsiveness
- Latency
- Navigation
- Staleness
- Entropy
- Priority
- Accessibility
- Internationalization
- Delivery
- Resilience
- Abstraction

See [this](https://news.ycombinator.com/item?id=18792373) and [this](https://overreacted.io/the-elements-of-ui-engineering/)




### Credits
- [catch-links](https://github.com/substack/catch-links/blob/master/index.js)
- 