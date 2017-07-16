# idx.macro

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

## Soon?

Please please please https://github.com/tc39/proposal-optional-chaining

## License

`idx` is [BSD licensed](./LICENSE). I copied it from the facebook idx license.
I have no idea if I am doing this right (what is the PATENTS file?!), so please
let me know if you know anything about this.

If the facebook people want to have idx.macro on their idx repo, or
want the idx.macro name, just sent me a message :)
