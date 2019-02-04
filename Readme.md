# rotary
a zero-dependency, all JavaScript MVC system for the browser, inspired by Swing and modern Javascript.

look at glitch.com for hosting demos


## Order of Attack
- Complete the basic DOM manipulation library, including the elements
- Create a way to add HTML code that may not fit into the DOMElement classes
- Routing library can switch between multiple DOM elements


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


## DOMElement Class Structure
- Element
  - DOMElement
    - Control(tag) - elements for user interaction can be focused
      - Button(text)
      - Input(tag)
        - Text(placeholder, type)
        - TextArea(placeholder, content)
      - Link(content, href)
    - Layout
      - GridLayout(rows, cols, ...node)
      - HorizontalLayout(...nodes)
      - VerticalLayout(...nodes)
  - HTMLElement
    - 