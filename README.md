# idx.macro

## No longer necessary 🍾 🎉

The day has arrived! A lot of environments now support [Optional Chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining), which does exactly what this macro does but better looking (and native and blablabla but I care about the looksss 😎 😏 ).

Not sure if there is any use for this, as most people that have babel-macros support most likely also have babel doing optional chaining now..
Idk I'll leave this up for now and maybe archive when I look back in a year or so 🤷‍♀️

## idx.macro

This is a [babel-macros](https://github.com/kentcdodds/babel-macros) version of
the [babel plugin idx](https://github.com/facebookincubator/idx).


`idx` is a utility function for traversing properties on objects and arrays.

If an intermediate property is either null or undefined, it is instead returned.
The purpose of this function is to simplify extracting properties from a chain
of maybe-typed properties.

## Usage

With babel-macros and this package installed, you can use it to like `idx`.

```javascript
import idx from 'idx.macro';
const fiends_of_friends = idx(props, _ => _.user.friends[0].friends);
```

The above snippet will be compiled to:

```javascript
const fiends_of_friends =
  props.user == null ? props.user :
  props.user.friends == null ? props.user.friends :
  props.user.friends[0] == null ? props.user.friends[0] :
  props.user.friends[0].friends
```

## License

`idx` is [MIT licensed](./LICENSE). I copied it from the facebook idx license.
I have no idea if I am doing this right (what is the PATENTS file?!), so please
let me know if you know anything about this.

If the facebook people want to have idx.macro on their idx repo, or
want the idx.macro name, just sent me a message :)
