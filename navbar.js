var Nav = React.createClass({
  getInitialState: function () {
    return {
      isMobileMenuOpen: false,
    };
  },

  render: function () {
    var linkCollection = [
      {
        label: "Home",
        link: "/index",
        alt: "Home",
        id: "1",
      },
      {
        label: "Order",
        link: "/bestilloglastned",
        alt: "Order",
        id: "2",
      },
      {
        label: "Our Customers",
        link: "/kunder",
        alt: "Become a Customer",
        id: "3",
      },
      {
        label: "About Us",
        link: "/omoss",
        alt: "About us",
        id: "4",
      },
      {
        label: "Contact Us",
        link: "/kontaktoss",
        alt: "Contactus",
        id: "5",
      },
    ];

    var collectionlink = linkCollection.map(function (collection) {
      return React.createElement(
        "a",
        {
          href: collection.link,
          className: "collectionLink",
          key: collection.id,
        },
        React.createElement(
          "span",
          { className: "collectionSpan" },
          React.createElement("p", null, collection.label)
        )
      );
    });

    var logo = React.createElement(
      "div",
      { className: "logoa" },
      React.createElement(
        "a",
        { href: "/" },
        React.createElement("img", {
          src: "default_user_profile_pic.png",
          alt: "",
          className: "height-8 negative-mt-2",
        })
      )
    );

    var menuButton = React.createElement(
      "div",
      { className: "open-menu-dds" },
      React.createElement(
        "button",
        { className: "bg-transparent", onClick: this.toggleMobileMenu },
        React.createElement(
          "svg",
          {
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0",
            viewBox: "0 0 24 24",
            className: "text-white text-4xl cursor-pointer",
            height: "1em",
            width: "1em",
            xmlns: "http://www.w3.org/2000/svg",
          },
          React.createElement("path", {
            d: "M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z",
          })
        )
      )
    );

    var menu = this.state.isMobileMenuOpen
      ? React.createElement(
          "div",
          { className: "menu bg-white absolute mt-12 shadow-large" },
          collectionlink
        )
      : null;

    var pcMenu = React.createElement(
      "div",
      { className: "pc-menu flex" },
      collectionlink
    );

    var LanguageDropdown = React.createElement(
      "div",
      { className: "md:mt-0 lang-drop" },
      React.createElement(
        "div",
        { style: { fontWeight: 550, fontSize: "15px" } },
        React.createElement(
          "div",
          {
            id: "dropdownContainer",
            className: "flex justify-between cursor-pointer gap-flag-con",
          },
          React.createElement("p", { className: "flag-name" }, "English"),
          React.createElement("img", {
            src: "https://storage.123fakturere.no/public/flags/GB.png",
            className: "h-4 mt-[0.5px] rounded-[4px] icon-flag-nav",
            style: {
              objectFit: "cover",
              objectPosition: "center center",
              width: "26px",
              height: "18px",
              marginLeft: "1rem",
            },
          })
        )
      )
    );

    var header = React.createElement(
      "header",
      { className: "header m-auto pt-10 text-white" },
      React.createElement(
        "section",
        { className: "flex place-content-between" },
        logo,
        menuButton,
        React.createElement(
          "div",
          { className: "flex items-center" },
          pcMenu,
          LanguageDropdown
        )
      )
    );

    return React.createElement(
      "nav",
      {
        className: "navigation-out",
      },
      header,
      menu
    );
  },

  toggleMobileMenu: function () {
    this.setState({ isMobileMenuOpen: !this.state.isMobileMenuOpen });
  },
});
