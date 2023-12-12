var Background = React.createClass({
  render: function () {
    return React.createElement(
      "div",
      {
        className: "background",
      },
      React.createElement("img", {
        id: "background-img",
        src: "https://storage.123fakturere.no/public/wallpapers/geiranger.jpg",
        alt: "Image",
      })
    );
  },
});
