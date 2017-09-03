# Husna
## Helical-ScrollView-React-Native(iOS + Android)
## Props

<table class="table table-bordered">
    <thead>
        <tr>
            <th>Property</th>
            <th>Default</th>
            <th>Option</th>
            <th width="50%">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>padder</td>
            <td>true</td>
            <td>boolean</td>
            <td>Applies margin at all sides to Content section. Can be used with NativeBase View as well.</td>
        </tr>
        <tr>
            <td>disableKBDismissScroll</td>
            <td>false</td>
            <td>boolean</td>
            <td>Disables automatic scroll on focus.</td>
        </tr>
        <tr>
            <td>enableResetScrollToCoords</td>
            <td>true</td>
            <td>boolean</td>
            <td>Lets the user enable or disable automatic resetScrollToCoords.</td>
        </tr>
    </tbody>
</table>

## Usage
```
render(){
  return(
<HelixScroll
  itemCount={7}
  renderCard={index => {
    return(<Text>{index}</Text>)
    }} />);
  }
```
