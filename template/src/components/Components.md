
# Built-in Components

The template comes with some customizable built-in React Native components 

## Components

Here's a summary of each component. Click through to view detailed documentation and code examples!

### Button

This is a component that renders a [`TouchableOpacity`](https://reactnative.dev/docs/touchableopacity) with given text or children.

```tsx
<Button
  isLoading={isLogin}
  title="SIGN IN"
  type="primary"
  style={styles.buttonStyle}
  onPress={() => {}}
/>
```

### Input

This component renders a View with a [`TextInput`](https://reactnative.dev/docs/textinput) and a text label.

```tsx
const [email, setEmail] = useState("")
<Input
  type="primary"
  placeholder="E-mail"
  value={email}
  onChange={() => {}}
  onChangeText={(t: string) => setEmail(t?.trim() ?? '')}
  disabledAutoCap={true}
  containerStyle={{
    marginBottom: theme.spacing.l
  }}
/>
```
