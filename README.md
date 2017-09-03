# Husna
![HelixScrollView]("https://raw.githubusercontent.com/Jasbir23/HelixScrollView-React-Native/master/src/assets/husna.gif") <br />

## Helical-ScrollView-React-Native(iOS + Android)
## Props

<table class="table table-bordered">
    <thead>
        <tr>
            <th>Name</th>
            <th>isRequired</th>
            <th>Type</th>
            <th width="50%">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>itemCount</td>
            <td>YES</td>
            <td>Integer</td>
            <td>No of card components to be rendered</td>
        </tr>
        <tr>
            <td>renderCard</td>
            <td>YES</td>
            <td>Function callback</td>
            <td>Render card component callback. Carries index of card.</td>
        </tr>
        <tr>
            <td>backgroundImage</td>
            <td>NO</td>
            <td>String</td>
            <td>URI of background image of content container</td>
        </tr>
        <tr>
            <td>contentContainerStyle</td>
            <td>NO</td>
            <td>style</td>
            <td>To add style to the content container, **along with other ScrollView props**</td>
        </tr>
    </tbody>
</table>

## Usage
Find detailed use case in **Examples** section <br />
```
render(){
  return(
    <HelixScroll
    itemCount={7}
    renderCard={index => {
      return(
        // return your custom component here
        )
    }} />
  );
}
```

## Check out [Sample Expo App]("https://expo.io/@jaezzy23/husna")
