var Terms = React.createClass({
  closePopup: function () {
    window.close();
  },

  render: function () {
    var translatedData = {
      terms: {
        terms_text_1:
          "BY clicking on Invoicing Now you choose to download according to the information you have entered and the text on the download page and the terms here, and at the same time accept the terms here.",
        terms_text_2: "You can use the program FREE for 14 days.",
        terms_text_3:
          "LettFaktura is so easy and self-explanatory that the chance that you will need support is minimal, but if you should need support, we are here for you, with our office staffed most of the day. After the trial period, the subscription continues and costs NOK 99, for example. VAT per month, which is invoiced annually. If you do not wish to keep the program, simply cancel the trial period by notifying us within 14 days of downloading.",
        terms_text_4: "",
        terms_text_5:
          "You of course have the right to end the use of the program free of charge, by notifying us by email within 14 days of download, that you do not wish to continue with the program, and of course not paying anything either.",
        terms_text_6:
          "If we do not receive such a message from you within 14 days of downloading, then the order cannot be changed for natural reasons. By download is meant the date and time when you have chosen to press the Invoicing Now button.",
        terms_text_7: "",
        terms_text_8: "Invoicing is done for one year at a time.",
        terms_text_9:
          "The price for LettFaktura (offer price NOK 99 per month / word price NOK 129 per month) is for the annual fee Start for one year of use of the program.",
        terms_text_10:
          "(When using the offer price of NOK 99, the one-year period is calculated from download.)",
        terms_text_11: "All prices are ex. VAT.",
        terms_text_12:
          "Time registration. Calculation, Member invoicing, Offers, Customer follow-up, Inventory count, Inventory management and English invoice text are additional modules that can be ordered after installation of the program.",
        terms_text_13:
          "The annual fee is ongoing, but if you do not wish to continue using the program, all you have to do is give notice thirty days before the start of the next one-year period.",
        terms_text_14:
          "The introductory offer (NOK 99 per month) is for the annual fee Start for the first year. After the first year, words are billed. price which is currently, for annual fee Start, one hundred and twenty-nine kroner per month, for annual fee Remote control, two hundred and sixty-five kroner per month and for annual fee Pro, three hundred and thirty-three kroner per month. After one year, the annual Remote Control fee is invoiced as standard, but you can choose Start or Pro by giving notice at any time before the due date.",
        terms_text_15:
          "If you choose to keep the program by not notifying us by email within 14 days of download that you do not wish to continue with the program, you accept that you will pay the invoice for your order. Code for the program will be sent automatically after the invoice has been paid. Failure to pay the invoice or late payment does not give the right to cancel the order. We are happy to help fix the logo for you at cost price.",
        terms_text_16:
          "Licenses for the use of LettFaktura are of course sold in accordance with the applicable laws.",
        terms_text_17:
          "In order to be able to help you more easily and provide you with support, as well as to comply with the laws, we naturally have to store your information.",
        terms_text_18:
          "In connection with the storage of information, the law requires that we provide you with the following information:",
        terms_text_19:
          "If you order as a private person, you have the right to cancel as required by law. Your information is stored so that we can help you, etc. We will use it to be able to help you if you need help, follow the laws regarding bookkeeping, etc. When there are upgrades and the like, we may send you offers and the like about our products and services by email or the like. You may be contacted by email, post and phone. If you don't want to be contacted, just send us an email about it.",
        terms_text_20:
          "You can at any time ask not to be sent information about upgrades by email, fax, letter or the like, and we will of course not do that. You send such a request to us by email, fax, letter or similar.",
        terms_text_21:
          "For natural reasons, we have to store, process and move your data. Your information is stored until further notice. You give us permission to store, process and move your data, as well as to send you offers and the like by email, fax, letter and the like. Due to the way it works with software, permission also needs to be given to other parties. The permission is therefore granted to us, as well as to the companies and/or person(s) who own the software, the source code, the website and the like. It is also given to current and future companies owned and/or controlled by one or more of those who currently own and/or control us. It is also given to current and future companies owned and/or controlled by one or more of those who currently own and/or control the companies (if any), which own or will own the software, source code, website and the like. It is also given to current and future persons (if any) who own or will own the software, source code, website and the like. This applies both to current and future products and services. It is also given to another company, which we can use to send/sell products, upgrades and the like, either by sub-licensing or in another way.",
        terms_text_22:
          "Of course, you have the right to request access to, change and deletion of the information we hold about you. You also have the right to request restriction of data processing, and to object to data processing and the right to data portability. You have the right to complain to the supervisory authority. You can find more legal information about us here. The laws of Ireland are the applicable laws. Placing an order is of course completely voluntary. Of course, we do not use any automated profiling or decisions.",
        terms_text_23:
          "If you wish to contact us, please use the information on this or any of our other websites.",
        terms_text_24:
          "Click on Invoicing Now to download according to the information you have entered and the terms here. (Date and time of admission are entered automatically in our registers.)",
        terms_text_25:
          "Our experience is that our customers are very satisfied with the way we work and hope and believe that this will also be their experience.",
        terms_text_26: "Have a great day!",
      },
    };

    var createParagraphs = function () {
      var paragraphs = [];
      for (var i = 1; i <= 26; i++) {
        var textKey = "terms_text_" + i;
        if (translatedData && translatedData.terms[textKey]) {
          paragraphs.push(
            React.createElement("p", { key: i }, translatedData.terms[textKey])
          );
        }
      }
      return paragraphs;
    };

    return React.createElement(
      "section",
      { style: { position: "relative" } },
      React.createElement(
        "div",
        { className: "text-center", style: { marginTop: "80px" } },
        React.createElement(
          "h1",
          {
            className: "title text-white",
            style: { fontSize: "24px", fontWeight: 700 },
          },
          "Terms"
        ),
        React.createElement(
          "div",
          { style: { marginTop: "20px" } },
          React.createElement(
            "button",
            {
              className: "text-white",
              style: {
                padding: "12px 40px",
                backgroundColor: "#089e1e",
                borderRadius: "9999px",
                fontSize: "18px",
                fontWeight: 600,
              },
              onClick: this.closePopup,
            },
            "Close and Go Back"
          )
        )
      ),
      React.createElement(
        "div",
        {
          className: "back-terms",
          style: {
            padding: "40px 40px",
            textAlign: "center",
            fontSize: "14px",
            lineHeight: "1.75",
            fontWeight: 300,
            color: "#282b31",
          },
        },
        createParagraphs()
      ),
      React.createElement(
        "div",
        {
          className: "he-between",
          style: { textAlign: "center", padding: "24px 0" },
        },
        React.createElement(
          "button",
          {
            className: "text-white",
            style: {
              padding: "12px 40px",
              backgroundColor: "#089e1e",
              borderRadius: "9999px",
              fontSize: "18px",
              fontWeight: 600,
            },
            onClick: this.closePopup,
          },
          "Close and Go Back"
        )
      )
    );
  },
});
